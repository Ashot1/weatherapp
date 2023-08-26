import { FC } from 'react'
import Image from 'next/image'
import { bellota400 } from '@/lib/fonts'
import WeatherMainInfo from '@/components/entity/WeatherMainInfo'
import WeatherSideInfo from '@/components/entity/WeatherSideInfo'
import { IMainWeatherInfo } from '@/lib/types'

const MainWeatherInfo: FC<IMainWeatherInfo> = ({
												   weatherName,
												   img,
												   temp,
												   isDay,
												   code,
												   date,
												   wind,
												   humidity,
												   feelslike
											   }) => {

	const url = `https:${img.replace('64x64', '128x128')}`

	const localeDate = new Date(date).toLocaleDateString('ru')

	const NightCloudyCodes = [1009, 1030, 1072, 1114, 1117, 1135, 1147, 1168, 1171, 1198, 1201, 1219, 1225, 1237, 1279, 1282],
		DayCloudyCodes = [1006, ...NightCloudyCodes],
		cloudyCondition = isDay && DayCloudyCodes.includes(code) || !isDay && NightCloudyCodes.includes(code)

	const RainCodes = [1150, 1153, 1183, 1189, 1195, 1204, 1207, 1243, 1246, 1276],
		rainCondition = RainCodes.includes(code)

	const defaultCondition = isDay ? 'orangeEffect' : 'blueEffect',
		bgCondition =
			cloudyCondition ? 'whiteEffect'
				: rainCondition ? 'blueEffect'
					: defaultCondition

	return (
		<div className={`${bgCondition} animate-blur-animation`}>
			<WeatherMainInfo url={url} alt={weatherName} time={date.split(' ')[1]} date={localeDate} name={weatherName}
							 temp={temp} />
			<WeatherSideInfo wind={wind} feelslike={feelslike} humidity={humidity} />
		</div>
	)
}

export default MainWeatherInfo