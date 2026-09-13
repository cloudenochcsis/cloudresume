import React from 'react';
import { skillCategories } from '../../data/portfolioData';

export const MinimalistSkills: React.FC = () => {
  return (
    <section id="skills" className="py-10 border-t border-neutral-200">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-neutral-900">
          Skills & Technologies
        </h2>
        <span className="text-sm font-mono text-neutral-500">
          Technical Breadth
        </span>
      </div>

      <div className="space-y-6">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 pb-4 border-b border-neutral-100 last:border-0">
            <div className="w-full sm:w-52 flex-shrink-0">
              <h3 className="text-base sm:text-lg font-bold text-neutral-900">
                {cat.title}
              </h3>
            </div>
            <div className="flex-grow">
              <p className="text-base text-neutral-700 leading-relaxed">
                {cat.skills.join(', ')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MinimalistSkills;
