import {
	ChevronDown,
	Database,
	Download,
	Eye,
	Info,
	ListFilter,
	TrendingDown,
	TrendingUp,
	Waypoints
} from 'lucide-react'
import { useState } from 'react'
import ListIntegration from '../components/List/ListIntegration'
import SalesOverview from '../components/Sales/SalesOverview'
import SalesDistr from '../components/SalesDistrubition/SalesDistr'
import Total from '../components/Total/Total'
import type { dashboard } from '../types/dashboard'
import { Export } from '../types/exportName'
import { filterName } from '../types/filterName'

type Period = 'daily' | 'weekly' | 'monthly' | 'yearly'

export default function DashboardPage() {
	const [period, setPeriod] = useState<Period>('monthly')
	const [open, setOpen] = useState(false)
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
			<h1 className="text-3xl lg:ml-64">Dashboard</h1>
			<div
				className="flex items-center justify-between 
           w-full ml-0 mt-4 
           md:ml-67 md:mt-0 md:w-113"
			>
				<div className="relative">
					<button
						onClick={() => setOpen(v => !v)}
						className="flex items-center text-gray-500 gap-2 px-3 py-1.5 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 -mt-9 ml-252"
					>
						{period.charAt(0).toUpperCase() + period.slice(1)}
						<ChevronDown size={16} />
					</button>

					{open && (
						<div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
							{(['daily', 'weekly', 'monthly', 'yearly'] as Period[]).map(p => (
								<button
									key={p}
									onClick={() => {
										setPeriod(p)
										setOpen(false)
									}}
									className={`
              w-full text-left px-3 py-2 text-sm
              hover:bg-gray-100
              ${period === p ? 'bg-gray-50 font-medium' : ''}
            `}
								>
									{p.charAt(0).toUpperCase() + p.slice(1)}
								</button>
							))}
						</div>
					)}
				</div>
				<button className="flex items-center text-gray-500 gap-2 px-15 py-1.5 pr-3 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 -mt-9 ml-2">
					<span className="-ml-7">{filterName.name}</span>
					<ListFilter
						size={12}
						className="-ml-14"
					/>
				</button>

				<button className="flex items-center text-gray-500 gap-2 px-17 py-1.5 pr-3 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 -mt-9 ml-2">
					<span className="-ml-10">{Export.export}</span>
					<Download
						size={15}
						className="-ml-16"
					/>
				</button>
			</div>

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
				<button className="text-green-700 border border-green-300 rounded-md ml-32 mt-7 w-20 pr-5 bg-green-100 text-[0.9rem]">
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
				<button className="text-red-700 border border-red-300 rounded-md ml-37 mt-7 w-20 pr-5 bg-red-100 text-[0.9rem]">
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
				<button className="text-green-700 border border-green-300 rounded-md ml-32 mt-7 w-20 pr-5 bg-green-100 text-[0.9rem]">
					24.2%
					<TrendingUp
						size={17}
						className="ml-14 -mt-5"
					/>
				</button>
				<p className="ml-4 text-[2rem] -mt-9">{dashboard.percent}</p>
			</div>

			<Total />
			<SalesOverview />
			<SalesDistr />
			<ListIntegration />
		</>
	)
}
