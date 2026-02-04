import { Route, Routes } from 'react-router-dom'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import DashboardPage from './pages/DashboardPage'

function App() {
	return (
		<>
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
