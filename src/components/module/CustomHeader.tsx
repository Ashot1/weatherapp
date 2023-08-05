import { FC, ReactNode } from 'react'

const CustomHeader: FC<{children: ReactNode, title: string}> = ({children, title}) => {

	return (
		<header className="bg-red-400 w-screen h-[60px] p-[15px]">
			{children}
		</header>
	)
}

export default CustomHeader