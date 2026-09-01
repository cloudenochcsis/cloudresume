export interface Certification {
  name: string;
  issuer: string;
  badge: string;
  href: string;
  issueDate?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
  type?: 'code' | 'manifests' | 'terraform' | 'docs' | 'live';
}

export interface FeaturedProjectData {
  id: string;
  title: string;
  eyebrow: string;
  subtitle: string;
  challenge: string;
  architectureDetails: {
    title: string;
    description: string;
  }[];
  gitOpsDetails: string;
  tracingDetails: string;
  metricsDetails: string;
  terraformDetails: string;
  demonstrates: string;
  tags: string[];
  links: ProjectLink[];
}

export interface AdditionalProjectData {
  id: string;
  title: string;
  problem: string;
  approach: string;
  demonstrates: string;
  tags: string[];
  links: ProjectLink[];
  architectureSummary: string;
}

export interface ExperienceEntry {
  role: string;
  organization: string;
  location: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface ArticleEntry {
  title: string;
  description: string;
  date: string;
  readTime: string;
  href: string;
  tags: string[];
}

export interface ResearchData {
  degree: string;
  institution: string;
  department: string;
  focusTitle: string;
  summary: string;
  relevanceToDevOps: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const personalInfo = {
  name: 'Enoch Ayivor',
  shortName: 'Enoch A.',
  role: 'Cloud DevOps Engineer',
  location: 'Cape Town, South Africa',
  eyebrow: 'Cloud DevOps Engineer | Cape Town, South Africa',
  headline: 'Cloud infrastructure that helps teams ship with confidence.',
  supportingCopy:
    'I’m Enoch Ayivor, a Cloud DevOps engineer working across Kubernetes, Terraform, GitOps, CI/CD, observability, and Python automation. I build the infrastructure teams ship on and the systems that keep releases predictable.',
  email: 'cloudenochcsis@gmail.com',
  mailtoHref: 'mailto:cloudenochcsis@gmail.com?subject=Opportunity%20for%20Enoch',
  githubUrl: 'https://github.com/cloudenochcsis',
  linkedinUrl: 'https://www.linkedin.com/in/enoch-a-b00766138/',
  blogUrl: 'https://cloudenoch.hashnode.dev/',
  openSrePrsUrl:
    'https://github.com/Tracer-Cloud/opensre/pulls?q=is%3Apr+is%3Amerged+author%3Acloudenochcsis',
  proofPoints: [
    { label: 'Experience', value: '4+ years', detail: 'DevOps & cloud engineering' },
    { label: 'Open source', value: '13 merged PRs', detail: 'upstream to OpenSRE', href: 'https://github.com/Tracer-Cloud/opensre/pulls?q=is%3Apr+is%3Amerged+author%3Acloudenochcsis' },
    { label: 'Certifications', value: 'AWS, Azure & Terraform', detail: 'verified credentials' },
  ],
};

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    badge: 'AWS SAA-C03',
    href: 'https://www.credly.com/badges/193050a7-1625-4d8e-b77d-26d2fe8dd1e2/linked_in_profile',
  },
  {
    name: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    badge: 'Terraform Associate',
    href: 'https://www.credly.com/badges/59645601-fc1c-42a8-b95b-4fbf3c499ef6/linked_in_profile',
  },
  {
    name: 'Microsoft Certified: Azure Administrator Associate',
    issuer: 'Microsoft',
    badge: 'Azure AZ-104',
    href: 'https://learn.microsoft.com/en-us/users/enochayivor-0815/credentials/f46a46b56d4133fb',
  },
  {
    name: 'OpenSRE Core Contributor',
    issuer: 'Tracer-Cloud / OpenSRE',
    badge: '13 Merged PRs',
    href: 'https://github.com/Tracer-Cloud/opensre/pulls?q=is%3Apr+is%3Amerged+author%3Acloudenochcsis',
  },
];

export const featuredProject: FeaturedProjectData = {
  id: 'opentelemetry-platform',
  title: 'OpenTelemetry DevOps Platform',
  eyebrow: 'Flagship Case Study',
  subtitle:
    'Production-grade microservices on Kubernetes with GitOps continuous delivery and end-to-end distributed observability.',
  challenge:
    'Distributed microservice systems frequently suffer from configuration drift and distributed telemetry blind spots. The engineering objective was to design and stand up a production-ready Kubernetes platform where cluster state is strictly declared in Git, application delivery is autonomous, and distributed traces correlate directly with live system metrics.',
  architectureDetails: [
    {
      title: 'Declarative GitOps with ArgoCD',
      description:
        'Cluster state is stored versioned in Git. The ArgoCD application controller continuously synchronizes Kubernetes manifests, auto-healing any unauthorized out-of-band changes without manual kubectl in the deployment path.',
    },
    {
      title: 'Distributed Tracing with OpenTelemetry',
      description:
        'Cross-service request context is propagated through W3C tracecontext headers. OpenTelemetry Collectors run as a DaemonSet/sidecar architecture to buffer, process, and forward trace spans to backends.',
    },
    {
      title: 'Real-Time Metrics & Grafana Dashboards',
      description:
        'Prometheus captures Golden Signals (Latency, Traffic, Errors, Saturation). Custom Grafana dashboards correlate trace IDs with error spikes to shorten Mean Time to Resolution (MTTR).',
    },
    {
      title: 'Modular Terraform-Based Infrastructure',
      description:
        'VPC topology, security controls, managed Kubernetes clusters, and cloud IAM roles are codified cleanly in reusable Terraform modules with state locking.',
    },
  ],
  gitOpsDetails: 'Git-driven delivery eliminates manual operational errors and provides a 100% auditable release log.',
  tracingDetails: 'End-to-end spans track every HTTP/RPC hop across the microservices boundary.',
  metricsDetails: 'Service-level indicators (SLIs) and alerting rules evaluate cluster health in real time.',
  terraformDetails: 'Repeatable environments provisioned in minutes with zero manual console configuration.',
  demonstrates:
    'Production-grade Kubernetes engineering, GitOps delivery workflow design, and day-two distributed observability — the critical skills required to operate high-reliability cloud platforms in production.',
  tags: ['Kubernetes', 'ArgoCD', 'OpenTelemetry', 'Grafana', 'Prometheus', 'Terraform', 'Docker', 'GitOps'],
  links: [
    {
      label: 'Application code',
      href: 'https://github.com/cloudenochcsis/opentelemetry-devops-project',
      type: 'code',
    },
    {
      label: 'Kubernetes manifests',
      href: 'https://github.com/cloudenochcsis/opentelemetry-k8s-manifests',
      type: 'manifests',
    },
    {
      label: 'Terraform infrastructure',
      href: 'https://github.com/cloudenochcsis/opentelemetry-k8s-terraform',
      type: 'terraform',
    },
  ],
};

export const additionalProjects: AdditionalProjectData[] = [
  {
    id: 'multi-cloud-3tier',
    title: 'Multi-Cloud 3-Tier Architecture',
    problem:
      'Enterprise teams require consistent network isolation, resilient application compute, and managed databases without architecturally divergent implementations across major cloud providers.',
    approach:
      'Engineered a standardized 3-tier topology (presentation/web tier, compute/application tier, managed database tier) natively for AWS, Azure, and GCP using modular Terraform. Implemented isolated subnets, application load balancers, auto-scaling groups, and managed relational databases (RDS Aurora, Azure SQL, Cloud SQL).',
    demonstrates:
      'Infrastructure as Code (IaC) depth that transfers seamlessly across major cloud hyperscalers while respecting provider-native networking and security primitives.',
    tags: ['Terraform', 'AWS', 'Azure', 'GCP', 'Multi-Cloud', 'VPC', 'Auto Scaling'],
    architectureSummary: 'Web Tier (ALB) → App Tier (Auto Scaling) → Data Tier (HA Database)',
    links: [
      { label: 'AWS', href: 'https://github.com/cloudenochcsis/terraform-aws-3tier-architecture', type: 'code' },
      { label: 'Azure', href: 'https://github.com/cloudenochcsis/terraform-azure-3tier-architecture', type: 'code' },
      { label: 'GCP', href: 'https://github.com/cloudenochcsis/terraform-gcp-3tier-architecture', type: 'code' },
    ],
  },
  {
    id: 'terraform-gitops-aks',
    title: 'Terraform GitOps for AKS',
    problem:
      'Imperative Kubernetes deployments on Azure lead to configuration drift, untracked modifications, and fragile cluster maintenance procedures.',
    approach:
      'Architected a fully automated GitOps delivery pipeline on Azure Kubernetes Service. Terraform provisions Azure virtual networks, role definitions, and the managed AKS cluster. ArgoCD controllers deploy alongside the cluster and continuously reconcile application workloads directly from Git.',
    demonstrates:
      'Automated, secure, and auditable Kubernetes lifecycle delivery on Microsoft Azure with zero manual kubectl commands in the deploy pipeline.',
    tags: ['Terraform', 'Azure', 'AKS', 'ArgoCD', 'GitOps', 'Kubernetes'],
    architectureSummary: 'Terraform IaC → Azure AKS Cluster → ArgoCD Operator → Git Sync',
    links: [
      {
        label: 'View code',
        href: 'https://github.com/cloudenochcsis/Terraform-GitOps-for-AKS',
        type: 'code',
      },
    ],
  },
  {
    id: 'cloud-enoch-platform',
    title: 'Cloud Enoch Portfolio Platform',
    problem:
      'Most engineering portfolios are static brochure sites disconnected from the engineer’s real-world delivery, observability, and deployment practices.',
    approach:
      'Constructed this portfolio platform as an active DevOps artifact: React frontend, Python FastAPI microservice, and MongoDB persistence layer behind an Nginx reverse proxy. Continuous integration tests, lints, and builds container images on CircleCI before automated deployment.',
    demonstrates:
      'Full-stack cloud delivery: frontend implementation, containerized backend services, automated CI/CD pipelines, and server runtime management within a single repository.',
    tags: ['React', 'FastAPI', 'CircleCI', 'Docker', 'MongoDB', 'Nginx', 'Python'],
    architectureSummary: 'CircleCI CI/CD → Docker Image Build → Nginx Reverse Proxy → React + FastAPI + Mongo',
    links: [
      {
        label: 'View code',
        href: 'https://github.com/cloudenochcsis/cloudresume',
        type: 'code',
      },
    ],
  },
];

export const experienceData: ExperienceEntry[] = [
  {
    role: 'Cloud & DevOps Engineer',
    organization: 'Enterprise Cloud Infrastructure',
    location: 'Remote / Cape Town, South Africa',
    period: '2022 — Present',
    type: 'Full-time',
    description:
      'Architecting and operating scalable multi-cloud infrastructure, declarative GitOps deployment systems, and telemetry pipelines across production environments.',
    highlights: [
      'Engineered modular Terraform modules for AWS, Azure, and GCP, establishing standardized VPC topologies, zero-trust security boundaries, and auto-scaling compute pools.',
      'Operated Kubernetes container platforms with ArgoCD GitOps pipelines, eliminating manual kubectl interventions and keeping cluster state synchronized with Git repositories.',
      'Designed and deployed end-to-end observability stacks with OpenTelemetry, Prometheus, and Grafana, providing granular RED metrics and distributed trace visibility.',
      'Built automation tooling in Python and Bash for continuous infrastructure health checks, configuration audits, and automated release validation.',
    ],
    skills: ['Kubernetes', 'Terraform', 'AWS', 'Azure', 'GCP', 'ArgoCD', 'OpenTelemetry', 'Python', 'Docker'],
  },
  {
    role: 'Open Source Contributor',
    organization: 'OpenSRE (Tracer-Cloud)',
    location: 'Open Source Community',
    period: '2024 — Present',
    type: 'Open Source',
    description:
      'Core contributor to the OpenSRE reliability engineering ecosystem, implementing upstream bug fixes, reliability testing, and telemetry enhancements.',
    highlights: [
      'Authored and merged 13 pull requests upstream into Tracer-Cloud/opensre, covering reliability fixes, automated testing suites, and observability integrations.',
      'Participated in upstream code reviews and collaborative architecture improvements for site reliability tooling.',
      'Documented verification steps, test harness setups, and contributor guidelines for downstream operators.',
    ],
    skills: ['SRE', 'Python', 'Testing Automation', 'Distributed Systems', 'Git'],
  },
  {
    role: 'Infrastructure & Systems Engineer',
    organization: 'Cloud Platform Operations',
    location: 'Cape Town, South Africa',
    period: '2020 — 2022',
    type: 'Full-time',
    description:
      'Automated deployment workflows, provisioned cloud compute resources, and supported high-availability production environments.',
    highlights: [
      'Implemented automated CI/CD pipelines in CircleCI and GitHub Actions with integrated test suites and linting quality gates.',
      'Containerized distributed services using Docker multi-stage builds, reducing image sizes and optimizing deployment throughput.',
      'Collaborated closely with software engineering and operational teams to triage incidents, tune database performance, and eliminate release friction.',
    ],
    skills: ['CI/CD', 'Docker', 'Linux/Bash', 'CircleCI', 'GitHub Actions', 'Cloud Architecture'],
  },
];

export const writingAndResearch = {
  blog: {
    title: 'Cloud Enoch Technical Blog',
    description:
      'Deep dives into real-world DevOps patterns, GitOps cluster operations, distributed tracing architectures, and cloud automation.',
    url: 'https://cloudenoch.hashnode.dev/',
  },
  featuredArticles: [
    {
      title: 'Declarative GitOps on Kubernetes: Scaling ArgoCD and Terraform',
      description:
        'A blueprint for structuring infrastructure repositories and application manifests to achieve immutable, self-healing deployments.',
      date: 'Technical Article',
      readTime: '8 min read',
      href: 'https://cloudenoch.hashnode.dev/',
      tags: ['GitOps', 'Kubernetes', 'ArgoCD', 'Terraform'],
    },
    {
      title: 'End-to-End Distributed Tracing in Microservices using OpenTelemetry',
      description:
        'Practical guide on context propagation, OpenTelemetry Collector topologies, and correlating traces with Grafana dashboards.',
      date: 'Technical Article',
      readTime: '10 min read',
      href: 'https://cloudenoch.hashnode.dev/',
      tags: ['OpenTelemetry', 'Grafana', 'Observability'],
    },
    {
      title: 'Multi-Cloud Infrastructure as Code: 3-Tier Parity Across AWS, Azure & GCP',
      description:
        'Patterns for translating VPC, compute auto-scaling, and managed database constructs across the three major hyperscalers.',
      date: 'Technical Article',
      readTime: '12 min read',
      href: 'https://cloudenoch.hashnode.dev/',
      tags: ['Terraform', 'Multi-Cloud', 'Architecture'],
    },
  ],
  research: {
    degree: 'PhD Candidate in Information Systems',
    institution: 'University of Cape Town',
    location: 'Cape Town, South Africa',
    title: 'GenAI Coding Tools and Developer Expertise Formation',
    summary:
      'Investigating how Generative AI coding assistants influence the acquisition, retention, and evolution of expert knowledge among software developers.',
    plainLanguageExplanation:
      'As AI-assisted coding becomes standard, understanding how developers build true mastery and mental models of complex distributed systems is critical. My research examines where AI enhances engineering throughput and how teams preserve the deep technical understanding required to debug and run production infrastructure.',
    devOpsConnection:
      'This research directly informs how I design automation: building systems where automation handles repetitive toil while engineering teams retain clear observability, architectural clarity, and operational confidence.',
  },
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud Platforms',
    description: 'Multi-cloud design, networking, IAM, and managed compute across hyperscalers',
    skills: ['AWS', 'Azure', 'GCP'],
  },
  {
    title: 'Infrastructure & Platforms',
    description: 'Declarative infrastructure as code, container orchestration, and cluster management',
    skills: ['Terraform', 'Kubernetes', 'Docker', 'ArgoCD'],
  },
  {
    title: 'Delivery & Automation',
    description: 'Continuous integration, release automation, pipeline quality gates, and scripting',
    skills: ['CI/CD', 'GitHub Actions', 'CircleCI', 'Python', 'Bash'],
  },
  {
    title: 'Observability',
    description: 'Telemetry ingestion, distributed tracing, metrics visualization, and alerting',
    skills: ['OpenTelemetry', 'Grafana', 'Prometheus', 'CloudWatch'],
  },
  {
    title: 'AI & Applied Automation',
    description: 'Practical agentic workflows and automated operational scripts',
    skills: ['Agentic AI', 'Python Automation'],
  },
];

export const aboutContent = {
  heading: 'Engineering Philosophy',
  lead: 'I build reliable, observable infrastructure that lets software engineering teams ship continuously without fear of production regressions.',
  principles: [
    {
      title: 'Reliable and repeatable infrastructure',
      description:
        'Every cloud resource must be codified declaratively in Terraform or Kubernetes manifests. No manual console tweaks, no undocumented configurations.',
    },
    {
      title: 'Automation over manual toil',
      description:
        'If a deployment step or remediation task occurs repeatedly, it should be automated through GitOps, CI/CD pipelines, or Python tooling.',
    },
    {
      title: 'Deeply observable systems',
      description:
        'Deployments are only half the job. Real-time metrics, logs, and distributed traces must provide immediate clarity when anomalies occur.',
    },
    {
      title: 'Clear documentation and runbooks',
      description:
        'Infrastructure is only as reliable as the team’s ability to understand it. Architecture diagrams, decision logs, and runbooks are core deliverables.',
    },
    {
      title: 'Evidence-backed technical work',
      description:
        'Claims are backed by verifiable certifications, public code repositories, and upstream open-source contributions that anyone can review.',
    },
    {
      title: 'Continuous learning and rigorous research',
      description:
        'Bridging hands-on cloud operations with doctoral research at the University of Cape Town keeps my approach grounded in empirical engineering.',
    },
  ],
};
