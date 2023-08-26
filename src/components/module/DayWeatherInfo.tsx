import { FC } from 'react'
import { WeatherData } from '@/lib/types'
import NavigateToCurrentWeather from '@/components/entity/NavigateToCurrentWeather'
import MainWeatherInfo from '@/components/widgets/MainWeatherInfo'
import SecondaryWeatherInfo from '@/components/widgets/SecondaryWeatherInfo'

const DayWeatherInfo: FC<{ data: WeatherData, day: string }> = ({ data, day }) => {

	const weatherDays = data.forecast.forecastday.map(day => day.date)

	if (day === 'current') {
		const currentTime = data.current.last_updated.split(' ')[1]

		return (
			<>
				<MainWeatherInfo weatherName={data.current.condition.text} img={data.current.condition.icon}
								 temp={data.current.temp_c} isDay={!!data.current.is_day}
								 code={data.current.condition.code} date={data.current.last_updated}
								 wind={data.current.wind_kph} humidity={data.current.humidity}
								 feelslike={data.current.feelslike_c} />

				<SecondaryWeatherInfo data={data.forecast.forecastday[0].hour}
									  currentTime={currentTime} />

			</>
		)
	}

	return <NavigateToCurrentWeather />


}

export default DayWeatherInfo