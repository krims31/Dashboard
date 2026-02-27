import { useEffect, useState, type ReactNode } from 'react'
import { ThemeContext } from '../../types/ThemeContextType'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [isDark, setIsDark] = useState<boolean>(false)
	const toggleTheme = () => setIsDark(prev => !prev)

	useEffect(() => {
		if (isDark) {
			document.documentElement.classList.add("dark")
		} else {
			document.documentElement.classList.remove("dark")
		}
	}, [isDark])

	const contextValue = {
		isDark,
		setIsDark,
		toggleTheme
	}

	return (
		<ThemeContext.Provider value={contextValue}>
			{children}
		</ThemeContext.Provider>
	)
}
