import CustomHeader, { HeaderTitle } from '@/components/module/CustomHeader'
import { Metadata } from 'next'
import DayWeatherInfo from '@/components/module/DayWeatherInfo'
import { WeatherData } from '@/lib/types'


const getWeather = async (city: string) => {
	const apiKey = process.env.WEATHER_API_KEY

	const result: WeatherData = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=7&aqi=yes&alerts=no&lang=ru`, {
		next: { revalidate: 900 }
	})
		.then(response => response.json())
		.catch(e => ({ error: e }))

	return result
}

export async function generateMetadata({ params }: { params: { city: string[] } }): Promise<Metadata> {
	const city = await getWeather(params.city[0])

	if (city?.location?.name) return {
		title: city.location.name,
		icons: city.current.condition.icon
	}
	return {}
}

export default async function CityWeatherInfo({ params }: { params: { city: string[] } }) {
	const data = await getWeather(params.city[0])

	if (data.error) return (
		<div className='min-h-[100dvh] flex flex-col'>
			<CustomHeader>
				<HeaderTitle>Ошибка</HeaderTitle>
			</CustomHeader>
			<main className='w-screen h-[80dvh] grid place-items-center'>
				{`${data.error.message}`}
			</main>
		</div>
	)

	return (
		<div className='min-h-[100dvh] flex flex-col'>
			<CustomHeader>
				<HeaderTitle>
					{/*<span className='flex justify-center gap-1'>*/}
					{/*<Image src={PinMark} alt='Месторасположение' className='w-5 h-5' />*/}
					{data.location.name}
					{/*</span>*/}
				</HeaderTitle>
			</CustomHeader>
			<main className='w-screen flex-1'>
				<DayWeatherInfo data={data} day={params.city[1]} />
				<span
					className='flex text-sm opacity-30 w-screen justify-center mt-10'>Обновлено: {data.current.last_updated}</span>
			</main>
		</div>
	)
}