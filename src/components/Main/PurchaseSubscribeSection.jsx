'use client';

import Image from 'next/image';

export default function PurchaseSubscribeSection() {
	return (
		<section className='relative w-full font-syne'>
			{/* Fullscreen Background Image */}
			<Image
				src='/images/elfin-slider-03.webp'
				alt='Kid enjoying bath'
				width={1920}
				height={1080}
				priority
				className='w-full h-auto object-cover'
			/>

			{/* Overlay Content */}
			<div className='absolute inset-0 bottom-[2.778vw] flex items-end justify-center px-4'>
				<div
					className='text-center text-white max-w-3xl'
					data-aos='zoom-in'
					data-aos-duration='1000'
				>
					<h2 className='text-[4.583vw] leading-[5.139vw] font-medium mb-[2.222vw] tracking-[0]'>
						Get 10% off on your first purchase when you sign up for
						our newsletter.
					</h2>
					<a
						href='#'
						className='inline-flex min-w-[16.667vw] h-[4.861vw] items-center justify-center 
                        text-[1.389vw] leading-none px-[1.729vw] 
                        rounded-[2.708vw] text-white bg-[#532c7f] border border-[#532c7f] 
                        tracking-[.026vw] transition-all duration-1000 overflow-hidden'
					>
						Subscribe
					</a>
				</div>
			</div>
		</section>
	);
}
