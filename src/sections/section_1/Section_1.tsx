import Image from "next/image";


export default function Section_1(){
	return(
		<section className={'py-32'}>
			<div className={'container'}>
				<div className="grid grid-cols-1  md:grid-cols-4 gap-6">
					<div>
						<div className={'relative h-80 rounded-xl overflow-hidden mb-6'}>
							<Image fill src={'/amerikan-aptek/img-8.jpg'} alt={'foto'} />
						</div>
						<h4 className={'font-bold leading-7 text-lg text-[#333] mb-2.5'}>Visit a Clinic Near You</h4>
						<p className={'leading-6 text-[#666] font-medium mb-7'}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<a href={'#'} className={'rounded-full py-3.5 px-4 inline-block text-blue-700 bg-blue-200 cursor-pointer'}>Find a Clinic</a>
					</div>
					<div>
						<div className={'relative h-80 rounded-xl overflow-hidden mb-6'}>
							<Image fill src={'/amerikan-aptek/img-6.jpg'} alt={'foto'} />
						</div>
						<h4 className={'font-bold leading-7 text-lg text-[#333] mb-2.5'}>Visit a Clinic Near You</h4>
						<p className={'leading-6 text-[#666] font-medium mb-7'}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<a href={'#'} className={'rounded-full py-3.5 px-4 inline-block text-blue-700 bg-blue-200 cursor-pointer'}>Find a Clinic</a>
					</div>
					<div>
						<div className={'relative h-80 rounded-xl overflow-hidden mb-6'}>
							<Image fill src={'/amerikan-aptek/img-7.jpg'} alt={'foto'} />
						</div>
						<h4 className={'font-bold leading-7 text-lg text-[#333] mb-2.5'}>Visit a Clinic Near You</h4>
						<p className={'leading-6 text-[#666] font-medium mb-7'}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<a href={'#'} className={'rounded-full py-3.5 px-4 inline-block text-blue-700 bg-blue-200 cursor-pointer'}>Find a Clinic</a>
					</div>
					<div>
						<div className={'relative h-80 rounded-xl overflow-hidden mb-6'}>
							<Image fill src={'/amerikan-aptek/img-8.jpg'} alt={'foto'} />
						</div>
						<h4 className={'font-bold leading-7 text-lg text-[#333] mb-2.5'}>Visit a Clinic Near You</h4>
						<p className={'leading-6 text-[#666] font-medium mb-7'}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
						</p>
						<a href={'#'} className={'rounded-full py-3.5 px-4 inline-block text-blue-700 bg-blue-200 cursor-pointer'}>Find a Clinic</a>
					</div>
				</div>
			</div>
		</section>
	)
}