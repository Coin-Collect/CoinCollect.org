'use client';

import { motion } from 'framer-motion';

const partners = [
  { 
    name: 'SapienX', 
    url: 'https://sapienx.app',
    gradient: 'from-green-400 via-emerald-500 to-teal-500',
    description: 'Intelligent Agents & AI Ecosystem'
  },
  { 
    name: 'QuestGalaxy', 
    url: 'https://questgalaxy.com',
    gradient: 'from-indigo-500 via-purple-500 to-orange-500',
    description: 'Web3 Gaming Universe'
  },
  { 
    name: 'QuestLayer', 
    url: 'https://questlayer.app',
    gradient: 'from-cyan-400 via-blue-500 to-indigo-600',
    description: 'Turn Any Website Into an Interactive Quest & Reward Hub'
  },
];

export default function StrategicPartners() {
  return (
    <section className="py-16 bg-black relative overflow-hidden border-t border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-pink-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-pink-500 font-semibold uppercase tracking-widest text-xs mb-2">Strategic Alliance</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white">Our Premium Partners</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.a 
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover Gradient Border Effect */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br ${partner.gradient} transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col items-center text-center h-full justify-center">
                <div className={`text-2xl md:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${partner.gradient} mb-3 drop-shadow-sm`}>
                  {partner.name}
                </div>
                <div className="w-8 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent mb-3 group-hover:via-white/40 transition-all" />
                <p className="text-gray-400 text-xs font-medium group-hover:text-gray-300 transition-colors">
                  {partner.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
