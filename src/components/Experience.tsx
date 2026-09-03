import React from 'react';
import { experienceData } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';
import { MapPinIcon, CheckVerifiedIcon } from './icons/Icons';

export const Experience: React.FC = () => {
  const reveal = useReveal();

  return (
    <section
      ref={reveal.ref}
      id="experience"
      className={`reveal ${reveal.visible ? 'visible' : ''} scroll-mt-20 py-12 border-b border-editorial-border`}
      aria-label="Professional Experience"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-mono font-semibold tracking-wider text-[#0066FF] uppercase block mb-1">
            Career Progression &amp; Production Track Record
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-editorial-text tracking-tight">
            Experience
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-editorial-caption max-w-md">
          Evidence of reliable cloud infrastructure delivery, automated GitOps releases, and production observability.
        </p>
      </div>

      <div className="relative border-l-2 border-slate-200 ml-3 md:ml-4 pl-6 md:pl-8 space-y-10">
        {experienceData.map((item, index) => (
          <div key={`${item.role}-${index}`} className="relative group">
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-[#0066FF] group-hover:bg-[#0066FF] transition-colors" />

            <div className="rounded-xl bg-editorial-surface border border-editorial-border p-6 shadow-card hover:shadow-card-hover transition-all">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-3 border-b border-editorial-border">
                <div>
                  <h3 className="text-lg font-bold text-editorial-text leading-snug">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-xs text-editorial-caption font-mono">
                    <span className="font-semibold text-editorial-text">{item.organization}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPinIcon className="w-3 h-3 text-editorial-caption" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-blue-50 text-[#0066FF] border border-blue-100">
                    {item.period}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-editorial-muted text-editorial-caption">
                    {item.type}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-editorial-subtext mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Bullet Highlights */}
              <div className="space-y-2 mb-5">
                {item.highlights.map((highlight, hIndex) => (
                  <div key={hIndex} className="flex items-start gap-2.5 text-xs text-editorial-subtext leading-relaxed">
                    <CheckVerifiedIcon className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-editorial-border">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-editorial-muted text-editorial-caption border border-editorial-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
