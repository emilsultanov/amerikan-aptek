'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export default function Section_1(){
	return(
		<section className={'py-32'}>
			<div className={'container'}>
				<Swiper
					loop
					cssMode
					slidesPerView={1}
					spaceBetween={10}
					modules={[Pagination]}
					className={'h-[600px]'}
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
						}
					}}
				>
					<SwiperSlide>
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
					</SwiperSlide>
					<SwiperSlide>
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
					</SwiperSlide>
					<SwiperSlide>
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
					</SwiperSlide>
					<SwiperSlide>
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
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	)
}