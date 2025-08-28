'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Benefits() {
	useEffect(() => {
		AOS.init({ once: true });
	}, []);

	const slides = [
		{
			id: 1,
			color: 'bg-[#EED7FC]',
			before: 'url(https://cdn.shopify.com/s/files/1/0742/9777/0233/files/benefits-content-layer-2-old.png?v=1742896578)',
			after: 'bg-[#FAEB83]',
			icon: '//www.elfinkidscare.com/cdn/shop/files/natural-icon-vector_3b19c965-c617-4ee6-aede-b26210393ed0.svg?v=1744781960&width=64',
			title: 'Nourishing Ingredients:',
			desc: `Now enhanced with Panthenol (Pro-Vitamin B5) and Allantoin, alongside chamomile, aloe vera, and Vitamin E—this formula soothes sensitive skin, boosts moisture, and promotes scalp comfort.`,
		},
		{
			id: 2,
			color: 'bg-[#FAEB83]',
			before: 'url(https://cdn.shopify.com/s/files/1/0742/9777/0233/files/benefits-content-layer-3-old.png?v=1742896578)',
			after: 'bg-[#F4835F]',
			icon: '//www.elfinkidscare.com/cdn/shop/files/reduce-dryness-icon-vector.svg?v=1744784451&width=64',
			title: 'Mild Formula:',
			desc: `Designed for kids' delicate skin, it contains no irritating chemicals and won't cause eye stinging—helping children feel more comfortable and at ease during bath time.`,
		},
		{
			id: 3,
			color: 'bg-[#F4835F]',
			before: 'url(https://cdn.shopify.com/s/files/1/0742/9777/0233/files/benefits-content-layer-4-old.png?v=1742896578)',
			after: 'bg-[#6BA4B1]',
			icon: '//www.elfinkidscare.com/cdn/shop/files/foam-icon-vector.svg?v=1744782110&width=64',
			title: 'Gentle Lather Formula:',
			desc: `The foam is rich and delicate, rinses easily, leaves no residue, and helps prevent skin irritation.`,
		},
		{
			id: 4,
			color: 'bg-[#6BA4B1]',
			before: 'url(https://cdn.shopify.com/s/files/1/0742/9777/0233/files/benefits-content-layer-5-old.png?v=1742896579)',
			after: 'bg-[#F9DDE5]',
			icon: '//www.elfinkidscare.com/cdn/shop/files/ph-icon.png?v=1742817286&width=64',
			title: 'PH BALANCE:',
			desc: `Our shampoo products are formulated to match the natural pH of kids' skin, helping maintain the skin’s barrier function and protect against external bacteria.`,
		},
	];

	return (
		<section
			id='benefits'
			className='benefits-three-section relative overflow-hidden'
		>
			<div className='flex h-[100vh] relative'>
				{/* LEFT SIDE */}
				<div className='w-[45%] bg-[#6597cb] relative'>
					<div className='relative h-full w-full pl-[11.3vw] pt-[3.5vw] pb-[1vw] bg-[#6597cb]'>
						{/* Polygon Shape */}
						<div
							className='absolute top-0 right-[-7.6vw] h-full w-[7.8vw] bg-no-repeat bg-contain z-[2]'
							style={{
								backgroundImage:
									'url(https://cdn.shopify.com/s/files/1/0742/9777/0233/files/polygon-shape-bg-clr.svg?v=1747389141)',
							}}
						/>
						<div
							className='relative'
							data-aos='fade-right'
							data-aos-duration='1000'
						>
							<h2 className='text-white font-medium leading-none mb-6 text-[2.78vw] pr-[6vw]'>
								Benefits of Elfin Kids Care at Home
							</h2>
							{/* Kids Image with SVG blob */}
							<div className='relative'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 288 288'
									className='absolute w-[24.2vw] h-[21.8vw] top-[-6vw] left-[-8.5vw] rotate-[35deg]'
								>
									<path fill='#532C7F'>
										<animate
											repeatCount='indefinite'
											attributeName='d'
											dur='10s'
											values='M37.5,186c-12.1-10.5...; M51,171.3c-6.1-17.7...; M37.5,186c-12.1-10.5...'
										/>
									</path>
									<image
										href='https://cdn.shopify.com/s/files/1/0742/9777/0233/files/dots-bg.png?v=1742379539'
										className='translate-x-[3.6vw] translate-y-[21%] w-[11.45vw] h-[10.9vw]'
									/>
								</svg>
								<img
									src='//www.elfinkidscare.com/cdn/shop/files/benefits-kids-img_594x.png?v=1742380873'
									alt='Kids'
									className='relative z-10 w-[30.9vw] rounded-t-[14vw]'
								/>
							</div>
						</div>
					</div>
				</div>

				{/* RIGHT SIDE SLIDER */}
				<div className='w-[55%] h-full'>
					<Swiper
						modules={[Navigation]}
						navigation
						speed={700}
						slidesPerView={1}
						className='h-full'
					>
						{slides.map(slide => (
							<SwiperSlide key={slide.id}>
								<div
									className={`${slide.color} h-full flex items-center relative px-[8.2vw]`}
								>
									<div className='flex items-center gap-6 relative z-10 h-full'>
										<img
											src={slide.icon}
											alt={slide.title}
											className='w-16 h-16'
										/>
										<div>
											<h3 className='text-[3.33vw] leading-[4.86vw] uppercase font-semibold mb-[1.04vw]'>
												{slide.title}
											</h3>
											<p className='text-[1.67vw] leading-[2.36vw] font-medium'>
												{slide.desc}
											</p>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}
