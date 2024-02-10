'use client'

import Link from "next/link";
import {Menu} from 'react-feather'
import Image from "next/image";

export function Header(){
	return(
		<header className={'px-2 md:px-10 py-8  shadow-3xl'}>
			<div className="container">
				<div className={'flex justify-between items-center'}>
						<Link href={'/'} className={'relative w-[100px] sm:w-[150px] h-16 sm:h-24'}>
							<Image fill src={'/amerikan-aptek/Amerikan-aptek_tabela-png(2)-min.png'} alt={'logo'} />
						</Link>
					<Menu className={'block md:hidden cursor-pointer'} />
					<div className={'hidden md:block'}>
						<nav className={'flex gap-6'}>
							<Link href={'/about'} className={'text-sm leading-[14px] font-medium text-[#20292f]'}>Haqqimizda</Link>
							<Link href={'/gallery'} className={'text-sm leading-[14px] font-medium text-[#20292f]'}>Qalerya</Link>
							<Link href={'/partners'} className={'text-sm leading-[14px] font-medium text-[#20292f]'}>Partnerler</Link>
							<Link href={'/contact'} className={'text-sm leading-[14px] font-medium text-[#20292f]'}>Elaqe</Link>
						</nav>
					</div>
				</div>
			</div>
		</header>
	)
}

