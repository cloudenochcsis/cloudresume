import React from 'react';
import { educationData } from '../../data/portfolioData';

export const MinimalistEducation: React.FC = () => {
  return (
    <section id="education" className="py-8">
      <div className="flex items-baseline justify-between border-b border-neutral-200 pb-2 mb-6">
        <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-900">
          Education
        </h2>
        <span className="text-xs font-mono text-neutral-500">
          Academic Background
        </span>
      </div>

      <div className="space-y-6">
        {educationData.map((edu, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 sm:gap-4">
            <div className="flex-grow">
              <h3 className="text-base font-semibold text-neutral-900">
                {edu.degree}
              </h3>
              <p className="text-sm text-neutral-600 mb-1">
                {edu.field}
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MinimalistEducation;
