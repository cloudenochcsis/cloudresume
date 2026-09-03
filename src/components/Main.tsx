import React from 'react';
import Credibility from './Credibility';
import Projects from './Projects';
import Experience from './Experience';
import WritingResearch from './WritingResearch';
import Skills from './Skills';
import About from './About';
import { CoreCompetency } from '../App';

export interface MainProps {
  coreCompetencies?: CoreCompetency[];
}

export const Main: React.FC<MainProps> = ({ coreCompetencies }) => {
  return (
    <main id="main-content" className="w-full bg-editorial-bg text-editorial-text" aria-label="Main Portfolio Content">
      {/* 1. Horizontal Credibility Section */}
      <Credibility />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        {/* 2. Selected Work (Featured Case Study + Additional Projects) */}
        <Projects />

        {/* 3. Professional Experience Timeline */}
        <Experience />

        {/* 4. Writing and Research */}
        <WritingResearch />

        {/* 5. Grouped Skills Capabilities */}
        <Skills />

        {/* 6. About Me & Engineering Philosophy */}
        <About />
      </div>
    </main>
  );
};

export default Main;
