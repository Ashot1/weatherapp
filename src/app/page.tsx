import { description, name } from '@/../package.json'
import { Button } from '@/components/ui/button'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { comfortaa300, megrim } from '@/lib/fonts'
import { fetch } from 'next/dist/compiled/@edge-runtime/primitives'


export default function Home() {
	return (
		<div className='h-[100dvh] flex flex-col items-center justify-center gap-6'>
			<section className='flex gap-5 flex-col items-center justify-center'>
				<h1 className={`${megrim.className} text-2xl 300p:text-3xl 1024p:text-3xl 4k:text-6xl textGlowEffect animate-text-appearance`}>{name}</h1>
				<p className={`${comfortaa300.className} text-xs text-center 768p:text-sm 1024p:text-sm 4k:text-2xl px-1 animate-text-appearance delay-1000 opacity-0 fill-mode-forwards`}>{description}</p>
			</section>
			<nav
				className='flex flex-col items-center gap-4 delay-2000 opacity-0 animate-text-appearance fill-mode-forwards'>
				<ChevronRightIcon className='w-7 h-7 rotate-90 4k:w-10 4k:h-10' />
				<Button className='opacity-95 text-xs 1024p:text-sm 4k:text-xl' asChild>
					<Link href='/weather'>Начать</Link>
				</Button>
			</nav>
		</div>
	)
}
