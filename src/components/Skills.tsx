import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';
import { LayersIcon } from './icons/Icons';

export const Skills: React.FC = () => {
  const reveal = useReveal();

  return (
    <section
      ref={reveal.ref}
      id="skills"
      className={`reveal ${reveal.visible ? 'visible' : ''} scroll-mt-20 py-12 border-b border-editorial-border`}
      aria-label="Technical Skills and Capabilities"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-mono font-semibold tracking-wider text-[#0066FF] uppercase block mb-1">
            Grouped Capabilities &amp; Tooling
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-editorial-text tracking-tight">
            Skills &amp; Technologies
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-editorial-caption max-w-md">
          Production competencies organized by engineering domain. No artificial ratings or arbitrary percentages.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="p-6 rounded-xl bg-editorial-surface border border-editorial-border shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1 rounded bg-blue-50 text-[#0066FF]">
                  <LayersIcon className="w-3.5 h-3.5" />
                </div>
                <h3 className="text-sm font-bold text-editorial-text uppercase tracking-wider font-mono">
                  {category.title}
                </h3>
              </div>
              <p className="text-xs text-editorial-caption leading-relaxed mb-4">
                {category.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-3 border-t border-editorial-border">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono font-medium px-3 py-1.5 rounded-lg bg-editorial-bg text-editorial-text border border-editorial-border hover:border-[#0066FF]/40 hover:text-[#0066FF] transition-colors"
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

export default Skills;
