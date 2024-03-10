'use client';


import Link from "next/link";

export function DesktopNav() {
	return (
		<div className={'hidden md:block'}>
			<nav className={'flex gap-6'}>
				<Link href={'#about'} className={'text-sm leading-[14px] font-medium text-[#20292f]'}>Haqqimizda</Link>
				<Link href={'#gallery'} className={'text-sm leading-[14px] font-medium text-[#20292f]'}>Qalerya</Link>
				<Link href={'#partners'} className={'text-sm leading-[14px] font-medium text-[#20292f]'}>Partnerler</Link>
				<Link href={'#contact'} className={'text-sm leading-[14px] font-medium text-[#20292f]'}>Elaqe</Link>
			</nav>
		</div>
	)
}