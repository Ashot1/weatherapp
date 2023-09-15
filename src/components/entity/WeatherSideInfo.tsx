import { FC } from 'react'
import { IMainWeatherInfo } from '@/lib/types'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

const WeatherSideInfo: FC<
	Pick<IMainWeatherInfo, 'wind' | 'humidity' | 'feelslike'>
> = ({ humidity, wind, feelslike }) => {
	const Info = [
		{
			title: `${wind} км/ч`,
			description: 'Ветер',
			img: '/wind.png',
			needInvert: true
		},
		{
			title: `${feelslike}°`,
			description: 'Ощущение',
			img: '/feelslike.png',
			needInvert: true
		},
		{
			title: `${humidity}%`,
			description: 'Влажность',
			img: '/humidity.png',
			needInvert: false
		}
	]

	return (
		<section className="w-screen grid place-items-center mt-24">
			<div className="h-[82px] 500p:h-[90px] w-[95%] 300p:w-[85%] 500p:w-[60%] 1024p:max-w-[500px] rounded-2xl grid grid-cols-3 500p:px-2 relative border-2 border-black/20 dark:border-white/20">
				{Info.map((item, index) => (
					<>
						<WeatherSideInfoItem
							img={item.img}
							title={item.title}
							description={item.description}
							separated={index !== 0}
							needInvert={item.needInvert}
						/>
					</>
				))}
			</div>
		</section>
	)
}

export default WeatherSideInfo

const WeatherSideInfoItem: FC<{
	title: string | number
	description: string
	img: string
	separated?: boolean
	needInvert?: boolean
}> = ({ description, title, img, separated = false, needInvert = false }) => {
	return (
		<article className="flex flex-col relative justify-between">
			{separated && (
				<Separator className="h-[50%] w-0.5 absolute bg-black/30 dark:bg-white/30 top-[25%]" />
			)}
			<span
				className={`w-[100%] grid place-items-center pt-2.5 relative ${
					needInvert && 'dark:invert'
				}`}
			>
				<Image src={img} alt={description} width={25} height={25} />
			</span>
			<span className="pb-1">
				<h2 className="text-xs text-black dark:text-white text-center 1024p:text-sm">
					{title}
				</h2>
				<p className="text-[0.6rem] dark:text-white/60 text-black/60 text-center 1024p:text-xs">
					{description}
				</p>
			</span>
		</article>
	)
}
