import { useRef, useState } from 'react'

const useNotification = () => {
	const [openNotification, setNotificationOpen] = useState<boolean>(false)

	const notificationRef = useRef<HTMLDivElement>(null)

	const toggleNotification = () => {
		setNotificationOpen(!openNotification)
	}

	return {
		openNotification,
		setNotificationOpen,
		toggleNotification,
		notificationRef
	}
}

export default useNotification
