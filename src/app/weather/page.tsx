import CityCommandMenu from '@/components/widgets/CityCommandMenu'
import CustomHeader, { HeaderTitle } from '@/components/module/CustomHeader'

export default function Weather() {
	return (
		<div className='flex flex-col h-[100dvh]'>
			<CustomHeader backButtonLink='/'>
				<HeaderTitle>Weather</HeaderTitle>
			</CustomHeader>
			<div className='flex-1 centerContent animate-top-appearance-moving'>
				<CityCommandMenu classWrapper='w-[90%] 768p:w-[50%] max-w-[650px]' />
			</div>
		</div>
	)
}