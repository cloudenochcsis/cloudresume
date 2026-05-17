import React, { useRef, useEffect, useState } from 'react';
import { CoreCompetency, Skill, ResearchArea } from '../App';

interface MainProps {
  coreCompetencies: CoreCompetency[];
  skills: Skill[];
  researchAreas: ResearchArea[];
}

// Skill icons mapping
const skillIcons: Record<string, string> = {
  "Cloud Computing": "☁️",
  "DevOps": "🔄",
  "Agentic AI": "🤖",
  "Python": "🐍",
  "Automation": "⚙️",
  "Infrastructure as Code": "📝",
  "Containerization": "📦",
  "Orchestration": "🎯",
  "CI/CD": "🚀",
  "Monitoring": "📊",
  "Logging": "📋",
  "Scalability": "📈",
  "Resilience": "🛡️",
};

// Project data with gradient colors instead of external images
const projects = [
  {
    title: "OpenTelemetry DevOps Project",
    description: "Microservice-based distributed system with OpenTelemetry observability, CI/CD pipelines, ArgoCD GitOps, Grafana dashboards, and Kubernetes deployments.",
    url: "https://github.com/cloudenochcsis/opentelemetry-devops-project",
    tags: ["OpenTelemetry", "K8s", "ArgoCD", "Grafana"],
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
    icon: "📡",
    cta: "View Project",
  },
  {
    title: "Terraform GitOps for AKS",
    description: "Implemented GitOps workflow for Azure Kubernetes Service using Terraform, enabling automated infrastructure provisioning and application deployment.",
    url: "https://github.com/cloudenochcsis/Terraform-GitOps-for-AKS",
    tags: ["Terraform", "Azure", "K8s", "GitOps"],
    gradient: "from-blue-500/20 via-cyan-500/20 to-teal-500/20",
    icon: "🏗️",
    cta: "View Project",
  },
  {
    title: "AWS 3-Tier Architecture",
    description: "Built a scalable 3-tier architecture on AWS using Terraform for infrastructure as code, featuring automated provisioning and deployment.",
    url: "https://github.com/cloudenochcsis/terraform-aws-3tier-architecture",
    tags: ["Terraform", "AWS", "VPC", "EC2"],
    gradient: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
    icon: "🏛️",
    cta: "View Project",
  },
  {
    title: "Agentic AI Automation Platform",
    description: "Building agentic AI workflows and Python automation patterns for cloud operations, DevOps productivity, and repeatable infrastructure tasks.",
    url: "https://github.com/cloudenochcsis",
    tags: ["Agentic AI", "Python", "Automation"],
    gradient: "from-purple-500/20 via-violet-500/20 to-fuchsia-500/20",
    icon: "🤖",
    cta: "View Work",
  },
];

// Hook for section reveal animation
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

const Main: React.FC<MainProps> = ({ coreCompetencies, skills, researchAreas }) => {
  const about = useReveal();
  const skillsSection = useReveal();
  const projectsSection = useReveal();

  return (
    <>
      {/* About Section */}
      <div
        ref={about.ref}
        className={`reveal ${about.visible ? 'visible' : ''} scroll-mt-20 my-16 p-8 md:p-10 rounded-2xl glass-card glow-blue-hover transition-all duration-500`}
        id="about"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-1 rounded-full bg-gradient-to-b from-[#0da6f2] to-[#a855f7]"></div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">About Me</h2>
        </div>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          I am a Cloud DevOps Engineer focused on cloud infrastructure, DevOps, agentic AI, Python, and automation. I design scalable cloud platforms, build repeatable
          automation workflows, and explore how AI agents can improve infrastructure operations, deployment reliability, and engineering productivity.
        </p>
        {/* Quick stats */}
        <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/5">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "10+", label: "Projects Delivered" },
            { value: "1", label: "Published Paper" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div
        ref={skillsSection.ref}
        className={`reveal ${skillsSection.visible ? 'visible' : ''} scroll-mt-20 my-16 p-8 md:p-10 rounded-2xl glass-card glow-blue-hover transition-all duration-500`}
        id="skills"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="h-8 w-1 rounded-full bg-gradient-to-b from-[#0da6f2] to-[#a855f7]"></div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Skills & Expertise</h2>
        </div>
        <div className={`flex gap-3 flex-wrap ${skillsSection.visible ? 'stagger-children' : ''}`}>
          {coreCompetencies.map((competency, index) => (
            <div 
              key={index}
              className="skill-tag flex h-11 items-center gap-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] px-4 transition-all duration-300 hover:border-[#0da6f2]/30 hover:bg-[#0da6f2]/[0.06] hover:scale-[1.03] cursor-default"
            >
              <span className="text-base">{skillIcons[competency.label] || "💡"}</span>
              <p className="text-gray-300 text-sm font-medium">{competency.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div
        ref={projectsSection.ref}
        className={`reveal ${projectsSection.visible ? 'visible' : ''} scroll-mt-20 my-16`}
        id="projects"
      >
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white px-4">Projects</h2>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${projectsSection.visible ? 'stagger-children' : ''}`}>
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl glass-card transition-all duration-500 hover:border-[#0da6f2]/20 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#0da6f2]/5 no-underline"
            >
              {/* Gradient header with icon */}
              <div className={`h-36 w-full bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-5xl opacity-80 group-hover:scale-110 transition-transform duration-500">{project.icon}</span>
                {/* Decorative grid pattern */}
                <div className="absolute inset-0 opacity-[0.03]" style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '16px 16px'
                }}></div>
              </div>
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#0da6f2] transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-500 text-sm flex-grow mb-4 leading-relaxed">{project.description}</p>
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-gray-400 border border-white/[0.06] font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-[#0da6f2] text-sm font-medium group-hover:gap-3 transition-all duration-300">
                  <span>{project.cta}</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
