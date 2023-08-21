import CustomHeader, { HeaderTitle } from '@/components/module/CustomHeader'
import ScrollStateBar from '@/components/ui/ScrollStateBar'
import InfoCard from '@/components/entity/InfoCard'
import { version } from '../../../package.json'

import NextIcon from '../assets/next.svg'
import ShadcnIcon from '../assets/shadcn.png'
import TailwindIcon from '../assets/tailwindcss.svg'
import framerIcon from '../assets/framer-motion.svg'
import weatherAPIIcon from '../assets/weatherAPI.svg'
import reactIcon from '../assets/react.svg'

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Информация',
	description: 'Основная информация о проекте Weather'
}

export default function About() {
	const libraries = [
		{ icon: reactIcon, title: 'React', link: 'https://react.dev/' },
		{ icon: NextIcon, title: 'Next.js', link: 'https://nextjs.org/' },
		{ icon: ShadcnIcon, title: 'Shadcn/ui', link: 'https://ui.shadcn.com/' },
		{ icon: TailwindIcon, title: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
		{ icon: framerIcon, title: 'Framer Motion', link: 'https://www.framer.com/motion/' },
		{ icon: weatherAPIIcon, title: 'Weather API', link: 'https://www.weatherapi.com/' }
	]

	return (
		<div className='min-h-[100vh] flex flex-col items-center pb-20'>
			{<ScrollStateBar />}
			<CustomHeader>
				<HeaderTitle>Weather</HeaderTitle>
			</CustomHeader>
			<Card className='mt-20 animate-top-appearance-moving'>
				<CardHeader>
					<CardDescription>Версия приложения: {version}</CardDescription>
				</CardHeader>
			</Card>
			<h1
				className='text-sm uppercase mt-20 animate-text-appearance delay-500 opacity-0 fill-mode-forwards'>
				Сделано с помощью
			</h1>
			<ul className='grid grid-cols-[90%] 300p:grid-cols-[70%] 500p:grid-cols-[200px_200px] w-[100%] gap-20 justify-center mt-10 500p:px-20'>
				{
					libraries.map((item, index) => (
						<li key={item.title}
							className={`aspect-square opacity-0 fill-mode-forwards animate-text-appearance`}
							style={{ animationDelay: `${800 + 300 * index}ms` }}>
							<a href={item.link} target='_blank'>
								<InfoCard icon={item.icon} title={item.title} />
							</a>
						</li>
					))
				}
			</ul>
		</div>
	)
}