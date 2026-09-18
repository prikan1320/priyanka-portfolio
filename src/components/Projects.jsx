import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ExternalLink, ArrowRight, Code } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectsList } from '../data/portfolioData';
import MovieRecVisual from './visuals/MovieRecVisual';
import EduTutorVisual from './visuals/EduTutorVisual';
import ScreenPulseVisual from './visuals/ScreenPulseVisual';
import ProjectModal from './ProjectModal';

const visualMap = {
  ml: MovieRecVisual,
  ai: EduTutorVisual,
  webapp: ScreenPulseVisual,
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative bg-slate-950/80 border-t border-b border-white/5">
      {/* Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>Featured Portfolio Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
            Selected <span className="text-gradient-primary">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mt-3">
            Practical applications combining machine learning algorithms, AI models, and modern web interfaces.
          </p>
        </div>

        {/* Projects Cards Column / Grid */}
        <div className="space-y-12">
          {projectsList.map((project, index) => {
            const VisualComponent = visualMap[project.type] || MovieRecVisual;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-purple-500/40 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Content */}
                  <div className={`lg:col-span-6 space-y-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    {/* Number & Category Badge */}
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-extrabold font-heading text-purple-400/80">
                        {project.number}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
                        {project.category}
                      </span>
                      {project.isBuilding && (
                        <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold flex items-center gap-1.5 shadow-sm">
                          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                          <span>CURRENTLY BUILDING</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-sm leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-xl bg-slate-900/90 border border-white/5 text-slate-300 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 pt-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs flex items-center gap-2 shadow-md shadow-purple-600/25 transition-all interactive group/btn"
                      >
                        <span>Project Details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Source"
                          className="p-2.5 rounded-xl bg-slate-900/80 hover:bg-purple-600/20 text-slate-300 hover:text-white border border-white/10 transition-colors interactive"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Custom Interactive Graphic */}
                  <div className={`lg:col-span-6 h-72 sm:h-80 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <VisualComponent />
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Modal View */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
