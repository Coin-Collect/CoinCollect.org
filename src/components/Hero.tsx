'use client';

import { motion } from 'framer-motion';
import { FaTelegram, FaTwitter, FaDiscord, FaInstagram, FaMedium, FaLinkedin } from 'react-icons/fa';
import Particles from './Particles';

export default function Hero() {
  const headlineWords = 'Utility for Every NFT Holder'.split(' ');

  const headlineContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.15,
      },
    },
  };

  const headlineWord = {
    hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.45, ease: 'easeOut' },
    },
  };

  const buttonsContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const buttonItem = {
    hidden: { opacity: 0, y: 14, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section id="home_section" className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 lg:py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/images/banner_bg2.png')" }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Overlay */}
      </div>

      {/* Animated Particles */}
      <Particles />

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center pt-2 lg:pt-10">
        
        {/* Text Content - Left on Desktop */}
        <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
          <div className="mb-8 rounded-2xl border border-white/15 bg-black/35 backdrop-blur-sm shadow-[0_12px_40px_rgba(0,0,0,0.35)] px-5 py-6 sm:px-7 sm:py-7">
            <motion.h1
              variants={headlineContainer}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
              style={{ textShadow: '0 2px 16px rgba(0,0,0,0.55)' }}
            >
              {headlineWords.map((word, index) => (
                <motion.span key={`${word}-${index}`} variants={headlineWord} className="inline-block mr-3">
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55, ease: 'easeOut' }}
              className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto md:mx-0"
              style={{ textShadow: '0 1px 12px rgba(0,0,0,0.45)' }}
            >
              CoinCollect helps NFT holders unlock practical value through staking, reward flows, and ecosystem participation.
            </motion.p>

            <motion.div 
              variants={buttonsContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            >
              <motion.a
                variants={buttonItem}
                href="https://app.coincollect.org" 
                target="_blank"
                className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-bold hover:shadow-lg hover:shadow-pink-500/30 transition transform hover:-translate-y-1"
              >
                Launch APP
              </motion.a>
              <motion.a
                variants={buttonItem}
                href="https://app.coincollect.org/nfts/collections" 
                target="_blank"
                className="px-8 py-3 border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition transform hover:-translate-y-1"
              >
                Mint NFT
              </motion.a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center md:items-start gap-3 text-white/70"
          >
            <div className="flex gap-6 justify-center md:justify-start">
              <a href="https://t.me/CoinCollectOrg" target="_blank" className="hover:text-pink-500 transition text-2xl"><FaTelegram /></a>
              <a href="https://twitter.com/CoinCollectOrg" target="_blank" className="hover:text-pink-500 transition text-2xl"><FaTwitter /></a>
              <a href="https://discord.gg/FW9dnRFZk9" target="_blank" className="hover:text-pink-500 transition text-2xl"><FaDiscord /></a>
              <a href="https://www.instagram.com/coincollectorg/" target="_blank" className="hover:text-pink-500 transition text-2xl"><FaInstagram /></a>
              <a href="https://medium.com/coincollectapp" target="_blank" className="hover:text-pink-500 transition text-2xl"><FaMedium /></a>
              <a href="https://www.linkedin.com/company/coincollectorg/" target="_blank" className="hover:text-pink-500 transition text-2xl"><FaLinkedin /></a>
            </div>
            <p className="text-xs text-white/60">Stay connected with the CoinCollect community.</p>
          </motion.div>
        </div>

        {/* Hero Image - Right on Desktop */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center md:justify-end order-1 md:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full flex justify-center md:justify-end"
          >
             <video 
               autoPlay 
               loop 
               muted 
               playsInline
               className="max-w-full h-auto drop-shadow-2xl animate-float rounded-xl"
             >
               <source src="/videos/sheep.webm" type="video/webm" />
               <img src="/images/clone/collectBanner.png" alt="CoinCollect Banner" className="max-w-full h-auto drop-shadow-2xl animate-float" />
             </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
