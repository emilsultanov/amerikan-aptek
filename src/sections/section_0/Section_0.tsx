import Link from "next/link";
import {Clipboard, Heart, Voicemail} from "react-feather";


export default function Section_0(){
	return(
		<section id={'about'} className={'bg-section-0 py-[50px]'}>
			<div className="container">
				<div className={'w-full md:w-1/2 mb-12'}>
					<h6 className={'font-semibold uppercase text-base text-[rgba(255,255,255,0.7)] tracking-widest leading-6 pb-2.5'}>Free Shipping & 24/7 PickUp</h6>
					<h1 className={'font-bold text-2xl md:text-[44px] leading-normal text-white pb-2.5'}>Find the Doctor Recommended Medicines You Need at Affordable Prices.</h1>
					<p className={'text-[rgba(255,255,255,0.7)] leading-9 md:text-xl font-medium pb-7'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
					<a href="#" className={'text-center text-sm font-bold bg-[#ff5473] inline-block py-5 px-4 text-white leading-6 rounded-full capitalize'}>shop medicines</a>
				</div>
				<div className={'flex gap-5 flex-col md:flex-row'}>
					<div className={'inline-flex text-white gap-5'}>
						<div >
							<Clipboard className={'w-16 h-16'} />
						</div>
						<div>
							<h4 className={'font-semibold leading-7 text-lg pb-2.5'}>Medicine & Vitamins</h4>
							<p className={'leading-6 text-sm font-medium pb-4 md:w-1/2'}>Donec rutrum congue leo eget malesuada. Donec sollicitudin. Lorem ipsum dolor sit amet</p>
							<a href="#" className={'font-bold uppercase underline text-xs tracking-widest'}>read more</a>
						</div>
					</div>
					<div className={'inline-flex text-white gap-5'}>
						<div>
							<Heart className={'w-16 h-16'} />
						</div>
						<div>
							<h4 className={'font-semibold leading-7 text-lg pb-2.5'}>Personal Care</h4>
							<p className={'leading-6 text-sm font-medium pb-4 md:w-1/2'}>Donec rutrum congue leo eget malesuada. Donec sollicitudin. Lorem ipsum dolor sit amet</p>
							<a href="#" className={'font-bold uppercase underline text-xs tracking-widest'}>read more</a>
						</div>
					</div>
					<div className={'inline-flex text-white gap-5'}>
						<div>
							<Voicemail className={'w-16 h-16'} />
						</div>
						<div>
							<h4 className={'font-semibold leading-7 text-lg pb-2.5'}>Fitness & Dietary</h4>
							<p className={'leading-6 text-sm font-medium pb-4 md:w-1/2'}>Donec rutrum congue leo eget malesuada. Donec sollicitudin. Lorem ipsum dolor sit amet</p>
							<a href="#" className={'font-bold uppercase underline text-xs tracking-widest'}>read more</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}