'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
           <video 
             autoPlay 
             loop 
             muted 
             playsInline
             className="h-12 w-auto"
           >
             <source src="/images/logo.webm" type="video/webm" />
             <img src="/images/clone/logonew.png" alt="CoinCollect" className="h-10 w-auto" />
           </video>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6 text-sm font-medium text-gray-300 items-center">
           <Link href="#services" className="hover:text-pink-500 transition">Services</Link>
           <Link href="#about" className="hover:text-pink-500 transition">About</Link>
           <Link href="#token" className="hover:text-pink-500 transition">Token</Link>
           <Link href="#nft" className="hover:text-pink-500 transition">NFT</Link>
           <Link href="#roadmap" className="hover:text-pink-500 transition">Road Map</Link>
          <Link href="#faq" className="hover:text-pink-500 transition">FAQ</Link>
          <a href="https://coincollect.org/assets/docs/CoinCollectWhitePaper.pdf" target="_blank" className="hover:text-pink-500 transition">WhitePaper</a>
           <a href="https://docs.coincollect.org/" target="_blank" className="hover:text-pink-500 transition">Docs</a>
           
           <a 
            href="https://app.coincollect.org/" 
            target="_blank"
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full font-medium transition transform hover:scale-105"
          >
            Enter APP
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
        >
          <div className="flex flex-col space-y-4 px-6 py-6 text-center">
             <Link href="#services" onClick={toggleMenu} className="text-gray-300 hover:text-pink-500 transition">Services</Link>
             <Link href="#about" onClick={toggleMenu} className="text-gray-300 hover:text-pink-500 transition">About</Link>
             <Link href="#token" onClick={toggleMenu} className="text-gray-300 hover:text-pink-500 transition">Token</Link>
             <Link href="#nft" onClick={toggleMenu} className="text-gray-300 hover:text-pink-500 transition">NFT</Link>
             <Link href="#roadmap" onClick={toggleMenu} className="text-gray-300 hover:text-pink-500 transition">Road Map</Link>
            <Link href="#faq" onClick={toggleMenu} className="text-gray-300 hover:text-pink-500 transition">FAQ</Link>
            <a href="https://coincollect.org/assets/docs/CoinCollectWhitePaper.pdf" target="_blank" className="text-gray-300 hover:text-pink-500 transition">WhitePaper</a>
             <a href="https://docs.coincollect.org/" target="_blank" className="text-gray-300 hover:text-pink-500 transition">Docs</a>
             <a 
              href="https://app.coincollect.org/" 
              target="_blank"
              className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-full font-medium inline-block w-full"
            >
              Enter APP
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
