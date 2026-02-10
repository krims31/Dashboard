import { ArrowUpDown, ChartNoAxesColumn, Ellipsis, ListFilter, TrendingUp } from 'lucide-react'
import { filterName } from '../../types/filterName'
import type { ISales } from '../../types/sale'
import { sort } from '../../types/sortName'
import { CountryAreaChart } from '../Graphics/AnimateOne'
const sales: ISales = {
	sale: 'Sales Overview',
	price: '$9,257.51'
}

export default function SalesOverview() {
	return (
		<>
			<div className="border border-gray-200 p-3 w-195 h-115 rounded-[10px] ml-67 -mt-115">
				<ChartNoAxesColumn
					className="mt-2 ml-5 border-1xl border-gray-200 bg-gray-100"
					size={20}
				/>
				<h1 className="ml-15 -mt-5">{sales.sale}</h1>
				<p className="ml-6 mt-5 text-3xl">{sales.price}</p>
				<button className="text-green-700 border border-green-300 rounded-md ml-6 mt-4 w-20 pr-5 bg-green-100 text-[0.9rem]">
					15.8%
					<TrendingUp
						size={17}
						className="ml-14 -mt-5"
					/>
				</button>
				<CountryAreaChart />
				<button className="flex items-center text-gray-500 gap-2 px-15 py-1.5 pr-3 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 -mt-113 ml-140">
					<span className="-ml-7">{filterName.name}</span>
					<ListFilter
						size={12}
						className="-ml-14"
					/>
				</button>
				<button className="flex items-center text-gray-500 gap-2 px-15 py-1.5 pr-3 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 -mt-8.5 ml-161">
					<span className="-ml-7">{sort.sort}</span>
					<ArrowUpDown
						size={15}
						className="-ml-13"
					/>
				</button>
				<button className="flex items-center text-gray-500 gap-2 px-2 py-2 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-50 -mt-8.5 ml-181">
					<Ellipsis
						size={15}
						className="ml-0"
					/>
				</button>
			</div>
		</>
	)
}
