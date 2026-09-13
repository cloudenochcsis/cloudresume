import React from 'react';
import { educationData } from '../../data/portfolioData';

export const MinimalistEducation: React.FC = () => {
  return (
    <section id="education" className="py-10 border-t border-neutral-200">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-neutral-900">
          Education
        </h2>
        <span className="text-sm font-mono text-neutral-500">
          Academic Background
        </span>
      </div>

      <div className="space-y-8">
        {educationData.map((edu, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-6">
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-neutral-900 mb-1">
                {edu.degree}
              </h3>
              <p className="text-base font-medium text-neutral-700 mb-1">
                {edu.field}
              </p>
              <p className="text-base text-neutral-600 leading-relaxed">
                {edu.description}
              </p>
            </div>

            {edu.period && (
              <div className="flex-shrink-0 text-sm sm:text-base font-mono text-neutral-500">
                {edu.period}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MinimalistEducation;
