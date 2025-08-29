'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ShopSection({
	image,
	title,
	subtitle,
	description,
	link,
	bgColor = '#fff',
	reverse = false, // if true → text left, image right
}) {
	return (
		<section className='w-full'>
			<div
				className={`flex flex-col md:flex-row ${
					reverse ? 'md:flex-row-reverse' : ''
				}`}
			>
				{/* IMAGE SIDE */}
				<div className='w-full md:w-1/2'>
					<div className='h-full'>
						<Image
							src={image}
							alt={title}
							width={960}
							height={960}
							className='w-full h-full object-cover'
						/>
					</div>
				</div>

				{/* TEXT SIDE */}
				<div
					className='w-full md:w-1/2 flex items-center justify-center px-6 py-12'
					style={{ backgroundColor: bgColor }}
				>
					<div
						data-aos='fade-left'
						data-aos-duration='1000'
						className='max-w-lg text-center'
					>
						<h2 className='text-3xl md:text-[3.194vw] font-medium leading-[4.722vw] mb-4 tracking-[0]'>
							{title}
						</h2>
						<h4 className='text-lg md:text-[1.528vw] leading-[normal] font-medium mb-[0.417vw] tracking-[0] uppercase'>
							{subtitle}
						</h4>
						<p className='text-base md:text-lg lg:text-[20px] leading-[27px] text-[#212121] mb-8 tracking-[.016vw]'>
							{description}
						</p>

						{/* SHOP LINK */}
						<Link
							href={link}
							className='flex flex-col items-center gap-1 font-semibold text-black hover:opacity-70 transition'
						>
							<span className='text-base md:text-[22px] lg:text-[33px] font-semibold tracking-wide uppercase'>
								Shop
							</span>
							<Image
								src='/images/shopArrow.png'
								alt='Arrow Icon'
								width={30}
								height={30}
								className='mt-2'
							/>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
