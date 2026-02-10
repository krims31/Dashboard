import { HardDrive } from 'lucide-react'
import type { IList } from '../../types/list'

const list: IList = {
	sale: 'List of Integration',
	profit: 'PROFIT',
	seeall: 'See All',
	app: 'APPLICATION',
	type: 'TYPE',
	rate: 'RATE',
	img: 'https://static.wixstatic.com/media/bec40d_b07e57da97d9472dbfd6719a3b3a3b80~mv2.png',
	finance: "Finance",
	marketplace: "Marketplace",
}

export default function ListIntegration() {
	return (
		<>
			<div className="border border-gray-200 p-3 w-182 h-42 rounded-[10px] ml-208 -mt-43">
				<HardDrive
					className="mt-2 ml-5 border-1xl border-gray-200 bg-gray-100"
					size={20}
				/>
				<h1 className="ml-15 -mt-5.5">{list.sale}</h1>
				<p className="ml-160 -mt-6 text-[#887CFD] hover:text-[black] cursor-pointer transition 0.3s ease transform duration-300">
					{list.seeall}
				</p>
				<div className="border border-gray-100 bg-gray-50 rounded-sm mt-1 w-full h-8">
					<input
						type="checkbox"
						className="h-4 w-4 mt-2 ml-5 border-2 border-gray-400 rounded-sm"
					/>
					<p className="text-gray-400 text-sm ml-15 -mt-6">{list.app}</p>
					<p className="text-gray-400 text-sm ml-75 -mt-5">{list.type}</p>
					<p className="text-gray-400 text-sm ml-110 -mt-5">{list.rate}</p>
					<p className="text-gray-400 text-sm ml-150 -mt-5">{list.profit}</p>
				</div>
				<div className="border border-gray-100 rounded-sm mt-2 h-8">
					<input
						type="checkbox"
						className="h-4 w-4 mt-2 ml-5 border-2 border-gray-400 rounded-sm"
					/>
					<input
						type="range"
						min="0"
						max="100"
						value="40"
						className="w-20 h-1 ml-95 absolute top-216 accent-[#887CFD] cursor-pointer"
					/>

					<p className="text-sm text-gray-500 -mt-7 ml-85 text-center">40%</p>

					<p className="text-md text-gray-500 -mt-5 -ml-12 text-center">{list.finance}</p>

					<p className="text-md text-gray-500 -mt-6 ml-135 text-center">$650.00</p>
				</div>
				<div className="border border-gray-100 rounded-sm mt-2 h-8">
					<input
						type="checkbox"
						className="h-4 w-4 mt-2 ml-5 border-2 border-gray-400 rounded-sm"
					/>
					
					<input
						type="range"
						min="0"
						max="100"
						value="80"
						className="w-20 h-1 ml-95 absolute top-227 accent-[#887CFD] cursor-pointer"
					/>
					<p className="text-sm text-gray-500 -mt-6 ml-85 text-center">80%</p>

					<p className="text-md text-gray-500 -mt-5 -ml-12 text-center">{list.marketplace}</p>

					<p className="text-md text-gray-500 -mt-6 ml-135 text-center">$720.50</p>
				</div>
			</div>
		</>
	)
}
