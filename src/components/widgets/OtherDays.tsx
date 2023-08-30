import { FC } from 'react'
import { ForecastDay } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import { bellota700, dosis400, raleway400 } from '@/lib/fonts'

const OtherDays: FC<{ data: ForecastDay[] }> = ({ data }) => {
	return (
		<footer className="flex w-screen justify-center mt-14 pb-10 animate-blur-animation">
			<div className="w-[98%] 768p:w-[70%] max-w-[700px]">
				<div className={`mb-4 ${raleway400.className} text-base`}>
					<h1>Другие дни</h1>
				</div>
				<ul className="flex flex-col gap-5">
					{data.map((day) => (
						<FooterItem key={day.date} day={day} />
					))}
				</ul>
			</div>
		</footer>
	)
}

export default OtherDays

const FooterItem: FC<{ day: ForecastDay }> = ({ day }) => {
	const date = new Date(day.date),
		customDay = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`,
		customMonth =
			date.getMonth() > 9 ? date.getMonth() : `0${date.getMonth()}`,
		formatedDate = `${customDay}.${customMonth}`,
		url = `${day.date.replace(' ', '_')}_00!00`

	return (
		<li className="hover:bg-black/10 dark:hover:bg-white/20 hover:shadow-xl dark:shadow-white/10 rounded-2xl duration-500">
			<Link
				href={url}
				className="grid grid-cols-[70px_0.4fr_1fr] h-50 py-2 px-1.5"
			>
				<span className="grid place-items-center text-sm border-2 rounded-2xl border-black/80 dark:border-white/80 mr-3">
					{formatedDate}
				</span>
				<section
					className={`flex items-center gap-1.5 ${dosis400.className}`}
				>
					<p className="text-base">{day.day.maxtemp_c}°</p>
					<p className="text-sm opacity-50">{day.day.mintemp_c}°</p>
				</section>
				<section className="flex items-center justify-end">
					<p className={`text-sm text-end ${bellota700.className}`}>
						{day.day.condition.text}
					</p>
					<Image
						src={`https:${day.day.condition.icon}`}
						alt={`Погода на ${formatedDate}`}
						width={45}
						height={45}
					/>
				</section>
			</Link>
		</li>
	)
}
