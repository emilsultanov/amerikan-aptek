'use client'

import Link from "next/link";
import {Facebook, Instagram, Twitter, Youtube} from 'react-feather'

export function Footer(){
	return(
		<footer className={'bg-[#222] py-4 px-10'}>
			<div className="container">
				<div className={'flex flex-col md:flex-row items-center justify-between gap-5'}>
					<p className={'text-[#666]'}>Developed by Emil Sultanov :)</p>
					<div className={'flex gap-5'}>
						<Link href={'#'}>
							<Facebook className={'text-[#666]'} />
						</Link>
						<Link href={'#'}>
							<Instagram className={'text-[#666]'} />
						</Link>
						<Link href={'#'}>
							<Twitter className={'text-[#666]'} />
						</Link>
						<Link href={'#'}>
							<Youtube className={'text-[#666]'} />
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}