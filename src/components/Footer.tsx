'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaTelegram, FaTwitter, FaDiscord, FaInstagram, FaMedium, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-6 block">
               <Image src="/images/clone/logonew.png" alt="CoinCollect" width={180} height={50} />
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              CoinCollect is a Multi-Chain NFT based DeFi platform where users earn crypto or NFT rewards by staking their NFTs as collateral.
            </p>
            <div className="flex gap-4">
               <a href="https://t.me/CoinCollectOrg" target="_blank" className="text-white hover:text-pink-500 transition text-xl"><FaTelegram /></a>
               <a href="https://twitter.com/CoinCollectOrg" target="_blank" className="text-white hover:text-pink-500 transition text-xl"><FaTwitter /></a>
               <a href="https://discord.gg/FW9dnRFZk9" target="_blank" className="text-white hover:text-pink-500 transition text-xl"><FaDiscord /></a>
               <a href="https://www.instagram.com/coincollectorg/" target="_blank" className="text-white hover:text-pink-500 transition text-xl"><FaInstagram /></a>
               <a href="https://medium.com/coincollectapp" target="_blank" className="text-white hover:text-pink-500 transition text-xl"><FaMedium /></a>
               <a href="https://www.linkedin.com/company/coincollectorg/" target="_blank" className="text-white hover:text-pink-500 transition text-xl"><FaLinkedin /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="#services" className="text-gray-400 hover:text-pink-500 transition">Services</Link></li>
              <li><Link href="#about" className="text-gray-400 hover:text-pink-500 transition">About Us</Link></li>
              <li><Link href="#token" className="text-gray-400 hover:text-pink-500 transition">Token</Link></li>
              <li><Link href="#nft" className="text-gray-400 hover:text-pink-500 transition">NFT</Link></li>
              <li><Link href="#roadmap" className="text-gray-400 hover:text-pink-500 transition">Roadmap</Link></li>
              <li><Link href="#faq" className="text-gray-400 hover:text-pink-500 transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="https://coincollect.org/assets/docs/CoinCollectWhitePaper.pdf" target="_blank" className="text-gray-400 hover:text-pink-500 transition">WhitePaper</a></li>
              <li><a href="https://docs.coincollect.org/" target="_blank" className="text-gray-400 hover:text-pink-500 transition">Documentation</a></li>
              <li><a href="https://app.coincollect.org/" target="_blank" className="text-gray-400 hover:text-pink-500 transition">Launch App</a></li>
              <li><a href="https://app.coincollect.org/nfts/collections" target="_blank" className="text-gray-400 hover:text-pink-500 transition">Mint NFT</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
             <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
             <p className="text-gray-400 mb-2">support@coincollect.org</p>
             <p className="text-gray-400">Join our community for 24/7 support.</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} CoinCollect. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
