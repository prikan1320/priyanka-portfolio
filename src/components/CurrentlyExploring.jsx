import React from 'react';
import { Compass, Sparkles } from 'lucide-react';
import { currentlyExploring } from '../data/portfolioData';

export default function CurrentlyExploring() {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...currentlyExploring, ...currentlyExploring];

  return (
    <section className="py-16 bg-[#090a0f] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-2">
          <Compass className="w-3.5 h-3.5" />
          <span>Continuous Growth</span>
        </div>
        <h3 className="text-2xl font-bold font-heading text-white">
          Currently <span className="text-gradient-primary">Exploring</span>
        </h3>
      </div>

      {/* Infinite Horizontal Marquee Track */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left & Right Shadow Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#090a0f] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#090a0f] to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-4">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item}-${idx}`}
              className="px-6 py-3 rounded-2xl glass-card border border-white/10 text-slate-200 hover:text-white text-xs font-semibold font-heading whitespace-nowrap flex items-center gap-3 hover:border-purple-500/40 transition-colors shadow-md cursor-default"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
