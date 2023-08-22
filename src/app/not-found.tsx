import { Metadata } from 'next'
import { bellota400, tiltPrism400 } from '@/lib/fonts'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'Не найдено | Weather'
}

export default function NotFound() {

	return (
		<div className='w-screen h-screen grid place-items-center '>
			<div>
				<h1 className={`${tiltPrism400.className} text-6xl opacity-80 w-[100%] text-center`}>404</h1>
				<p className={`${bellota400.className} text-lg mt-1 opacity-80`}>Страница не найдена</p>
				<span className='w-[100%] grid place-items-center mt-7 500p:mt-9'>
					<Button variant='default' className='text-xs opacity-90' asChild>
						<Link href='/weather'>На главную</Link>
					</Button>
				</span>
			</div>
		</div>
	)
}
