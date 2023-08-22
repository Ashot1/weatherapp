import { FC } from 'react'
import Image from 'next/image'
import { bellota400 } from '@/lib/fonts'

const MainWeatherInfo: FC<{ img: string, temp: number, weatherName: string, isDay: boolean, code: number }> = ({
																												   weatherName,
																												   img,
																												   temp,
																												   isDay,
																												   code
																											   }) => {

	const url = `https:${img.replace('64x64', '128x128')}`

	// return (
	// 	<div>
	// 		<section className='w-screen grid place-items-center mt-5'>
	// 			<Image src={url} alt={weatherName} width={150} height={35} />
	// 		</section>
	// 		<section className='w-screen grid place-items-center'>
	// 			<h1 className={`text-5xl ${bellota400.className}`}>{temp}°</h1>
	// 			<p className={'opacity-80'}>{weatherName}</p>
	// 		</section>
	// 	</div>
	// )
	//
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
			<section className='w-screen flex items-center justify-center mt-5 gap-[10%]'>
				<span>
					<Image src={url} alt={weatherName} width={90} height={90} className='drop-shadow-lg' />
				</span>
				<span className='text-center box-border '>
					<h1 className={`text-5xl ${bellota400.className}`}>{temp}°</h1>
					<p className={'opacity-80 text-sm -ml-5'}>{weatherName}</p>
				</span>
			</section>
		</div>
	)
}

export default MainWeatherInfo