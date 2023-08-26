import { FC } from 'react'
import TimeCarousel from '@/components/entity/TimeCarousel'
import { Hour } from '@/lib/types'

const SecondaryWeatherInfo: FC<{ data: Hour[], currentTime: string }> = ({ data, currentTime }) => {
	return (
		<div className='mt-20 flex flex-col w-screen items-center animate-blur-animation'>
			<p className='hidden 768p:block 768p:w-[60%] 768p:max-w-[950px] text-sm opacity-40 mb-5'>Для прокрутки
				колесиком
				мыши
				необходимо
				зажать
				shift</p>
			<TimeCarousel data={data} currentTime={currentTime} />
		</div>
	)
}

export default SecondaryWeatherInfo