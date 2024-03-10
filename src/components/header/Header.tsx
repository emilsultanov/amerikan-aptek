'use client'

import Link from "next/link";
import {Menu} from 'react-feather'
import Image from "next/image";

import {MobileNav} from "@/components/header/MobileNav";
import {DesktopNav} from "@/components/header/DesktopNav";

import {useNavStore} from "@/components/header/store";

export function Header(){
	const showMobileNav = useNavStore(state => state.showMobileNav);
	
	return(
		<header className={'px-2 md:px-10 py-8  shadow-3xl'}>
			<div className="container">
				<div className={'flex justify-between items-center'}>
						<Link href={'/'}>
							<Image width={100} height={50} src={'/amerikan-aptek/Untitled-1.png'} alt={'logo'} />
						</Link>
					<Menu className={'block md:hidden cursor-pointer'} onClick={showMobileNav} />
					<DesktopNav />
				</div>
			</div>
			<MobileNav />
		</header>
	)
}