import React, { useEffect } from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { ResumeProvider } from './contexts/ResumeContext';
import Header from './components/Header';
import Main from './components/Main';
import VisitorCounter from './components/VisitorCounter';

// Types
export type Skill = string;
export type CoreCompetency = {
  icon?: React.ElementType;
  label: string;
};
export type ResearchArea = string;

// Updated data for the new design
const coreCompetencies: CoreCompetency[] = [
  { label: "Cloud Computing" },
  { label: "DevOps" },
  { label: "Automation" },
  { label: "Infrastructure as Code" },
  { label: "Containerization" },
  { label: "Orchestration" },
  { label: "CI/CD" },
  { label: "Monitoring" },
  { label: "Logging" },
  { label: "Security" },
  { label: "Scalability" },
  { label: "Resilience" }
];

const skills: Skill[] = [
  "Cloud Computing", "DevOps", "Automation", "Infrastructure as Code", 
  "Containerization", "Orchestration", "CI/CD", "Monitoring", 
  "Logging", "Security", "Scalability", "Resilience"
];

const researchAreas: ResearchArea[] = [
  "Cloud Infrastructure Optimization",
  "Automated Deployment Pipeline", 
  "Research on Cloud Scalability"
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
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
        backgroundSize: '20px 20px'
      }}>
      
      {/* Background gradient effects */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute bottom-0 left-0 h-1/2 w-1/2 rounded-full bg-gradient-to-tr from-[#0da6f2] to-transparent blur-3xl"></div>
        <div className="absolute right-0 top-0 h-1/2 w-1/2 rounded-full bg-gradient-to-bl from-[#0da6f2] to-transparent blur-3xl"></div>
      </div>

      <Header />
      
      <div className="layout-container flex h-full grow flex-col z-10">
        <div className="flex flex-1 justify-center py-5">
          <div data-testid="app-inner-div" className="layout-content-container flex flex-col max-w-5xl flex-1 px-4">
            <Main 
              coreCompetencies={coreCompetencies}
              skills={skills}
              researchAreas={researchAreas}
            />
            
            <footer className="text-center py-10 border-t border-white/10 mt-16" id="contact">
              <VisitorCounter className="mb-6" />
              
              {/* Contact Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                <div className="flex justify-center space-x-6">
                  <a 
                    href="https://github.com/cloudenochcsis" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#1C2128] border border-[#30363D] rounded-lg text-gray-300 hover:text-white hover:border-[#484F58] transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>GitHub</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/in/enoch-a-b00766138/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#1C2128] border border-[#30363D] rounded-lg text-gray-300 hover:text-white hover:border-[#484F58] transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://cloudenoch.hashnode.dev/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-[#1C2128] border border-[#30363D] rounded-lg text-gray-300 hover:text-white hover:border-[#484F58] transition-all duration-300 hover:-translate-y-1"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span>Blog</span>
                  </a>
                </div>
              </div>
              
              <p className="text-gray-400">© 2025 Enoch .A. All Rights Reserved.</p>
            </footer>
          </div>
        </div>
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
