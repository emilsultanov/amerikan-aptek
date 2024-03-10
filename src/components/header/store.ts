import {create} from 'zustand'


export type NavState = {
	isMobileNavVisible: boolean
}

export type NavAction = {
	hideMobileNav: () => void,
	showMobileNav: () => void
}

export const useNavStore = create<NavState & NavAction>((set) => ({
	isMobileNavVisible: false,
	hideMobileNav: () => set({isMobileNavVisible: false}),
	showMobileNav: () => set({isMobileNavVisible: true})
}));