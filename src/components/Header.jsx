'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [productsOpen, setProductsOpen] = useState(false);

	return (
		<header className='sticky top-[60px] z-50 bg-[#eed7fc] px-2 md:px-4 lg:px-6 font-syne'>
			<div className='flex items-center justify-between py-2 max-w-[120rem] mx-auto'>
				<div className='flex items-center gap-16'>
					{/* Logo */}
					<Link href='/'>
						<img
							src='/images/logoHeaderDesktop.png'
							alt='Elfin Kids Care'
							className='h-[70px] w-auto mx-auto md:mx-0'
						/>
					</Link>

					{/* Desktop Nav */}
					<nav className='hidden lg:flex gap-6'>
						<div className='relative'>
							<button
								className='flex items-center gap-1 hover:text-gray-700'
								onClick={() => setProductsOpen(!productsOpen)}
							>
								Products{' '}
								<ChevronDown
									size={16}
									className={`transition-transform duration-300 ${
										productsOpen ? 'rotate-180' : ''
									}`}
								/>
							</button>
							{productsOpen && (
								<ul className='absolute left-0 mt-2 bg-[#eed7fc] shadow rounded p-3 w-40 space-y-2 animate-fadeIn'>
									<li>
										<Link
											href='#'
											className='hover:underline'
										>
											All Products
										</Link>
									</li>
									<li>
										<Link
											href='#'
											className='hover:underline'
										>
											Shampoos
										</Link>
									</li>
									<li>
										<Link
											href='#'
											className='hover:underline'
										>
											Conditioners
										</Link>
									</li>
									<li>
										<Link
											href='#'
											className='hover:underline'
										>
											Styling
										</Link>
									</li>
								</ul>
							)}
						</div>
						<Link href='#' className='hover:text-gray-700'>
							About us
						</Link>
					</nav>
				</div>
				{/* Icons */}
				<div className='flex items-center gap-4'>
					<Link href='/account/login'>
						<User size={28} />
					</Link>
					<Link href='/cart'>
						<ShoppingCart size={28} />
					</Link>
					{/* Mobile menu toggle */}
					<button
						className='lg:hidden'
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
					</button>
				</div>
			</div>

			{/* Mobile Drawer */}
			<div
				className={`lg:hidden fixed top-[130px] left-0 h-screen w-full bg-[#eed7fc] shadow-lg transform transition-transform duration-300 ${
					mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
				}`}
			>
				<details className='group'>
					<summary className='flex items-center justify-between cursor-pointer py-2 border-t border-gray-300 px-2'>
						Products
						<ChevronDown
							size={16}
							className='transition-transform duration-300 group-open:rotate-180'
						/>
					</summary>
					<ul>
						<li className='border-t border-gray-300 py-1 pl-4'>
							<Link href='#'>All Products</Link>
						</li>
						<li className='border-t border-gray-300 py-1 pl-4'>
							<Link href='#'>Shampoos</Link>
						</li>
						<li className='border-t border-gray-300 py-1 pl-4'>
							<Link href='#'>Conditioners</Link>
						</li>
						<li className='border-t border-gray-300 py-1 pl-4'>
							<Link href='#'>Styling</Link>
						</li>
					</ul>
				</details>

				<Link
					href='#'
					className='block py-2 border-t border-gray-300 px-2'
				>
					About us
				</Link>
			</div>
		</header>
	);
}
