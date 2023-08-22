import { FC } from 'react'
import { WeatherData } from '@/lib/types'
import NavigateToCurrentWeather from '@/components/entity/NavigateToCurrentWeather'
import MainWeatherInfo from '@/components/widgets/MainWeatherInfo'

const DayWeatherInfo: FC<{ data: WeatherData, day: string }> = ({ data, day }) => {

	const weatherDays = data.forecast.forecastday.map(day => day.date)

	if (day === 'current') return (
		<>
			<MainWeatherInfo weatherName={data.current.condition.text} img={data.current.condition.icon}
							 temp={data.current.temp_c} isDay={!!data.current.is_day}
							 code={data.current.condition.code} />
		</>
	)

	return <NavigateToCurrentWeather />


}

export default DayWeatherInfo