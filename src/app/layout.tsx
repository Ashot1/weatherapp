import './globals.css'
import type { Metadata } from 'next'
import { ReactNode } from 'react'
import ThemeProvider from '@/hoc/ThemeProvider'
import packageJSON from '@/../package.json'
import { inter } from '@/lib/fonts'

export const metadata: Metadata = {
	title: {
		default: 'Weather',
		template: '%s | Weather'
	},
	description: packageJSON.description,
	manifest: '/manifest/manifest.json',
	themeColor: [
		{ color: '#18191d', media: '(prefers-color-scheme: dark)' },
		{
			color: 'rgb(214, 219, 220)',
			media: '(prefers-color-scheme: light)'
		}
	],
	icons: '/icon-weather.png',
	colorScheme: 'light dark',
	keywords: ['Weather', 'Погода', 'Прогнозы'],
	openGraph: {
		title: 'Weather',
		description: packageJSON.description,
		images: '/icon-weather.png',
		locale: 'ru-RU'
	},
	twitter: {
		title: 'Weather',
		description: packageJSON.description,
		images: '/icon-weather.png'
	}
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="ru">
			<body className={inter.className}>
				<ThemeProvider
					defaultTheme="system"
					enableSystem
					attribute="class"
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
