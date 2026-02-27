import { createContext, type Dispatch, type SetStateAction } from 'react'

interface ThemeContextType {
	isDark: boolean
	setIsDark: Dispatch<SetStateAction<boolean>>
	toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined
)
