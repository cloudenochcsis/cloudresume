import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { ResumeProvider } from './contexts/ResumeContext';
import Header from './components/Header';
import Main from './components/Main';
import { Shield, Cloud, Server, Brain } from 'lucide-react';

// Types
export type Skill = string;
export type CoreCompetency = {
  icon: React.ElementType;
  label: string;
};
export type ResearchArea = string;

// Data
const coreCompetencies: CoreCompetency[] = [
  { icon: Shield, label: "Information Security" },
  { icon: Cloud, label: "Cloud/DevOps" },
  { icon: Server, label: "SRE" },
  { icon: Brain, label: "AI Research" }
];

const skills: Skill[] = [
  "Information Security", "Cybersecurity", "Cloud Computing (AWS, Azure, GCP, Heroku)", 
  "DevOps", "Site Reliability Engineering", "Artificial Intelligence", 
  "Machine Learning", "Network Security", "Incident Response", 
  "Security Automation", "Python", "Terraform", "Docker", "Kubernetes"
];

const researchAreas: ResearchArea[] = [
  "AI-driven threat detection systems",
  "Automated vulnerability assessment",
  "Adaptive security frameworks",
  "Machine learning for anomaly detection in network traffic"
];

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ResumeProvider>
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Header />
            <Main 
              coreCompetencies={coreCompetencies}
              skills={skills}
              researchAreas={researchAreas}
            />
          </div>
        </div>
      </ResumeProvider>
    </ThemeProvider>
  );
};

export default App;