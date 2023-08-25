'use client'

import { FC, ReactNode, useEffect, useState } from 'react'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '@/components/ui/context-menu'
import Image from 'next/image'

const CityCommandContextMenu: FC<{ children: string | ReactNode, url: string, title: string }> = ({
																									  children,
																									  url,
																									  title
																								  }) => {

	const [isFavorite, setIsFavorite] = useState<boolean>(false)

	useEffect(() => {
		const FavoriteList = localStorage.getItem('favorite')?.split(';')
		if (!FavoriteList) return
		const FavoriteCondition = FavoriteList.find(item => item.split('|')[1] === url)
		setIsFavorite(
			!!(FavoriteCondition && FavoriteCondition.length > 0)
		)
	}, [url])

	const SaveCity = () => {
		const FavoriteList = localStorage.getItem('favorite')

		if (isFavorite) return

		setIsFavorite(true)

		localStorage.setItem('favorite', `${FavoriteList}${title}|${url};`)
	}

	const deleteCity = () => {
		const FavoriteList = localStorage.getItem('favorite')?.split(';')
		if (!FavoriteList) return
		setIsFavorite(false)
		const filteredList = FavoriteList.filter(item => item.split('|')[1] !== url)
		localStorage.setItem('favorite', filteredList.join(';'))
	}


	return (
		<ContextMenu>
			<ContextMenuTrigger>
				<section className={`flex items-center ${isFavorite && 'bg-yellow-200/10'}`}>
					{isFavorite &&
						<Image src='/star.png' width={15}
						       height={15}
						       alt='Закреплено' className='ml-1.5' />}
					{children}
				</section>
			</ContextMenuTrigger>
			<ContextMenuContent>
				<CustomContextMenuItem click={SaveCity}>Закрепить</CustomContextMenuItem>
				<CustomContextMenuItem click={deleteCity}>Открепить</CustomContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	)
}

export default CityCommandContextMenu

const CustomContextMenuItem: FC<{ children: ReactNode | string, click?: () => void }> = ({ children, click }) => {
	return (
		<ContextMenuItem className='cursor-pointer' onClick={click}>
			{children}
		</ContextMenuItem>
	)
}
