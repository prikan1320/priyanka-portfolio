import React, { useState } from 'react';
import { Activity, Clock, Monitor, ShieldAlert, BarChart2 } from 'lucide-react';

export default function ScreenPulseVisual() {
  const [activeRange, setActiveRange] = useState('Today');

  return (
    <div className="w-full h-full bg-[#0d0f18] rounded-2xl p-4 sm:p-6 border border-cyan-500/30 flex flex-col justify-between relative overflow-hidden group">
      {/* Background Glow */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Header with Active Building Badge */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300">
            <Monitor className="w-4 h-4" />
          </div>
          <span className="text-xs font-mono font-bold text-white">ScreenPulse Dashboard</span>
        </div>

        {/* CURRENTLY BUILDING BADGE */}
        <div className="px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>CURRENTLY BUILDING</span>
        </div>
      </div>

      {/* Real-time Screen Time Stats Cards */}
      <div className="grid grid-cols-2 gap-2.5 mb-3">
        <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
          <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1 mb-1">
            <Clock className="w-3 h-3 text-cyan-400" />
            <span>Total Screen Time</span>
          </div>
          <div className="text-lg font-bold font-heading text-white">4h 28m</div>
          <div className="text-[9px] text-cyan-400 font-mono mt-0.5">-12% vs yesterday</div>
        </div>

        <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5">
          <div className="text-[10px] font-mono text-slate-400 flex items-center gap-1 mb-1">
            <Activity className="w-3 h-3 text-purple-400" />
            <span>Productive Usage</span>
          </div>
          <div className="text-lg font-bold font-heading text-purple-300">82%</div>
          <div className="text-[9px] text-purple-400 font-mono mt-0.5">High Focus Rate</div>
        </div>
      </div>

      {/* Interactive Usage Graph Mock */}
      <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/20">
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-2">
          <span>Real-time Usage Trend</span>
          <div className="flex items-center gap-1">
            {['Today', 'Week'].map((r) => (
              <button
                key={r}
                onClick={() => setActiveRange(r)}
                className={`px-1.5 py-0.5 rounded text-[9px] ${
                  activeRange === r ? 'bg-cyan-500 text-slate-950 font-bold' : 'text-slate-400'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Bar Graph */}
        <div className="flex items-end justify-between h-14 pt-2 px-1">
          {[40, 65, 30, 85, 95, 55, 70].map((h, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1 w-full">
              <div
                style={{ height: `${h}%` }}
                className={`w-2.5 rounded-t-sm transition-all duration-500 ${
                  idx === 4
                    ? 'bg-gradient-to-t from-cyan-500 to-indigo-400 shadow-sm shadow-cyan-400'
                    : 'bg-slate-700/80'
                }`}
              />
              <span className="text-[8px] font-mono text-slate-400">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'][idx]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
