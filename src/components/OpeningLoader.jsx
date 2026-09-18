import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OpeningLoader({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0b0c10] text-white"
        >
          {/* Animated Glow Backdrop */}
          <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Monogram */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-500 p-[2px] shadow-2xl shadow-purple-500/30 mb-6"
            >
              <div className="w-full h-full bg-[#0b0c10] rounded-[14px] flex items-center justify-center font-heading text-2xl font-bold text-white">
                P
              </div>
            </motion.div>

            {/* Name Reveal */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold tracking-wider font-heading text-white mb-2"
            >
              PRIYANKA S.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xs uppercase tracking-[0.2em] text-slate-400 font-mono"
            >
              Front-End • Data Science • AI
            </motion.p>

            {/* Loading Bar */}
            <div className="w-48 h-1 bg-slate-800 rounded-full mt-6 overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.4, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
