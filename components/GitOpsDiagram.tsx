import React from 'react';

export const GitOpsDiagram: React.FC = () => {
  return (
    <div className="w-full rounded-xl bg-terminal-950 border border-terminal-800 p-5 font-mono text-xs shadow-card">
      <div className="flex items-center justify-between border-b border-terminal-800 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="text-slate-400 text-[11px] ml-2 font-medium">pipeline-architecture.svg</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">ArgoCD In Sync</span>
        </div>
      </div>

      {/* Responsive Pipeline Diagram */}
      <div className="relative py-2">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 relative z-10">
          {/* Step 1: Terraform */}
          <div className="rounded-lg bg-terminal-900 border border-purple-500/40 p-3.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] text-purple-400 font-bold uppercase tracking-wider">01 • IaC</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30">AWS</span>
              </div>
              <div className="text-sm font-bold text-white mb-1">Terraform</div>
              <p className="text-[11px] text-slate-400 leading-tight">
                VPC, multi-AZ subnets, security groups &amp; EKS control plane
              </p>
            </div>
            <div className="text-[10px] text-purple-400 mt-2.5 pt-2 border-t border-terminal-800 font-mono">
              Remote S3 State
            </div>
          </div>

          {/* Step 2: EKS */}
          <div className="rounded-lg bg-terminal-900 border border-orange-500/40 p-3.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] text-orange-400 font-bold uppercase tracking-wider">02 • Platform</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-500/10 text-orange-300 border border-orange-500/30">K8s</span>
              </div>
              <div className="text-sm font-bold text-white mb-1">AWS EKS</div>
              <p className="text-[11px] text-slate-400 leading-tight">
                Managed node groups, autoscaling, RBAC, CoreDNS &amp; ALB Ingress
              </p>
            </div>
            <div className="text-[10px] text-orange-400 mt-2.5 pt-2 border-t border-terminal-800 font-mono">
              Cluster Runtime
            </div>
          </div>

          {/* Step 3: CircleCI */}
          <div className="rounded-lg bg-terminal-900 border border-emerald-500/40 p-3.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">03 • CI Engine</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">Automated</span>
              </div>
              <div className="text-sm font-bold text-white mb-1">CircleCI</div>
              <p className="text-[11px] text-slate-400 leading-tight">
                Unit test execution, security linting &amp; build trigger on commit
              </p>
            </div>
            <div className="text-[10px] text-emerald-400 mt-2.5 pt-2 border-t border-terminal-800 font-mono">
              Green Pipeline
            </div>
          </div>

          {/* Step 4: Docker */}
          <div className="rounded-lg bg-terminal-900 border border-blue-500/40 p-3.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">04 • Artifact</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-300 border border-blue-500/30">OCI</span>
              </div>
              <div className="text-sm font-bold text-white mb-1">Docker</div>
              <p className="text-[11px] text-slate-400 leading-tight">
                Multi-stage container packaging with immutable SHA digest tag
              </p>
            </div>
            <div className="text-[10px] text-blue-400 mt-2.5 pt-2 border-t border-terminal-800 font-mono">
              ECR / Registry
            </div>
          </div>

          {/* Step 5: Argo CD */}
          <div className="rounded-lg bg-terminal-900 border border-cyan-500/40 p-3.5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider">05 • GitOps</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">Reconcile</span>
              </div>
              <div className="text-sm font-bold text-white mb-1">Argo CD</div>
              <p className="text-[11px] text-slate-400 leading-tight">
                Continuous sync from Git manifest repo directly into EKS pods
              </p>
            </div>
            <div className="text-[10px] text-cyan-400 mt-2.5 pt-2 border-t border-terminal-800 font-mono">
              Zero-Drift Sync
            </div>
          </div>
        </div>

        {/* SVG Flow Connector Arrows for Medium/Large Screens */}
        <div className="hidden sm:block mt-3 pt-2">
          <div className="flex items-center justify-between text-slate-400 px-4 text-[11px]">
            <span>Terraform</span>
            <span className="text-purple-400 font-bold">&rarr; provisions &rarr;</span>
            <span>AWS EKS</span>
            <span className="text-orange-400 font-bold">&larr; synchronizes &larr;</span>
            <span>Argo CD</span>
            <span className="text-cyan-400 font-bold">&larr; updates &larr;</span>
            <span>CircleCI &amp; Docker</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitOpsDiagram;
