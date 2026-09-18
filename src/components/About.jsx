import React from 'react';
import { motion } from 'framer-motion';
import { User, Sparkles, BookOpen, GraduationCap, Code, Compass, Activity } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-b border-white/5">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Background & Vision</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full mt-4" />
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full pointer-events-none" />
              
              <h3 className="text-xl font-bold font-heading text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span>Passionate Developer & Data Science Enthusiast</span>
              </h3>

              <div className="text-slate-300 text-base leading-relaxed space-y-4 font-normal">
                <p>
                  I am a passionate and aspiring developer with a strong interest in building modern, user-friendly web applications and intelligent technology solutions. I am currently pursuing an <strong className="text-purple-300 font-semibold">M.Sc. in Applied Data Science</strong> at SRM University, Ramapuram Campus, with a solid foundation in web development, Python, data analysis, data visualization, and machine learning.
                </p>
                <p>
                  I enjoy transforming ideas into practical digital experiences and continuously exploring emerging technologies in AI, data science, and web development. My goal is to build useful, visually engaging, and technically meaningful applications while continuously improving my skills.
                </p>
              </div>

              {/* Core Interest Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 mt-6 border-t border-white/10">
                <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-xs font-mono text-purple-400 font-semibold mb-1">Web Dev</span>
                  <span className="text-[11px] text-slate-400 text-center">Front-End Focus</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-xs font-mono text-cyan-400 font-semibold mb-1">Data Science</span>
                  <span className="text-[11px] text-slate-400 text-center">M.Sc. Student</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-xs font-mono text-indigo-400 font-semibold mb-1">AI / ML</span>
                  <span className="text-[11px] text-slate-400 text-center">Recommender Sys</span>
                </div>
                <div className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-900/60 border border-white/5">
                  <span className="text-xs font-mono text-pink-400 font-semibold mb-1">UI / UX</span>
                  <span className="text-[11px] text-slate-400 text-center">Creative Design</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Animated Identity Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="glass-card p-8 rounded-3xl border border-purple-500/20 relative shadow-2xl shadow-purple-950/30 overflow-hidden group">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-cyan-400 p-[2px]">
                    <div className="w-full h-full bg-[#0b0c10] rounded-[14px] flex items-center justify-center font-heading text-lg font-bold text-white">
                      P
                    </div>
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-white">PRIYANKA S.</h4>
                    <p className="text-xs text-purple-400 font-mono">Front-End • Data Science</p>
                  </div>
                </div>

                {/* Status pulse */}
                <div className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[10px] font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span>Active Student</span>
                </div>
              </div>

              {/* Core Skill Identity List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-white/5">
                  <span className="text-xs font-medium text-slate-300 flex items-center gap-2">
                    <Code className="w-4 h-4 text-purple-400" />
                    Front-End Development
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Primary Focus</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-white/5">
                  <span className="text-xs font-medium text-slate-300 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    Data Science & Analytics
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">M.Sc. Degree</span>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-white/5">
                  <span className="text-xs font-medium text-slate-300 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-indigo-400" />
                    AI & Machine Learning
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">Projects</span>
                </div>
              </div>

              {/* Live Status Footprint */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/40 via-indigo-950/40 to-slate-900/60 border border-purple-500/30 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300">
                  <Activity className="w-4 h-4 animate-spin-slow" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono text-slate-400 tracking-wider">Current Status</div>
                  <div className="text-xs font-semibold text-purple-300 font-heading">
                    Currently Learning • Building • Exploring
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
