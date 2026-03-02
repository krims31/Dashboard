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
			<div
				className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg p-6 z-50 transform transition-transform duration-300 dark:bg-sidebar text-gray-700 dark:text-sidebar-foreground border-r border-gray-200 dark:border-sidebar-border ${
					isOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<h1 className="text-2xl font-bold mb-6 text-[#5347CE]">Nexus</h1>

				{/* General Section */}
				<ul className="mb-6">
					<h2 className="text-gray-500 uppercase text-xs mb-2 dark:text-muted-foreground">
						{sidebarName.general}
					</h2>
					<li>
						<Link
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100
							text-gray-700 hover:text-black dark:hover:bg-sidebar-accent transition-colors dark:text-sidebar-foreground dark:hover:text-white"
							to="/dashboard"
						>
							<MdSpaceDashboard />
							{sidebarName.dashboard}
						</Link>
					</li>
					<li>
						<Link
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:text-black"
							to="/payment"
						>
							<MdOutlinePayment />
							{sidebarName.payment}
						</Link>
					</li>
					<li>
						<Link
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:text-black"
							to="/customers"
						>
							<AiOutlineCustomerService />
							{sidebarName.customers}
						</Link>
					</li>
					<li>
						<Link
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:text-black"
							to="/messages"
						>
							<LuMessageSquareDot />
							{sidebarName.message}
						</Link>
					</li>
				</ul>

				{/* Tools Section */}
				<ul className="mb-6">
					<h2 className="text-gray-500 uppercase text-xs mb-2 dark:hover:text-black">
						{sidebarName.tools}
					</h2>
					<li>
						<Link
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100"
							to="/product"
						>
							<AiOutlineProduct />
							{sidebarName.product}
						</Link>
					</li>
					<li>
						<Link
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:text-black"
							to="/invoice"
						>
							<LiaFileInvoiceSolid />
							{sidebarName.invoice}
						</Link>
					</li>
					<li>
						<Link
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:text-black"
							to="/analytics"
						>
							<IoAnalytics />
							{sidebarName.analytics}
						</Link>
					</li>
					<li>
						<Link
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:text-black"
							to="/automation"
						>
							<TbAutomation />

							{sidebarName.automation}
						</Link>
					</li>
				</ul>

				{/* Support Section */}
				<ul className="mb-6">
					<h2 className="text-gray-500 uppercase text-xs mb-2">
						{sidebarName.support}
					</h2>
					<li>
						<Link
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:text-black"
							to="/settings"
						>
							<IoSettingsOutline />
							{sidebarName.settings}
						</Link>
					</li>
					<li>
						<Link
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:text-black"
							to="/security"
						>
							<AiTwotoneSecurityScan />

							{sidebarName.security}
						</Link>
					</li>
					<li>
						<Link
							className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 dark:hover:text-black"
							to="/help"
						>
							<IoIosHelpCircleOutline />
							{sidebarName.help}
						</Link>
					</li>
				</ul>

				{/* Upgrade Plan Button */}
				<div className="mt-auto mb-6">
					<button className="w-full mt-50 bg-transparent border-white text-black py-1 px-4 rounded transition hover:bg-gray-100 dark:bg-black dark:hover:bg-black dark:text-white">
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
				className={`fixed top-2 left-0 z-50 p-2 text-2xl rounded-full transition-all duration-300 ${
					isOpen ? 'left-54' : 'left-0'
				}`}
				onClick={toggleOpen}
			>
				<GoSidebarExpand />
			</button>
		</>
	)
}
