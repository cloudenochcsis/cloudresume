import React from 'react';
import { writingAndResearch } from '../data/portfolioData';
import { ExternalLinkIcon, BookOpenIcon, AcademicCapIcon, ArrowRightIcon } from './icons/Icons';
import { useReveal } from '../hooks/useReveal';

export const WritingResearch: React.FC = () => {
  const reveal = useReveal();

  return (
    <section
      ref={reveal.ref}
      id="writing"
      className={`reveal ${reveal.visible ? 'visible' : ''} scroll-mt-20 py-12 border-b border-editorial-border`}
      aria-label="Writing and Research"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-mono font-semibold tracking-wider text-[#0066FF] uppercase block mb-1">
            Thought Leadership &amp; Applied Inquiry
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-editorial-text tracking-tight">
            Writing &amp; Research
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-editorial-caption max-w-md">
          Connecting hands-on DevOps infrastructure engineering with technical analysis and academic inquiry.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Technical Blog & Articles (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-editorial-border">
              <div className="flex items-center gap-2">
                <BookOpenIcon className="w-4 h-4 text-[#0066FF]" />
                <h3 className="text-sm font-bold text-editorial-text font-mono uppercase tracking-wider">
                  Technical Publications
                </h3>
              </div>
              <a
                href={writingAndResearch.blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#0066FF] hover:underline"
              >
                <span>Visit Blog</span>
                <ExternalLinkIcon className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-4">
              {writingAndResearch.featuredArticles.map((article) => (
                <a
                  key={article.title}
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 rounded-xl bg-editorial-surface border border-editorial-border hover:border-[#0066FF]/40 shadow-card hover:shadow-card-hover transition-all no-underline"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-mono text-editorial-caption">
                      {article.readTime}
                    </span>
                    <ExternalLinkIcon className="w-3.5 h-3.5 text-editorial-caption group-hover:text-[#0066FF] group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-editorial-text group-hover:text-[#0066FF] transition-colors leading-snug mb-1">
                    {article.title}
                  </h4>
                  <p className="text-xs text-editorial-subtext leading-relaxed mb-3">
                    {article.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-editorial-muted text-editorial-caption"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3">
            <a
              href={writingAndResearch.blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#0066FF] hover:text-[#0052D6] transition-colors"
            >
              <span>Read all articles on Cloud Enoch Hashnode</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Doctoral Research (5 cols) */}
        <div className="lg:col-span-5">
          <div className="h-full rounded-xl bg-editorial-surface border border-editorial-border p-6 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-editorial-border">
                <AcademicCapIcon className="w-5 h-5 text-teal-600" />
                <div>
                  <h3 className="text-sm font-bold text-editorial-text font-mono uppercase tracking-wider">
                    Doctoral Research
                  </h3>
                </div>
              </div>

              <div className="mb-4">
                <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-teal-50 text-teal-700 border border-teal-100">
                  {writingAndResearch.research.degree}
                </span>
                <h4 className="text-base font-bold text-editorial-text mt-2.5 leading-snug">
                  {writingAndResearch.research.title}
                </h4>
                <div className="text-xs font-mono text-editorial-caption mt-1">
                  {writingAndResearch.research.institution} • {writingAndResearch.research.location}
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-editorial-subtext leading-relaxed">
                <p>
                  {writingAndResearch.research.plainLanguageExplanation}
                </p>
                <div className="p-3.5 rounded-lg bg-editorial-bg border border-editorial-border">
                  <span className="font-mono text-xs font-semibold text-editorial-text block mb-1">
                    Connection to DevOps Practice:
                  </span>
                  <p className="text-xs text-editorial-caption leading-relaxed">
                    {writingAndResearch.research.devOpsConnection}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-editorial-border flex items-center justify-between text-[11px] font-mono text-editorial-caption">
              <span>Primary Focus: Cloud DevOps</span>
              <span className="text-teal-600 font-semibold">UCT Dept. of Information Systems</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WritingResearch;
