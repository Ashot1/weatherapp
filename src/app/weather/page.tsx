import CityCommandMenu from '@/components/entity/CityCommandMenu'
import CustomHeader from '@/components/module/CustomHeader'
import HeaderTitle from '@/components/ui/HeaderTitle'

export default function Weather() {
	return (
		<div className="flex flex-col h-[100dvh]">
			<CustomHeader>
				<HeaderTitle>Weather</HeaderTitle>
			</CustomHeader>
			<div className="flex-1 centerContent animate-top-appearance-moving">
				<CityCommandMenu classWrapper="w-[90%] 500p:w-[50%] max-w-[650px]"/>
			</div>
		</div>
	)
}