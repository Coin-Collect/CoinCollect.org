'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { FaDownload, FaLock, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import { SiBinance, SiCoinbase } from 'react-icons/si';

const features = [
  {
    title: 'Governance Rights: for the community',
    description: 'As a holder of COLLECT tokens, you have the right to participate in the governance of the CoinCollect ecosystem. Vote on important decisions that impact the future of the platform.',
    icon: <FaDownload className="text-pink-500 text-3xl" />,
  },
  {
    title: 'Utility in the Ecosystem',
    description: 'The COLLECT token is the native token of the CoinCollect platform. It can be used to mint NFTs, stake and farm on the platform, earn rewards, and more.',
    icon: <FaLock className="text-pink-500 text-3xl" />,
  },
  {
    title: 'Valuable NFT Ecosystem',
    description: 'Each NFT purchased adds liquidity to the platform and a portion of the COLLECT used in the transaction is burnt, reducing the overall supply of the token.',
    icon: <FaShoppingCart className="text-pink-500 text-3xl" />,
  },
  {
    title: 'Token Burn & Anti-Inflation Mechanisms',
    description: 'COLLECT features a token burn mechanism. Trading fees are used to buy back COLLECT tokens, which are then burnt, creating deflation and preserving value.',
    icon: <FaSignOutAlt className="text-pink-500 text-3xl" />,
  },
];

const tokenPlatforms = [
  {
    name: 'Binance',
    url: 'https://www.binance.com/en/how-to-buy/coincollect',
    icon: <SiBinance className="text-[#f3ba2f] text-3xl" />,
    showName: true,
  },
  {
    name: 'Coinbase',
    url: 'https://www.coinbase.com/price/coincollect',
    icon: <SiCoinbase className="text-[#0052ff] text-[6rem]" />,
    showName: false,
  },
  {
    name: 'Crypto.com',
    url: 'https://crypto.com/en/price/coincollect',
    textOnly: true,
  },
  {
    name: 'CoinDesk',
    url: 'https://www.coindesk.com/price/coincollect',
    textOnly: true,
  },
];

export default function Token() {
  const loopTokenPlatforms = [...tokenPlatforms, ...tokenPlatforms];
  const mobileScrollerRef = useRef<HTMLDivElement>(null);
  const desktopScrollerRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const hasScroller = mobileScrollerRef.current || desktopScrollerRef.current;
    if (!hasScroller) return;

    const timer = setInterval(() => {
      if (isInteractingRef.current) return;

      const scrollers = [mobileScrollerRef.current, desktopScrollerRef.current].filter(
        (node): node is HTMLDivElement => Boolean(node),
      );

      scrollers.forEach((node) => {
        node.scrollLeft += 0.8;
        const resetAt = node.scrollWidth / 2;
        if (node.scrollLeft >= resetAt) node.scrollLeft -= resetAt;
      });
    }, 16);

    return () => {
      clearInterval(timer);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return (
    <section id="token" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-[url('/images/token_bg.png')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h4 className="text-pink-500 font-semibold uppercase tracking-widest mb-2">A Token For The Community</h4>
            <h2 className="text-4xl font-bold text-white mb-6">CoinCollect Token (COLLECT)</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              COLLECT is the native ERC-20 compatible token that runs on Multi-Chain, serving as the backbone of the CoinCollect Ecosystem.
            </p>
            <a 
              href="https://docs.coincollect.org/usdcollect-token/what-is-usdcollect" 
              target="_blank"
              className="inline-block px-8 py-3 border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white rounded-full font-bold transition duration-300"
            >
              Read More
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              <video 
                width="100%" 
                height="auto" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full"
              >
                <source src="/videos/sheepCollect.webm" type="video/webm" />
                <source src="/videos/coincollect.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pt-2"
          >
            <p className="text-pink-500 font-semibold uppercase tracking-widest text-sm mb-2 text-center">
              Where To Track COLLECT
            </p>
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Follow CoinCollect across top market platforms.
            </h3>

            <div
              ref={mobileScrollerRef}
              className="md:hidden overflow-x-auto touch-pan-x no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              onTouchStart={() => {
                if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
                isInteractingRef.current = true;
              }}
              onTouchEnd={() => {
                resumeTimeoutRef.current = setTimeout(() => {
                  isInteractingRef.current = false;
                }, 900);
              }}
            >
              <div className="flex w-max items-center gap-6 pr-6">
                {loopTokenPlatforms.map((platform, index) => (
                  <a
                    key={`${platform.name}-${index}`}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-16 min-w-56 px-5 rounded-xl border border-white/10 bg-white/5 hover:border-pink-500/40 transition flex items-center justify-center gap-3 shrink-0"
                  >
                    {platform.icon ? (
                      <span>{platform.icon}</span>
                    ) : null}
                    {platform.textOnly ? <span className="text-white font-semibold">{platform.name}</span> : null}
                    {platform.showName ? <span className="text-white font-semibold">{platform.name}</span> : null}
                  </a>
                ))}
              </div>
            </div>

            <div
              ref={desktopScrollerRef}
              className="hidden md:block overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="flex w-max items-center gap-6 md:gap-8 pr-6">
                {loopTokenPlatforms.map((platform, index) => (
                  <a
                    key={`${platform.name}-${index}`}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-16 min-w-56 px-5 rounded-xl border border-white/10 bg-white/5 hover:border-pink-500/40 transition flex items-center justify-center gap-3 shrink-0"
                  >
                    {platform.icon ? (
                      <span>{platform.icon}</span>
                    ) : null}
                    {platform.textOnly ? <span className="text-white font-semibold">{platform.name}</span> : null}
                    {platform.showName ? <span className="text-white font-semibold">{platform.name}</span> : null}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full text-center lg:text-left"
          >
             <h3 className="text-3xl font-bold text-white mb-6">How It Works</h3>
             <p className="text-gray-400 mb-8 leading-relaxed max-w-3xl">
               Trading fees are entirely used to buy back COLLECT tokens from exchanges. Those tokens are burnt in order to reduce the overall COLLECT tokens circulation, stabilize the token price and create deflation.
             </p>
             <a 
               href="https://docs.coincollect.org/usdcollect-token/tokenomics" 
               target="_blank"
               className="inline-flex items-center text-pink-500 font-bold hover:text-pink-400 transition"
             >
               <span className="mr-2">▶</span> Let&apos;s Start
             </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 p-6 rounded-xl border border-white/5 hover:border-pink-500/30 transition group"
              >
                <div className="mb-4 group-hover:scale-110 transition duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-pink-500 transition">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
