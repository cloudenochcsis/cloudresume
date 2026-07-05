import React from 'react';
import { useReveal } from '../hooks/useReveal';

const featured = {
  title: 'OpenTelemetry DevOps Platform',
  description:
    'A microservices system running on Kubernetes with a production-grade observability stack — built to deploy, break, and debug like a real production platform.',
  bullets: [
    'GitOps delivery with ArgoCD — cluster state is declared in git, never patched by hand',
    'Distributed tracing with OpenTelemetry across every service boundary',
    'Grafana dashboards and metrics pipelines for live system visibility',
    'Cluster and infrastructure provisioned with Terraform, manifests split into their own repo for clean GitOps',
  ],
  demonstrates:
    'Production-grade Kubernetes, GitOps workflow design, and end-to-end observability — the day-two skills, not just the deploy.',
  links: [
    { label: 'View code', href: 'https://github.com/cloudenochcsis/opentelemetry-devops-project' },
    { label: 'K8s manifests', href: 'https://github.com/cloudenochcsis/opentelemetry-k8s-manifests' },
    { label: 'Terraform', href: 'https://github.com/cloudenochcsis/opentelemetry-k8s-terraform' },
  ],
  tags: ['Kubernetes', 'ArgoCD', 'OpenTelemetry', 'Grafana', 'Terraform'],
};

const projects = [
  {
    title: 'Multi-Cloud 3-Tier Architecture',
    description:
      'The same production 3-tier pattern — network isolation, load balancing, auto scaling, managed databases — implemented natively on each major cloud with Terraform.',
    demonstrates: 'IaC depth that transfers across providers.',
    tags: ['Terraform', 'AWS', 'Azure', 'GCP'],
    gradient: 'from-orange-500/20 via-amber-500/20 to-yellow-500/20',
    icon: '🏛️',
    links: [
      { label: 'AWS', href: 'https://github.com/cloudenochcsis/terraform-aws-3tier-architecture' },
      { label: 'Azure', href: 'https://github.com/cloudenochcsis/terraform-azure-3tier-architecture' },
      { label: 'GCP', href: 'https://github.com/cloudenochcsis/terraform-gcp-3tier-architecture' },
    ],
  },
  {
    title: 'Terraform GitOps for AKS',
    description:
      'GitOps pipeline for Azure Kubernetes Service: Terraform provisions the cluster, ArgoCD reconciles application state from git — no manual kubectl in the deploy path.',
    demonstrates: 'Automated, auditable Kubernetes delivery on Azure.',
    tags: ['Terraform', 'Azure', 'AKS', 'ArgoCD'],
    gradient: 'from-blue-500/20 via-cyan-500/20 to-teal-500/20',
    icon: '🏗️',
    links: [{ label: 'View code', href: 'https://github.com/cloudenochcsis/Terraform-GitOps-for-AKS' }],
  },
  {
    title: 'This Site',
    description:
      'React + FastAPI + MongoDB behind nginx, tested and shipped through a CircleCI pipeline with Docker. The portfolio is itself a DevOps artifact — deployed like production.',
    demonstrates: 'Full-stack delivery: code, pipeline, and infrastructure in one repo.',
    tags: ['React', 'FastAPI', 'CircleCI', 'Docker'],
    gradient: 'from-purple-500/20 via-violet-500/20 to-fuchsia-500/20',
    icon: '🔁',
    links: [{ label: 'View code', href: 'https://github.com/cloudenochcsis/cloudresume' }],
  },
];

const RepoLink: React.FC<{ label: string; href: string }> = ({ label, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-1.5 text-[#0da6f2] text-sm font-medium hover:gap-3 transition-all duration-300 no-underline"
  >
    <span>{label}</span>
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  </a>
);

const Tag: React.FC<{ label: string }> = ({ label }) => (
  <span className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-gray-400 border border-white/[0.06] font-mono">
    {label}
  </span>
);

const Projects: React.FC = () => {
  const reveal = useReveal();

  return (
    <div ref={reveal.ref} className={`reveal ${reveal.visible ? 'visible' : ''} scroll-mt-20 my-16`} id="projects">
      <div className="flex items-center justify-center gap-3 mb-10">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white px-4">Projects</h2>
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
      </div>

      {/* Featured case study */}
      <div className="rounded-2xl glass-card overflow-hidden mb-6 transition-all duration-500 hover:border-[#0da6f2]/20">
        <div className="h-2 w-full bg-gradient-to-r from-emerald-500/60 via-teal-500/60 to-cyan-500/60"></div>
        <div className="p-8 md:p-10">
          <div className="text-xs font-mono text-[#0da6f2] mb-3">FEATURED</div>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{featured.title}</h3>
          <p className="text-gray-400 leading-relaxed mb-6">{featured.description}</p>
          <ul className="space-y-2 mb-6">
            {featured.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2.5 text-sm text-gray-400">
                <span className="text-[#0da6f2] mt-0.5">▸</span>
                {bullet}
              </li>
            ))}
          </ul>
          <p className="text-sm text-gray-300 mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
            <span className="font-semibold text-white">What this demonstrates: </span>
            {featured.demonstrates}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {featured.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
          <div className="flex flex-wrap gap-6">
            {featured.links.map((link) => (
              <RepoLink key={link.href} {...link} />
            ))}
          </div>
        </div>
      </div>

      {/* Project grid */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${reveal.visible ? 'stagger-children' : ''}`}>
        {projects.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-2xl glass-card transition-all duration-500 hover:border-[#0da6f2]/20 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0da6f2]/5"
          >
            <div className={`h-24 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
              <span className="text-4xl opacity-80 group-hover:scale-110 transition-transform duration-500">{project.icon}</span>
            </div>
            <div className="flex flex-col flex-grow p-6">
              <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-500 text-sm mb-3 leading-relaxed">{project.description}</p>
              <p className="text-xs text-gray-400 flex-grow mb-4">
                <span className="font-semibold text-gray-300">Demonstrates: </span>
                {project.demonstrates}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
              <div className="flex flex-wrap gap-5">
                {project.links.map((link) => (
                  <RepoLink key={link.href} {...link} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
