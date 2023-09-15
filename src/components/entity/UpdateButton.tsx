'use client'
import { FC } from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const UpdateButton: FC<{ dopClass?: string; lastUpdate?: string }> = ({
	dopClass,
	lastUpdate = '1'
}) => {
	const date = new Date(lastUpdate),
		difference = Math.round((Date.now() - date.getTime()) / 1000),
		{ refresh } = useRouter()

	if (!lastUpdate || difference > 1800)
		return (
			<div className="w-screen grid place-items-center my-4">
				<Button
					variant="outline"
					className={`text-xs bg-transparent border-2 border-black/50 dark:border-white/50 rounded-2xl ${dopClass}`}
					onClick={() => {
						refresh()
					}}
				>
					Обновить
				</Button>
			</div>
		)
}

export default UpdateButton
