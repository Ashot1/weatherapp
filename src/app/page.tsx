import { Megrim, Comfortaa } from 'next/font/google'
import {description, name} from '@/../package.json'

const megrim = Megrim({weight: '400', subsets: ['latin']})
const comfortaa = Comfortaa({weight: '300', subsets: ['latin', 'cyrillic']})

export default function Home() {
  return (
      <div className="flex h-[100dvh] flex-col items-center justify-center gap-5 animatedTextFirstPage">
          <h1 className={`${megrim.className} text-2xl 300p:text-3xl 1024p:text-3xl 4k:text-7xl`}>{name}</h1>
          <p className={`${comfortaa.className} text-xs text-center 768p:text-sm 1024p:text-sm 4k:text-3xl`}>{description}</p>
      </div>
  )
}
