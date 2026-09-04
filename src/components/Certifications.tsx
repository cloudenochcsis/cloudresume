import React from 'react';
import { certifications } from '../data/portfolioData';
import { CheckVerifiedIcon, ExternalLinkIcon, ShieldCheckIcon } from './icons/Icons';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-14 border-b border-terminal-800 scroll-mt-16" aria-label="Certifications">
      <div className="flex items-center gap-2 mb-2 font-mono text-xs text-electric-400 uppercase tracking-wider">
        <ShieldCheckIcon className="w-4 h-4" />
        <span>Verified Credentials</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
        Industry Certifications
      </h2>
      <p className="text-slate-300 text-sm sm:text-base max-w-3xl mb-8 leading-relaxed">
        Directly verifiable credentials from official certification authorities.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert) => (
          <a
            key={cert.name}
            href={cert.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-xl bg-terminal-900 border border-terminal-800 hover:border-electric-500/50 transition-all shadow-card flex flex-col justify-between no-underline"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-electric-500/10 text-electric-400 border border-electric-500/30 text-xs font-mono font-medium">
                  <CheckVerifiedIcon className="w-3.5 h-3.5" />
                  <span>{cert.badge}</span>
                </span>
                <ExternalLinkIcon className="w-4 h-4 text-slate-500 group-hover:text-electric-400 transition-colors" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-electric-400 transition-colors mb-2 leading-snug">
                {cert.name}
              </h3>
            </div>
            <div className="pt-4 border-t border-terminal-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>{cert.issuer}</span>
              <span className="text-electric-400 group-hover:underline">Verify &rarr;</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
