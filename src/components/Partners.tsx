'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Polygon', logo: '/images/clone/partners/polygon.svg', url: 'https://polygonscan.com/token/0x56633733fc8baf9f730ad2b6b9956ae22c6d4148' },
  { name: 'OpenSea', logo: '/images/clone/partners/openseaw.svg', url: 'https://opensea.io/collection/coincollect-nfts' },
  { name: 'CoinMarketCap', logo: '/images/clone/partners/coinmarketcap.svg', url: 'https://coinmarketcap.com/currencies/coincollect/' },
  { name: 'Rarible', logo: '/images/clone/partners/rarible.svg', url: 'https://market.coincollect.org' },
  { name: 'DappRadar', logo: '/images/clone/partners/dappradar.png', url: 'https://dappradar.com/dapp/coincollect' },
  { name: 'CoinGecko', logo: '/images/clone/partners/coingecko.svg', url: 'https://www.coingecko.com/en/coins/coincollect' },
  { name: 'Unstoppable Domains', logo: '/images/unstoppable.png', url: 'https://get.unstoppabledomains.com/collect/' },
];

export default function Partners() {
  return (
    <section className="py-12 bg-black/50 border-t border-white/5">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-pink-500 font-semibold uppercase tracking-widest text-sm mb-2">TRUSTED BY THE BEST</p>
          <h3 className="text-2xl font-bold text-white">Our Strategic Partners</h3>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {partners.map((partner, index) => (
            <motion.a 
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="w-32 h-16 flex items-center justify-center transition hover:scale-110"
            >
              <Image 
                src={partner.logo} 
                alt={partner.name} 
                width={120} 
                height={60} 
                className="max-h-12 w-auto object-contain"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
