'use client';

import { motion } from 'framer-motion';

const roadmapData = [
  { year: '2022', title: 'Foundation & Launch', items: ['Project Planning', 'Website Launch', 'First NFTs Minted', 'dApp Live'] },
  { year: '2023', title: 'Expansion & Token', items: ['$COLLECT Token Launch', 'DeFi Expansion', 'Partnership Growth', 'DAO Governance Init'] },
  { year: '2024', title: 'Ecosystem Growth', items: ['Academy & Ambassadors', 'NFT Marketplace', 'Community Collections', 'Interactive Hubs'] },
  { year: '2025', title: 'Future Vision', items: ['Gamified Quests', 'Cross-Chain V2', 'Strategic Vision 2025'] },
  { year: '2026+', title: 'Long Term', items: ['Global Partnerships', 'SapienX AI Automation DAO'] },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">CoinCollect Roadmap</h2>
          <p className="text-gray-400">Our Journey & Future Vision</p>
        </motion.div>

        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-600 hidden md:block"></div>

          <div className="space-y-12">
            {roadmapData.map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="w-full md:w-5/12"></div>
                
                <div className="z-10 bg-black border-4 border-pink-500 rounded-full w-12 h-12 flex items-center justify-center mb-4 md:mb-0 shadow-lg shadow-pink-500/50">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>

                <div className="w-full md:w-5/12 bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition duration-300 hover:border-pink-500/50">
                  <h3 className="text-2xl font-bold text-pink-500 mb-2">{phase.year}</h3>
                  <h4 className="text-xl font-semibold text-white mb-4">{phase.title}</h4>
                  <ul className="space-y-2">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
