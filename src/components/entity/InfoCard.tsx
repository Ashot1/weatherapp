import { FC } from 'react'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import { rajdhani600 } from '@/lib/fonts'

const InfoCard: FC<{ title: string, icon: string }> = ({ icon, title }) => {
	return (
		<Card
			className='h-[100%] flex flex-col
			bg-white/20 dark:bg-black/40 shadow-xl dark:shadow-2xl duration-700 border-2 border-white/20 dark:border-black/20
			hover:bg-white/5 hover:border-white/50 dark:hover:bg-black/20 dark:hover:border-black/50'>
			<CardContent className='relative aspect-square w-[40%] ml-[30%] mt-5'>
				<Image src={icon} alt={`${title} logo`} fill sizes='50%' priority
					   className={`rounded-3xl ${(title === 'Next.js' || title === 'Shadcn/ui') && 'dark:invert'}`} />
			</CardContent>
			<CardFooter className='flex items-end justify-center h-auto flex-1 pb-12'>
				<h1 className={`${rajdhani600.className} text-xl 500p:text-base`}>{title}</h1>
			</CardFooter>
		</Card>
	)
}

export default InfoCard