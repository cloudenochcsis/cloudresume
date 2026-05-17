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
  experiences: Experience[];
  education: Education[];
  certifications: Certification[];
  publications: Publication[];
  projects: Project[];
}

const resumeData: ResumeData = {
  name: "Enoch",
  title: "Cloud DevOps | Agentic AI | Python Automation",
  about: "As a cloud and DevOps professional, I focus on scalable infrastructure, agentic AI workflows, Python automation, and reliable delivery practices. My work explores how automation and AI agents can improve cloud operations and engineering productivity.",
  experiences: [
    {
      title: "Lead Cloud Engineer",
      company: "Technology Excellence Services",
      location: "Indiana, IN",
      period: "2023 - Present",
      description: [
        "Leading a team of cloud engineers to design and implement scalable, secure, and cost-effective cloud solutions across multi-cloud environments (AWS, Azure, GCP)",
        "Developed cloud-native architectures that improved system performance and reduced operational costs by 30%",
        "Implemented automated cloud infrastructure provisioning using Infrastructure-as-Code (IaC) tools, reducing deployment time by 50%",
        "Collaborated with cross-functional teams to improve reliability, governance, and operational standards in cloud deployments"
      ],
      technologies: ["AWS", "Azure", "GCP", "Terraform", "Python", "Kubernetes", "Docker", "CI/CD"]
    },
    {
      title: "Senior Infrastructure Engineer",
      company: "Secure Cloud Inc.",
      location: "Boston, MA",
      period: "2018 - 2021",
      description: [
        "Designed and implemented scalable cloud infrastructure for 50+ enterprise clients",
        "Led migration of legacy systems to cloud-native architecture, improving performance by 35%",
        "Developed Python automation tooling for continuous infrastructure validation and reporting",
        "Implemented CI/CD pipelines with automated quality gates and deployment workflows"
      ],
      technologies: ["AWS", "Terraform", "Ansible", "Python", "CircleCI", "Azure", "Docker"]
    }
  ],
  education: [
    {
      degree: "Cloud and AI Automation Researcher",
      institution: "Baylor University",
      location: "Waco, TX",
      period: "2022 - Present",
      description: "Research focus on agentic AI, cloud automation, and DevOps productivity"
    },
    {
      degree: "M.S. in Computer Science",
      institution: "University of Texas at El Paso",
      location: "El Paso, TX",
      period: "2018 - 2021",
      description: "Specialization in cloud systems, automation, and machine learning"
    },
    {
      degree: "B.S. in Computer Science and Information Technology",
      institution: "Community College",
      location: "Austin, TX",
      period: "2011 - 2015"
    }
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "2023",
      link: "https://www.credly.com/badges/193050a7-1625-4d8e-b77d-26d2fe8dd1e2/linked_in_profile"
    },
    {
      name: "Azure Certified Administrator",
      issuer: "Microsoft",
      date: "2025",
      link: "https://learn.microsoft.com/en-us/users/enochayivor-0815/credentials/f46a46b56d4133fb?ref=https%3A%2F%2Fwww.linkedin.com%2F"
    },
    {
      name: "Terraform Certified Associate",
      issuer: "HashiCorp",
      date: "2023",
      link: "https://www.credly.com/badges/59645601-fc1c-42a8-b95b-4fbf3c499ef6/linked_in_profile"
    },
    {
      name: "Azure DevOps Engineer Expert",
      issuer: "Microsoft",
      date: "2025"
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "2025"
    }
  ],
  publications: [
    {
      title: "Advancing Cloud Operations Through Agentic AI and Automation",
      journal: "Journal of Cloud Engineering and Automation",
      date: "2023",
      authors: ["Enoch", "Smith, J.", "Chen, L."],
      link: "https://doi.org/10.xxxx/cloudops.2023.12345"
    },
    {
      title: "Python Automation Patterns for Multi-Cloud DevOps Workflows",
      conference: "International Conference on Cloud Automation",
      date: "2022",
      authors: ["Enoch", "Johnson, K."],
      link: "https://doi.org/10.xxxx/icca.2022.67890"
    }
  ],
  projects: [
      {
      title: "Terraform 3-Tier Architecture on AWS",
      description: "Designed and deployed a robust 3-tier infrastructure using Terraform, consisting of a VPC, public and private subnets, internet and NAT gateways, load balancers, auto scaling groups, application and database layers. Automated provisioning of EC2 instances, security groups, and RDS Aurora with high availability across multiple AZs.",
      technologies: ["Terraform", "AWS", "VPC", "ALB", "EC2", "Auto Scaling", "RDS Aurora", "NAT Gateway"],
      link: "https://github.com/cloudenochcsis/terraform-aws-3tier-architecture.git"
    },
    
    {
      title: "Azure Development Environment with Terraform",
      description: "This project is a hands-on guide to building a development environment on Microsoft Azure using Terraform.",
      technologies: ["Terraform", "Azure", "Virtual Machines", "Networking", "Storage"],
      link: "https://github.com/cloudenochcsis/Azure_DevEnv_With_Terraform"
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
