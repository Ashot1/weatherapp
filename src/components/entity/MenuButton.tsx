'use client'
import { FC } from 'react'
import {DotsVerticalIcon} from '@radix-ui/react-icons'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import ThemeChangeButton from '@/components/entity/ThemeChangeButton'


const MenuButton: FC = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<DotsVerticalIcon className="w-4 h-4 1024p:w-5 1024p:h-5 4k:w-7 4k:h-7"/>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="mt-[15px]">
				<DropdownMenuItem asChild className="cursor-pointer justify-center">
					<Link href="/about">Информация</Link>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={(e) => e.preventDefault()}>
					<ThemeChangeButton/>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default MenuButton