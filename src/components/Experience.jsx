import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Code, Layout, Sparkles } from 'lucide-react';
import { leadershipList } from '../data/portfolioData';

const roleIcons = {
  "Student Placement Coordinator": Users,
  "Web Developer Lead": Code,
  "UI/UX Lead": Layout,
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative bg-[#0b0c10]">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Community & Coordination</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
            Leadership & <span className="text-gradient-primary">Experience</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            Initiatives and leadership roles undertaken across academic institutions and developer communities.
          </p>
        </div>

        {/* Animated Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-indigo-500 to-cyan-500 -translate-x-1/2 hidden sm:block opacity-30" />

          <div className="space-y-10">
            {leadershipList.map((item, index) => {
              const IconComponent = roleIcons[item.role] || Sparkles;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0b0c10] border-2 border-purple-500 text-purple-300 flex items-center justify-center z-10 shadow-lg shadow-purple-950/50 hidden sm:flex">
                    <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)]">
                    <div className="glass-card p-6 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                      
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-300 border border-purple-500/20">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-lg text-white">
                            {item.role}
                          </h3>
                          <span className="text-xs text-purple-400 font-mono">
                            {item.type}
                          </span>
                        </div>
                      </div>

                      <div className="text-xs font-mono text-slate-400 mb-3 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>{item.organization}</span>
                      </div>

                      <p className="text-slate-300 text-xs leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
