import React, { createContext, useContext, ReactNode } from 'react';

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface Publication {
  title: string;
  journal?: string;
  conference?: string;
  date: string;
  authors: string[];
  link?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

interface ResumeData {
  name: string;
  title: string;
  about: string;
  location: string;
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  publications: Publication[];
  projects: Project[];
}

const resumeData: ResumeData = {
  name: "Enoch",
  title: "Information Security | Infrastructure Engineer | PhD Researcher",
  location: "New York, NY",
  about: "As a passionate Information Technology professional, I bring extensive experience in Cloud Infrastructure and Security to the table. My current focus is on pushing the boundaries of cybersecurity through my PhD research, where I'm exploring innovative ways to leverage Artificial Intelligence in enhancing Information Security practices.",
  experiences: [
    {
      title: "Lead Cloud Security Engineer",
      company: "TechSecure Solutions",
      location: "New York, NY",
      period: "2021 - Present",
      description: [
        "Leading a team of 8 security engineers implementing cloud-native security solutions across multi-cloud environments (AWS, Azure, GCP)",
        "Architected a zero-trust security framework reducing security incidents by 43% year-over-year",
        "Designed and deployed ML-based threat detection system capable of identifying novel attack patterns with 92% accuracy",
        "Implemented infrastructure-as-code security scanning pipeline, reducing vulnerabilities in production by 67%"
      ],
      technologies: ["AWS", "Azure", "GCP", "Terraform", "Python", "Kubernetes", "Docker", "CI/CD"]
    },
    {
      title: "Senior Infrastructure Engineer",
      company: "Secure Cloud Inc.",
      location: "Boston, MA",
      period: "2018 - 2021",
      description: [
        "Designed and implemented secure cloud infrastructure for 50+ enterprise clients",
        "Led migration of legacy systems to cloud-native architecture, improving performance by 35%",
        "Developed automated security compliance tooling for continuous auditing against SOC2 and HIPAA standards",
        "Implemented secure CI/CD pipelines with integrated vulnerability scanning"
      ],
      technologies: ["AWS", "Terraform", "Ansible", "Python", "Jenkins", "GitLab CI", "Docker"]
    }
  ],
  education: [
    {
      degree: "Doctoral Researcher in Information Systems",
      institution: "UCT",
      location: "Cape Town, SA",
      period: "2024 - Present",
      description: "Research focus on AI-driven security automation and advanced threat detection systems"
    },
    {
      degree: "M.Sc. in Information Systems",
      institution: "GIMPA",
      location: "Accra, GH",
      period: "2018 - 2021",
      description: "Specialization in Security and Machine Learning"
    },
    {
      degree: "B.S. in Computer Engineering",
      institution: "Carnegie Mellon University",
      location: "Pittsburgh, PA",
      period: "2012 - 2016"
    }
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
    },
    {
      name: "Terraform Certified Associate",
      issuer: "HashiCorp",
      date: "2023",
      link: "https://developer.hashicorp.com/certifications/infrastructure-automation/terraform-certified-associate"
    },
    {
      name: "Azure Certified Administrator Associate",
      issuer: "Microsoft",
      date: "2025",
      link: "https://learn.microsoft.com/en-us/credentials/certifications/azure-administrator/?practice-assessment-type=certification"
    }
  ],
  publications: [
    {
      title: "Advancing Cloud Security Through AI-Driven Anomaly Detection",
      journal: "Journal of Cybersecurity Technology",
      date: "2023",
      authors: ["Enoch", "Smith, J.", "Chen, L."],
      link: "https://doi.org/10.xxxx/cybersec.2023.12345"
    },
    {
      title: "Zero-Trust Architecture Implementation in Multi-Cloud Environments",
      conference: "International Conference on Cloud Security",
      date: "2022",
      authors: ["Enoch", "Johnson, K."],
      link: "https://doi.org/10.xxxx/iccs.2022.67890"
    }
  ],
  projects: [
    {
      title: "SecureCloudGuard",
      description: "Open-source security scanning tool for cloud infrastructure with automated remediation capabilities",
      technologies: ["Python", "AWS", "Terraform", "Docker"],
      link: "https://github.com/CloudEnochCSIS/SecureCloudGuard"
    },
    {
      title: "AI-ThreatDetector",
      description: "Machine learning system for detecting anomalies in network traffic patterns with real-time alerting",
      technologies: ["Python", "TensorFlow", "Kafka", "Elasticsearch"],
      link: "https://github.com/CloudEnochCSIS/AI-ThreatDetector"
    }
  ]
};

const ResumeContext = createContext<ResumeData | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ResumeContext.Provider value={resumeData}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = (): ResumeData => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};