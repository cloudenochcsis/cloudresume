import React from 'react';
import { blogPosts } from '../data/portfolioData';
import { BookOpenIcon, ExternalLinkIcon } from './icons/Icons';

export const BlogPreview: React.FC = () => {
  return (
    <section id="writing" className="py-14 border-b border-terminal-800 scroll-mt-16" aria-label="Technical Writing">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 font-mono text-xs text-electric-400 uppercase tracking-wider">
          <BookOpenIcon className="w-4 h-4" />
          <span>Technical Publications</span>
        </div>
        <a
          href="https://cloudenoch.hashnode.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-electric-400 hover:text-white flex items-center gap-1.5 transition-colors no-underline"
        >
          <span>All posts on Hashnode</span>
          <ExternalLinkIcon className="w-3.5 h-3.5" />
        </a>
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
        Infrastructure Writing &amp; Architecture Guides
      </h2>
      <p className="text-slate-300 text-sm sm:text-base max-w-3xl mb-8 leading-relaxed">
        Real-world tutorials, postmortems, and technical explorations covering Kubernetes, declarative GitOps pipelines, and cloud networking.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {blogPosts.map((post) => (
          <a
            key={post.slug}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 rounded-xl bg-terminal-900 border border-terminal-800 hover:border-electric-500/50 transition-all shadow-card flex flex-col justify-between no-underline"
          >
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-electric-400 transition-colors mb-2 leading-snug">
                {post.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                {post.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-terminal-800 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded bg-terminal-950 border border-terminal-800 text-[10px] font-mono text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <ExternalLinkIcon className="w-4 h-4 text-slate-500 group-hover:text-electric-400 transition-colors" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BlogPreview;
