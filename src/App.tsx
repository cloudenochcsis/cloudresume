import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
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

const AppContent: React.FC = () => {
  const { animationPreference } = useTheme();
  
  // Add class to body for reduced animations
  useEffect(() => {
    if (animationPreference === 'reduced') {
      document.body.classList.add('prefers-reduced-motion');
    } else {
      document.body.classList.remove('prefers-reduced-motion');
    }
  }, [animationPreference]);

  return (
    <div 
      data-testid="app-outer-div" 
      className={`min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-dark-800 pt-8 pb-16 px-4 sm:px-6 lg:px-8`}
    >
      <div data-testid="app-inner-div" className="max-w-5xl mx-auto">
        <Header />
        <Main 
          coreCompetencies={coreCompetencies}
          skills={skills}
          researchAreas={researchAreas}
        />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ResumeProvider>
        <AppContent />
      </ResumeProvider>
    </ThemeProvider>
  );
};

export default App;
