import Image from "next/image";


export default function Section_3() {
	return(
		<section className={'py-32'}>
			<div className="container">
				<div className="grid grid-cols-4 gap-20">
					<div>
						<div className="relative h-48 overflow-hidden rounded-xl">
							<Image fill src={'/fp-1.jpg'} alt={'fp-1'} className={'object-fill'} />
						</div>
						<h2 className={'py-6 leading-6 text-base font-bold text-[#333]'}>Air Plants</h2>
					</div>
					<div>
						<div className="relative h-48 overflow-hidden rounded-xl">
							<Image fill src={'/fp-2.jpg'} alt={'fp-1'} className={'object-fill'} />
						</div>
						<h2 className={'py-6 leading-6 text-base font-bold text-[#333]'}>Cartoon Pillow</h2>
					</div>
					<div>
						<div className="relative h-48 overflow-hidden rounded-xl">
							<Image fill src={'/fp-3.jpg'} alt={'fp-1'} className={'object-fill'} />
						</div>
						<h2 className={'py-6 leading-6 text-base font-bold text-[#333]'}>Cutting Board</h2>
					</div>
					<div>
						<div className="relative h-48 overflow-hidden rounded-xl">
							<Image fill src={'/fp-4.jpg'} alt={'fp-1'} className={'object-fill'} />
						</div>
						<h2 className={'py-6 leading-6 text-base font-bold text-[#333]'}>Designer Headphones</h2>
					</div>
				</div>
			</div>
		</section>
	)
}