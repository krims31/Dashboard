import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './auth/Login'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import DashboardPage from './pages/DashboardPage'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => (
	<div className="app-wrapper">
		<Header />
		<div className="flex">
			<Sidebar />
			<main className="flex-1 p-6">{children}</main>
		</div>
	</div>
)

function App() {
	return (
		<Routes>
			<Route
				path="/login"
				element={<Login />}
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
				element={<div className="flex justify-center text-center mt-100 text-3xl ">404 - Страница не найдена</div>}
			/>
		</Routes>
	)
}

export default App
