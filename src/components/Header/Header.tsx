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
			<header className="w-415 bg-white border-b border-gray-200 ml-64">
				<div className="flex items-center justify-between px-6 py-3 relative">
					<div className="relative">
						<IoSearch
							size={17}
							className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
						/>
						<input
							type="search"
							placeholder={headersName.search}
							className="
					bg-gray-50
					border border-gray-300
					text-sm
					rounded-lg
					pl-9 pr-3 py-1.5
					w-64
					focus:ring-blue-500 focus:border-blue-500
				"
						/>
					</div>

					<div className="flex items-center gap-4 relative right-80">
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
						<h1 className="-mt-4">
							{headersName.name} {selectedOption && `(${selectedOption})`}
						</h1>
						<p className="text-gray-400 text-sm mt-6 -ml-15">
							{headersName.job}
						</p>
					</div>
				</div>
			</header>
		</>
	)
}
