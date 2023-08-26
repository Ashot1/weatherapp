import { FC } from 'react'
import Image from 'next/image'
import { bellota400 } from '@/lib/fonts'

const WeatherMainInfo: FC<{
	url: string,
	alt: string,
	time: string,
	date: string,
	temp: number,
	name: string
}> = ({ alt, url, date, time, name, temp }) => {
	return (
		<section className='w-screen mt-5 grid place-items-center'>
			<div className='grid grid-cols-2 w-[90%] 500p:w-[70%] 768p:w-[50%] 1024p:w-[30%] items-center'>
					<span className='grid place-items-center'>
						<Image src={url} alt={alt} width={90} height={90} className='drop-shadow-lg' priority />
					</span>
				<span className='text-center box-border max-w-600px'>
						<p className='text-[0.65rem] -ml-4 opacity-50 1024p:text-xs'>{time} {date}</p>
						<h1 className={`text-5xl ${bellota400.className}`}>{temp}°</h1>
						<p className={'opacity-80 text-sm -ml-5 text-wrap-balance'}>{name}</p>
					</span>
			</div>
		</section>
	)
}

export default WeatherMainInfo