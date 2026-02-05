import {
	Database,
	Eye,
	Info,
	TrendingDown,
	TrendingUp,
	Waypoints
} from 'lucide-react'
import type { dashboard } from '../types/dashboard'
export default function DashboardPage() {
	const dashboard: dashboard = {
		page: 'Page Views',
		total: 'Total Revenue',
		bounce: 'Bounce Rate',
		price: '12,450',
		price2: '$363.95',
		percent: '86.5%'
	}

	return (
		<>
			<h1 className="text-3xl ml-67">Dashboard</h1>
			<div className="border border-gray-200 p-3 w-113 rounded-[10px] ml-67 mt-5">
				<Eye
					className="mt-2 ml-5 border-1xl border-gray-200 bg-gray-100"
					size={20}
				/>
				<Info
					className="text-gray-400 cursor-pointer -mt-5.5 ml-99"
					size={20}
				/>
				<p className="ml-15 -mt-5.5">{dashboard.page}</p>
				<button className="text-green-700 border border-green-300 rounded-[6px] ml-32 mt-7 w-20 pr-5 bg-green-100 text-[0.9rem]">
					15.8%
					<TrendingUp
						size={17}
						className="ml-14 -mt-5"
					/>
				</button>
				<p className="ml-4 text-[2rem] -mt-9">{dashboard.price}</p>
			</div>
			<div className="border border-gray-200 p-3 w-100 rounded-[10px] ml-185 -mt-29">
				<Database
					className="mt-2 ml-5 border-1xl border-gray-200 bg-gray-100"
					size={20}
				/>
				<Info
					className="text-gray-400 cursor-pointer -mt-5.5 ml-85"
					size={20}
				/>
				<p className="ml-15 -mt-5.5">{dashboard.total}</p>
				<button className="text-red-700 border border-red-300 rounded-[6px] ml-37 mt-7 w-20 pr-5 bg-red-100 text-[0.9rem]">
					34.0%
					<TrendingDown
						size={17}
						className="ml-14 -mt-5"
					/>
				</button>
				<p className="ml-4 text-[2rem] -mt-9">{dashboard.price2}</p>
			</div>
			<div className="border border-gray-200 p-3 w-100 rounded-[10px] ml-290 -mt-29">
				<Waypoints
					className="mt-2 ml-5 border-1xl border-gray-200 bg-gray-100"
					size={20}
				/>
				<Info
					className="text-gray-400 cursor-pointer -mt-5.5 ml-85"
					size={20}
				/>
				<p className="ml-15 -mt-5.5">{dashboard.bounce}</p>
				<button className="text-green-700 border border-green-300 rounded-[6px] ml-32 mt-7 w-20 pr-5 bg-green-100 text-[0.9rem]">
					24.2%
					<TrendingUp
						size={17}
						className="ml-14 -mt-5"
					/>
				</button>
				<p className="ml-4 text-[2rem] -mt-9">{dashboard.percent}</p>
			</div>
		</>
	)
}
