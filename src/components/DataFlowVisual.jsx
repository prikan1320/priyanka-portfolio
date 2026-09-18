import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Database, Brain, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'WEB',
    subtitle: 'Responsive Interfaces',
    description: 'Building interactive HTML5, CSS3 & JavaScript web experiences.',
    icon: Globe,
    color: 'from-purple-500 to-indigo-500',
    borderColor: 'border-purple-500/30',
    textColor: 'text-purple-400',
  },
  {
    title: 'DATA',
    subtitle: 'Analytics & Insights',
    description: 'Analyzing user interaction, datasets & tabular data with Python.',
    icon: Database,
    color: 'from-indigo-500 to-blue-500',
    borderColor: 'border-indigo-500/30',
    textColor: 'text-indigo-400',
  },
  {
    title: 'AI',
    subtitle: 'Intelligent Models',
    description: 'Applying collaborative filtering & recommendation algorithms.',
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-cyan-500/30',
    textColor: 'text-cyan-400',
  },
  {
    title: 'PRODUCT',
    subtitle: 'Practical Solutions',
    description: 'Delivering modern, user-focused digital applications.',
    icon: Rocket,
    color: 'from-cyan-500 to-teal-400',
    borderColor: 'border-teal-500/30',
    textColor: 'text-teal-400',
  },
];

export default function DataFlowVisual() {
  return (
    <section className="py-20 bg-[#0c0e15] relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-mono uppercase text-cyan-400 tracking-widest block mb-2">
              UI/UX & Interdisciplinary Vision
            </span>
            <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-white mb-4">
              Code meets <span className="text-gradient-primary">creativity.</span>
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              "I enjoy creating interfaces that are not only functional but also visually engaging, intuitive, and easy to use."
            </p>
          </motion.div>
        </div>

        {/* Animated Connected Nodes Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Node Card */}
                <div className={`w-full glass-card p-6 rounded-3xl border ${step.borderColor} hover:scale-[1.03] transition-all duration-300 flex flex-col items-center h-full relative z-10`}>
                  {/* Icon Badge */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${step.color} p-[1.5px] shadow-lg mb-4 group-hover:rotate-6 transition-transform`}>
                    <div className="w-full h-full bg-[#0b0c10] rounded-[14px] flex items-center justify-center">
                      <IconComponent className={`w-7 h-7 ${step.textColor}`} />
                    </div>
                  </div>

                  <span className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-1">
                    Step 0{idx + 1}
                  </span>
                  <h4 className="text-xl font-bold font-heading text-white mb-1">
                    {step.title}
                  </h4>
                  <span className={`text-xs font-semibold ${step.textColor} mb-3 font-mono`}>
                    {step.subtitle}
                  </span>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Arrow for Desktop */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-purple-400/60 items-center justify-center">
                    <ArrowRight className="w-6 h-6 animate-pulse" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
