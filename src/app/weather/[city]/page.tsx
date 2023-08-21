import CustomHeader, { HeaderTitle } from '@/components/module/CustomHeader'
import { Metadata } from 'next'

const getWeather = async (city: string) => {
	const apiKey = process.env.WEATHER_API_KEY

	const result = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=yes&alerts=no&lang=ru`, {
		next: { revalidate: 900 }
	})
		.then(response => response.json())
		.catch(e => ({ error: e }))

	return result
}

export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
	const city = await getWeather(params.city)

	return {
		title: city.location.name,
		icons: city.current.condition.icon
	}
}

export default async function CityWeatherInfo({ params }: { params: { city: string } }) {
	const data = await getWeather(params.city)
	if (data.error) return (
		<div className='min-h-[100dvh] flex flex-col'>
			<CustomHeader>
				<HeaderTitle>Ошибка</HeaderTitle>
			</CustomHeader>
			<main className='w-screen flex-1'>
				{`${data.error.message}`}
			</main>
		</div>
	)

	return (
		<div className='min-h-[100dvh] flex flex-col'>
			<CustomHeader>
				<HeaderTitle>{data.location.name}</HeaderTitle>
			</CustomHeader>
			<main className='w-screen flex-1'>

			</main>
		</div>
	)
}