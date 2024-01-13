'use client'


import Link from "next/link";

export function Header(){
	return(
		<header className={'px-10 py-8  shadow-3xl'}>
			<div className="container">
				<div className={'flex justify-between items-center'}>
					<h1 className={'text-2xl font-semibold text-[#20292f] leading-6'}>
						<Link href={'/'} >Amerikan Aptek</Link>
					</h1>
					<nav className={'flex gap-6 hidden md:visible'}>
						<Link href={'/about'} className={'text-sm leading-[14px] font-medium text-[#20292f]'}>Haqqimizda</Link>
						<Link href={'/gallery'} className={'text-sm leading-[14px] font-medium text-[#20292f]'}>Qalerya</Link>
						<Link href={'/partners'} className={'text-sm leading-[14px] font-medium text-[#20292f]'}>Partnerler</Link>
						<Link href={'/contact'} className={'text-sm leading-[14px] font-medium text-[#20292f]'}>Elaqe</Link>
					</nav>
				</div>
			</div>
		</header>
	)
}