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
  location: "Cape Town, SA",
  about: "As a passionate Information Technology professional, I bring extensive experience in Cloud Infrastructure and Security to the table. My current focus is on pushing the boundaries of cybersecurity through my PhD research, where I'm exploring innovative ways to leverage Artificial Intelligence in enhancing Information Security practices.",
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
        "Collaborated with cross-functional teams to ensure compliance with security and regulatory standards in cloud deployments"
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
      technologies: ["AWS", "Terraform", "Ansible", "Python", "CircleCI", "Azure", "Docker"]
    }
  ],
  education: [
    {
      degree: "PhD in Information Systems",
      institution: "Baylor University",
      location: "Waco, TX",
      period: "2022 - Present",
      description: "Research focus on AI-driven security automation and advanced threat detection systems"
    },
    {
      degree: "M.S. in Computer Science",
      institution: "University of Texas at El Paso",
      location: "El Paso, TX",
      period: "2018 - 2021",
      description: "Specialization in Security and Machine Learning"
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
      name: "Azure DevOps Engineer",
      issuer: "Microsoft",
      date: "2025",
      link: "https://learn.microsoft.com/en-us/users/enochayivor-0815/credentials/azure-devops-engineer"

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