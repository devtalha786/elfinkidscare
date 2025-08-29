'use client';

export default function ParentsInstaReelSection() {
	return (
		<section className='relative bg-[#334fb4] text-white font-syne'>
			<div className='px-4 md:px-8 py-[30px] md:py-[40px]'>
				{/* Heading */}
				<h1 className='text-center text-[4.583vw] md:text-[2rem] leading-[5.139vw] md:leading-[2.6rem] font-medium mb-[2.222vw] md:mb-6'>
					Parents Love Elfin Kids Care
				</h1>

				{/* Instagram Reel */}
				<div className='flex justify-center my-8'>
					<iframe
						src='https://www.instagram.com/reel/DMWABEdhVSO/embed'
						className='w-full max-w-[320px] aspect-[9/16] rounded-xl'
						frameBorder='0'
						scrolling='no'
						allowFullScreen
					/>
				</div>
			</div>
		</section>
	);
}
