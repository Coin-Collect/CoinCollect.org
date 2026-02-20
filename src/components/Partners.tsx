'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const partners = [
  { name: 'Polygon', logo: '/images/clone/partners/polygon.svg', url: 'https://polygonscan.com/token/0x56633733fc8baf9f730ad2b6b9956ae22c6d4148', lightBackground: true },
  { name: 'OpenSea', logo: '/images/clone/partners/openseaw.svg', url: 'https://opensea.io/collection/coincollect-nfts' },
  { name: 'CoinMarketCap', logo: '/images/clone/partners/coinmarketcap.svg', url: 'https://coinmarketcap.com/currencies/coincollect/' },
  { name: 'Rarible', logo: '/images/clone/partners/rarible.svg', url: 'https://market.coincollect.org' },
  { name: 'DappRadar', logo: '/images/clone/partners/dappradar.png', url: 'https://dappradar.com/dapp/coincollect' },
  { name: 'CoinGecko', logo: '/images/clone/partners/coingecko.svg', url: 'https://www.coingecko.com/en/coins/coincollect' },
  { name: 'Unstoppable Domains', logo: '/images/unstoppable.png', url: 'https://get.unstoppabledomains.com/collect/' },
];

export default function Partners() {
  const loopPartners = [...partners, ...partners];
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
    <section className="py-12 bg-black/50 border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-pink-500 font-semibold uppercase tracking-widest text-sm mb-2">Where We&apos;re Featured</p>
          <h3 className="text-2xl font-bold text-white">Partnered, listed, and independently featured across Web3.</h3>
        </motion.div>

        <div
          ref={mobileScrollerRef}
          className="md:hidden h-20 overflow-x-auto touch-pan-x no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
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
          <div className="flex w-max items-center gap-8 pr-6 grayscale opacity-90">
            {loopPartners.map((partner, index) => (
              <a
                key={`${partner.name}-${index}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-36 h-16 shrink-0 flex items-center justify-center overflow-hidden ${
                  partner.lightBackground ? 'bg-white/90 rounded-md px-2' : ''
                }`}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={128}
                  height={60}
                  className="max-h-12 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        <div
          ref={desktopScrollerRef}
          className="hidden md:block h-20 overflow-x-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          <div className="flex w-max items-center gap-10 md:gap-14 grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-500 pr-6">
            {loopPartners.map((partner, index) => (
              <a
                key={`${partner.name}-${index}`}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-36 h-16 shrink-0 flex items-center justify-center overflow-hidden ${
                  partner.lightBackground ? 'bg-white/90 rounded-md px-2' : ''
                }`}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={128}
                  height={60}
                  className="max-h-12 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
