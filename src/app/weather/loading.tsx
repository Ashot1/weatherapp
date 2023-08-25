import CustomHeader, { HeaderTitle } from '@/components/module/CustomHeader'
import Loader from '@/components/ui/Loader'

export default function Loading() {
	return (
		<div className='w-screen h-screen'>
			<CustomHeader backButtonLink='/'>
				<HeaderTitle>Weather</HeaderTitle>
			</CustomHeader>
		</div>

	)
}
