import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://coincollect.org'),
  title: {
    default: 'CoinCollect | Utility for Every NFT Holder',
    template: '%s | CoinCollect',
  },
  description:
    'CoinCollect helps NFT holders unlock practical value through staking, reward flows, and ecosystem participation across a multi-chain Web3 ecosystem.',
  applicationName: 'CoinCollect',
  keywords: [
    'CoinCollect',
    'NFT staking',
    'Web3',
    'DeFi',
    'NFT utility',
    'multi-chain',
    'crypto rewards',
    'NFT marketplace',
    'token staking',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://coincollect.org',
    siteName: 'CoinCollect',
    title: 'CoinCollect | Utility for Every NFT Holder',
    description:
      'Stake NFTs, unlock rewards, and participate in a community-powered multi-chain ecosystem with CoinCollect.',
    images: [
      {
        url: '/images/ogbanner.jpeg',
        width: 1200,
        height: 630,
        alt: 'CoinCollect - Utility for Every NFT Holder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoinCollect | Utility for Every NFT Holder',
    description:
      'Stake NFTs, unlock rewards, and participate in a community-powered multi-chain ecosystem with CoinCollect.',
    images: ['/images/ogbanner.jpeg'],
    creator: '@CoinCollectOrg',
    site: '@CoinCollectOrg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png' }],
    shortcut: '/icon.png',
    apple: '/apple-icon.png',
  },
  manifest: '/manifest.webmanifest',
  themeColor: '#000000',
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased bg-black text-white`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EXDBLYGV7T"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EXDBLYGV7T');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
