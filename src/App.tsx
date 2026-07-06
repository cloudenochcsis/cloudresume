import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Header from './components/Header';
import Main from './components/Main';
import Contact from './components/Contact';

// Types
export type CoreCompetency = {
  label: string;
};

// Concrete tools and competencies
const coreCompetencies: CoreCompetency[] = [
  { label: 'AWS' },
  { label: 'Azure' },
  { label: 'GCP' },
  { label: 'Terraform' },
  { label: 'Kubernetes' },
  { label: 'ArgoCD' },
  { label: 'Docker' },
  { label: 'CI/CD' },
  { label: 'Python' },
  { label: 'OpenTelemetry' },
  { label: 'Grafana' },
  { label: 'Agentic AI' },
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
      className="relative flex size-full min-h-screen flex-col dark group/design-root overflow-x-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)',
        backgroundSize: '24px 24px'
      }}>
      
      {/* Background gradient effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 h-[60%] w-[50%] rounded-full bg-gradient-to-tr from-[#0da6f2]/[0.07] to-transparent blur-[120px]"></div>
        <div className="absolute right-0 top-0 h-[50%] w-[40%] rounded-full bg-gradient-to-bl from-[#a855f7]/[0.05] to-transparent blur-[120px]"></div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[40%] w-[30%] rounded-full bg-gradient-to-t from-[#0da6f2]/[0.03] to-transparent blur-[100px]"></div>
      </div>

      <Header />
      
      <div className="layout-container flex h-full grow flex-col z-10">
        <div className="flex flex-1 justify-center py-5">
          <div data-testid="app-inner-div" className="layout-content-container flex flex-col max-w-5xl flex-1 px-4">
            <Main coreCompetencies={coreCompetencies} />

            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
