import React from 'react';
import { certifications } from '../../data/portfolioData';

export const MinimalistCertifications: React.FC = () => {
  return (
    <section id="certifications" className="py-10 border-t border-neutral-200">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-neutral-900">
          Certifications & Credentials
        </h2>
        <span className="text-sm font-mono text-neutral-500">
          Verified Credentials
        </span>
      </div>

      <div className="space-y-6">
        {certifications.map((cert, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-neutral-100 last:border-0">
            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-2.5 mb-1">
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
                  {cert.name}
                </h3>
                <span className="inline-block text-xs sm:text-sm font-mono px-2.5 py-0.5 rounded bg-neutral-100 text-neutral-700 border border-neutral-200">
                  {cert.badge}
                </span>
              </div>
              <p className="text-base text-neutral-600">
                {cert.issuer}
              </p>
            </div>

            <div className="text-sm sm:text-base font-mono">
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 hover:text-blue-600 underline underline-offset-4"
              >
                [verify credential]
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MinimalistCertifications;
