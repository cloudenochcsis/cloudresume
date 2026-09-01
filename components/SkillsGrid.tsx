import React from 'react';
import { skillsGrid } from '../data/portfolioData';
import { LayersIcon } from './icons/Icons';

export const SkillsGrid: React.FC = () => {
  return (
    <section id="skills" className="py-14 border-b border-terminal-800 scroll-mt-16" aria-label="Technical Skills and Stack">
      <div className="flex items-center gap-2 mb-2 font-mono text-xs text-electric-400 uppercase tracking-wider">
        <LayersIcon className="w-4 h-4" />
        <span>Technical Breadth</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
        Core Infrastructure &amp; Tooling Stack
      </h2>
      <p className="text-slate-300 text-sm sm:text-base max-w-3xl mb-8 leading-relaxed">
        Production-tested technologies across AWS cloud architecture, container orchestration, GitOps automation, and zero-trust networking.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillsGrid.map((group) => (
          <div
            key={group.category}
            className="p-5 rounded-xl bg-terminal-900 border border-terminal-800 hover:border-terminal-700 transition-colors shadow-card flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-electric-400" />
                <h3 className="text-sm font-bold text-white font-mono">
                  {group.category}
                </h3>
              </div>
              <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                {group.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-terminal-800">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 rounded bg-terminal-950 border border-terminal-800 text-slate-300 text-[11px] font-mono hover:text-white hover:border-slate-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsGrid;
