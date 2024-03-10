import Image from "next/image";


export default function Section_2() {
	return (<section id={'partners'} className={'py-32 bg-[#0c4a7c]'}>
			<div className="container">
				<div className="flex flex-col md:flex-row">
					<div className={'md:w-1/2'}>
						<h6 className={'font-semibold text-white uppercase text-base tracking-[2px] leading-6 pb-2.5'}>Doctor
							Approved</h6>
						<h2 className={'font-bold text-white text-2xl md:text-[40px] md:leading-[56px] pb-2.5 w-full md:w-3/4'}>Trusted By Doctors & Patients
							Around the Country.</h2>
						<p className={'font-medium text-white text-base leading-7 break-words pb-6 w-full md:w-3/4'}>Lorem ipsum dolor sit
							amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud.</p>
						<a href="#"
						   className={'w-full sm:w-auto text-center text-white py-3.5 px-6 inline-block leading-7 font-medium rounded-full bg-[#ff5473] cursor-pointer'}>About
							Us</a>
					</div>
					<div className={'md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-1'}>
						<div className={'relative min-h-[50px]'}>
							<Image fill src={'/amerikan-aptek/logo_01.png'} alt={'foto'} className={'object-contain'}/>
						</div>
						<div className={'relative min-h-[50px]'}>
							<Image fill src={'/amerikan-aptek/logo_02-1.png'} alt={'foto'} className={'object-contain'}/>
						</div>
						<div className={'relative min-h-[50px]'}>
							<Image fill src={'/amerikan-aptek/logo_03-2.png'} alt={'foto'} className={'object-contain'}/>
						</div>
						<div className={'relative min-h-[50px]'}>
							<Image fill src={'/amerikan-aptek/logo_04-2.png'} alt={'foto'} className={'object-contain'}/>
						</div>
						<div className={'relative min-h-[50px]'}>
							<Image fill src={'/amerikan-aptek/logo_05-2.png'} alt={'foto'} className={'object-contain'}/>
						</div>
						<div className={'relative min-h-[50px]'}>
							<Image fill src={'/amerikan-aptek/logo_06-2.png'} alt={'foto'} className={'object-contain'}/>
						</div>
					</div>
				</div>
			</div>
		</section>)
}