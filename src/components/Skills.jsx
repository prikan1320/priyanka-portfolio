import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Code, BarChart3, BrainCircuit, Wrench, CheckCircle2, Sparkles } from 'lucide-react';
import { skillsCategories } from '../data/portfolioData';

const categoryIcons = {
  frontend: Layout,
  programming: Code,
  datascience: BarChart3,
  ai_ml: BrainCircuit,
  tools: Wrench,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all'
    ? skillsCategories
    : skillsCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative bg-[#0b0c10]">
      {/* Glow backdrop */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
            Skills & <span className="text-gradient-primary">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            Explored technologies and tools across Front-End Web Development, Data Analytics, and AI.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 interactive ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/25 scale-105'
                : 'glass-card text-slate-400 hover:text-slate-200 border border-white/10'
            }`}
          >
            All Categories
          </button>
          {skillsCategories.map((cat) => {
            const Icon = categoryIcons[cat.id];
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all duration-300 interactive ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/25 scale-105'
                    : 'glass-card text-slate-400 hover:text-slate-200 border border-white/10'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Category & Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredCategories.map((cat) => {
              const IconComponent = categoryIcons[cat.id] || Sparkles;
              return (
                <div
                  key={cat.id}
                  className="glass-card p-6 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-purple-500/30 transition-all duration-300"
                >
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                      <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-300 border border-purple-500/20">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading font-bold text-lg text-white">
                        {cat.title}
                      </h3>
                    </div>

                    {/* Skill Tags List */}
                    <div className="flex flex-wrap gap-2.5">
                      {cat.skills.map((skill) => (
                        <div
                          key={skill}
                          className="px-3.5 py-2 rounded-xl bg-slate-900/80 border border-white/5 hover:border-purple-500/40 text-slate-200 hover:text-white text-xs font-medium flex items-center gap-2 transition-colors interactive group"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 group-hover:scale-110 transition-transform" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Indicator Footer */}
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>{cat.skills.length} core competencies</span>
                    <span className="text-purple-400">Active</span>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
