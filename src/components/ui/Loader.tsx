import { FC } from 'react'

const Loader: FC = () => {
	return (
		<div className='relative animate-text-appearance'>

			<div className='w-14 h-10 z-[2] absolute top-9 -left-3 animate-left-cloud-effect'>
				<span className='block relative w-[100%] h-[100%]
				before:w-[50%] before:h-[70%] before:rounded-full before:bg-[#4c9beb] before:block
				after:w-[40%] after:h-[50%] after:rounded-full after:bg-[#4c9beb] after:block after:-mt-5 after:ml-4 after:rounded-bl-none' />
			</div>

			<div
				className='w-20 h-20 bg-gradient-to-r from-[#fcbb04] to-[#fffc00] rounded-full relative opacity-80
				before:sun-bg before:w-20 before:h-20 before:absolute before:-z-1 before:rounded-full before:animate-sunshine-effect
				before:bg-gradient-to-r before:from-[#fcbb04] before:to-[#fffc00]' />

			<div className='w-14 h-10 z-[2] absolute top-2 -right-10 animate-right-cloud-effect'>
				<span className='block relative w-[100%] h-[100%]
					before:w-[50%] before:h-[70%] before:rounded-full before:bg-[#4c9beb] before:block
					after:w-[40%] after:h-[50%] after:rounded-full after:bg-[#4c9beb] after:block after:-mt-5 after:-ml-2.5 after:rounded-br-none' />
			</div>


		</div>
	)
}

export default Loader