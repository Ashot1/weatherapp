import { ReactNode } from 'react'
import ScrollStateBar from '@/components/ui/ScrollStateBar'
import CustomHeader, { HeaderTitle } from '@/components/module/CustomHeader'

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className='min-h-[100vh] flex flex-col items-center pb-20'>
			<CustomHeader>
				<HeaderTitle>Weather</HeaderTitle>
			</CustomHeader>
			{children}
		</div>
	)
}
