'use client'

import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { Metadata } from 'next'
import { useEffect, useLayoutEffect } from 'react'

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
	return (
		<NextThemesProvider {...props}>{children}</NextThemesProvider>
	)
}

export default ThemeProvider