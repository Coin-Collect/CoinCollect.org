import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'CoinCollect – Revolutionizing NFT DeFi for Passive Income',
  description: 'CoinCollect is a Multi-Chain NFT based DeFi platform where users earn crypto or NFT rewards by staking their NFTs as collateral. Join Pools and Earn Coins',
  icons: {
    icon: '/images/clone/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
