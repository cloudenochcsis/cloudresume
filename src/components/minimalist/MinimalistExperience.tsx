import React from 'react';
import { experienceData } from '../../data/portfolioData';

export const MinimalistExperience: React.FC = () => {
  return (
    <section id="experience" className="py-10 border-t border-neutral-200">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-neutral-900">
          Experience
        </h2>
        <span className="text-sm font-mono text-neutral-500">
          Career Progression
        </span>
      </div>

      <div className="space-y-10">
        {experienceData.map((exp, idx) => (
          <div key={idx} className="pb-6 border-b border-neutral-100 last:border-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h3 className="text-xl font-bold text-neutral-900">
                {exp.role}
              </h3>
              <span className="text-sm sm:text-base font-mono text-neutral-500">{exp.period}</span>
            </div>

            <div className="text-base sm:text-lg font-medium text-neutral-700 mb-3">
              {exp.organization} · <span className="font-normal text-neutral-500">{exp.location}</span>
            </div>

            <p className="text-base sm:text-lg text-neutral-800 leading-relaxed mb-4">
              {exp.summary || exp.description}
            </p>

            <ul className="list-disc list-inside text-base text-neutral-700 space-y-2 pl-1">
              {(exp.bullets || exp.highlights).slice(0, 4).map((bullet, bIdx) => (
                <li key={bIdx} className="leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MinimalistExperience;
