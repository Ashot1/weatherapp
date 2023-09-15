'use client'

import { usePathname, useRouter } from 'next/navigation'
import { FC } from 'react'

const NavigateToCurrentWeather: FC = () => {

	const { replace } = useRouter(),
		path = usePathname()

	replace(`${path.split('/').slice(0, 3).join('/')}/current`)

	return <></>
}

export default NavigateToCurrentWeather