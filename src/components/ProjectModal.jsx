import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import MovieRecVisual from './visuals/MovieRecVisual';
import EduTutorVisual from './visuals/EduTutorVisual';
import ScreenPulseVisual from './visuals/ScreenPulseVisual';

const visualMap = {
  ml: MovieRecVisual,
  ai: EduTutorVisual,
  webapp: ScreenPulseVisual,
};

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const VisualComponent = visualMap[project.type] || MovieRecVisual;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl glass-panel rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl shadow-purple-950/40 my-8 overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900/80 hover:bg-purple-600/30 text-slate-400 hover:text-white border border-white/10 transition-colors interactive"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-sm font-mono font-bold text-purple-400">
              {project.number}
            </span>
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
              {project.category}
            </span>
            {project.isBuilding && (
              <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold animate-pulse">
                CURRENTLY BUILDING
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-4">
            {project.fullTitle}
          </h3>

          {/* Graphic Preview */}
          <div className="w-full h-64 sm:h-80 mb-6">
            <VisualComponent />
          </div>

          {/* Detailed Description */}
          <div className="space-y-4 mb-6 text-slate-300 text-sm leading-relaxed">
            <p>{project.description}</p>
          </div>

          {/* Tech Stack List */}
          <div className="mb-8">
            <h4 className="text-xs font-mono uppercase text-slate-400 mb-3 tracking-wider">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-xl bg-slate-900 border border-white/10 text-slate-200 text-xs font-medium flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs flex items-center gap-2 transition-colors interactive shadow-lg shadow-purple-600/30"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl glass-card text-white font-semibold text-xs flex items-center gap-2 border border-white/20 hover:border-purple-400 transition-colors interactive"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : (
              <span className="text-xs font-mono text-slate-400 italic">
                {project.isBuilding ? "Active Development in progress" : "Repository available on GitHub"}
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
