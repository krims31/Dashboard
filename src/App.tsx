import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import DashboardPage from './pages/DashboardPage'

function App() {
	return (
		<>
			<Header />
			<Sidebar />
			<main className="flex-1 p-6">
				<Routes>
					<Route
						path="/dashboard"
						element={<DashboardPage />}
					/>
				</Routes>
			</main>
		</>
	)
}

export default App
