import { create } from 'zustand'
import type { SidebarState } from '../types/sidebar'

export const useStore = create<SidebarState>(set => ({
	isOpen: false,
	toggleOpen: () => set(state => ({ isOpen: !state.isOpen }))
}))

export default useStore
