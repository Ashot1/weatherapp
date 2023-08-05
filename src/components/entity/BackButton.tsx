'use client'

import { FC } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { useRouter } from 'next/navigation'

const BackButton: FC = () => {
	const navigate = useRouter()
	return (
		<Button variant="ghost" size="icon" onClick={() => navigate.back()} className="rounded-full">
			<ChevronRightIcon className="w-6 h-6 rotate-180 4k:w-10 4k:h-10"/>
		</Button>
	)
}

export default BackButton