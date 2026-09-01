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
  tagline?: string;
  challenge: string;
  solution?: string;
  outcomes?: string[];
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
  techStack?: string[];
  links: ProjectLink[];
  hashnodeUrl?: string;
  githubAppUrl?: string;
  githubK8sUrl?: string;
  githubTerraformUrl?: string;
  pipelineSteps?: {
    name: string;
    description: string;
    technology: string;
  }[];
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
  company?: string;
  location: string;
  period: string;
  type: string;
  description: string;
  summary?: string;
  highlights: string[];
  bullets?: string[];
  skills: string[];
  technologies?: string[];
}

export interface ArticleEntry {
  slug?: string;
  title: string;
  description: string;
  excerpt?: string;
  date: string;
  readTime: string;
  href: string;
  url?: string;
  tags: string[];
  publishedOn?: string;
}

export interface ResearchData {
  degree: string;
  institution: string;
  department?: string;
  title?: string;
  focusTitle?: string;
  topic?: string;
  summary: string;
  description?: string;
  plainLanguageExplanation?: string;
  devOpsConnection?: string;
  relevance?: string;
  relevanceToDevOps?: string;
}

export interface SkillCategory {
  title: string;
  category?: string;
  description: string;
  skills: string[];
}

export const personalInfo = {
  name: 'Enoch Ayivor',
  shortName: 'Enoch A.',
  title: 'Senior DevOps Engineer',
  role: 'Senior DevOps Engineer',
  location: 'Cape Town, South Africa (Available for Remote EU & Global)',
  eyebrow: 'Senior Cloud & DevOps Engineer • AWS, Kubernetes & Networking',
  headline: 'Cloud infrastructure that helps teams ship with confidence.',
  valueProp:
    'I design, automate, and operate reliable cloud infrastructure on AWS with Kubernetes, modular Terraform, and declarative GitOps pipelines.',
  supportingCopy:
    'I’m Enoch Ayivor, a Senior Cloud DevOps Engineer specializing in AWS, Kubernetes platforms, modular Terraform, declarative GitOps, observability, and cloud infrastructure automation. Former Cloud Team Lead at Crowdbotics managing customer cloud environments.',
  secondaryBio:
    'Hands-on expertise leading cloud teams at Crowdbotics managing multi-tenant customer environments, deep CS academic foundation, and currently pursuing doctoral research at the University of Cape Town.',
  email: 'cloudenochcsis@gmail.com',
  mailtoHref: 'mailto:cloudenochcsis@gmail.com?subject=Opportunity%20for%20Enoch',
  githubUrl: 'https://github.com/cloudenochcsis',
  linkedinUrl: 'https://www.linkedin.com/in/enoch-a-b00766138/',
  blogUrl: 'https://cloudenoch.hashnode.dev/',
  openSrePrsUrl:
    'https://github.com/Tracer-Cloud/opensre/pulls?q=is%3Apr+is%3Amerged+author%3Acloudenochcsis',
  resumeAvailable: false,
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
  title: 'GitOps Portfolio Pipeline & OpenTelemetry DevOps Platform',
  eyebrow: 'Flagship Case Study',
  subtitle:
    'Production-grade microservices on AWS EKS with GitOps continuous delivery and end-to-end distributed observability.',
  tagline:
    'End-to-end declarative GitOps delivery pipeline running containerized microservices on AWS EKS with Terraform state automation and CircleCI validation.',
  challenge:
    'Distributed microservice systems frequently suffer from configuration drift and distributed telemetry blind spots. The engineering objective was to design and stand up a production-ready Kubernetes platform where cluster state is strictly declared in Git, application delivery is autonomous, and distributed traces correlate directly with live system metrics.',
  solution:
    'Engineered a zero-touch GitOps delivery workflow: modular Terraform codifies VPC networking and AWS EKS clusters; CircleCI builds and scans Docker images; and Argo CD reconciles declarative manifests from Git into production automatically with zero drift.',
  outcomes: [
    'Sub-2-minute automated delivery cycle from Git push to healthy pod deployment',
    'Eliminated configuration drift through continuous ArgoCD reconciliation',
    'Auditable, version-controlled infrastructure state stored in secure S3 backend with DynamoDB locking',
    'Distributed telemetry and real-time observability across ingress controllers and microservice pods',
  ],
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
  techStack: ['AWS EKS', 'Terraform', 'Argo CD', 'CircleCI', 'Docker', 'VPC Networking', 'Route 53', 'ALB Ingress'],
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
  hashnodeUrl:
    'https://cloudenoch.hashnode.dev/automating-microservice-deployments-using-terraform-github-actions-and-argocd',
  githubAppUrl: 'https://github.com/cloudenochcsis/cloudresume',
  githubK8sUrl: 'https://github.com/cloudenochcsis/opentelemetry-k8s-manifests',
  githubTerraformUrl: 'https://github.com/cloudenochcsis/opentelemetry-k8s-terraform',
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
    role: 'Senior Cloud & DevOps Engineer',
    organization: 'Cloud Platforms & Infrastructure',
    company: 'Cloud Platforms & Infrastructure',
    location: 'Remote (EU / Global)',
    period: '2023 — Present',
    type: 'Full-time',
    summary:
      'Architecting resilient AWS cloud platforms, GitOps delivery workflows, and automated Kubernetes infrastructure for high-velocity software engineering teams.',
    description:
      'Architecting resilient AWS cloud platforms, GitOps delivery workflows, and automated Kubernetes infrastructure for high-velocity software engineering teams.',
    highlights: [
      'Engineered modular Terraform modules for AWS, Azure, and GCP, establishing standardized VPC topologies, zero-trust security boundaries, and auto-scaling compute pools.',
      'Operated Kubernetes container platforms with ArgoCD GitOps pipelines, eliminating manual kubectl interventions and keeping cluster state synchronized with Git repositories.',
      'Designed and deployed end-to-end observability stacks with OpenTelemetry, Prometheus, and Grafana, providing granular RED metrics and distributed trace visibility.',
      'Built automation tooling in Python and Bash for continuous infrastructure health checks, configuration audits, and automated release validation.',
    ],
    bullets: [
      'Designed declarative GitOps deployment pipelines using Argo CD and CircleCI, cutting release turnaround times from hours to minutes.',
      'Refactored multi-account AWS infrastructure into modular, version-pinned Terraform modules with automated validation and remote state locking.',
      'Standardized production Kubernetes clusters with automated ingress routing, network isolation policies, and health monitoring.',
      'Mentored engineering teams on cloud security best practices, infrastructure drift prevention, and container optimization.',
    ],
    skills: ['Kubernetes', 'Terraform', 'AWS', 'Azure', 'GCP', 'ArgoCD', 'OpenTelemetry', 'Python', 'Docker'],
    technologies: ['AWS', 'Kubernetes (EKS)', 'Terraform', 'Argo CD', 'CircleCI', 'Docker', 'Python'],
  },
  {
    role: 'Cloud Team Lead',
    organization: 'Crowdbotics',
    company: 'Crowdbotics',
    location: 'Remote',
    period: '2021 — 2023',
    type: 'Full-time',
    summary:
      'Led the cloud infrastructure team responsible for provisioning, maintaining, and scaling multi-tenant customer cloud environments across AWS and GCP.',
    description:
      'Led the cloud infrastructure team responsible for provisioning, maintaining, and scaling multi-tenant customer cloud environments across AWS and GCP.',
    highlights: [
      'Directed a high-performing cloud engineering team managing hundreds of diverse customer cloud environments with high uptime guarantees.',
      'Codified repeatable multi-tenant infrastructure templates using Terraform, reducing customer environment spin-up time by over 70%.',
      'Architected secure VPC networking topologies, automated TLS termination, and ingress controllers across multi-account AWS organizations.',
      'Established infrastructure incident response protocols and operational runbooks, reducing Mean Time to Resolution (MTTR) for customer outages.',
    ],
    bullets: [
      'Directed a high-performing cloud engineering team managing hundreds of diverse customer cloud environments with high uptime guarantees.',
      'Codified repeatable multi-tenant infrastructure templates using Terraform, reducing customer environment spin-up time by over 70%.',
      'Architected secure VPC networking topologies, automated TLS termination, and ingress controllers across multi-account AWS organizations.',
      'Established infrastructure incident response protocols and operational runbooks, reducing Mean Time to Resolution (MTTR) for customer outages.',
    ],
    skills: ['AWS', 'Crowdbotics Platform', 'Terraform', 'Docker', 'Kubernetes', 'VPC Networking', 'CI/CD'],
    technologies: ['AWS', 'Crowdbotics Platform', 'Terraform', 'Docker', 'Kubernetes', 'VPC Networking', 'CI/CD'],
  },
  {
    role: 'Infrastructure & Systems Engineer',
    organization: 'Enterprise Systems & Networks',
    company: 'Enterprise Systems & Networks',
    location: 'Cape Town, South Africa',
    period: '2019 — 2021',
    type: 'Full-time',
    summary:
      'Built deep foundational systems engineering and network troubleshooting expertise diagnosing production customer escalations.',
    description:
      'Built deep foundational systems engineering and network troubleshooting expertise diagnosing production customer escalations.',
    highlights: [
      'Diagnosed and resolved complex Linux operating system, TCP/IP networking, and application runtime issues in high-pressure customer environments.',
      'Authored Bash and Python automation scripts to eliminate repetitive manual system administrative toil.',
      'Collaborated closely with software developers to triage production bugs, identify network bottlenecks, and patch critical vulnerabilities.',
    ],
    bullets: [
      'Diagnosed and resolved complex Linux operating system, TCP/IP networking, and application runtime issues in high-pressure customer environments.',
      'Authored Bash and Python automation scripts to eliminate repetitive manual system administrative toil.',
      'Collaborated closely with software developers to triage production bugs, identify network bottlenecks, and patch critical vulnerabilities.',
    ],
    skills: ['Linux / Unix', 'TCP/IP', 'Bash', 'Python', 'DNS / DHCP', 'Systems Troubleshooting'],
    technologies: ['Linux / Unix', 'TCP/IP', 'Bash', 'Python', 'DNS / DHCP', 'Systems Troubleshooting'],
  },
  {
    role: 'Open Source Contributor',
    organization: 'OpenSRE (Tracer-Cloud)',
    company: 'OpenSRE (Tracer-Cloud)',
    location: 'Open Source Community',
    period: '2024 — Present',
    type: 'Open Source',
    summary:
      'Active upstream open-source contributor to OpenSRE, focusing on reliability verification, automated telemetry, and Kubernetes operational hooks.',
    description:
      'Core contributor to the OpenSRE reliability engineering ecosystem, implementing upstream bug fixes, reliability testing, and telemetry enhancements.',
    highlights: [
      'Authored and merged 13 pull requests upstream into Tracer-Cloud/opensre, covering reliability fixes, automated testing suites, and observability integrations.',
      'Participated in upstream code reviews and collaborative architecture improvements for site reliability tooling.',
      'Documented verification steps, test harness setups, and contributor guidelines for downstream operators.',
    ],
    bullets: [
      'Authored and merged 13 upstream pull requests enhancing reliability test suites, Prometheus metrics, and distributed tracing.',
      'Contributed documentation and automated validation scripts for production Site Reliability Engineering practices.',
    ],
    skills: ['SRE', 'Python', 'Testing Automation', 'Distributed Systems', 'Git'],
    technologies: ['OpenTelemetry', 'Golang', 'Kubernetes', 'Prometheus', 'GitOps'],
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
      slug: 'declarative-gitops-on-kubernetes',
      title: 'Declarative GitOps on Kubernetes: Scaling ArgoCD and Terraform',
      description:
        'A blueprint for structuring infrastructure repositories and application manifests to achieve immutable, self-healing deployments.',
      excerpt:
        'A blueprint for structuring infrastructure repositories and application manifests to achieve immutable, self-healing deployments.',
      date: 'Jan 2025',
      readTime: '8 min read',
      href: 'https://cloudenoch.hashnode.dev/automating-microservice-deployments-using-terraform-github-actions-and-argocd',
      url: 'https://cloudenoch.hashnode.dev/automating-microservice-deployments-using-terraform-github-actions-and-argocd',
      tags: ['GitOps', 'Terraform', 'ArgoCD', 'Kubernetes'],
      publishedOn: 'Cloud Enoch on Hashnode',
    },
    {
      slug: 'end-to-end-distributed-tracing-in-microservices',
      title: 'End-to-End Distributed Tracing in Microservices using OpenTelemetry',
      description:
        'Practical guide on context propagation, OpenTelemetry Collector topologies, and correlating traces with Grafana dashboards.',
      excerpt:
        'Practical guide on context propagation, OpenTelemetry Collector topologies, and correlating traces with Grafana dashboards.',
      date: 'Nov 2024',
      readTime: '10 min read',
      href: 'https://cloudenoch.hashnode.dev/deploying-node-js-applications-on-minikube-and-aws-eks',
      url: 'https://cloudenoch.hashnode.dev/deploying-node-js-applications-on-minikube-and-aws-eks',
      tags: ['OpenTelemetry', 'Grafana', 'Observability'],
      publishedOn: 'Cloud Enoch on Hashnode',
    },
    {
      slug: 'deploying-containerized-applications-on-aws-eks',
      title: 'Deploying Containerized Applications on Minikube and AWS EKS',
      description:
        'From local container testing to production Kubernetes clusters on AWS: managing manifests, ingress controllers, and secret management.',
      excerpt:
        'From local container testing to production Kubernetes clusters on AWS: managing manifests, ingress controllers, and secret management.',
      date: 'Aug 2024',
      readTime: '8 min read',
      href: 'https://cloudenoch.hashnode.dev/',
      url: 'https://cloudenoch.hashnode.dev/',
      tags: ['AWS EKS', 'Kubernetes', 'Docker', 'Networking'],
      publishedOn: 'Cloud Enoch on Hashnode',
    },
  ],
  research: {
    degree: 'PhD Candidate in Information Systems',
    institution: 'University of Cape Town (UCT)',
    location: 'Cape Town, South Africa',
    department: 'Department of Information Systems',
    title: 'GenAI Coding Tools and Developer Expertise Formation',
    focusTitle: 'GenAI Coding Tools and Developer Expertise Formation',
    topic: 'Generative AI Coding Tools and Developer Expertise Formation',
    summary:
      'Investigating how Generative AI coding assistants influence the acquisition, retention, and evolution of expert knowledge among software developers.',
    description:
      'Investigating how automated coding and platform engineering tools influence developer mental models, architectural reasoning, and operational discipline in distributed cloud systems.',
    plainLanguageExplanation:
      'As AI-assisted coding becomes standard, understanding how developers build true mastery and mental models of complex distributed systems is critical. My research examines where AI enhances engineering throughput and how teams preserve the deep technical understanding required to debug and run production infrastructure.',
    devOpsConnection:
      'This research directly informs how I design automation: building systems where automation handles repetitive toil while engineering teams retain clear observability, architectural clarity, and operational confidence.',
    relevance:
      'Bridges hands-on infrastructure reliability with empirical research into modern developer workflows and automated delivery systems.',
    relevanceToDevOps:
      'Bridges hands-on infrastructure reliability with empirical research into modern developer workflows and automated delivery systems.',
  },
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud Platforms',
    category: 'Cloud Platforms',
    description: 'Core architectural services, multi-cloud design, and secure networking',
    skills: ['AWS VPC', 'EKS', 'EC2', 'S3', 'RDS', 'IAM', 'CloudFront', 'Route 53', 'Azure', 'GCP'],
  },
  {
    title: 'Infrastructure & Platforms',
    category: 'Infrastructure & Platforms',
    description: 'Declarative infrastructure as code and Kubernetes platform management',
    skills: ['Terraform', 'Kubernetes', 'AWS EKS', 'Helm', 'Ingress-Nginx', 'Docker', 'HPA'],
  },
  {
    title: 'Delivery & Automation',
    category: 'Delivery & Automation',
    description: 'Automated validation, packaging, and GitOps synchronization',
    skills: ['Argo CD', 'CircleCI', 'GitHub Actions', 'GitOps Workflows', 'Python', 'Bash'],
  },
  {
    title: 'Observability',
    category: 'Observability',
    description: 'Telemetry ingestion, distributed tracing, metrics visualization, and alerting',
    skills: ['OpenTelemetry', 'Grafana', 'Prometheus', 'CloudWatch', 'Jaeger'],
  },
  {
    title: 'Networking & Security',
    category: 'Networking & Security',
    description: 'Network topology, routing, and zero-trust perimeter controls',
    skills: ['VPC Peering', 'Transit Gateway', 'Subnetting / CIDR', 'ALB / NLB', 'CoreDNS', 'TLS / SSL'],
  },
  {
    title: 'AI & Applied Automation',
    category: 'AI & Applied Automation',
    description: 'Practical agentic workflows and automated operational scripts',
    skills: ['Agentic AI', 'Python Automation', 'FastAPI'],
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

// Aliases for component convenience
export const featuredGitOpsProject = featuredProject;
export const experienceTimeline = experienceData;
export const skillsGrid = skillCategories;
export const blogPosts = writingAndResearch.featuredArticles;
export const doctoralResearch = writingAndResearch.research;
