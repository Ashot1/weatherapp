import { FC } from 'react'
import { Hour } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'

const TimeCarousel: FC<{ data: Hour[]; currentTime: string; city: string }> = ({
	data,
	currentTime,
	city
}) => {
	return (
		<aside className="flex w-screen 768p:w-[70%] 768p:max-w-[1000px] overflow-x-scroll py-2 h-[8.2rem] gap-5 px-5 snap-x snap-mandatory hide-scrolllbar scroll-smooth">
			{data.map((hour) => {
				const time = hour.time.split(' ')[1],
					CurrentHour = time.split(':')[0],
					isCurrentTime = CurrentHour === currentTime.split(':')[0]

				return (
					<CarouselItem
						key={hour.time}
						time={time}
						img={`https:${hour.condition.icon}`}
						temp={hour.temp_c}
						isCurrentTime={isCurrentTime}
						url={`/weather/${city}/${hour.time
							.replace(' ', '_')
							.replace(':', '!')}`}
					/>
				)
			})}
		</aside>
	)
}

export default TimeCarousel

const CarouselItem: FC<{
	temp: number
	img: string
	time: string
	isCurrentTime: boolean
	url: string
}> = ({ img, temp, time, isCurrentTime, url }) => {
	const bgColor = isCurrentTime
		? 'bg-black text-white shadow-[0_0_10px_rgba(0,0,0,0.5)] dark:bg-white dark:text-black dark:shadow-[0_0_10px_rgba(255,255,255,0.5)] scale-110'
		: 'bg-black/10 hover:bg-black/30 dark:bg-white/10 dark:hover:bg-white/30 ' +
		  'shadow-[0_0_5px_rgba(0,0,0,0.2)] hover:shadow-[0_0_10px_rgba(0,0,0,0.5)] dark:shadow-[0_0_5px_rgba(255,255,255,0.1)] dark:hover:shadow-[0_0_10px_rgba(255,255,255,0.5)]'

	return (
		<div
			className={`${bgColor} min-w-[85px] rounded-3xl snap-center duration-500`}
			id={time.replace(':', '')}
		>
			<Link href={url} className="py-3 flex flex-col h-[100%]">
				<p className="text-center text-[0.67rem] opacity-80">{time}</p>
				<span className="flex-1 grid place-items-center">
					<Image
						src={img}
						alt={`Погода на ${time}`}
						width={40}
						height={40}
					/>
				</span>
				<h1 className="text-center text-xs opacity-80">{temp}°</h1>
			</Link>
		</div>
	)
}
