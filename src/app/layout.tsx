import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import ThemeProvider from '@/hoc/ThemeProvider'
import {description} from '@/../package.json'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Weather',
  description: description,
  themeColor: [{color: '#18191d', media: '(prefers-color-scheme: dark)'}, {color: 'rgb(214, 219, 220)', media: '(prefers-color-scheme: light)'}],
  manifest: '/manifest/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <ThemeProvider defaultTheme="system" enableSystem attribute="class">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
