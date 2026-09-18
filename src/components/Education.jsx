import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { educationList } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative bg-slate-950/60 border-t border-b border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
            Education <span className="text-gradient-primary">Timeline</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            Higher education qualifications in Applied Data Science and Computer Applications.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-card rounded-3xl p-8 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-2xl bg-cyan-500/15 text-cyan-300 border border-cyan-500/20">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <div className={`px-3 py-1 rounded-full text-xs font-mono font-semibold border ${
                    edu.isCurrent
                      ? 'bg-purple-500/20 border-purple-500/40 text-purple-300'
                      : 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                  }`}>
                    {edu.status}
                  </div>
                </div>

                {/* Degree Name */}
                <h3 className="text-2xl font-bold font-heading text-white mb-2">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <div className="flex items-center gap-2 text-slate-300 text-sm font-medium mb-4">
                  <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{edu.institution}</span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-xs leading-relaxed mb-6 font-normal">
                  {edu.details}
                </p>
              </div>

              {/* Timeframe Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.period}
                </span>
                <span>{edu.isCurrent ? 'Expected Completion 2028' : 'Graduated 2026'}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
