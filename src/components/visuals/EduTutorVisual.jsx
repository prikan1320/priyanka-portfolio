import React, { useState } from 'react';
import { Brain, Bot, Sparkles, Send, BookOpen } from 'lucide-react';

export default function EduTutorVisual() {
  const [query, setQuery] = useState("Explain Neural Networks intuitively");

  return (
    <div className="w-full h-full bg-[#0d0f18] rounded-2xl p-4 sm:p-6 border border-indigo-500/20 flex flex-col justify-between relative overflow-hidden group">
      {/* Glow */}
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-600/20 rounded-full blur-2xl pointer-events-none" />

      {/* Top Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-indigo-500/20 text-indigo-300">
            <Bot className="w-4 h-4" />
          </div>
          <span className="text-xs font-mono font-bold text-white">EduTutor AI Learning Core</span>
        </div>
        <span className="text-[10px] font-mono text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-full border border-indigo-500/20">
          Personalized EdTech
        </span>
      </div>

      {/* Simulated Chat & Prompt Interface */}
      <div className="space-y-2.5 mb-4">
        {/* User Prompt */}
        <div className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs text-slate-200 flex items-start gap-2">
          <span className="text-indigo-400 font-mono font-semibold">Q:</span>
          <span>{query}</span>
        </div>

        {/* AI Response Card */}
        <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/30 text-xs text-indigo-100 space-y-1.5">
          <div className="flex items-center gap-1.5 text-indigo-300 text-[11px] font-mono font-bold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>EduTutor Assistant Response</span>
          </div>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            Neural networks are computing systems inspired by the biological neural networks that constitute animal brains...
          </p>
        </div>
      </div>

      {/* Bottom Knowledge Nodes */}
      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10">
        <div className="p-2 rounded-lg bg-slate-900/60 border border-white/5 text-center">
          <div className="text-[9px] font-mono text-slate-400">Concept Map</div>
          <div className="text-[11px] font-semibold text-indigo-300">Adaptive</div>
        </div>
        <div className="p-2 rounded-lg bg-slate-900/60 border border-white/5 text-center">
          <div className="text-[9px] font-mono text-slate-400">Engagement</div>
          <div className="text-[11px] font-semibold text-indigo-300">Interactive</div>
        </div>
        <div className="p-2 rounded-lg bg-slate-900/60 border border-white/5 text-center">
          <div className="text-[9px] font-mono text-slate-400">Pacing</div>
          <div className="text-[11px] font-semibold text-indigo-300">Custom</div>
        </div>
      </div>
    </div>
  );
}
