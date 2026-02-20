'use client';

import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

type NFTProject = {
  id: string;
  name: string;
  logo: string;
  images: string[];
};

const nftProjects: NFTProject[] = [
  {
    id: 'avatar',
    name: 'Avatar',
    logo: '/images/nfts/avatar/avlogo.png',
    images: ['/images/nfts/avatar/av0.webp', '/images/nfts/avatar/av1.webp', '/images/nfts/avatar/av2.webp'],
  },
  {
    id: 'beasthunter',
    name: 'Beast Hunter',
    logo: '/images/nfts/beasthunter/bhlogo.webp',
    images: ['/images/nfts/beasthunter/bh0.webp', '/images/nfts/beasthunter/bh1.webp', '/images/nfts/beasthunter/bh2.webp'],
  },
  {
    id: 'blitz',
    name: 'Blitz',
    logo: '/images/nfts/blitz/blitzLogo.png',
    images: ['/images/nfts/blitz/bl0.webp', '/images/nfts/blitz/bl1.webp', '/images/nfts/blitz/bl2.webp'],
  },
  {
    id: 'lotshare',
    name: 'Lotshare',
    logo: '/images/nfts/lotshare/lslogo.webp',
    images: ['/images/nfts/lotshare/ls0.webp', '/images/nfts/lotshare/ls1.webp', '/images/nfts/lotshare/ls2.webp'],
  },
  {
    id: 'nitro',
    name: 'Nitro',
    logo: '/images/nfts/nitro/logo.webm',
    images: ['/images/nfts/nitro/ni0.webp', '/images/nfts/nitro/ni1.webp', '/images/nfts/nitro/ni2.webp'],
  },
  {
    id: 'placedj',
    name: 'PlaceDJ',
    logo: '/images/nfts/placedj/pllogo.png',
    images: ['/images/nfts/placedj/pl0.webp', '/images/nfts/placedj/pl1.webp', '/images/nfts/placedj/pl2.webp'],
  },
  {
    id: 'sapienx',
    name: 'SapienX',
    logo: '/images/nfts/sapienx/sxlogo.gif',
    images: ['/images/nfts/sapienx/1.webp', '/images/nfts/sapienx/2.webp', '/images/nfts/sapienx/3.webp'],
  },
  {
    id: 'zidanogo',
    name: 'Zidanogo',
    logo: '/images/nfts/zidanogo/zilogo.png',
    images: ['/images/nfts/zidanogo/zi0.webp', '/images/nfts/zidanogo/zi1.webp', '/images/nfts/zidanogo/zi2.webp'],
  },
];

export default function NFTShowcase() {
  const [timeTick, setTimeTick] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loopProjects = useMemo(() => [...nftProjects, ...nftProjects], []);
  const cardTimings = useMemo(
    () =>
      loopProjects.map((_, idx) => ({
        cycleSteps: 7 + ((idx * 3) % 9),
        phaseSteps: (idx * 5) % 11,
      })),
    [loopProjects],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeTick((prev) => prev + 1);
    }, 250);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const node = scrollerRef.current;
      if (!node || isInteractingRef.current) return;

      node.scrollLeft += 0.8;
      const resetAt = node.scrollWidth / 2;
      if (node.scrollLeft >= resetAt) node.scrollLeft -= resetAt;
    }, 16);

    return () => {
      clearInterval(timer);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  return (
    <section className="py-18 bg-black/70 border-t border-b border-white/10 relative overflow-hidden" id="nft">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(236,72,153,0.16),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.14),transparent_40%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-pink-500 font-semibold uppercase tracking-widest text-sm mb-2">Featured NFT Projects</p>
          <h3 className="text-2xl md:text-3xl font-bold text-white">Explore, Mint, and Stake Across the Ecosystem</h3>
        </motion.div>

        <div
          ref={scrollerRef}
          className="overflow-x-auto touch-pan-x no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          onTouchStart={() => {
            if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
            isInteractingRef.current = true;
          }}
          onTouchEnd={() => {
            resumeTimeoutRef.current = setTimeout(() => {
              isInteractingRef.current = false;
            }, 900);
          }}
          onMouseEnter={() => {
            isInteractingRef.current = true;
          }}
          onMouseLeave={() => {
            isInteractingRef.current = false;
          }}
        >
          <div className="flex w-max gap-5 md:gap-6 pr-6">
            {loopProjects.map((project, index) => {
              const { cycleSteps, phaseSteps } = cardTimings[index];
              const activeIndex = Math.floor((timeTick + phaseSteps) / cycleSteps) % project.images.length;
              const activeImage = project.images[activeIndex];
              const isVideoLogo = project.logo.endsWith('.webm');

              return (
                <div
                  key={`${project.id}-${index}`}
                  className="w-[280px] md:w-[300px] shrink-0 rounded-2xl border border-white/15 bg-black/45 backdrop-blur-sm p-4 shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
                >
                  <div className="relative h-[220px] rounded-xl overflow-hidden border border-white/10 bg-black/40">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeImage}
                        initial={{ opacity: 0.25, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0.2, scale: 0.98 }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                        className="absolute inset-0"
                      >
                        <Image src={activeImage} alt={`${project.name} NFT`} fill className="object-cover" sizes="(max-width: 768px) 280px, 300px" />
                      </motion.div>
                    </AnimatePresence>
                    <div className="absolute inset-x-0 top-0 z-20 p-3 bg-gradient-to-b from-black/55 to-transparent">
                      <div className="flex items-center gap-2.5">
                        <div className="h-10 w-10 rounded-full border border-white/15 bg-black/30 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                          {isVideoLogo ? (
                            <video autoPlay loop muted playsInline className="h-8 w-8 object-cover rounded-full">
                              <source src={project.logo} type="video/webm" />
                            </video>
                          ) : (
                            <Image src={project.logo} alt={`${project.name} logo`} width={32} height={32} className="h-8 w-8 object-cover rounded-full" />
                          )}
                        </div>
                        <span className="text-white font-bold text-base">{project.name}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <a
                      href="https://app.coincollect.org/nfts/collections"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center px-4 py-2.5 rounded-full bg-pink-600 hover:bg-pink-700 text-white text-sm font-semibold transition"
                    >
                      Mint
                    </a>
                    <a
                      href="https://app.coincollect.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center px-4 py-2.5 rounded-full border border-white/25 text-white text-sm font-semibold hover:bg-white/10 transition"
                    >
                      Stake
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
