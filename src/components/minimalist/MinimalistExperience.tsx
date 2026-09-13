import React from 'react';
import { experienceData } from '../../data/portfolioData';

export const MinimalistExperience: React.FC = () => {
  return (
    <section id="experience" className="py-8 border-t border-neutral-200">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-900">
          Experience
        </h2>
        <span className="text-xs font-mono text-neutral-500">
          Career Progression
        </span>
      </div>

      <div className="space-y-6">
        {experienceData.map((exp, idx) => (
          <div key={idx} className="pb-4 border-b border-neutral-100 last:border-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h3 className="text-base sm:text-lg font-semibold text-neutral-900">
                {exp.role}
              </h3>
              <span className="text-xs sm:text-sm font-mono text-neutral-500">{exp.period}</span>
            </div>

            <div className="text-sm font-medium text-neutral-600 mb-2">
              {exp.organization} · <span className="font-normal text-neutral-500">{exp.location}</span>
            </div>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
              {exp.summary || exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MinimalistExperience;
