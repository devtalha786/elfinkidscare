// 'use client';

// import { useState } from 'react';
// import { Menu, X, ShoppingBag, User } from 'lucide-react';
// import Link from 'next/link';

// export default function Header() {
// 	const [menuOpen, setMenuOpen] = useState(false);

// 	return (
// 		<header className='sticky top-[60px] z-50 bg-[#eed7fc] px-2 md:px-4 lg:px-6'>
// 			<div className='max-w-[120rem] mx-auto flex items-center justify-between py-2'>
// 				<div className='flex items-center gap-10'>
// 					{/* Logo */}
// 					<Link href='/'>
// 						<img
// 							src='/images/logoHeaderDesktop.png'
// 							alt='Elfin Kids Care'
// 							className='w-[94px] h-[70px]'
// 						/>
// 					</Link>

// 					{/* Desktop Nav */}
// 					<nav className='hidden lg:flex items-center gap-8'>
// 						<details className='group relative'>
// 							<summary className='cursor-pointer text-[16px] font-medium'>
// 								Products
// 							</summary>
// 							<ul className='absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-48 hidden group-open:block'>
// 								<li>
// 									<Link
// 										href='#'
// 										className='block px-4 py-2 hover:bg-gray-100'
// 									>
// 										All Products
// 									</Link>
// 								</li>
// 								<li>
// 									<Link
// 										href='#'
// 										className='block px-4 py-2 hover:bg-gray-100'
// 									>
// 										Shampoos
// 									</Link>
// 								</li>
// 								<li>
// 									<Link
// 										href='#'
// 										className='block px-4 py-2 hover:bg-gray-100'
// 									>
// 										Conditioners
// 									</Link>
// 								</li>
// 								<li>
// 									<Link
// 										href='#'
// 										className='block px-4 py-2 hover:bg-gray-100'
// 									>
// 										Styling
// 									</Link>
// 								</li>
// 							</ul>
// 						</details>

// 						<Link href='#' className='text-[16px] font-medium'>
// 							About Us
// 						</Link>
// 					</nav>
// 				</div>

// 				{/* Right Icons */}
// 				<div className='flex items-center gap-4'>
// 					<Link href='#' className='text-black'>
// 						<User size={22} />
// 					</Link>
// 					<Link href='#' className='text-black'>
// 						<ShoppingBag size={22} />
// 					</Link>
// 					{/* Mobile Menu Button */}
// 					<button
// 						className='lg:hidden text-black'
// 						onClick={() => setMenuOpen(!menuOpen)}
// 						aria-label='Toggle menu'
// 					>
// 						{menuOpen ? <X size={28} /> : <Menu size={28} />}
// 					</button>
// 				</div>
// 			</div>

// 			{/* Mobile Drawer */}
// 			{menuOpen && (
// 				<div className='lg:hidden bg-white shadow-lg absolute top-full left-0 w-full px-6 py-4 z-40'>
// 					<ul className='flex flex-col gap-4'>
// 						<li>
// 							<details>
// 								<summary className='cursor-pointer text-[16px] font-medium'>
// 									Products
// 								</summary>
// 								<ul className='pl-4 mt-2 flex flex-col gap-2'>
// 									<li>
// 										<Link href='#'>All Products</Link>
// 									</li>
// 									<li>
// 										<Link href='#'>Shampoos</Link>
// 									</li>
// 									<li>
// 										<Link href='#'>Conditioners</Link>
// 									</li>
// 									<li>
// 										<Link href='#'>Styling</Link>
// 									</li>
// 								</ul>
// 							</details>
// 						</li>
// 						<li>
// 							<Link href='#'>About Us</Link>
// 						</li>
// 					</ul>
// 				</div>
// 			)}
// 		</header>
// 	);
// }

'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [productsOpen, setProductsOpen] = useState(false);

	return (
		<header className='sticky top-[60px] z-50 bg-[#eed7fc] px-2 md:px-4 lg:px-6'>
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
								Products <ChevronDown size={16} />
							</button>
							{productsOpen && (
								<ul className='absolute left-0 mt-2 bg-white shadow rounded p-3 w-40 space-y-2'>
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
						<Link
							href='/pages/about-us'
							className='hover:text-gray-700'
						>
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
			{mobileMenuOpen && (
				<div className='lg:hidden bg-[#eed7fc] mt-2'>
					<details>
						<summary className='flex items-center justify-between cursor-pointer py-2 border-t border-gray-300'>
							Products <ChevronDown size={16} />
						</summary>
						<ul>
							<li className='border-t border-gray-300 py-1 pl-2'>
								<Link href='#'>All Products</Link>
							</li>
							<li className='border-t border-gray-300 py-1 pl-2'>
								<Link href='#'>Shampoos</Link>
							</li>
							<li className='border-t border-gray-300 py-1 pl-2'>
								<Link href='#'>Conditioners</Link>
							</li>
							<li className='border-t border-gray-300 py-1 pl-2'>
								<Link href='#'>Styling</Link>
							</li>
						</ul>
					</details>
					<Link
						href='#'
						className='block py-2 border-t border-gray-300'
					>
						About us
					</Link>
				</div>
			)}
		</header>
	);
}
