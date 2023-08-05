import { FC } from 'react'
import { comfortaa } from '@/lib/fonts'

const HeaderTitle: FC<{children: string}> = ({children}) => {
	return (
		<h1 className={`${comfortaa.className} flex-1 text-center h-auto text-base 4k:text-xl`}>{children}</h1>
	)
}

export default HeaderTitle