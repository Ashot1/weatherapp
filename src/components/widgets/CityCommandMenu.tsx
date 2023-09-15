'use client'
import { FC, KeyboardEvent, useEffect, useState } from 'react'
import { Command, CommandInput } from '../ui/command'
import { ISearchResponse } from '@/app/api/search/route'
import { SearchData } from '@/lib/types'
import {
	ListCities,
	ListOfCities
} from '@/components/entity/CityCommandMenuItem'

const CityCommandMenu: FC<{ classWrapper?: string }> = ({ classWrapper }) => {
	const defaultCities = [
			{
				title: 'Москва',
				url: '55.75_37.62',
				country: 'Россия',
				region: 'Moscow city'
			},
			{
				title: 'Лондон',
				url: '51.52_-0.11',
				country: 'Великобритания',
				region: 'City of London, Greater London'
			},
			{
				title: 'Вашингтон',
				url: '38.9_-77.04',
				country: 'Соединенные Штаты Америки',
				region: 'District of Columbia'
			},
			{
				title: 'Минск',
				url: '53.9_27.57',
				country: 'Беларусь',
				region: 'Minsk'
			},
			{
				title: 'Киев',
				url: '50.43_30.52',
				country: 'Украина',
				region: "Kyyivs'ka Oblast'"
			},
			{
				title: 'Пекин',
				url: '39.93_116.39',
				country: 'Китай',
				region: 'Beijing'
			}
		],
		[CitiesList, setCitiesList] = useState<ListOfCities>(defaultCities),
		[Error, setError] = useState(''),
		[InputControl, setInputControl] = useState('')

	const FavoriteListRender = async () => {
		// type = 'Title|lat,lot;'

		const favoriteCities = localStorage.getItem('favorite')
		if (!favoriteCities) {
			localStorage.setItem('favorite', '')
			return
		}

		const cities = favoriteCities.split(';').slice(0, 10)

		for (let city of cities) {
			const location = city.split('|')
			if (!location[1] || !location[0]) return

			const result = await fetch(
				`/api/search?city=${location[1].replace('_', ',')}`
			).then((response) => {
				return response.json()
			})
			if (!result.ok) return setError(result.error)

			const data: SearchData = result.data[0]

			setCitiesList((prev) => [
				{
					title: location[0],
					country: data.country,
					url: `${data.lat}_${data.lon}`,
					region: data.region
				},
				...prev
			])
		}
	}

	useEffect(() => {
		FavoriteListRender()
	}, [])

	const SubmitSearch = async (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			setError('')
			if (InputControl.length < 2) {
				setCitiesList(defaultCities)
				FavoriteListRender()
				return
			}
			const result = await fetch(`/api/search?city=${InputControl}`).then(
				(result) => result.json()
			)

			if (!result.ok) return setError(result.error)

			setCitiesList(() =>
				(result as ISearchResponse).data.map((item) => ({
					title: item.name,
					url: `${item.lat}_${item.lon}`,
					region: item.region,
					country: item.country
				}))
			)
			setInputControl('')
		}
	}

	return (
		<div className={classWrapper}>
			{Error && <p className="text-red-400">{Error}</p>}
			<Command className="shadow-md">
				<CommandInput
					placeholder="Введите название города..."
					className="text-sm 768p:text-sm 4k:text-lg"
					onKeyUp={SubmitSearch}
					value={InputControl}
					onInput={(e) =>
						setInputControl((e.target as HTMLInputElement).value)
					}
				/>
				<ListCities list={CitiesList} />
			</Command>
		</div>
	)
}

export default CityCommandMenu
