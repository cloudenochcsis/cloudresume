import React from 'react';
import { featuredProject } from '../data/portfolioData';
import { ExternalLinkIcon, LayersIcon, TerminalIcon, CpuChipIcon } from './icons/Icons';
import { useReveal } from '../hooks/useReveal';

export const FeaturedProject: React.FC = () => {
  const reveal = useReveal();

  return (
    <article
      ref={reveal.ref}
      aria-labelledby="featured-project-title"
      className={`reveal ${reveal.visible ? 'visible' : ''} mb-12 rounded-xl bg-editorial-surface border border-editorial-border shadow-card overflow-hidden`}
    >
      {/* Editorial Header Strip */}
      <div className="border-b border-editorial-border bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0066FF] text-white text-xs font-mono font-semibold uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            {featuredProject.eyebrow}
          </span>
          <span className="text-xs font-mono text-slate-300">
            Microservices • Kubernetes • ArgoCD • OTel
          </span>
        </div>
        <h3 id="featured-project-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
          {featuredProject.title}
        </h3>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
          {featuredProject.subtitle}
        </p>
      </div>

      <div className="p-6 sm:p-8 lg:p-10 space-y-8">
        {/* Section: The Engineering Challenge */}
        <div>
          <h4 className="text-xs font-mono font-semibold text-editorial-caption uppercase tracking-wider mb-2">
            The Engineering Challenge
          </h4>
          <p className="text-editorial-subtext text-base leading-relaxed">
            {featuredProject.challenge}
          </p>
        </div>

        {/* Section: Responsive Architecture Diagram (SVG / HTML) */}
        <div className="p-5 sm:p-6 rounded-xl bg-editorial-bg border border-editorial-border">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-editorial-border">
            <div className="flex items-center gap-2">
              <LayersIcon className="w-4 h-4 text-[#0066FF]" />
              <span className="text-xs font-mono font-bold text-editorial-text uppercase tracking-wider">
                System Architecture &amp; Telemetry Topology
              </span>
            </div>
            <span className="text-[11px] font-mono text-editorial-caption hidden sm:inline">
              Kubernetes + ArgoCD + OpenTelemetry
            </span>
          </div>

          {/* Responsive Architecture Flow */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Box 1: Git Repository & ArgoCD */}
            <div className="p-4 rounded-lg bg-editorial-surface border border-editorial-border flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono text-[#0066FF] font-semibold mb-1">DECLARATIVE SOURCE</div>
                <div className="text-sm font-bold text-editorial-text mb-2">GitOps Control Plane</div>
                <p className="text-xs text-editorial-caption leading-relaxed">
                  Git repository holds desired cluster manifests. ArgoCD controller continually reconciles drift.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-editorial-muted text-[11px] font-mono text-teal-600 font-medium">
                Sync Status: Reconciled
              </div>
            </div>

            {/* Box 2: Kubernetes Compute Cluster */}
            <div className="p-4 rounded-lg bg-editorial-surface border border-editorial-border flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono text-[#0066FF] font-semibold mb-1">COMPUTE WORKLOADS</div>
                <div className="text-sm font-bold text-editorial-text mb-2">Kubernetes Pods</div>
                <p className="text-xs text-editorial-caption leading-relaxed">
                  Microservices instrumented with OpenTelemetry SDK. Automatic W3C trace context injection.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-editorial-muted text-[11px] font-mono text-editorial-text font-medium">
                Multi-service mesh
              </div>
            </div>

            {/* Box 3: OpenTelemetry Collector */}
            <div className="p-4 rounded-lg bg-editorial-surface border border-editorial-border flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono text-teal-600 font-semibold mb-1">TELEMETRY PIPELINE</div>
                <div className="text-sm font-bold text-editorial-text mb-2">OTel Collector</div>
                <p className="text-xs text-editorial-caption leading-relaxed">
                  DaemonSet buffers OTLP spans, filters attributes, and exports trace batches to observability storage.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-editorial-muted text-[11px] font-mono text-emerald-600 font-medium">
                OTLP gRPC/HTTP Ingest
              </div>
            </div>

            {/* Box 4: Prometheus & Grafana */}
            <div className="p-4 rounded-lg bg-editorial-surface border border-editorial-border flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-mono text-[#0066FF] font-semibold mb-1">OBSERVABILITY BACKENDS</div>
                <div className="text-sm font-bold text-editorial-text mb-2">Grafana &amp; Metrics</div>
                <p className="text-xs text-editorial-caption leading-relaxed">
                  Real-time RED dashboards, alert rules, and correlated trace waterfalls for root-cause discovery.
                </p>
              </div>
              <div className="mt-3 pt-2 border-t border-editorial-muted text-[11px] font-mono text-[#0066FF] font-medium">
                Trace-to-Metric Correlation
              </div>
            </div>
          </div>
        </div>

        {/* Section: Important Technical Decisions */}
        <div>
          <h4 className="text-xs font-mono font-semibold text-editorial-caption uppercase tracking-wider mb-4">
            Architecture &amp; Key Technical Decisions
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {featuredProject.architectureDetails.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-lg bg-editorial-bg border border-editorial-border"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
                  <h5 className="text-sm font-bold text-editorial-text">{item.title}</h5>
                </div>
                <p className="text-xs text-editorial-subtext leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section: What the project demonstrates */}
        <div className="p-5 rounded-xl bg-blue-50/60 border border-blue-100 text-editorial-text">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0066FF] uppercase tracking-wider mb-1">
            <CpuChipIcon className="w-4 h-4 text-[#0066FF]" />
            <span>What this demonstrates</span>
          </div>
          <p className="text-sm text-editorial-subtext leading-relaxed font-medium">
            {featuredProject.demonstrates}
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {featuredProject.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-editorial-muted text-editorial-subtext border border-editorial-border"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons: Application code, Kubernetes manifests, Terraform infrastructure */}
        <div className="pt-4 border-t border-editorial-border flex flex-wrap items-center gap-4">
          <a
            href={featuredProject.links[0].href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View code — Application code"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0066FF] text-white text-sm font-semibold hover:bg-[#0052D6] transition-colors shadow-sm no-underline"
          >
            <TerminalIcon className="w-4 h-4" />
            <span>Application code</span>
            <ExternalLinkIcon className="w-3.5 h-3.5" />
          </a>

          <a
            href={featuredProject.links[1].href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-editorial-surface border border-editorial-darkBorder text-editorial-text text-sm font-semibold hover:border-[#0066FF] hover:text-[#0066FF] transition-colors no-underline"
          >
            <LayersIcon className="w-4 h-4 text-editorial-caption" />
            <span>Kubernetes manifests</span>
            <ExternalLinkIcon className="w-3.5 h-3.5 text-editorial-caption" />
          </a>

          <a
            href={featuredProject.links[2].href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-editorial-surface border border-editorial-darkBorder text-editorial-text text-sm font-semibold hover:border-[#0066FF] hover:text-[#0066FF] transition-colors no-underline"
          >
            <CpuChipIcon className="w-4 h-4 text-editorial-caption" />
            <span>Terraform infrastructure</span>
            <ExternalLinkIcon className="w-3.5 h-3.5 text-editorial-caption" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;
