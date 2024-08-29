import React from 'react';
import Section from './Section';
import CoreCompetencies from './CoreCompetencies';
import SkillList from './SkillList';
import ResearchAreas from './ResearchAreas';
import Connect from './Connect';
import { CoreCompetency, Skill, ResearchArea } from '../App';
import { useResume } from '../contexts/ResumeContext';

interface MainProps {
  coreCompetencies: CoreCompetency[];
  skills: Skill[];
  researchAreas: ResearchArea[];
}

const Main: React.FC<MainProps> = ({ coreCompetencies, skills, researchAreas }) => {
  const { about } = useResume();

  return (
    <main className="bg-white shadow-lg rounded-b-lg p-8">
      <Section title="About Me">
        <p className="text-gray-700 leading-relaxed">{about}</p>
      </Section>
      
      <Section title="Core Competencies">
        <CoreCompetencies competencies={coreCompetencies} />
      </Section>
      
      <Section title="Research Focus">
        <ResearchAreas areas={researchAreas} />
      </Section>
      
      <Section title="Technical Skills">
        <SkillList skills={skills} />
      </Section>
      
      <Section title="Connect">
        <Connect />
      </Section>
    </main>
  );
};

export default Main;
