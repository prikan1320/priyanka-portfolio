import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Sparkles, Code2, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import HeroVisual from './HeroVisual';

export default function Hero() {
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center bg-grid-pattern overflow-hidden">
      {/* Background Noise & Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status pill badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono mb-6 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>Available for Front-End & Data Science Opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-2"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight text-white">
                {personalInfo.name}
              </h1>
            </motion.div>

            {/* Main Title / Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gradient-primary font-heading mb-6"
            >
              {personalInfo.shortTitle}
            </motion.h2>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mb-8 font-normal"
            >
              {personalInfo.headline}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto"
            >
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-purple-600/25 hover:shadow-purple-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 interactive group"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl glass-card text-slate-200 hover:text-white font-semibold text-sm border border-white/15 hover:border-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 interactive"
              >
                <span>Let's Connect</span>
              </a>
            </motion.div>

            {/* Social Links & Quick Identifiers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full"
            >
              <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">
                Connect:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-purple-600/20 text-slate-300 hover:text-purple-300 border border-white/10 hover:border-purple-500/40 transition-all duration-300 interactive"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-indigo-600/20 text-slate-300 hover:text-indigo-300 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 interactive"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Send Email"
                  className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-cyan-600/20 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 interactive"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Hero Graphic Column */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <HeroVisual />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
