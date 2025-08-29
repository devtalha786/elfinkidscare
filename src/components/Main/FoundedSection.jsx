'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function FoundedSection() {
	return (
		<section className='relative w-full overflow-hidden'>
			{/* Background Image */}
			<Image
				src='/images/elfin-slider.webp'
				alt='Elfin Kids Background'
				width={1920}
				height={1080}
				className='w-full h-[500px] md:h-auto object-cover'
				priority
			/>

			{/* Content */}
			<div
				className='absolute inset-0 flex items-end justify-center px-6 pb-10 md:pb-16 lg:pb-24'
				data-aos='fade-up'
				data-aos-duration='1000'
			>
				<div className='relative max-w-5xl text-center text-white'>
					<p className='text-base text-white md:text-[1.528vw] leading-[20px] md:leading-[2.222vw] text-center'>
						Founded with a passion for making every child's haircut
						a joyful adventure,{' '}
						<a
							href='#'
							rel='noopener noreferrer'
							className='underline text-[#0000EE] hover:text-[#ec5a29] transition'
						>
							ELFIN KIDS CUTS
						</a>
						<strong>™</strong> opened its doors in March 2024. Our
						team is dedicated to creating an environment where kids
						not only get a great haircut but also experience moments
						of delight and excitement. That's why we created ELFIN
						KIDS CARE<strong>™</strong> so that parents and kids can
						have the same magical hair moments at home with our line
						of kid-friendly hair care products made with all
						organic, food-based ingredients.
					</p>

					{/* Animated Blob SVG */}

					{/* Button */}
					<Link
						href='/pages/about-us'
						className='text-white text-[1.667vw] leading-[2.222vw] uppercase font-semibold tracking-[-0.069vw] inline-flex items-center'
					>
						<span>Learn More</span>
						<Image
							src='/images/white-arrow.png'
							alt='Arrow'
							width={50}
							height={30}
							className='ml-2'
						/>
					</Link>
				</div>
				<div className='absolute bottom-0 md:bottom-6 lg:bottom-12 w-[120px] h-[120px] md:w-[300px] md:h-[300px] left-1/2 -translate-x-1/2 md:translate-x-0 md:right-0 md:left-auto pointer-events-none z-[-1]'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 288 288'
						className='w-full h-full'
					>
						<path fill='#ec5a29'>
							<animate
								repeatCount='indefinite'
								attributeName='d'
								dur='10s'
								values='
                                        M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z;
                                        M51,171.3c-6.1-17.7-15.3-17.2-20.7-32c-8-21.9,0.7-54.6,20.7-67.1c19.5-12.3,32.8,5.5,67.7-3.4C145.2,62,145,49.9,173,43.4 c12-2.8,41.4-9.6,60.2,6.6c19,16.4,16.7,47.5,16,57.7c-1.7,22.8-10.3,25.5-9.4,46.4c1,22.5,11.2,25.8,9.1,42.6 c-2.2,17.6-16.3,37.5-33.5,40.8c-22,4.1-29.4-22.4-54.9-22.6c-31-0.2-40.8,39-68.3,35.7c-17.3-2-32.2-19.8-37.3-34.8 C48.9,198.6,57.8,191,51,171.3z;
                                        M37.5,186c-12.1-10.5-11.8-32.3-7.2-46.7c4.8-15,13.1-17.8,30.1-36.7C91,68.8,83.5,56.7,103.4,45 c22.2-13.1,51.1-9.5,69.6-1.6c18.1,7.8,15.7,15.3,43.3,33.2c28.8,18.8,37.2,14.3,46.7,27.9c15.6,22.3,6.4,53.3,4.4,60.2 c-3.3,11.2-7.1,23.9-18.5,32c-16.3,11.5-29.5,0.7-48.6,11c-16.2,8.7-12.6,19.7-28.2,33.2c-22.7,19.7-63.8,25.7-79.9,9.7 c-15.2-15.1,0.3-41.7-16.6-54.9C63,186,49.7,196.7,37.5,186z
                                    '
							/>
						</path>
						<image
							href='https://cdn.shopify.com/s/files/1/0742/9777/0233/files/dots-bg-white.png?v=1742450374'
							width='100%'
							height='100%'
						/>
					</svg>
				</div>
			</div>
		</section>
	);
}
