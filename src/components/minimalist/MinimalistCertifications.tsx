import React from 'react';
import { certifications } from '../../data/portfolioData';

export const MinimalistCertifications: React.FC = () => {
  return (
    <section id="certifications" className="py-8 border-t border-neutral-200">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-900">
          Certifications & Credentials
        </h2>
        <span className="text-xs font-mono text-neutral-500">
          Verified Credentials
        </span>
      </div>

      <div className="space-y-4">
        {certifications.map((cert, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-neutral-100 last:border-0">
            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-2 mb-0.5">
                <h3 className="text-base sm:text-lg font-semibold text-neutral-900">
                  {cert.name}
                </h3>
                <span className="inline-block text-xs font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 border border-neutral-200">
                  {cert.badge}
                </span>
              </div>
              <p className="text-sm text-neutral-600">
                {cert.issuer}
              </p>
            </div>

            <div className="text-xs sm:text-sm font-mono">
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 hover:text-blue-600 underline underline-offset-2"
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
