"use client";
import React from 'react';
import { motion } from 'framer-motion';

const DUMMY_REELS = [
  { id: '1', title: 'Movie Shorts | 4K', views: 1200500, likes: 450000, thumbnail: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=800&auto=format&fit=crop' },
  { id: '2', title: 'Attitude Edit', views: 150000, likes: 85000, thumbnail: 'https://images.unsplash.com/photo-1535016120720-40c7467d4aac?q=80&w=800&auto=format&fit=crop' },
  { id: '3', title: 'Music Sync', views: 65000, likes: 12000, thumbnail: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=800&auto=format&fit=crop' },
  { id: '4', title: 'Moody Grade', views: 15000, likes: 3000, thumbnail: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop' },
];

const formatNum = (num: number) => num >= 1000000 ? (num / 1000000).toFixed(1) + 'M' : num >= 1000 ? (num / 1000).toFixed(1) + 'K' : num;

const getTierStyles = (views: number) => {
  if (views >= 1000000) return "ring-2 ring-orange-500 shadow-[0_0_40px_rgba(255,68,0,0.6)] animate-pulse";
  if (views >= 100000) return "ring-2 ring-yellow-400 shadow-[0_0_30px_rgba(255,215,0,0.4)]";
  if (views >= 50000) return "ring-2 ring-purple-500 shadow-[0_0_30px_rgba(183,0,255,0.4)]";
  if (views >= 10000) return "ring-1 ring-cyan-400 shadow-[0_0_20px_rgba(0,195,255,0.3)]";
  return "ring-1 ring-white/10";
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white p-6 md:p-12 font-sans selection:bg-cyan-500/30">
      <header className="max-w-7xl mx-auto mb-16 pt-10 text-center">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent">
          CreatorBoySuvo
        </h1>
        <p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto font-medium tracking-wide">
          4K CINEMATIC EDITS • COLOR GRADING • VISUAL STORYTELLING
        </p>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {DUMMY_REELS.map((reel, i) => (
          <motion.div key={reel.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            className={`relative rounded-2xl overflow-hidden aspect-[9/16] bg-neutral-900 group cursor-pointer ${getTierStyles(reel.views)}`}>
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-70" style={{ backgroundImage: `url(${reel.thumbnail})` }} />
            {reel.views >= 1000000 && <div className="absolute top-4 right-4 bg-orange-500/20 backdrop-blur-md border border-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-[0_0_15px_rgba(255,68,0,0.8)] z-20">🔥 1M+ Viral</div>}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full p-5 z-20">
              <h3 className="text-lg font-bold mb-2 shadow-black drop-shadow-md">{reel.title}</h3>
              <div className="flex gap-4 text-sm font-bold text-white/90">
                <span>▶ {formatNum(reel.views)}</span>
                <span>❤ {formatNum(reel.likes)}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
