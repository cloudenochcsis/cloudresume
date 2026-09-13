import React from 'react';
import { educationData } from '../../data/portfolioData';

export const MinimalistEducation: React.FC = () => {
  return (
    <section id="education" className="py-8 border-t border-neutral-200">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-900">
          Education
        </h2>
        <span className="text-xs font-mono text-neutral-500">
          Academic Background
        </span>
      </div>

      <div className="space-y-6">
        {educationData.map((edu, idx) => (
          <div key={idx} className="pb-4 border-b border-neutral-100 last:border-0">
            <h3 className="text-base sm:text-lg font-semibold text-neutral-900 mb-1.5">
              {edu.degree}
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MinimalistEducation;
