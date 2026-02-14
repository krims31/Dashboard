import { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { IoIosAddCircleOutline } from 'react-icons/io'
import {
	IoGiftOutline,
	IoNotificationsOutline,
	IoSearch
} from 'react-icons/io5'

import { headersName } from '../../types/headersName'

export default function Header() {
	const [open, setOpen] = useState(false)
	const [selectedOption, setSelectedOption] = useState<string | null>(null)

	const logins = ['Login', 'Logout']

	const toggleDropdown = () => setOpen(!open)

	const handleOptionClick = (options: string) => {
		setSelectedOption(options)
		setOpen(false)
	}
	return (
		<>
			<header className=" bg-white border-b border-gray-200 lg:pl-64">
				<div className="flex items-center justify-between px-4 md:px-6 py-3">
					<div className="relative flex-1 max-w-xs">
						<IoSearch
							size={17}
							className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
						/>
						<input
							type="search"
							placeholder={headersName.search}
							className="
					bg-transparent
					border border-gray-300
					text-sm
					rounded-lg
					pl-9 pr-3 py-1.5
					w-75
					focus:ring-blue-500 focus:border-blue-500
				"
						/>
					</div>

					<div className="flex items-center gap-2 md:gap-4 ml-4">
						<div className="hidden sm:flex items-center gap-3">
							<IoGiftOutline
								size={20}
								className="cursor-pointer"
							/>
							<IoNotificationsOutline
								size={20}
								className="cursor-pointer"
							/>
							<IoIosAddCircleOutline
								size={20}
								className="cursor-pointer"
							/>
						</div>

						<button onClick={toggleDropdown}>
							<CgProfile size={20} />
						</button>

						{open && (
							<ul
								className="
						absolute right-0 top-8
						w-40
						bg-white
						rounded-xl
						shadow-xl
						border border-gray-200
						overflow-hidden
						animate-fade-in
						z-50
					"
							>
								{logins.map(login => (
									<li
										key={login}
										onClick={() => handleOptionClick(login)}
										className="
								px-4 py-2
								text-sm
								cursor-pointer
								hover:bg-gray-100
							"
									>
										{login}
									</li>
								))}
							</ul>
						)}
						<div className="hidden md:block">
							<h1 className="text-sm font-medium leading-none">
								{headersName.name} {selectedOption && `(${selectedOption})`}
							</h1>
							<p className="text-gray-400 text-xs mt-1">{headersName.job}</p>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
