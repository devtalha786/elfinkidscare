'use client';

import { useState } from 'react';
import { Menu, X, ShoppingBag, User } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className='sticky top-[60px] z-50 bg-[#eed7fc] px-2 md:px-4 lg:px-6'>
			<div className='max-w-[120rem] mx-auto flex items-center justify-between py-2'>
				<div className='flex items-center gap-10'>
					{/* Logo */}
					<Link href='/'>
						<img
							src='/images/logoHeaderDesktop.png'
							alt='Elfin Kids Care'
							className='w-[94px] h-[70px]'
						/>
					</Link>

					{/* Desktop Nav */}
					<nav className='hidden lg:flex items-center gap-8'>
						<details className='group relative'>
							<summary className='cursor-pointer text-[16px] font-medium'>
								Products
							</summary>
							<ul className='absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-48 hidden group-open:block'>
								<li>
									<Link
										href='#'
										className='block px-4 py-2 hover:bg-gray-100'
									>
										All Products
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='block px-4 py-2 hover:bg-gray-100'
									>
										Shampoos
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='block px-4 py-2 hover:bg-gray-100'
									>
										Conditioners
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='block px-4 py-2 hover:bg-gray-100'
									>
										Styling
									</Link>
								</li>
							</ul>
						</details>

						<Link href='#' className='text-[16px] font-medium'>
							About Us
						</Link>
					</nav>
				</div>

				{/* Right Icons */}
				<div className='flex items-center gap-4'>
					<Link href='#' className='text-black'>
						<User size={22} />
					</Link>
					<Link href='#' className='text-black'>
						<ShoppingBag size={22} />
					</Link>
					{/* Mobile Menu Button */}
					<button
						className='lg:hidden text-black'
						onClick={() => setMenuOpen(!menuOpen)}
						aria-label='Toggle menu'
					>
						{menuOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>
			</div>

			{/* Mobile Drawer */}
			{menuOpen && (
				<div className='lg:hidden bg-white shadow-lg absolute top-full left-0 w-full px-6 py-4 z-40'>
					<ul className='flex flex-col gap-4'>
						<li>
							<details>
								<summary className='cursor-pointer text-[16px] font-medium'>
									Products
								</summary>
								<ul className='pl-4 mt-2 flex flex-col gap-2'>
									<li>
										<Link href='#'>All Products</Link>
									</li>
									<li>
										<Link href='#'>Shampoos</Link>
									</li>
									<li>
										<Link href='#'>Conditioners</Link>
									</li>
									<li>
										<Link href='#'>Styling</Link>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<Link href='#'>About Us</Link>
						</li>
					</ul>
				</div>
			)}
		</header>
	);
}
