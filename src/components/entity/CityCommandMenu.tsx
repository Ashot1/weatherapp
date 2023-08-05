'use client'
import { FC, useState } from 'react'
import { Command, CommandInput, CommandItem, CommandList } from '../ui/command'

const CityCommandMenu: FC<{classWrapper?: string}> = ({classWrapper}) => {

	return (
		<div className={classWrapper}>
			<Command className="shadow-md">
				<CommandInput placeholder="Выберите город..." className="text-xs 768p:text-sm 4k:text-lg"/>
				<CommandList>
					<CommandItem className="text-xs 768p:text-sm 4k:text-lg cursor-pointer">London</CommandItem>
					<CommandItem className="text-xs 768p:text-sm 4k:text-lg cursor-pointer">Moscow</CommandItem>
					<CommandItem className="text-xs 768p:text-sm 4k:text-lg cursor-pointer">Minsk</CommandItem>
				</CommandList>
			</Command>
		</div>
	)
}

export default CityCommandMenu