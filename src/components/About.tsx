'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-black to-gray-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-pink-500/10 blur-[100px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-500/10 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center px-2 md:px-0"
        >
          <div className="relative mx-auto">
            <div className="absolute inset-0 bg-pink-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <Image 
              src="/images/clone/about.webp" 
              alt="About CoinCollect" 
              width={500} 
              height={500} 
              className="relative z-10 drop-shadow-2xl animate-float mx-auto w-[92vw] max-w-[500px] md:w-auto scale-[1.06] md:scale-100 translate-x-3 md:translate-x-0"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">The CoinCollect</span>
          </h2>
          
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            With CoinCollect, you can unlock the full potential of your NFTs and take your investments to the next level. 
            Our platform is the ultimate launchpad for top-notch NFT and DeFi projects, offering a range of unique tools and risk-free staking options to help you maximize your returns.
          </p>
          
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Whether you're minting your own NFT or snatching up the hottest ones on the market, our pools give you the chance to earn the latest tokens and NFTs without any of the risk of impermanent loss. 
            So don't miss out on the opportunity to boost your portfolio with CoinCollect!
          </p>

          <Link 
            href="https://app.coincollect.org" 
            target="_blank"
            className="inline-flex items-center px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-full font-bold transition transform hover:scale-105 shadow-lg shadow-pink-500/30"
          >
            Let's Start
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
