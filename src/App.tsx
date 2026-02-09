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
            <Main 
              coreCompetencies={coreCompetencies}
              skills={skills}
              researchAreas={researchAreas}
            />
            
            <footer className="text-center pt-16 pb-10 mt-20" id="contact">
              {/* Divider */}
              <div className="flex items-center justify-center gap-3 mb-12">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
                <span className="text-gray-600 text-sm font-mono">{"// connect"}</span>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Let's Connect</h3>
              <p className="text-gray-500 mb-8 max-w-md mx-auto text-sm">Interested in cloud infrastructure, DevOps, or research collaboration? Let's talk.</p>
              
              <div className="flex justify-center flex-wrap gap-4 mb-10">
                {[
                  { href: "https://github.com/cloudenochcsis", label: "GitHub", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
                  { href: "https://www.linkedin.com/in/enoch-a-b00766138/", label: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                  { href: "https://cloudenoch.hashnode.dev/", label: "Blog", icon: "M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 px-5 py-2.5 rounded-xl glass-card text-gray-400 hover:text-white hover:border-[#0da6f2]/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#0da6f2]/5"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d={link.icon}/>
                    </svg>
                    <span className="text-sm font-medium">{link.label}</span>
                  </a>
                ))}
              </div>

              <VisitorCounter className="mb-8" />
              
              <p className="text-gray-600 text-xs">&copy; {new Date().getFullYear()} Enoch .A &mdash; Built with React, FastAPI &amp; MongoDB</p>
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
