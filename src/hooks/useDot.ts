import { useRef, useState } from 'react'

export const useDot = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const menuRef = useRef(null)

	const toggle = () => {
		if (!isOpen) {
			setIsOpen(true)
		} else {
			setIsOpen(false)
		}
	}

	return {
		isOpen,
		toggle,
		menuRef
	}
}