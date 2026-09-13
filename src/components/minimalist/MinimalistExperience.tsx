import React from 'react';
import { experienceData } from '../../data/portfolioData';

export const MinimalistExperience: React.FC = () => {
  return (
    <section id="experience" className="py-8">
      <div className="flex items-baseline justify-between border-b border-neutral-200 pb-2 mb-6">
        <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-900">
          Experience
        </h2>
        <span className="text-xs font-mono text-neutral-500">
          Career Progression
        </span>
      </div>

      <div className="space-y-8">
        {experienceData.map((exp, idx) => (
          <div key={idx} className="pb-4 border-b border-neutral-100 last:border-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h3 className="text-base font-semibold text-neutral-900">
                {exp.role}
              </h3>
              <span className="text-xs font-mono text-neutral-500">{exp.period}</span>
            </div>

            <div className="text-sm font-medium text-neutral-600 mb-2">
              {exp.organization} · <span className="font-normal text-neutral-500">{exp.location}</span>
            </div>

            <p className="text-sm text-neutral-700 leading-relaxed mb-3">
              {exp.summary || exp.description}
            </p>

            <ul className="list-disc list-inside text-xs text-neutral-600 space-y-1.5 pl-1">
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
