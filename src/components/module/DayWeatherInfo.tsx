import { FC } from 'react'
import { WeatherData } from '@/lib/types'
import MainWeatherInfo from '@/components/widgets/MainWeatherInfo'
import SecondaryWeatherInfo from '@/components/widgets/SecondaryWeatherInfo'
import NavigateToCurrentWeather from '@/components/redirect/NavigateToCurrentWeather'
import OtherDays from '@/components/widgets/OtherDays'

const DayWeatherInfo: FC<{ data: WeatherData; day: string; city: string }> = ({
	data,
	day,
	city
}) => {
	const weatherDays = data.forecast.forecastday.map((day) => day.date)

	if (day === 'current') {
		const currentTime = data.current.last_updated.split(' ')[1]

		return (
			<>
				<MainWeatherInfo
					weatherName={data.current.condition.text}
					img={data.current.condition.icon}
					temp={data.current.temp_c}
					isDay={!!data.current.is_day}
					code={data.current.condition.code}
					date={data.current.last_updated}
					wind={data.current.wind_kph}
					humidity={data.current.humidity}
					feelslike={data.current.feelslike_c}
				/>
				<SecondaryWeatherInfo
					data={data.forecast.forecastday[0].hour}
					currentTime={currentTime}
					city={city}
				/>
				<OtherDays data={data.forecast.forecastday} />
			</>
		)
	}
	if (weatherDays.includes(day.split('_')[0])) {
		const Time = day.replace('_', ' ').replace('!', ':'),
			CurrentDay = data.forecast.forecastday.find(
				(item) => item.date === day.split('_')[0]
			),
			HourInfo = CurrentDay?.hour.find((item) => item.time === Time)
		if (HourInfo && CurrentDay)
			return (
				<>
					<MainWeatherInfo
						weatherName={HourInfo.condition.text}
						img={HourInfo.condition.icon}
						temp={HourInfo.temp_c}
						isDay={!!HourInfo.is_day}
						code={HourInfo.condition.code}
						date={HourInfo.time}
						wind={HourInfo.wind_kph}
						humidity={HourInfo.humidity}
						feelslike={HourInfo.feelslike_c}
					/>
					<SecondaryWeatherInfo
						data={CurrentDay.hour}
						currentTime={HourInfo.time.split(' ')[1]}
						city={city}
					/>
					<OtherDays data={data.forecast.forecastday} />
				</>
			)
	}
	return <NavigateToCurrentWeather />
}

export default DayWeatherInfo
