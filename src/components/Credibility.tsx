import React from 'react';
import { certifications } from '../data/portfolioData';
import { ExternalLinkIcon, CheckVerifiedIcon } from './icons/Icons';
import { useReveal } from '../hooks/useReveal';

export const Credibility: React.FC = () => {
  const reveal = useReveal();

  return (
    <section
      ref={reveal.ref}
      aria-label="Verified Credentials"
      className={`reveal ${reveal.visible ? 'visible' : ''} py-8 border-b border-editorial-border bg-editorial-surface`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono font-semibold tracking-wider text-editorial-caption uppercase">
            Verified Credentials &amp; Open Source
          </span>
          <span className="text-xs text-editorial-caption hidden sm:inline">
            Direct credential verification
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-editorial-bg border border-editorial-border hover:border-[#0066FF]/40 hover:bg-white hover:shadow-subtle transition-all duration-200 no-underline flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-blue-50 text-[#0066FF] border border-blue-100">
                    <CheckVerifiedIcon className="w-3 h-3 text-[#0066FF]" />
                    {cert.badge}
                  </span>
                  <ExternalLinkIcon className="w-3.5 h-3.5 text-editorial-caption group-hover:text-[#0066FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <h3 className="text-sm font-semibold text-editorial-text group-hover:text-[#0066FF] transition-colors leading-snug">
                  {cert.name}
                </h3>
              </div>
              <div className="text-xs text-editorial-caption mt-3 flex items-center gap-1.5 font-mono">
                <span>{cert.issuer}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credibility;
