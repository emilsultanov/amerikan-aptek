'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export default function Section_3() {
	return(
		<section className={'py-32'}>
			<div className="container">
				<Swiper
					loop
					cssMode
					slidesPerView={1}
					spaceBetween={10}
					modules={[Pagination]}
					className={'h-[300px]'}
					pagination={{
						clickable: true,
					}}
					keyboard={{
						enabled: true
					}}
					breakpoints={{
						768: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
						996: {
							slidesPerView: 4,
							spaceBetween: 40,
						}
					}}
				>
					<SwiperSlide>
						<div>
							<div className="relative h-48 overflow-hidden rounded-xl">
								<Image fill src={'/amerikan-aptek/fp-1.jpg'} alt={'fp-1'} className={'object-fill'} />
							</div>
							<h2 className={'py-6 leading-6 text-base font-bold text-[#333]'}>Air Plants</h2>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<div className="relative h-48 overflow-hidden rounded-xl">
								<Image fill src={'/amerikan-aptek/fp-2.jpg'} alt={'fp-1'} className={'object-fill'} />
							</div>
							<h2 className={'py-6 leading-6 text-base font-bold text-[#333]'}>Cartoon Pillow</h2>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<div className="relative h-48 overflow-hidden rounded-xl">
								<Image fill src={'/amerikan-aptek/fp-3.jpg'} alt={'fp-1'} className={'object-fill'} />
							</div>
							<h2 className={'py-6 leading-6 text-base font-bold text-[#333]'}>Cutting Board</h2>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<div className="relative h-48 overflow-hidden rounded-xl">
								<Image fill src={'/amerikan-aptek/fp-4.jpg'} alt={'fp-1'} className={'object-fill'} />
							</div>
							<h2 className={'py-6 leading-6 text-base font-bold text-[#333]'}>Designer Headphones</h2>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<div className="relative h-48 overflow-hidden rounded-xl">
								<Image fill src={'/amerikan-aptek/fp-1.jpg'} alt={'fp-1'} className={'object-fill'} />
							</div>
							<h2 className={'py-6 leading-6 text-base font-bold text-[#333]'}>Air Plants</h2>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<div className="relative h-48 overflow-hidden rounded-xl">
								<Image fill src={'/amerikan-aptek/fp-2.jpg'} alt={'fp-1'} className={'object-fill'} />
							</div>
							<h2 className={'py-6 leading-6 text-base font-bold text-[#333]'}>Cartoon Pillow</h2>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<div className="relative h-48 overflow-hidden rounded-xl">
								<Image fill src={'/amerikan-aptek/fp-3.jpg'} alt={'fp-1'} className={'object-fill'} />
							</div>
							<h2 className={'py-6 leading-6 text-base font-bold text-[#333]'}>Cutting Board</h2>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div>
							<div className="relative h-48 overflow-hidden rounded-xl">
								<Image fill src={'/amerikan-aptek/fp-4.jpg'} alt={'fp-1'} className={'object-fill'} />
							</div>
							<h2 className={'py-6 leading-6 text-base font-bold text-[#333]'}>Designer Headphones</h2>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}