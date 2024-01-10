
import {Phone, Voicemail, MapPin, Clock} from 'react-feather'


export default function Section_4(){
	return(
		<section className={'py-32 bg-section-4'}>
			<div className="container">
				<div className={'flex'}>
					<div className={'w-1/2 grid grid-cols-2 grid-rows-2 gap-5'}>
						<div className={'flex items-center flex-col'}>
							<div className={'p-7 text-white bg-blue-500 rounded-full mb-5'}>
								<Phone />
							</div>
							<h4 className={'text-white pb-2'}>Phone</h4>
							<p className={'text-blue-500 text-center'}>(234) 234-3467</p>
						</div>
						<div className={'flex flex-col items-center'}>
							<div className={'p-7 text-white bg-blue-500 rounded-full mb-5'}>
								<Voicemail />
							</div>
							<h4 className={'text-white pb-2'}>Email</h4>
							<p className={'text-blue-500 text-center'}>support@divipharm.com</p>
						</div>
						<div className={'flex flex-col items-center'}>
							<div className={'p-7 text-white bg-blue-500 rounded-full mb-5'}>
								<MapPin />
							</div>
							<h4 className={'text-white pb-2'}>Location</h4>
							<p className={'text-blue-500 text-center'}>1345 Divi St. <br /> San Francisco, Ca 29456</p>
						</div>
						<div className={'flex flex-col items-center'}>
							<div className={'p-7 text-white bg-blue-500 rounded-full mb-5'}>
								<Clock />
							</div>
							<h4 className={'text-white pb-2'}>Store Hours</h4>
							<p className={'text-blue-500 text-center'}>M-F: 8am – 5pm <br/> S-S: 9am – 4pm</p>
						</div>
					</div>
					<div className={'w-1/2 flex flex-col items-center justify-center'}>
						<h2 className={'text-white text-center text-5xl leading-snug font-medium'}>Subscribe For Deals & <br/> Updates</h2>
						<form action="" className={'flex flex-col w-2/3 gap-8 pt-6'}>
							<input type="text" placeholder={'Email'} className={'rounded-full w-full p-4 outline-none text-base text-[#666] leading-6 text-center'}/>
							<button className={'w-full text-white rounded-full text-center p-4 text-base leading-6 bg-[#014db7]'}>Subscribe</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}