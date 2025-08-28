import { cn } from '@/lib/utils';
import { DM_Sans } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import Footer from '@/components/Footer';
import Providers from '@/store/Providers';
import AnnouncementBar from '@/components/Main/AnnouncementBar';
import Header from '@/components/Header';

export const metadata = {
	title: ' Elfin Kids Care',
	description:
		'Discover Elfin Kids Care – premium, gentle, natural haircare for kids.',
};

// Import Space Grotesk font
const dmSans = DM_Sans({
	subsets: ['latin'],
	display: 'swap',
});

export default async function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={cn('bg-[#FFFCF1]', dmSans.className)}>
				<Providers>
					<Toaster position='top-center' reverseOrder={false} />
					<NextTopLoader
						color='#5E17EB'
						initialPosition={0.08}
						crawlSpeed={400}
						height={3}
						crawl={true}
						showSpinner={false}
						easing='ease'
						speed={200}
						shadow='0 0 10px #2299DD,0 0 5px #2299DD'
					/>
					<AnnouncementBar />
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
