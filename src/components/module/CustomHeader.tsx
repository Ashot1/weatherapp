import { FC, ReactNode } from 'react'
import BackButton from '@/components/entity/BackButton'
import MenuButton from '@/components/entity/MenuButton'

const CustomHeader: FC<{children?: ReactNode, title?: string}> = ({children, title}) => {

	return (
		<header className=" w-screen h-[60px] flex justify-center relative">
			<div className="max-w-[750px] w-[90%] 768p:w-[70%] flex h-[100%] items-center">
				<nav className="w-10 -mt-[2px] justify-center flex items-center">
					<BackButton/>
				</nav>
				{children}
				<span className="w-10 justify-center flex items-center">
					<MenuButton/>
				</span>
			</div>
		</header>
	)
}

export default CustomHeader