'use client'

import { CommandItem, CommandList } from '@/components/ui/command'
import CityCommandContextMenu from '@/components/entity/CityCommandContextMenu'
import Link from 'next/link'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { FC, memo } from 'react'

export type ListOfCities = {
	title: string;
	url: string;
	country: string;
	region: string;
}[]

const CustomCommandItem: FC<{ children: string, country: string, url: string, region: string }> = ({
																									   children,
																									   country,
																									   url,
																									   region
																								   }) => {
	return (
		<CommandItem className='cursor-pointer grid p-0'>
			<CityCommandContextMenu url={url} title={children}>
				<Link href={`/weather/${url}/current`}
					  className='flex justify-between flex-1 items-center pr-5 group h-[100%] py-1.5 px-2'>
					<span>
						<h1 className='text-sm 768p:text-sm 4k:text-lg '>{children}</h1>
						<p className='text-xs text-black/[0.5] dark:text-white/[0.4]'>{region}</p>
						<p className='text-xs text-black/[0.5] dark:text-white/[0.4]'>{country}</p>
					</span>
					<ChevronRightIcon
						className='w-6 h-6 4k:w-10 4k:h-10 opacity-0 group-hover:opacity-50 duration-200' />
				</Link>
			</CityCommandContextMenu>
		</CommandItem>
	)
}

export const ListCities: FC<{ list: ListOfCities }> = memo(({ list }) => {
	return (
		<CommandList>
			{list.map((city, index) => (
				<CustomCommandItem key={index} region={city.region} country={city.country}
								   url={`${city.url}`}>{city.title}</CustomCommandItem>))}
		</CommandList>
	)
})
ListCities.displayName = 'ListCities'