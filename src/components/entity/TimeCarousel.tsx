import { FC } from 'react'
import { Hour } from '@/lib/types'
import Image from 'next/image'

const TimeCarousel: FC<{ data: Hour[], currentTime: string }> = ({ data, currentTime }) => {


	return (
		<aside
			className='flex w-screen 768p:w-[70%] 768p:max-w-[1000px] overflow-x-scroll py-2 h-36 gap-5 px-5 snap-x snap-mandatory hide-scrolllbar scroll-smooth'>
			{data.map(hour => {
				const time = hour.time.split(' ')[1],
					CurrentHour = time.split(':')[0],
					isCurrentTime = CurrentHour === currentTime.split(':')[0]

				return <CarouselItem key={hour.time} time={time} img={`https:${hour.condition.icon}`}
									 temp={hour.temp_c} isCurrentTime={isCurrentTime} />
			})}
		</aside>
	)
}

export default TimeCarousel

const CarouselItem: FC<{ temp: number, img: string, time: string, isCurrentTime: boolean }> = ({
																								   img,
																								   temp,
																								   time,
																								   isCurrentTime
																							   }) => {
	let bgColor = isCurrentTime ? 'bg-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.5)]'
		: 'bg-white/40 dark:bg-black/40 shadow-[0_0_10px_rgba(255,255,255,0.4)] dark:shadow-[0_0_10px_rgba(0,0,0,0.4)]'
	return (
		<div
			className={`${bgColor} flex flex-col min-w-[90px] rounded-3xl  py-3 snap-end`} id={time}>
			<p className='text-center text-xs opacity-80'>{time}</p>
			<span className='flex-1 grid place-items-center'>
				<Image src={img} alt={time} width={50} height={50} />
			</span>
			<h1 className='text-center text-sm opacity-80'>{temp}°</h1>
		</div>
	)
}