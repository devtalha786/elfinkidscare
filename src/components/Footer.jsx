// components/Footer.jsx
import { Facebook, Instagram, Music2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='w-full bg-theme-primary font-syne'>
			{/* Top */}
			<div className='page-width px-2 md:px-4 lg:px-6 py-8'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10'>
					{/* Logo */}
					<div className='flex flex-col lg:flex-row gap-6 lg:gap-14'>
						<div className='flex justify-center lg:justify-start lg:items-center'>
							<Link href='/'>
								<Image
									src='/images/logo.avif'
									alt='Elfin Kids Care'
									width={132} // bigger for balance
									height={80}
									className='h-auto'
								/>
							</Link>
						</div>
						{/* Menu Links - 2 col grid like Shopify */}
						<div>
							<ul className='grid grid-cols-1 lg:grid-cols-2 gap-y-3 gap-x-14'>
								{[
									{
										href: '/pages/about-us',
										label: 'About Us',
									},
									{
										href: '/pages/term-of-service',
										label: 'Term of Service',
									},
									{
										href: '/pages/return-policy',
										label: 'Return Policy',
									},
									{
										href: '/pages/contact',
										label: 'Contact Us',
									},
									{
										href: '/pages/privacy-policy',
										label: 'Privacy Policy',
									},
									{ href: '#', label: 'FAQ' },
								].map(l => (
									<li
										key={l.label}
										className='border-b lg:border-0 text-center lg:text-left pb-2 lg:pb-0'
									>
										<Link
											href={l.href}
											className='text-sm md:text-[17px] leading-[26px] text-black tracking-[0.37px] hover:underline'
										>
											{l.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>

					{/* Newsletter */}
					<div className='flex flex-col lg:flex-row justify-between gap-6 lg:gap-20'>
						<div>
							<h2 className='uppercase text-[20px] font-medium mb-3 text-center lg:text-left'>
								NEWSLETTER
							</h2>
							<p className='text-black/80 text-lg mb-4 max-w-[350px] md: md:max-w-[450px] mx-auto lg:mx-0 text-center lg:text-left'>
								Subscribe to receive updates about our upcoming
								products, access to exclusive deals, and more.
							</p>
							<form className='flex flex-col gap-2 max-w-[350px] md:max-w-[450px] mx-auto lg:mx-0'>
								<input
									type='email'
									placeholder='Enter Your Email Address Here'
									className='w-full border border-black px-4 py-2 text-sm bg-transparent text-black outline-none placeholder:text-black'
								/>
								<button
									type='submit'
									className='ml-auto flex items-center gap-2 text-sm hover:underline'
								>
									Submit
									<Image
										src='/images/submit-arrow.svg'
										alt='Arrow'
										width={18}
										height={18}
									/>
								</button>
							</form>
						</div>

						{/* Social + Blob */}
						<div className='relative flex justify-center lg:justify-end items-center'>
							<div className='relative w-[200px] h-[180px] flex items-center justify-center'>
								{/* Animated blob */}
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 288 288'
									className='absolute inset-0 w-full h-full'
								>
									<path fill='#EED7FC'>
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

								{/* Social icons */}
								<ul className='flex space-x-4 z-10'>
									<li>
										<Link
											href='https://www.facebook.com/people/Elfin-Kids-Care/61576058922353/'
											target='_blank'
										>
											<Facebook className='w-6 h-6 text-black hover:scale-110 transition-transform' />
										</Link>
									</li>
									<li>
										<Link
											href='https://www.instagram.com/elfin.kids.care'
											target='_blank'
										>
											<Instagram className='w-6 h-6 text-black hover:scale-110 transition-transform' />
										</Link>
									</li>
									<li>
										<Link href='#' target='_blank'>
											<Music2 className='w-6 h-6 text-black hover:scale-110 transition-transform' />
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom */}
			<div className='border-t border-black bg-black text-white py-4'>
				<p className='text-center text-sm font-bold'>
					copyright © Elfin Kids Care 2025
				</p>
			</div>
		</footer>
	);
}
