import CustomHeader, { HeaderTitle } from '@/components/module/CustomHeader'
import { Metadata } from 'next'
import DayWeatherInfo from '@/components/module/DayWeatherInfo'
import { WeatherData } from '@/lib/types'
import UpdateButton from '@/components/entity/UpdateButton'

const getWeather = async (city: string) => {
	const apiKey = process.env.WEATHER_API_KEY

	const result: WeatherData = await fetch(
		`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=yes&alerts=no&lang=ru`,
		{
			next: { revalidate: 1800, tags: ['CityWeatherInfo'] }
		}
	)
		.then((response) => response.json())
		.catch((e) => ({ error: e }))

	return result
}

export async function generateMetadata({
	params
}: {
	params: { city: string[] }
}): Promise<Metadata> {
	const city = await getWeather(params.city[0].replace('_', ',')),
		date = params.city[1] === 'current' ? 'сегодня' : params.city[1],
		FormatedDate = params.city[1].replace('_', ' ').replace('!', ':')

	let Icon = ''

	if (date !== 'сегодня') {
		const Date = params.city[1].split('_')[0]

		const findDate = city.forecast.forecastday.find(
			(item) => item.date === Date
		)
		if (findDate) {
			const findHour = findDate.hour.find(
				(item) => item.time === FormatedDate
			)
			if (findHour) {
				Icon = findHour.condition.icon
			}
		}
	}

	if (city?.location?.name) {
		const description = `Актуальная погода в ${city.location.name} на ${FormatedDate}`
		const icon = date === 'сегодня' ? city.current.condition.icon : Icon

		return {
			title: city.location.name,
			icons: icon,
			description: description,
			openGraph: {
				title: `${city.location.name} | Weather`,
				description: description,
				images: icon
			},
			twitter: {
				title: `${city.location.name} | Weather`,
				description: description,
				images: icon
			}
		}
	}
	return {}
}

export default async function CityWeatherInfo({
	params
}: {
	params: { city: string[] }
}) {
	const data = await getWeather(params.city[0].replace('_', ','))

	if (data.error)
		return (
			<div className="min-h-[100dvh] flex flex-col">
				<CustomHeader>
					<HeaderTitle>Ошибка</HeaderTitle>
				</CustomHeader>
				<main className="w-screen h-[80dvh] grid place-items-center">
					{`${data.error.message}`}
				</main>
			</div>
		)

	return (
		<div className="min-h-[100dvh] flex flex-col">
			<CustomHeader>
				<HeaderTitle>{data.location.name}</HeaderTitle>
			</CustomHeader>
			<main className="w-screen flex-1">
				<UpdateButton
					dopClass="animate-blur-animation"
					lastUpdate={data.current.last_updated}
				/>
				<DayWeatherInfo
					data={data}
					day={params.city[1]}
					city={`${data.location.lat}_${data.location.lon}`}
				/>
			</main>
		</div>
	)
}
