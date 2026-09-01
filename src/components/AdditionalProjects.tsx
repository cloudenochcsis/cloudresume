import React from 'react';
import { additionalProjects } from '../data/portfolioData';
import { ExternalLinkIcon, ServerIcon, LayersIcon, TerminalIcon } from './icons/Icons';
import { useReveal } from '../hooks/useReveal';

export const AdditionalProjects: React.FC = () => {
  const reveal = useReveal();

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'multi-cloud-3tier':
        return <ServerIcon className="w-5 h-5 text-[#0066FF]" />;
      case 'terraform-gitops-aks':
        return <LayersIcon className="w-5 h-5 text-teal-600" />;
      case 'cloud-enoch-platform':
      default:
        return <TerminalIcon className="w-5 h-5 text-[#0066FF]" />;
    }
  };

  return (
    <div
      ref={reveal.ref}
      className={`reveal ${reveal.visible ? 'visible' : ''} grid grid-cols-1 lg:grid-cols-3 gap-6`}
    >
      {additionalProjects.map((project) => (
        <div
          key={project.id}
          className="rounded-xl bg-editorial-surface border border-editorial-border hover:border-editorial-darkBorder shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between overflow-hidden"
        >
          {/* Card Top / Preview Header */}
          <div className="p-6 border-b border-editorial-border bg-editorial-bg">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-editorial-surface border border-editorial-border shadow-2xs">
                {getProjectIcon(project.id)}
              </div>
              <span className="text-[11px] font-mono text-editorial-caption font-semibold uppercase">
                {project.id === 'multi-cloud-3tier' ? 'Multi-Cloud IaC' : project.id === 'terraform-gitops-aks' ? 'Azure GitOps' : 'DevOps System'}
              </span>
            </div>

            <h4 className="text-lg font-bold text-editorial-text tracking-tight mb-1">
              {project.title}
            </h4>
            {project.id === 'cloud-enoch-platform' && (
              <span className="text-xs font-mono text-[#0066FF] font-medium">
                This Site &mdash; Continuous Delivery Artifact
              </span>
            )}

            {/* Architecture Flow Badge */}
            <div className="mt-3 p-2.5 rounded bg-editorial-surface border border-editorial-border font-mono text-[11px] text-editorial-caption">
              {project.architectureSummary}
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
            <div>
              {/* Problem */}
              <div className="mb-3">
                <span className="text-[11px] font-mono font-bold text-editorial-caption uppercase tracking-wider block mb-1">
                  Problem
                </span>
                <p className="text-xs text-editorial-subtext leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* Approach */}
              <div className="mb-3">
                <span className="text-[11px] font-mono font-bold text-editorial-caption uppercase tracking-wider block mb-1">
                  Approach
                </span>
                <p className="text-xs text-editorial-subtext leading-relaxed">
                  {project.approach}
                </p>
              </div>

              {/* What the project proves */}
              <div className="p-3 rounded-lg bg-editorial-bg border border-editorial-border">
                <span className="text-[11px] font-mono font-semibold text-editorial-text block mb-0.5">
                  Demonstrates:
                </span>
                <p className="text-xs text-editorial-caption leading-relaxed">
                  {project.demonstrates}
                </p>
              </div>
            </div>

            {/* Tags and Links */}
            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-editorial-muted text-editorial-caption border border-editorial-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-3 border-t border-editorial-border flex flex-wrap items-center gap-3">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0066FF] hover:text-[#0052D6] transition-colors no-underline"
                  >
                    <span>{link.label}</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdditionalProjects;
