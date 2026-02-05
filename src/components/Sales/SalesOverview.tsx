import { ChartNoAxesColumn, TrendingUp } from 'lucide-react'
import { CountryAreaChart } from "../Graphics/AnimateOne"
import type { ISales } from '../../types/sale'
const sales: ISales = {
	sale: 'Sales Overview',
	price: '$9,257.51'
}

export default function SalesOverview() {
	return (
		<>
			<div className="border border-gray-200 p-3 w-195 h-120 rounded-[10px] ml-67 mt-7">
				<ChartNoAxesColumn
					className="mt-2 ml-5 border-1xl border-gray-200 bg-gray-100"
					size={20}
				/>
				<h1 className="ml-15 -mt-5">{sales.sale}</h1>
				<p className="ml-6 mt-5 text-3xl">{sales.price}</p>
				<button className="text-green-700 border border-green-300 rounded-[6px] ml-6 mt-4 w-20 pr-5 bg-green-100 text-[0.9rem]">
					15.8%
					<TrendingUp
						size={17}
						className="ml-14 -mt-5"
					/>
				</button>
				<CountryAreaChart />
			</div>
		</>
	)
}
