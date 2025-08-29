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
		</div>
	);
};

export default MainComp;
