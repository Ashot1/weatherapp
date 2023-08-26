'use client'
import { FC, MouseEvent } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { MoonIcon, SunIcon, DesktopIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'

const ThemeChangeButton: FC = () => {
	const { setTheme } = useTheme()
	const ChangeTheme = (e: MouseEvent<HTMLButtonElement>) => {
		if (e?.target) setTheme((e.target as HTMLButtonElement).value)
	}

	return (
		<Dialog>
			<DialogTrigger>Изменить тему</DialogTrigger>
			<DialogContent className='max-[550px]:w-[90%] rounded-2xl'>
				<DialogTitle className='text-sm 768p:text-base 4k:text-xl'>Выберите тему</DialogTitle>
				<div className='flex flex-col gap-3 mt-3'>
					<Button onClick={ChangeTheme} value='light' variant='link'
							className='w-[100%] justify-start text-xs 768p:text-sm 4k:text-lg'><SunIcon
						className='mr-5 4k:w-6 4k:h-6' />Светлая</Button>
					<Separator />
					<Button onClick={ChangeTheme} value='dark' variant='link'
							className='w-[100%] justify-start text-xs 768p:text-sm 4k:text-lg'><MoonIcon
						className='mr-5 4k:w-6 4k:h-6' />Темная</Button>
					<Separator />
					<Button onClick={ChangeTheme} value='system' variant='link'
							className='w-[100%] justify-start text-xs 768p:text-sm 4k:text-lg'><DesktopIcon
						className='mr-5 4k:w-6 4k:h-6' />Системная</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default ThemeChangeButton