'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

type FAQCategory = {
  id: string;
  title: string;
  items: FAQItem[];
};

const faqData: FAQCategory[] = [
  {
    id: 'general',
    title: 'General',
    items: [
      {
        question: 'What is CoinCollect?',
        answer: 'CoinCollect is a multi-chain NFT-based DeFi platform designed to revolutionize passive income. Users can stake their NFTs or crypto to earn rewards, participate in IDOs, and leverage a decentralized launchpad.'
      },
      {
        question: 'How do I earn passive income on CoinCollect?',
        answer: 'The primary way to earn is by staking your CoinCollect NFTs in our yield farming pools. You can also provide liquidity, or participate in upcoming IDOs to gain exposure to new projects and rewards.'
      },
      {
        question: 'Is CoinCollect truly decentralized?',
        answer: 'Yes, CoinCollect operates on immutable smart contracts across multiple blockchains (Polygon, BNB Smart Chain, Fantom). Our long-term vision includes a fully community-governed DAO.'
      },
      {
        question: 'What cryptocurrencies can I earn?',
        answer: 'You can earn various cryptocurrencies depending on the specific staking pool you join. Details of rewards are always transparently displayed for each pool.'
      },
      {
        question: 'How many NFTs can I stake in a pool?',
        answer: 'While you can own many CoinCollect NFTs, each staking pool typically has a limit, often 5 NFTs, to ensure fair distribution of rewards among participants.'
      },
      {
        question: 'Do I need to buy crypto to join pools?',
        answer: 'No, you don\'t necessarily have to buy crypto. You primarily need to own a CoinCollect NFT to join our exclusive NFT staking pools.'
      },
      {
        question: 'Will my NFT be locked when staked?',
        answer: 'No, your CoinCollect NFTs are not locked when staked. You retain full control and can unstake them anytime you wish, offering maximum flexibility.'
      },
      {
        question: 'How many pools can I join?',
        answer: 'There is no limit to the number of pools you can join. However, each pool may have a maximum number of participants to ensure optimal reward distribution.'
      }
    ]
  },
  {
    id: 'token',
    title: 'Token',
    items: [
      {
        question: 'What are the key benefits of holding $COLLECT tokens?',
        answer: 'Holding $COLLECT grants you governance rights, allowing participation in critical platform decisions. It\'s a deflationary asset with built-in scarcity mechanisms, and can be used for yield farming, minting NFTs, and accessing exclusive features within the CoinCollect ecosystem.'
      },
      {
        question: 'How does the $COLLECT token contribute to decentralization?',
        answer: '$COLLECT is fundamental to our Decentralized Autonomous Organization (DAO) initiative. It acts as a governance token, enabling holders to propose and vote on key protocol changes, ensuring that CoinCollect evolves as a truly community-driven platform.'
      },
      {
        question: 'What are the anti-inflation mechanisms for $COLLECT?',
        answer: '$COLLECT features a robust token burn mechanism where a portion of transaction fees and NFT-related operations are used to buy back and permanently remove tokens from circulation, reducing supply and fostering scarcity. Additionally, features like "Harvest Lock-up Period" help manage token circulation.'
      }
    ]
  },
  {
    id: 'nft',
    title: 'NFT',
    items: [
      {
        question: 'Can I sell my CoinCollect NFT?',
        answer: 'Absolutely! Your CoinCollect NFT is a valuable, liquid asset. You can trade or sell it on any compatible NFT marketplace (like OpenSea or Rarible) at any time, even while it\'s staked.'
      },
      {
        question: 'Can I stake non-CoinCollect NFTs?',
        answer: 'Yes. On each staking pool, we transparently show what NFTs can be staked. You are always welcome if you are an NFT collection owner to open a pool for your NFT collection.'
      },
      {
        question: 'Will there be more NFT collections released?',
        answer: 'Yes, definitely! We have plans for additional CoinCollect NFT collections, each with unique designs, rarity tiers, and enhanced utility features within our ecosystem. Stay tuned for announcements!'
      },
      {
        question: 'How can I acquire a Branded NFT?',
        answer: 'Branded NFTs are typically created in collaboration with third-party communities and projects. You can acquire them by participating in their promotional events, community giveaways, or purchasing them directly from NFT marketplaces if they are listed.'
      },
      {
        question: 'Are Starter (free) NFTs also valuable?',
        answer: 'Yes, absolutely. Even the Starter NFTs are limited in supply and provide earning utility. Their scarcity and functional benefits mean they can hold significant value and can be traded on marketplaces just like other tiers.'
      }
    ]
  }
];

export default function FAQ() {
  const [activeTab, setActiveTab] = useState('general');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const activeCategory = faqData.find(cat => cat.id === activeTab);

  return (
    <section className="py-20 bg-black relative overflow-hidden" id="faq">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-pink-500 font-semibold uppercase tracking-widest text-sm mb-3">Have Questions?</p>
          <h3 className="text-3xl md:text-5xl font-bold text-white">Frequently Asked Questions</h3>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqData.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setActiveTab(category.id);
                setOpenIndex(0); // Reset open index when switching tabs
              }}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg shadow-pink-500/25'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeCategory?.items.map((item, index) => (
                <div 
                  key={index} 
                  className="mb-4 border border-white/10 rounded-xl overflow-hidden bg-white/5 hover:bg-white/[0.07] transition-colors"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`text-lg font-medium transition-colors ${openIndex === index ? 'text-pink-400' : 'text-white'}`}>
                      {item.question}
                    </span>
                    <span className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border border-white/20 transition-all duration-300 ${openIndex === index ? 'bg-pink-500 border-pink-500 rotate-180' : 'bg-transparent'}`}>
                      <svg 
                        className={`w-4 h-4 transition-colors ${openIndex === index ? 'text-white' : 'text-gray-400'}`} 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
