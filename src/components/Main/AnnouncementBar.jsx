'use client';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Facebook, Instagram, Music2 } from 'lucide-react';

const announcements = [
	'🚚 Free Shipping on Orders $25+',
	'✨ Get 10% off when you spend $50 or more!',
];

export default function AnnouncementBar() {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setIndex(prev => (prev + 1) % announcements.length);
		}, 9000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className='w-full bg-[#1d1c1e] text-white text-[16px] leading-[24px] font-syne relative z-[4]'>
			<div className='max-w-[120rem] mx-auto flex items-center justify-between px-4 py-[7px]'>
				{/* Left - Social Icons */}
				<ul className='flex gap-4'>
					{/* Facebook */}
					<li>
						<a
							href='https://www.facebook.com/people/Elfin-Kids-Care/61576058922353/'
							target='_blank'
							rel='noopener noreferrer'
							className='text-white'
						>
							<Facebook className='w-5 h-5' />
						</a>
					</li>

					{/* Instagram */}
					<li>
						<a
							href='https://www.instagram.com/elfin.kids.care'
							target='_blank'
							rel='noopener noreferrer'
							className='text-white'
						>
							<Instagram className='w-5 h-5' />
						</a>
					</li>

					{/* TikTok (Lucide doesn't have TikTok yet, so use Music2 as placeholder) */}
					<li>
						<a href='#' className='text-white'>
							<Music2 className='w-5 h-5' />
						</a>
					</li>
				</ul>

				{/* Center - Announcement Text */}
				<div className='flex items-center gap-2'>
					<button
						onClick={() =>
							setIndex(prev =>
								prev === 0 ? announcements.length - 1 : prev - 1
							)
						}
						className='p-1 text-[#121212BF]'
					>
						<ChevronLeft size={16} />
					</button>
					<p className='text-[16px] leading-[24px] tracking-[0.06rem] font-normal'>
						{announcements[index]}
					</p>
					<button
						onClick={() =>
							setIndex(prev => (prev + 1) % announcements.length)
						}
						className='p-1 text-[#121212BF]'
					>
						<ChevronRight size={16} />
					</button>
				</div>

				{/* Right - Empty (like original Shopify) */}
				<div className='w-[40px]'></div>
			</div>
		</div>
	);
}
