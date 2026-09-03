import React from 'react';
import { experienceTimeline } from '../data/portfolioData';
import { CalendarIcon, TerminalIcon } from './icons/Icons';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-14 border-b border-terminal-800 scroll-mt-16" aria-label="Professional Experience">
      <div className="flex items-center gap-2 mb-2 font-mono text-xs text-electric-400 uppercase tracking-wider">
        <TerminalIcon className="w-4 h-4" />
        <span>Career Progression</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
        Professional Experience &amp; Engineering Track Record
      </h2>
      <p className="text-slate-300 text-sm sm:text-base max-w-3xl mb-8 leading-relaxed">
        Proven delivery in leading multi-tenant cloud environments, automating Kubernetes workloads, and authoring upstream open-source reliability tools.
      </p>

      <div className="relative pl-6 sm:pl-8 border-l border-terminal-800 space-y-10 ml-2">
        {experienceTimeline.map((item, idx) => (
          <div key={`${item.company}-${idx}`} className="relative group">
            {/* Timeline Node Marker */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-terminal-950 border-2 border-electric-500 group-hover:bg-electric-500 transition-colors" />

            <div className="rounded-xl bg-terminal-900 border border-terminal-800 p-6 shadow-card hover:border-terminal-700 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold text-electric-400 font-mono">
                    {item.company}
                    <span className="text-slate-500 font-normal ml-2">• {item.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <CalendarIcon className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed font-sans">
                {item.summary}
              </p>

              {/* Outcome-oriented Bullets */}
              <ul className="space-y-2 mb-4">
                {(item.bullets || item.highlights || []).map((bullet, bIdx) => (
                  <li key={bIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2 leading-relaxed">
                    <span className="text-electric-400 font-mono mt-0.5">&bull;</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-terminal-800">
                {(item.technologies || item.skills || []).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded bg-terminal-950 border border-terminal-800 text-[11px] font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
