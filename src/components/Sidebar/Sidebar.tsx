import {
	AiOutlineCustomerService,
	AiOutlineProduct,
	AiTwotoneSecurityScan
} from 'react-icons/ai'
import { GoSidebarExpand } from 'react-icons/go'
import { IoIosHelpCircleOutline } from 'react-icons/io'
import { IoAnalytics, IoSettingsOutline } from 'react-icons/io5'
import { LiaFileInvoiceSolid } from 'react-icons/lia'
import { LuMessageSquareDot } from 'react-icons/lu'
import { MdOutlinePayment, MdSpaceDashboard } from 'react-icons/md'
import { TbAutomation } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { useStore } from '../../store/useStoreSidebar'
import { sidebarName } from '../../types/useSidebarNames'

export default function Sidebar() {
	const isOpen = useStore(state => state.isOpen)
	const toggleOpen = useStore(state => state.toggleOpen)

	return (
		<>
			{/* Sidebar */}
			<div
				className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 z-50 transform transition-transform duration-300 ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				{/* Logo */}
				<h1 className="text-2xl font-bold mb-6 text-gray-800">Nexus</h1>

				{/* General Section */}
				<ul className="mb-6">
					<h2 className="text-gray-500 uppercase text-xs mb-2">
						{sidebarName.general}
					</h2>
					<li>
						<Link
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
							to="/dashboard"
						>
							<MdSpaceDashboard />
							{sidebarName.dashboard}
						</Link>
					</li>
					<li>
						<Link
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
							to="/payment"
						>
							<MdOutlinePayment />
							{sidebarName.payment}
						</Link>
					</li>
					<li>
						<Link
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
							to="/customers"
						>
							<AiOutlineCustomerService />
							{sidebarName.customers}
						</Link>
					</li>
					<li>
						<Link
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
							to="/messages"
						>
							<LuMessageSquareDot />
							{sidebarName.message}
						</Link>
					</li>
				</ul>

				{/* Tools Section */}
				<ul className="mb-6">
					<h2 className="text-gray-500 uppercase text-xs mb-2">
						{sidebarName.tools}
					</h2>
					<li>
						<a
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
							href="#"
						>
							<AiOutlineProduct />
							{sidebarName.product}
						</a>
					</li>
					<li>
						<a
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
							href="#"
						>
							<LiaFileInvoiceSolid />
							{sidebarName.invoice}
						</a>
					</li>
					<li>
						<a
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
							href="#"
						>
							<IoAnalytics />
							{sidebarName.analytics}
						</a>
					</li>
					<li>
						<a
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
							href="#"
						>
							<TbAutomation />

							{sidebarName.automation}
						</a>
					</li>
				</ul>

				{/* Support Section */}
				<ul className="mb-6">
					<h2 className="text-gray-500 uppercase text-xs mb-2">
						{sidebarName.support}
					</h2>
					<li>
						<a
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
							href="#"
						>
							<IoSettingsOutline />
							{sidebarName.settings}
						</a>
					</li>
					<li>
						<a
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
							href="#"
						>
							<AiTwotoneSecurityScan />

							{sidebarName.security}
						</a>
					</li>
					<li>
						<a
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
							href="#"
						>
							<IoIosHelpCircleOutline />
							{sidebarName.help}
						</a>
					</li>
				</ul>

				{/* Upgrade Plan Button */}
				<div className="mt-auto mb-6">
					<button className="w-full mt-50 bg-transparent border-white text-black py-1 px-4 rounded transition hover:bg-gray-100">
						Upgrade Plan
					</button>
				</div>

				{/* Footer */}
				<footer className="text-gray-400 text-xs mt-5 ml-10">
					<p>© 2026 Nexus.io, Inc.</p>
				</footer>
			</div>

			{/* Floating Toggle Button */}
			<button
				className={`fixed top-6 left-0 z-50 p-2 text-2xl rounded-full transition-all duration-300 ${
					isOpen ? 'left-54' : 'left-0'
				}`}
				onClick={toggleOpen}
			>
				<GoSidebarExpand />
			</button>
		</>
	)
}
