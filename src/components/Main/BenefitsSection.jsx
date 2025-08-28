'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';

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
			<div className='flex flex-col md:flex-row h-[100vh] relative'>
				{/* LEFT SIDE */}
				<div className='w-full md:w-[40%] lg:w-[45%] bg-[#6597cb] relative'>
					<div className='relative h-full w-full  pt-[3.5vw] pb-[1vw] bg-[#6597cb]'>
						{/* Polygon Shape */}
						<div
							className='absolute top-0 right-[-7.6vw] h-full w-[7.8vw] bg-no-repeat bg-contain z-[2]'
							style={{
								backgroundImage:
									'url(https://cdn.shopify.com/s/files/1/0742/9777/0233/files/polygon-shape-bg-clr.svg?v=1747389141)',
							}}
						/>
						{/* Animated blob */}
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 288 288'
							width={250}
							height={250}
							className='absolute -top-8 left-8'
						>
							<path fill='#532C7F'>
								<animate
									repeatCount='indefinite'
									attributeName='d'
									dur='10s'
									values='
                                            M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
                                            M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8C48.9,198.6,57.8,191,51,171.3z;
                                            M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z
                                            '
								/>
							</path>
						</svg>
						<div
							className='relative'
							data-aos='fade-right'
							data-aos-duration='1000'
						>
							<h2 className='text-white font-medium leading-none mb-6 text-[25px] max-w-[256px] mx-auto text-center'>
								Benefits of Elfin Kids Care at Home
							</h2>
							{/* Kids Image with SVG blob */}
							<div className='relative'>
								<div className='flex sm:justify-center'>
									<img
										src='//www.elfinkidscare.com/cdn/shop/files/benefits-kids-img_594x.png?v=1742380873'
										alt='Kids'
										className='relative z-10 w-[30.9vw] rounded-t-[14vw]'
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* RIGHT SIDE SLIDER */}
				<div className='w-full md:w-[60%] lg:w-[55%] h-full relative'>
					{/* Custom Arrows */}
					<button className='custom-prev absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-[3] bg-white rounded-full p-3 shadow-md'>
						<ArrowLeft />
					</button>
					<button className='custom-next absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-[3] bg-white rounded-full p-3 shadow-md'>
						<ArrowRight />
					</button>

					<Swiper
						modules={[Navigation]}
						navigation={{
							prevEl: '.custom-prev',
							nextEl: '.custom-next',
						}}
						speed={700}
						slidesPerView={1}
						className='h-full'
					>
						{slides.map(slide => (
							<SwiperSlide key={slide.id}>
								<div
									className={`${slide.color} h-full flex items-center relative px-[15.2vw] md:px-[10.2vw] lg:px-[8.2vw]`}
								>
									<div className='flex flex-col justify-center gap-6 relative z-10 h-full'>
										<div>
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
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
}
