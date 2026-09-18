import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Brain, Sparkles, Layout, Binary, Globe } from 'lucide-react';

export default function HeroVisual() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="relative w-full h-[450px] sm:h-[500px] lg:h-[550px] flex items-center justify-center">
      {/* Ambient Radial Gradient Glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-purple-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute w-60 h-60 sm:w-80 sm:h-80 bg-cyan-500/15 rounded-full blur-[90px] translate-x-20 translate-y-10 pointer-events-none" />

      {/* Central Interactive Node Hub */}
      <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full border border-purple-500/20 bg-slate-950/40 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-purple-900/20">
        {/* Concentric Rotating Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-2 rounded-full border border-dashed border-cyan-500/20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-8 rounded-full border border-purple-400/20"
        />

        {/* Central Core */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-br from-purple-900/60 via-indigo-900/40 to-slate-900 border border-purple-500/30 flex flex-col items-center justify-center p-3 shadow-xl backdrop-blur-md"
        >
          <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300 mb-2">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <span className="font-heading font-bold text-xs sm:text-sm text-white tracking-wider">
            TECH & AI
          </span>
          <span className="text-[10px] text-cyan-400 font-mono mt-0.5">
            Front-End • Data
          </span>
        </motion.div>
      </div>

      {/* Floating Orbiting Tech Cards */}
      {/* 1. Code / Web Dev */}
      <motion.div
        animate={{ y: [-8, 8, -8], x: [-4, 4, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-8 left-4 sm:left-12 glass-card p-3.5 rounded-2xl flex items-center gap-3 border border-purple-500/25 shadow-lg shadow-purple-950/30"
      >
        <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300">
          <Code className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-semibold text-white font-heading">Web Development</div>
          <div className="text-[10px] text-slate-400 font-mono">HTML • CSS • React</div>
        </div>
      </motion.div>

      {/* 2. Data Science */}
      <motion.div
        animate={{ y: [8, -8, 8], x: [4, -4, 4] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-10 left-8 sm:left-16 glass-card p-3.5 rounded-2xl flex items-center gap-3 border border-cyan-500/25 shadow-lg shadow-cyan-950/30"
      >
        <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-300">
          <Database className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-semibold text-white font-heading">Data Analytics</div>
          <div className="text-[10px] text-slate-400 font-mono">Pandas • SQL • Viz</div>
        </div>
      </motion.div>

      {/* 3. AI & ML */}
      <motion.div
        animate={{ y: [-10, 10, -10], x: [5, -5, 5] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-14 right-4 sm:right-12 glass-card p-3.5 rounded-2xl flex items-center gap-3 border border-indigo-500/25 shadow-lg shadow-indigo-950/30"
      >
        <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-300">
          <Brain className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-semibold text-white font-heading">Machine Learning</div>
          <div className="text-[10px] text-slate-400 font-mono">Collaborative Filtering</div>
        </div>
      </motion.div>

      {/* 4. UI/UX Design */}
      <motion.div
        animate={{ y: [10, -10, 10], x: [-5, 5, -5] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute bottom-16 right-8 sm:right-16 glass-card p-3.5 rounded-2xl flex items-center gap-3 border border-pink-500/25 shadow-lg shadow-pink-950/30"
      >
        <div className="p-2 rounded-xl bg-pink-500/20 text-pink-300">
          <Layout className="w-5 h-5" />
        </div>
        <div>
          <div className="text-xs font-semibold text-white font-heading">UI/UX Design</div>
          <div className="text-[10px] text-slate-400 font-mono">User-Centric Layouts</div>
        </div>
      </motion.div>

      {/* Decorative Vector Lines & Particles */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 stroke-purple-400/40">
        <line x1="25%" y1="20%" x2="50%" y2="50%" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="75%" y1="25%" x2="50%" y2="50%" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="28%" y1="80%" x2="50%" y2="50%" strokeWidth="1" strokeDasharray="4 4" />
        <line x1="72%" y1="75%" x2="50%" y2="50%" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    </div>
  );
}
