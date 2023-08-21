'use client'
import { FC, KeyboardEvent, memo, useRef, useState } from 'react'
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from '../ui/command'
import { ISearchResponse } from '@/app/api/search/route'
import Link from 'next/link'

type ListOfCities = {
	title: string;
	url: string;
	country: string;
	region: string;
}[]

const CityCommandMenu: FC<{ classWrapper?: string }> = ({ classWrapper }) => {

	const [CitiesList, setCitiesList] = useState<ListOfCities>([
			{ title: 'Москва', url: '55.75,37.62', country: 'Россия', region: 'Moscow city' },
			{
				title: 'Лондон',
				url: '51.52,-0.11',
				country: 'Великобритания',
				region: 'City of London, Greater London'
			},
			{
				title: 'Вашингтон',
				url: '38.9,-77.04',
				country: 'Соединенные Штаты Америки',
				region: 'District of Columbia'
			},
			{ title: 'Минск', url: '53.9,27.57', country: 'Беларусь', region: 'Minsk' },
			{ title: 'Киев', url: '50.43,30.52', country: 'Украина', region: 'Kyyivs\'ka Oblast\'' },
			{ title: 'Пекин', url: '39.93,116.39', country: 'Китай', region: 'Beijing' }
		]),
		[Error, setError] = useState(''),
		[InputControl, setInputControl] = useState('')

	const SubmitSearch = async (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			setError('')
			if (InputControl.length < 2) return
			const result = await fetch(`/api/search?city=${InputControl}`)
				.then(result => result.json())

			if (!result.ok) return setError(result.error)

			setCitiesList(() => (result as ISearchResponse).data.map(item => ({
				title: item.name,
				url: `${item.lat},${item.lon}`,
				region: item.region,
				country: item.country
			})))
			setInputControl('')
		}
	}

	return (
		<div className={classWrapper}>
			{Error && <p className='text-red-400'>{Error}</p>}
			<Command className='shadow-md'>
				<CommandInput placeholder='Выберите город...' className='text-sm 768p:text-sm 4k:text-lg'
							  onKeyUp={SubmitSearch} value={InputControl}
							  onInput={(e) => setInputControl((e.target as HTMLInputElement).value)} />
				<ListCities list={CitiesList} />
			</Command>
		</div>
	)
}

export default CityCommandMenu

const CustomCommandItem: FC<{ children: string, country: string, url: string, region: string }> = ({
																									   children,
																									   country,
																									   url,
																									   region
																								   }) => {
	return (
		<CommandItem className='cursor-pointer grid'>
			<Link href={`/weather/${url}`}>
				<h1 className='text-sm 768p:text-sm 4k:text-lg '>{children}</h1>
				<p className='text-xs text-black/[0.5] dark:text-white/[0.4]'>{region}</p>
				<p className='text-xs text-black/[0.5] dark:text-white/[0.4]'>{country}</p>
			</Link>
		</CommandItem>
	)
}

const ListCities: FC<{ list: ListOfCities }> = memo(({ list }) => {
	return (
		<CommandList>
			{list.map(city => (
				<CustomCommandItem key={city.url} region={city.region} country={city.country}
								   url={city.url}>{city.title}</CustomCommandItem>))}
		</CommandList>
	)
})
ListCities.displayName = 'ListCities'
