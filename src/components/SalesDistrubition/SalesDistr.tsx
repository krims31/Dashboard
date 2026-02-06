import { ChevronDown, HardDrive } from 'lucide-react'
import { useState } from 'react'
import { SalesPieChart } from '../../components/Graphics/PieDonut'
import { PieLegend } from '../../data/data.donut'
import type { ITotal } from '../../types/total'
type Period = 'daily' | 'weekly' | 'monthly' | 'yearly'

const sales: ITotal = {
	sale: 'Sales Distribution',
	price: '$24,473'
}

export default function SalesDistr() {
	const [period, setPeriod] = useState<Period>('monthly')
	const [open, setOpen] = useState(false)
	return (
		<>
			<div className="border border-gray-200 p-3 w-135 h-43 rounded-[10px] ml-67 mt-3">
				<div className="flex items-center justify-between ml-67 mt-4 w-113">
					<HardDrive
						className="-mt-25 -ml-62 border-1xl border-gray-200 bg-gray-100"
						size={20}
					/>
					<h1 className="-ml-45 -mt-25">{sales.sale}</h1>
					<div className="mt-4">
						<SalesPieChart />
						<PieLegend />
					</div>
					<div className="relative">
						<button
							onClick={() => setOpen(v => !v)}
							className="flex items-center text-gray-500 gap-2 px-3 py-1.5 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 -mt-16 -ml-80"
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
