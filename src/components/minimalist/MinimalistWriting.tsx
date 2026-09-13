import React from 'react';
import { writingAndResearch } from '../../data/portfolioData';

export const MinimalistWriting: React.FC = () => {
  return (
    <section id="writing" className="py-10 border-t border-neutral-200">
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wider text-neutral-900">
          Writing & Publications
        </h2>
        <span className="text-sm font-mono text-neutral-500">
          Technical Publications
        </span>
      </div>

      <div className="space-y-6">
        {writingAndResearch.featuredArticles.map((article, idx) => (
          <div key={idx} className="pb-4 border-b border-neutral-100 last:border-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900">
                {article.title}
              </h3>
              <span className="text-sm font-mono text-neutral-500 flex-shrink-0">
                {article.date} · {article.readTime}
              </span>
            </div>

            <p className="text-base text-neutral-700 leading-relaxed mb-3">
              {article.description || article.excerpt}
            </p>

            <div className="text-sm sm:text-base font-mono">
              <a
                href={article.href || article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 hover:text-blue-600 underline underline-offset-4"
              >
                [read article on Hashnode]
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MinimalistWriting;
