'use client';
import Image from 'next/image';

export default function ElfinFourSection() {
	return (
		<section className='relative bg-[#6ba4b1] pt-[60px] overflow-hidden font-syne'>
			{/* Background Image */}
			<Image
				src='/images/elfinImage.webp'
				alt='Kid playing with mom'
				width={1920}
				height={1080}
				priority
				className='w-full h-[500px] md:h-auto object-cover'
			/>

			{/* Text Box with AOS */}
			<div className='absolute inset-0 flex items-end justify-center px-6 md:px-12 pb-12'>
				<div
					className='elfin-kids-frindes bg-[#532c7f] text-white md:max-w-md lg:max-w-lg p-6 md:p-10 rounded-md'
					data-aos='zoom-in'
					data-aos-duration='1000'
				>
					<p className='text-center text-base md:text-[1.528vw] md:leading-[1.944vw] m-0 tracking-[0.06rem] font-syne font-normal'>
						ELFIN KIDS CARE<strong>™</strong> is a playful,
						kid-friendly hair care line crafted with gentle plant
						extracts — chamomile, aloe vera — enriched with vitamin
						E, panthenol (vitamin B5) and allantoin, offered in
						balanced pH formulas. Designed to make bath time safe
						and fun, with light, kid-approved scents and easy
						cleanup—no harsh chemicals, no residue, just smiles.
					</p>
				</div>
			</div>
		</section>
	);
}
