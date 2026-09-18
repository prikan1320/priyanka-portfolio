import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080c] border-t border-white/10 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 p-[1.5px]">
                <div className="w-full h-full bg-[#0b0c10] rounded-[10px] flex items-center justify-center font-heading text-xs font-bold text-white">
                  P
                </div>
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm font-mono">
              {personalInfo.shortTitle}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-3 rounded-2xl bg-slate-900 hover:bg-purple-600/20 text-slate-300 hover:text-white border border-white/10 transition-all interactive"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-2xl bg-slate-900 hover:bg-indigo-600/20 text-slate-300 hover:text-white border border-white/10 transition-all interactive"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-3 rounded-2xl bg-slate-900 hover:bg-cyan-600/20 text-slate-300 hover:text-white border border-white/10 transition-all interactive"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl glass-card text-slate-300 hover:text-white border border-white/10 hover:border-purple-500/40 transition-all interactive flex items-center gap-2 text-xs font-mono"
            aria-label="Scroll to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <p>© 2026 Priyanka S. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            Crafted with React, Vite & Modern Motion Design
          </p>
        </div>
      </div>
    </footer>
  );
}
