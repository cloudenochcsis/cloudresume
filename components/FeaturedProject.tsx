import React from 'react';
import { featuredGitOpsProject } from '../data/portfolioData';
import GitOpsDiagram from './GitOpsDiagram';
import { ExternalLinkIcon, GitHubIcon, TerminalIcon } from './icons/Icons';

export const FeaturedProject: React.FC = () => {
  return (
    <section id="projects" className="py-14 border-b border-terminal-800 scroll-mt-16" aria-label="Featured Engineering Project">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 font-mono text-xs text-electric-400 uppercase tracking-wider">
          <TerminalIcon className="w-4 h-4" />
          <span>Flagship Architecture</span>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-electric-500/10 text-electric-400 border border-electric-500/30 font-semibold">
          Featured Case Study
        </span>
      </div>

      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
        {featuredGitOpsProject.title}
      </h2>
      <p className="text-slate-300 text-sm sm:text-base max-w-3xl mb-8 leading-relaxed">
        {featuredGitOpsProject.tagline}
      </p>

      {/* Centerpiece Project Container */}
      <div className="rounded-xl bg-terminal-900 border border-terminal-700/80 p-6 sm:p-8 shadow-card space-y-8">
        {/* Architecture Flow Diagram Component */}
        <div>
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
            System Topology &amp; GitOps Reconciliation Flow
          </div>
          <GitOpsDiagram />
        </div>

        {/* Technical Narrative: Problem vs Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-terminal-800">
          <div>
            <h3 className="text-xs font-mono text-red-400 uppercase tracking-wider font-semibold mb-2">
              The Engineering Challenge
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {featuredGitOpsProject.challenge}
            </p>
          </div>
          <div>
            <h3 className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-semibold mb-2">
              Architectural Solution
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {featuredGitOpsProject.solution || featuredGitOpsProject.gitOpsDetails}
            </p>
          </div>
        </div>

        {/* Outcomes / What it Proves */}
        <div className="pt-4 border-t border-terminal-800">
          <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold mb-3">
            Production Outcomes &amp; Architectural Decisions
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {(featuredGitOpsProject.outcomes || []).map((outcome, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-terminal-950 border border-terminal-800 text-xs text-slate-300 leading-relaxed font-mono flex items-start gap-2.5"
              >
                <span className="text-electric-400 font-bold font-mono">0{idx + 1}.</span>
                <span>{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stack Badges and Action Links */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-terminal-800">
          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {(featuredGitOpsProject.techStack || featuredGitOpsProject.tags || []).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-terminal-950 border border-terminal-800 text-[11px] font-mono text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={featuredGitOpsProject.hashnodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-electric-500 hover:bg-electric-600 text-white text-xs font-semibold transition-colors shadow-glow no-underline"
            >
              <span>Hashnode Writeup</span>
              <ExternalLinkIcon className="w-3.5 h-3.5" />
            </a>

            <a
              href={featuredGitOpsProject.githubK8sUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-terminal-950 border border-terminal-800 hover:border-slate-700 text-slate-200 text-xs font-mono transition-colors no-underline"
            >
              <GitHubIcon className="w-3.5 h-3.5 text-slate-400" />
              <span>k8s Manifests</span>
            </a>

            <a
              href={featuredGitOpsProject.githubTerraformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-terminal-950 border border-terminal-800 hover:border-slate-700 text-slate-200 text-xs font-mono transition-colors no-underline"
            >
              <GitHubIcon className="w-3.5 h-3.5 text-slate-400" />
              <span>Terraform Code</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
