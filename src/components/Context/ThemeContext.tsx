import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'
import { useTheme } from '../../hooks/useTheme'

export const Theme = () => {
	const { isDark, toggleTheme } = useTheme()
	return (
		<button
			onClick={toggleTheme}
			className="flex items-center justify-center p-1 transition-all duration-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 active:scale-90"
			aria-label="Toggle Theme"
		>
			{isDark ? (
				<IoSunnyOutline
					size={20}
					className="text-yellow-400 cursor-pointer"
				/>
			) : (
				<IoMoonOutline
					size={20}
					className="text-slate-600 cursor-pointer"
				/>
			)}
		</button>
	)
}
