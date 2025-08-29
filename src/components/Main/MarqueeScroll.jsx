'use client';

import Image from 'next/image';

const items = [
	{
		img: '/images/marquee1.svg',
		text: 'Natural Ingredients',
	},
	{
		img: '/images/marquee2.png',
		text: 'pH-Balance',
	},
	{
		img: '/images/marquee3.svg',
		text: 'Low-Foam',
	},
	{
		img: '/images/marquee4.svg',
		text: 'Moisturizing',
	},
	{
		img: '/images/marquee5.svg',
		text: 'Strengthening',
	},
	{
		img: '/images/marquee6.svg',
		text: 'Frizz Control',
	},
	{
		img: '/images/marquee7.svg',
		text: 'Healthy Shine',
	},
	{
		img: '/images/marquee8.svg',
		text: 'Reduce Breakage',
	},
	{
		img: '/images/marquee9.svg',
		text: 'Two-In-One',
	},
	{
		img: '/images/marquee10.svg',
		text: 'Reduce Dryness',
	},
	{
		img: '/images/marquee11.svg',
		text: 'Tea Tree',
	},
	{
		img: '/images/marquee12.svg',
		text: 'Mango',
	},
	{
		img: '/images/marquee13.svg',
		text: 'Coconut',
	},
	{
		img: '/images/marquee14.svg',
		text: 'Cucumber',
	},
];

export default function MarqueeScroll() {
	return (
		<div className='w-full overflow-hidden bg-[#f9dde5] py-4 relative font-syne'>
			<div className='flex animate-marquee whitespace-nowrap'>
				{items.map((item, i) => (
					<div
						key={i}
						className='flex flex-col items-center justify-center text-center mx-2'
					>
						<div className='w-[50px] h-[40px] mb-1'>
							<Image
								src={item.img}
								alt={item.text}
								width={40}
								height={40}
							/>
						</div>
						<span className='text-sm md:text-[9px] font-medium text-[#333]'>
							{item.text}
						</span>
					</div>
				))}

				{/* Duplicate for infinite scroll effect */}
				{items.map((item, i) => (
					<div
						key={`dup-${i}`}
						className='flex flex-col items-center justify-center text-center mx-2'
					>
						<div className='w-[50px] h-[40px] mb-1'>
							<Image
								src={item.img}
								alt={item.text}
								width={40}
								height={40}
							/>
						</div>
						<span className='text-sm md:text-[9px] font-medium text-[#333]'>
							{item.text}
						</span>
					</div>
				))}
			</div>
		</div>
	);
}
