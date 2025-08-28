'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/autoplay';

const products = [
	{
		id: 1,
		name: 'Tea Tree Shampoo',
		price: '16.95',
		frontImage: '/images/frontProduct1.avif',
		backImage: '/images/backProduct1.avif',
	},
	{
		id: 2,
		name: 'Tea Tree Conditioner',
		price: '16.95',
		frontImage: '/images/frontProduct2.avif',
		backImage: '/images/backProduct2.png',
	},
	{
		id: 3,
		name: 'Cucumber Shampoo',
		price: '16.95',
		frontImage: '/images/frontProduct3.avif',
		backImage: '/images/backProduct3.avif',
	},
	{
		id: 4,
		name: 'Cucumber Conditioner',
		price: '16.95',
		frontImage: '/images/frontProduct4.avif',
		backImage: '/images/backProduct4.avif',
	},
	{
		id: 5,
		name: 'Coconut Shampoo',
		price: '16.95',
		frontImage: '/images/frontProduct5.avif',
		backImage: '/images/backProduct5.png',
	},
	{
		id: 6,
		name: 'Mint Shampoo',
		price: '16.95',
		frontImage: '/images/frontProduct6.avif',
		backImage: '/images/backProduct6.avif',
	},
	{
		id: 7,
		name: 'Mint Conditioner',
		price: '16.95',
		frontImage: '/images/frontProduct7.avif',
		backImage: '/images/backProduct7.avif',
	},
	{
		id: 8,
		name: 'Nourishing Hair Mask',
		price: '16.95',
		frontImage: '/images/frontProduct8.avif',
		backImage: '/images/backProduct8.avif',
	},
	{
		id: 9,
		name: 'Styling Wax',
		price: '16.95',
		frontImage: '/images/frontProduct9.avif',
		backImage: '/images/backProduct9.png',
	},
];

export default function ShopProducts() {
	return (
		<section>
			<div className='px-2 md:px-4 lg:px-6 relative pt-[40px] pb-[50px]'>
				{/* Heading */}
				<h2 className='text-center text-xl md:text-2xl font-semibold text-gray-900 mb-10'>
					Shop Our Products
				</h2>

				{/* Swiper Slider */}
				<Swiper
					modules={[Autoplay]}
					spaceBetween={24}
					autoplay={{ delay: 3000, disableOnInteraction: false }}
					loop={true}
					breakpoints={{
						320: { slidesPerView: 1 },
						640: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					className='pb-12'
				>
					{products.map(product => (
						<SwiperSlide key={product.id}>
							<div className='bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center p-5'>
								<Link
									href={product.href || '#'}
									className='group w-full'
								>
									{/* Image */}
									<div className='relative w-full h-[360px]'>
										<Image
											src={product.frontImage}
											alt={product.name}
											fill
											className='object-contain transition-opacity duration-500 group-hover:opacity-0'
										/>
										<Image
											src={product.backImage}
											alt={product.name}
											fill
											className='object-contain absolute top-0 left-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100'
										/>
									</div>
								</Link>
							</div>
							{/* Product Details */}
							<div className='flex justify-between items-center w-full mt-2'>
								<h3 className='text-sm font-medium text-gray-900'>
									{product.name}
								</h3>
								<p className='text-sm font-semibold text-gray-900'>
									${product.price}
								</p>
							</div>
						</SwiperSlide>
					))}
				</Swiper>

				{/* View All Button */}
				<div className='flex justify-center mt-4'>
					<Link
						href='#'
						className='bg-black text-white px-8 py-3 rounded-sm text-sm font-medium hover:bg-gray-800 transition'
					>
						View all
					</Link>
				</div>

				<div className='absolute bottom-0 left-0 right-0 z-[-1]'>
					<Image
						src='/images/shopBg.webp'
						alt='Wave Shape'
						width={1920}
						height={500}
						className='w-full h-[25vw]'
						priority
					/>
				</div>
			</div>
		</section>
	);
}
