import { ChevronDown, TrendingUp, Users } from 'lucide-react'
import { useState } from 'react'
import type { ITotal } from '../../types/total'
import { WeeklyBarChart } from '../Graphics/TotalGraph'

type Period = 'daily' | 'weekly' | 'monthly' | 'yearly'

const sales: ITotal = {
	sale: 'Total Subscriber',
	price: '$24,473'
}

export default function Total() {
	const [period, setPeriod] = useState<Period>('monthly')
	const [open, setOpen] = useState(false)
	return (
		<>
			<div className="border border-gray-200 p-3 w-123 h-115 rounded-[10px] ml-267 mt-5 max-2xl:ml-195 max-2xl:w-110">
				<Users
					className="mt-2 ml-5 border-1xl border-gray-200 bg-gray-100"
					size={20}
				/>
				<h1 className="ml-15 -mt-5">{sales.sale}</h1>
				<p className="ml-6 mt-5 text-3xl">{sales.price}</p>
				<button className="text-green-700 border border-green-300 rounded-md ml-6 mt-4 w-20 pr-5 bg-green-100 text-[0.9rem]">
					8.3%
					<TrendingUp
						size={17}
						className="ml-14 -mt-5"
					/>
				</button>
				<WeeklyBarChart />
				<div className="flex items-center justify-between ml-67 mt-4 w-113">
					<div className="relative">
						<button
							onClick={() => setOpen(v => !v)}
							className="flex items-center text-gray-500 gap-2 px-3 py-1.5 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 -mt-112 ml-18 max-2xl:ml-5 max-2xl:-mt-112"
						>
							{period.charAt(0).toUpperCase() + period.slice(1)}
							<ChevronDown size={16} />
						</button>

						{open && (
							<div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-20">
								{(['daily', 'weekly', 'monthly', 'yearly'] as Period[]).map(
									p => (
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
									)
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
