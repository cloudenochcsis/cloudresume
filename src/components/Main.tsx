import React from 'react';
import About from './About';
import Projects from './Projects';
import { useReveal } from '../hooks/useReveal';
import { CoreCompetency, Skill, ResearchArea } from '../App';

interface MainProps {
  coreCompetencies: CoreCompetency[];
  skills: Skill[];
  researchAreas: ResearchArea[];
}

// Skill icons mapping
const skillIcons: Record<string, string> = {
  "Cloud Computing": "☁️",
  "DevOps": "🔄",
  "Agentic AI": "🤖",
  "Python": "🐍",
  "Automation": "⚙️",
  "Infrastructure as Code": "📝",
  "Containerization": "📦",
  "Orchestration": "🎯",
  "CI/CD": "🚀",
  "Monitoring": "📊",
  "Logging": "📋",
  "Scalability": "📈",
  "Resilience": "🛡️",
};


const Main: React.FC<MainProps> = ({ coreCompetencies, skills, researchAreas }) => {
  const skillsSection = useReveal();

  return (
    <>
      <About />

      {/* Skills Section */}
      <div
        ref={skillsSection.ref}
        className={`reveal ${skillsSection.visible ? 'visible' : ''} scroll-mt-20 my-16 p-8 md:p-10 rounded-2xl glass-card glow-blue-hover transition-all duration-500`}
        id="skills"
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="h-8 w-1 rounded-full bg-gradient-to-b from-[#0da6f2] to-[#a855f7]"></div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Skills & Expertise</h2>
        </div>
        <div className={`flex gap-3 flex-wrap ${skillsSection.visible ? 'stagger-children' : ''}`}>
          {coreCompetencies.map((competency, index) => (
            <div 
              key={index}
              className="skill-tag flex h-11 items-center gap-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06] px-4 transition-all duration-300 hover:border-[#0da6f2]/30 hover:bg-[#0da6f2]/[0.06] hover:scale-[1.03] cursor-default"
            >
              <span className="text-base">{skillIcons[competency.label] || "💡"}</span>
              <p className="text-gray-300 text-sm font-medium">{competency.label}</p>
            </div>
          ))}
        </div>
      </div>

      <Projects />
    </>
  );
};

export default Main;
