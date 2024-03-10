'use client';

import Link from "next/link";
import classNames from "classnames";

import {useNavStore} from "@/components/header/store";

export function MobileNav() {
	const {isMobileNavVisible, hideMobileNav} = useNavStore(state => state);
	
	const navClassnames = classNames('w-full h-full top-0 fixed md:hidden -right-full', {
		'left-0': isMobileNavVisible,
	});
	
	return(
		<div className={navClassnames}>
			<div className={'flex h-full'}>
				<div className={'w-1/3 bg-[rgba(0,0,0,0.5)]'} onClick={hideMobileNav}/>
				<div className={'w-2/3 bg-white p-5'}>
					<nav className={'flex flex-col'}>
						<Link href={'#about'} className={'py-3'}>Haqqimizda</Link>
						<Link href={'#gallery'} className={'py-3'}>Qalerya</Link>
						<Link href={'#partners'} className={'py-3'}>Partnerler</Link>
						<Link href={'#contact'} className={'py-3'}>Elaqe</Link>
					</nav>
				</div>
			</div>
		</div>
	)
}