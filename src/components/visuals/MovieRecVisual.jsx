import React, { useState } from 'react';
import { Film, Star, User, Sparkles, Network } from 'lucide-react';

const sampleMovies = [
  { title: "Inception", genre: "Sci-Fi", match: "98%" },
  { title: "Interstellar", genre: "Sci-Fi", match: "95%" },
  { title: "The Dark Knight", genre: "Action", match: "94%" },
  { title: "Pulp Fiction", genre: "Drama", match: "91%" }
];

export default function MovieRecVisual() {
  const [activeMovie, setActiveMovie] = useState(0);

  return (
    <div className="w-full h-full bg-[#0d0f18] rounded-2xl p-4 sm:p-6 border border-purple-500/20 flex flex-col justify-between relative overflow-hidden group">
      {/* Background radial glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-2xl pointer-events-none" />

      {/* Top Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-300">
            <Film className="w-4 h-4" />
          </div>
          <span className="text-xs font-mono font-bold text-white">
            Collaborative Filtering Engine
          </span>
        </div>
        <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded-full border border-purple-500/20">
          Item-Item Matrix
        </span>
      </div>

      {/* Similarity Vector Node Chart */}
      <div className="grid grid-cols-2 gap-2.5 mb-4">
        {sampleMovies.map((movie, idx) => (
          <div
            key={movie.title}
            onClick={() => setActiveMovie(idx)}
            className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
              activeMovie === idx
                ? 'bg-purple-950/60 border-purple-500/60 text-white shadow-md shadow-purple-900/30'
                : 'bg-slate-900/60 border-white/5 text-slate-400 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold font-heading truncate">{movie.title}</span>
              <span className="text-[10px] font-mono text-purple-300 flex items-center gap-0.5">
                <Star className="w-2.5 h-2.5 fill-purple-400 text-purple-400" />
                {movie.match}
              </span>
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>{movie.genre}</span>
              <span>Vector Score</span>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended Output Banner */}
      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-300 animate-pulse" />
          <div>
            <div className="text-[10px] font-mono text-slate-400 uppercase">Top Suggestion</div>
            <div className="text-xs font-bold text-purple-200 font-heading">
              {sampleMovies[activeMovie].title} ({sampleMovies[activeMovie].match} similarity)
            </div>
          </div>
        </div>
        <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300">
          <Network className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
}
