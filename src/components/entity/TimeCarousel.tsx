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
		<aside className="flex w-screen 768p:w-[70%] 768p:max-w-[1000px] overflow-x-scroll py-2 h-36 gap-5 px-5 snap-x snap-mandatory hide-scrolllbar scroll-smooth">
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
	let bgColor = isCurrentTime
		? 'bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.5)] dark:bg-black/80 dark:shadow-[0_0_10px_rgba(0,0,0,0.5)] scale-110'
		: 'bg-white/40 dark:bg-black/40 shadow-[0_0_5px_rgba(255,255,255,0.2)] dark:shadow-[0_0_5px_rgba(0,0,0,0.2)]'
	return (
		<div
			className={`${bgColor} min-w-[90px] rounded-3xl snap-end`}
			id={time}
		>
			<Link href={url} className="py-3 flex flex-col h-[100%]">
				<p className="text-center text-xs opacity-80">{time}</p>
				<span className="flex-1 grid place-items-center">
					<Image
						src={img}
						alt={`Погода на ${time}`}
						width={50}
						height={50}
					/>
				</span>
				<h1 className="text-center text-sm opacity-80 1024p:text-base">
					{temp}°
				</h1>
			</Link>
		</div>
	)
}
