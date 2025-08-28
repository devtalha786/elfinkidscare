'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
	return (
		<section className='overflow-hidden relative'>
			<div className='max-w-[120rem] mx-auto flex flex-wrap bg-[#6ba4b1]'>
				{/* Left Column */}
				<div className='w-full lg:w-[39.2%] px-[8vw] pt-[3vw] flex items-center justify-center lg:justify-start text-center lg:text-left'>
					<div data-aos='fade-right' data-aos-duration='1000'>
						<h1 className='text-white font-medium text-[9vw] leading-[10vw] lg:text-[5.972vw] lg:leading-[6.319vw] mb-[0.833vw]'>
							Bathtime Just Got So Much Better
						</h1>
						<p className='text-white text-[4vw] leading-[6vw] lg:text-[1.806vw] lg:leading-[2.5vw] mb-[2.056vw]'>
							Indroducing the all new <br />
							Elfin Kids Care
							<strong className='font-bold underline relative -top-[0.6vw] ml-1 text-[0.65vw]'>
								TM
							</strong>{' '}
							Hair Products
						</p>
						<Link
							href='/collections/products'
							className='bg-[#8325c2] text-white font-semibold uppercase tracking-wide rounded-xl shadow-md hover:bg-[#ffd93d] hover:text-[#532c7f] px-6 py-3 transition-all duration-300 inline-block'
						>
							Explore the Collection
						</Link>
					</div>
				</div>

				{/* Right Column */}
				<div className='w-full lg:w-[60.8%] relative text-right pointer-events-none'>
					<div>
						<Image
							src='/images/hero-img-shap-right_1920x.webp'
							alt='Hero Image'
							width={800}
							height={600}
							className='w-full'
						/>
						{/* Right floating product */}
						<div
							className='absolute right-[5%] bottom-0 w-[22%]'
							data-aos='zoom-in'
							data-aos-duration='1000'
						>
							<Image
								src='/images/product-img-02_1920x.webp'
								alt='Product Right'
								width={400}
								height={400}
								className='w-full'
							/>
						</div>
						{/* Left floating product */}
						<div
							className='absolute left-[5%] bottom-0 w-[22%]'
							data-aos='fade-up'
							data-aos-duration='1000'
						>
							<Image
								src='/images/product-img-01_1920x.avif'
								alt='Product Left'
								width={400}
								height={400}
								className='w-full'
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Scroll Down Indicator */}
			<div className='text-center mt-8 text-sm text-gray-500'>
				<span>Scroll to see more</span>
			</div>
		</section>
	);
}
