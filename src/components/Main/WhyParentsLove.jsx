'use client';

export default function WhyParentsLove() {
	return (
		<section className='bg-[#f3f3f3] py-4 md:py-5 font-syne'>
			<div className='px-2 md:px-4 lg:px-6'>
				<div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 bg-white'>
					{/* TEXT SIDE */}
					<div className='flex flex-col items-center md:items-center text-center md:text-center max-w-[540px] mx-auto p-[2rem] order-2 md:order-1'>
						<h2 className='text-[28px] md:text-[40px] font-normal text-[#121212] leading-tight mb-4'>
							Why Parents Love Elfin Kids Care
						</h2>
						<div className='text-[14px] md:text-[15px] text-[#121212] mb-4'>
							<h4 className='font-medium leading-relaxed'>
								See how Elfin Kids Care compares to other brands
							</h4>
						</div>
						<div className='text-[14px] md:text-[15px] text-[#121212] mb-5'>
							<h4 className='font-medium leading-relaxed italic'>
								What’s in & What’s not, and why it matters by
								visiting the ingredient section of each product
								page!
							</h4>
						</div>
						<a
							href='/collections/all'
							className='px-6 py-3 border border-[#121212] text-[#121212] text-sm uppercase font-semibold tracking-wide hover:bg-[#121212] hover:text-white transition-colors'
						>
							Our Products
						</a>
					</div>
					{/* IMAGE SIDE */}
					<div className='relative order-1 md:order-2w-full '>
						<div className='relative w-full pb-[125%] overflow-hidden'>
							<img
								src='/images/parentsLove.webp'
								alt='Shampoo Comparison Table'
								className='absolute top-0 left-0 w-full h-full object-contain'
								loading='lazy'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
