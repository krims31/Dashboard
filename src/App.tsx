import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './auth/Login'
import { ThemeProvider } from './components/Context/ThemeProvider'
import Header from './components/Header/Header'
import Settings from './components/Settings/Settings'
import Sidebar from './components/Sidebar/Sidebar'
import DashboardPage from './pages/DashboardPage'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
	<ThemeProvider>
		<div className="app-wrapper">
			<Header />
			<div className="flex">
				<Sidebar />
				<main className="flex-1 p-6">{children}</main>
			</div>
		</div>
	</ThemeProvider>
)

function App() {
	return (
		<Routes>
			<Route
				path="/login"
				element={<Login />}
			/>

			<Route
				path="/settings"
				element={
					<DashboardLayout>
						<Settings />
					</DashboardLayout>
				}
			/>

			<Route
				path="/dashboard"
				element={
					<DashboardLayout>
						<DashboardPage />
					</DashboardLayout>
				}
			/>

			<Route
				path="/"
				element={<Navigate to="/dashboard" />}
			/>

			<Route
				path="*"
				element={
					<div className="flex justify-center text-center mt-100 text-3xl ">
						404 - Страница не найдена
					</div>
				}
			/>
		</Routes>
	)
}

export default App
