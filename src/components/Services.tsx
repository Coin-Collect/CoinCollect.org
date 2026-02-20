'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'LaunchPad',
    description: 'Launch your crypto project with CoinCollect Launchpad - the ultimate destination for coins, NFTs, and more. Raise liquidity and take your project to the next level.',
    icon: '/images/service_icon1.png',
  },
  {
    title: 'NFT DeFi',
    description: 'Unlock the power of passive income with ease by staking your NFT or depositing your crypto on CoinCollect - where you\'ll earn a juicy APY on your investments!',
    icon: '/images/service_icon2.png',
  },
  {
    title: 'Multi-Chain IDO',
    description: 'Unlock the power of upcoming crypto projects with CoinCollect - the decentralized platform for initial dex offerings. Invest in the hottest new tokens on the market.',
    icon: '/images/service_icon3.png',
  },
  {
    title: 'Collaboration',
    description: 'Our organization is dedicated to fostering collaboration and partnership with other crypto projects. By working together, we can achieve greater success.',
    icon: '/images/service_icon4.png',
  },
  {
    title: 'Branded NFT',
    description: 'Join forces with CoinCollect and snag a complimentary branded NFT! Collaborate with your community and build a collection that earns interest for all.',
    icon: '/images/service_icon5.png',
  },
  {
    title: 'Airdrop',
    description: 'Get in on the action with CoinCollect - the ultimate NFT and crypto airdrop platform! Join our promotional events and be an NFT holder that gets AirDropped!',
    icon: '/images/service_icon6.png',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 relative bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Why CoinCollect?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Unlock the power of your NFTs with CoinCollect - the DeFi platform where staking your NFTs earns you crypto and NFT rewards on multiple blockchain networks!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition group hover:-translate-y-2"
            >
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-pink-500/20 rounded-full group-hover:bg-pink-500/30 transition">
                  <Image src={service.icon} alt={service.title} width={64} height={64} className="w-16 h-16 object-contain" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-pink-500 transition">{service.title}</h3>
              <p className="text-gray-400 text-center text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
