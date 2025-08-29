'use client';
import React from 'react';
import HeroSection from './HeroSection';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';
import ShopProducts from './ShopProducts';
import BenefitsSection from './BenefitsSection';
import WhyParentsLove from './WhyParentsLove';
import MarqueeScroll from './MarqueeScroll';
import ShopSection from './ShopSection';
import FoundedSection from './FoundedSection';
import ElfinFourSection from './ElfinFourSection';

const MainComp = () => {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: false,
		});
	}, []);
	return (
		<div className='font-syne'>
			<HeroSection />
			<ShopProducts />
			<BenefitsSection />
			<WhyParentsLove />
			<MarqueeScroll />
			<ShopSection
				image='/images/shopImage1.webp'
				title='Shampoos'
				subtitle='NATURALLY MILD FORMULA WITH KID-APPROVED SCENTS:'
				description='Formulated for sensitive skin and scalps, our pH-balanced shampoo is free from harsh ingredients that cause stinging or teary eyes. Infused with soothing Allantoin and Panthenol for comfort and hydration, it comes in playful, kid-loved scents like cucumber, coconut, mango, mint, and tea tree—fun for them, peace of mind for you.'
				link='#'
				bgColor='#faeb83'
			/>
			{/* Example with reverse layout */}
			<ShopSection
				image='/images/shopImage2.webp'
				title='Conditioners'
				subtitle='DEEPLY NOURISHING & GENTLY MOISTURIZING'
				description='Made with mild plant extracts like chamomile, aloe vera, and vitamin E, it effectively moisturizes and protects your kid’s skin while reducing dryness and sensitivity.'
				link='#'
				bgColor='#eed7fc'
				reverse
			/>
			<ShopSection
				image='/images/shopImage3.webp'
				title='Styling Products'
				subtitle='TAME, SMOOTH, AND SHINE — THE GENTLE WAY'
				description='Our styling products are made just for kids, offering strong yet gentle hold to manage frizz, cowlicks, and flyaways without harsh ingredients. From our ultra-hold wax to our soothing edge control and nourishing hair mask, each formula is pH-balanced, scalp-friendly, and enriched with ingredients like coconut oil, chamomile, and vitamin E to keep hair healthy, soft, and perfectly styled.'
				link='#'
				bgColor='#6597cb'
			/>
			<FoundedSection />
			<ElfinFourSection />
		</div>
	);
};

export default MainComp;
