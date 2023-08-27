import { FC } from 'react'
import TimeCarousel from '@/components/entity/TimeCarousel'
import { Hour } from '@/lib/types'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const SecondaryWeatherInfo: FC<{
	data: Hour[]
	currentTime: string
	city: string
}> = ({ data, currentTime, city }) => {
	return (
		<div className="mt-20 flex flex-col w-screen items-center animate-blur-animation">
			<p className="hidden 768p:block 768p:w-[60%] 768p:max-w-[950px] text-sm opacity-30 mb-5">
				Для прокрутки колесиком мыши необходимо зажать shift
			</p>
			<TimeCarousel data={data} currentTime={currentTime} city={city} />
			<Button asChild variant="secondary">
				<Link
					href={`/weather/${city}/current`}
					className="mt-10 opacity-80 text-xs 1024p:text-sm"
				>
					Вернуть текущее время
				</Link>
			</Button>
		</div>
	)
}

export default SecondaryWeatherInfo
