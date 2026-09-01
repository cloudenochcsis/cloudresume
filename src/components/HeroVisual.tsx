import React from 'react';
import { GitBranchIcon, TerminalIcon, LayersIcon, ActivityIcon, CheckVerifiedIcon } from './icons/Icons';

export const HeroVisual: React.FC = () => {
  return (
    <div
      className="w-full max-w-lg lg:max-w-none bg-[#0F1522]/90 border border-slate-800 rounded-xl p-5 sm:p-6 shadow-2xl backdrop-blur-sm text-left relative overflow-hidden"
      aria-label="Infrastructure delivery pipeline visual"
    >
      {/* Background subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#0066FF 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      />

      {/* Pipeline Status Header */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="font-mono text-xs text-slate-300 font-semibold tracking-wide">
            GITOPS PIPELINE <span className="text-emerald-400 font-normal">● HEALTHY</span>
          </span>
        </div>
        <div className="font-mono text-[11px] text-slate-400 bg-slate-900/90 px-2.5 py-1 rounded border border-slate-800">
          commit: <span className="text-[#0066FF]">main@auto-sync</span>
        </div>
      </div>

      {/* 4-Stage Delivery Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 relative">
        {/* Stage 1: Code */}
        <div className="group p-3.5 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-[#0066FF]/40 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded bg-[#0066FF]/10 text-[#0066FF]">
                <GitBranchIcon className="w-4 h-4" />
              </div>
              <span className="font-semibold text-xs text-slate-200 uppercase tracking-wider font-mono">
                1. Code & Spec
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <CheckVerifiedIcon className="w-3 h-3" /> PR Merged
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-snug">
            Declarative Terraform &amp; K8s manifests in Git
          </p>
        </div>

        {/* Stage 2: Build & Test */}
        <div className="group p-3.5 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-[#0066FF]/40 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded bg-teal-500/10 text-teal-400">
                <TerminalIcon className="w-4 h-4" />
              </div>
              <span className="font-semibold text-xs text-slate-200 uppercase tracking-wider font-mono">
                2. CI & Container
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <CheckVerifiedIcon className="w-3 h-3" /> Verified
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-snug">
            Automated testing, security scan &amp; Docker build
          </p>
        </div>

        {/* Stage 3: GitOps Deploy */}
        <div className="group p-3.5 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-[#0066FF]/40 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded bg-[#0066FF]/10 text-[#0066FF]">
                <LayersIcon className="w-4 h-4" />
              </div>
              <span className="font-semibold text-xs text-slate-200 uppercase tracking-wider font-mono">
                3. GitOps Sync
              </span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
              <CheckVerifiedIcon className="w-3 h-3" /> Synced
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-snug">
            ArgoCD reconciles state on Kubernetes clusters
          </p>
        </div>

        {/* Stage 4: Observe */}
        <div className="group p-3.5 rounded-lg bg-slate-900/70 border border-slate-800 hover:border-teal-500/40 transition-colors">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded bg-teal-500/10 text-teal-400">
                <ActivityIcon className="w-4 h-4" />
              </div>
              <span className="font-semibold text-xs text-slate-200 uppercase tracking-wider font-mono">
                4. Observe
              </span>
            </div>
            <span className="text-[10px] font-mono text-teal-400">
              Live
            </span>
          </div>
          <p className="text-xs text-slate-400 leading-snug">
            OpenTelemetry distributed tracing &amp; Grafana alerts
          </p>
        </div>
      </div>

      {/* Bottom Telemetry Bar */}
      <div className="mt-4 pt-3.5 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-center font-mono">
        <div className="bg-slate-950/60 p-2 rounded border border-slate-800/60">
          <div className="text-[10px] text-slate-400 uppercase tracking-wider">Tracing</div>
          <div className="text-xs font-semibold text-emerald-400 mt-0.5">100% Ingested</div>
        </div>
        <div className="bg-slate-950/60 p-2 rounded border border-slate-800/60">
          <div className="text-[10px] text-slate-400 uppercase tracking-wider">Cluster Drift</div>
          <div className="text-xs font-semibold text-[#0066FF] mt-0.5">0.0% Drift</div>
        </div>
        <div className="bg-slate-950/60 p-2 rounded border border-slate-800/60">
          <div className="text-[10px] text-slate-400 uppercase tracking-wider">Deploy State</div>
          <div className="text-xs font-semibold text-teal-400 mt-0.5">Automated</div>
        </div>
      </div>
    </div>
  );
};
