import CustomHeader, { HeaderTitle } from '@/components/module/CustomHeader'
import ScrollStateBar from '@/components/ui/ScrollStateBar'
import InfoCard from '@/components/entity/InfoCard'
import { version } from '../../../package.json'

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Metadata } from 'next'
import Loader from '@/components/ui/Loader'

export const metadata: Metadata = {
	title: 'Информация',
	description: 'Основная информация о проекте Weather'
}

export default function About() {
	const libraries = [
		{ icon: '/about/react.svg', title: 'React', link: 'https://react.dev/' },
		{ icon: '/about/next.svg', title: 'Next.js', link: 'https://nextjs.org/' },
		{ icon: '/about/shadcn.png', title: 'Shadcn/ui', link: 'https://ui.shadcn.com/' },
		{ icon: '/about/tailwindcss.svg', title: 'Tailwind CSS', link: 'https://tailwindcss.com/' },
		{ icon: '/about/framer-motion.svg', title: 'Framer Motion', link: 'https://www.framer.com/motion/' },
		{ icon: '/about/weatherAPI.svg', title: 'Weather API', link: 'https://www.weatherapi.com/' }
	]

	return (
		<>
			{<ScrollStateBar />}
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
		</>
	)
}