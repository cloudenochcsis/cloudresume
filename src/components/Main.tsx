import React from 'react';
import Section from './Section';
import CoreCompetencies from './CoreCompetencies';
import SkillList from './SkillList';
import ResearchAreas from './ResearchAreas';
import Connect from './Connect';
import { CoreCompetency, Skill, ResearchArea } from '../App';
import { useResume } from '../contexts/ResumeContext';
import { ExternalLink, Code } from 'lucide-react';

interface MainProps {
  coreCompetencies: CoreCompetency[];
  skills: Skill[];
  researchAreas: ResearchArea[];
}

const ExperienceCard: React.FC<{ experience: any; index: number }> = ({ experience, index }) => (
  <div 
    className="mb-6 pb-6 border-b border-gray-200 dark:border-dark-400 last:border-0 last:mb-0 last:pb-0"
    style={{ 
      animationDelay: `${index * 150}ms`,
      animationFillMode: 'backwards'
    }}
  >
    <div className="flex flex-col sm:flex-row sm:items-center mb-2">
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{experience.title}</h3>
      <span className="hidden sm:inline mx-2 text-gray-400 dark:text-gray-500">•</span>
      <span className="text-primary-600 dark:text-primary-400 font-medium">{experience.company}</span>
    </div>
    
    <div className="flex flex-col sm:flex-row sm:items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
      <span>{experience.location}</span>
      <span className="hidden sm:inline mx-2">•</span>
      <span>{experience.period}</span>
    </div>
    
    <ul className="mt-2 space-y-2">
      {experience.description.map((item: string, i: number) => (
        <li key={i} className="flex items-start">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary-600 dark:bg-primary-400 mt-1.5 mr-2 flex-shrink-0"></span>
          <span className="text-gray-700 dark:text-gray-300">{item}</span>
        </li>
      ))}
    </ul>
    
    <div className="mt-4 flex flex-wrap">
      {experience.technologies.map((tech: string, i: number) => (
        <span 
          key={i} 
          className="inline-block bg-gray-100 dark:bg-dark-500 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded mr-2 mb-2"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

const EducationCard: React.FC<{ education: any; index: number }> = ({ education, index }) => (
  <div 
    className="mb-6 pb-6 border-b border-gray-200 dark:border-dark-400 last:border-0 last:mb-0 last:pb-0"
    style={{ 
      animationDelay: `${index * 150}ms`,
      animationFillMode: 'backwards'
    }}
  >
    <div className="flex flex-col sm:flex-row sm:items-center mb-2">
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{education.degree}</h3>
    </div>
    
    <div className="flex flex-col sm:flex-row sm:items-center text-base mb-2">
      <span className="text-primary-600 dark:text-primary-400 font-medium">{education.institution}</span>
      <span className="hidden sm:inline mx-2 text-gray-400 dark:text-gray-500">•</span>
      <span className="text-gray-500 dark:text-gray-400">{education.location}</span>
    </div>
    
    <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
      {education.period}
    </div>
    
    {education.description && (
      <p className="text-gray-700 dark:text-gray-300">{education.description}</p>
    )}
  </div>
);

const CertificationCard: React.FC<{ certification: any; index: number }> = ({ certification, index }) => (
  <div 
    className="mb-5 pb-5 border-b border-gray-200 dark:border-dark-400 last:border-0 last:mb-0 last:pb-0"
    style={{ 
      animationDelay: `${index * 150}ms`,
      animationFillMode: 'backwards'
    }}
  >
    <div className="flex justify-between">
      <div>
        <h3 className="text-base font-bold text-gray-900 dark:text-gray-100 mb-1">{certification.name}</h3>
        <div className="text-sm">
          <span className="text-primary-600 dark:text-primary-400">{certification.issuer}</span>
          <span className="text-gray-500 dark:text-gray-400 ml-2">({certification.date})</span>
        </div>
      </div>
      {certification.link ? (
        <a 
          href={certification.link}
          className="text-primary-600 dark:text-primary-400 hover:underline text-sm inline-flex items-center flex-shrink-0 ml-4"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Verify ${certification.name} certification`}
        >
          <ExternalLink className="h-4 w-4 mr-1" />
          Verify
        </a>
      ) : (
        <span className="text-sm text-gray-400 dark:text-gray-500 italic flex-shrink-0 ml-4">
          Coming Soon
        </span>
      )}
    </div>
  </div>
);

const PublicationCard: React.FC<{ publication: any; index: number }> = ({ publication, index }) => (
  <div 
    className="mb-6 pb-6 border-b border-gray-200 dark:border-dark-400 last:border-0 last:mb-0 last:pb-0"
    style={{ 
      animationDelay: `${index * 150}ms`,
      animationFillMode: 'backwards'
    }}
  >
    <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{publication.title}</h3>
    
    <div className="text-sm mb-2">
      {publication.journal && (
        <span className="text-primary-600 dark:text-primary-400 font-medium">{publication.journal}</span>
      )}
      
      {publication.conference && (
        <span className="text-primary-600 dark:text-primary-400 font-medium">{publication.conference}</span>
      )}
      
      <span className="block sm:inline sm:ml-2 text-gray-500 dark:text-gray-400">
        {publication.date}
      </span>
    </div>
    
    <div className="text-sm text-gray-700 dark:text-gray-300 mb-2">
      <span className="font-medium">Authors:</span> {publication.authors.join(', ')}
    </div>
    
    {publication.link && (
      <a 
        href={publication.link} 
        className="text-primary-600 dark:text-primary-400 hover:underline text-sm flex items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        View publication
        <ExternalLink className="h-3 w-3 ml-1" />
      </a>
    )}
  </div>
);

const ProjectCard: React.FC<{ project: any; index: number }> = ({ project, index }) => (
  <div 
    className="bg-white dark:bg-dark-500 rounded-xl shadow-md dark:shadow-none dark:border dark:border-dark-400 overflow-hidden h-full flex flex-col"
    style={{ 
      animationDelay: `${index * 150}ms`,
      animationFillMode: 'backwards'
    }}
  >
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">{project.title}</h3>
        <Code className="h-5 w-5 text-primary-600 dark:text-primary-400 flex-shrink-0 ml-2" />
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{project.description}</p>
      
      <div className="mt-auto">
        <div className="flex flex-wrap mb-4">
          {project.technologies.map((tech: string, i: number) => (
            <span 
              key={i} 
              className="inline-block bg-gray-100 dark:bg-dark-500 border border-gray-200 dark:border-dark-400 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {project.link && (
          <a 
            href={project.link} 
            className="text-primary-600 dark:text-primary-400 hover:underline text-sm inline-flex items-center mt-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            View project
            <ExternalLink className="h-3 w-3 ml-1" />
          </a>
        )}
      </div>
    </div>
  </div>
);

// Define categorized skills
const categorizedSkills = {
  "Security": [
    "Information Security", "Cybersecurity", "Network Security", "Incident Response", "Security Automation"
  ],
  "Cloud & Infrastructure": [
    "Cloud Computing (AWS, Azure, GCP, Heroku)", "DevOps", "Site Reliability Engineering", "Terraform", "Docker", "Kubernetes"
  ],
  "Languages & Technologies": [
    "Python", "Artificial Intelligence", "Machine Learning"
  ]
};

const Main: React.FC<MainProps> = ({ coreCompetencies, skills, researchAreas }) => {
  const { about, experiences, education, certifications, publications, projects } = useResume();

  return (
    <main>
      <Section id="about" title="About Me">
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">{about}</p>
      </Section>
      
      <Section id="competencies" title="Core Competencies">
        <CoreCompetencies competencies={coreCompetencies} />
      </Section>
      
      <Section id="experience" title="Work Experience">
        <div>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </Section>
      
      <Section id="education" title="Education">
        <div className="grid grid-cols-1 gap-6">
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} index={index} />
          ))}
        </div>
      </Section>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Section id="certifications" title="Certifications">
          <div>
            {certifications.map((cert, index) => (
              <CertificationCard key={index} certification={cert} index={index} />
            ))}
          </div>
        </Section>
        
        <Section id="publications" title="Publications">
          <div>
            {publications.map((pub, index) => (
              <PublicationCard key={index} publication={pub} index={index} />
            ))}
          </div>
        </Section>
      </div>
      
      <Section id="skills" title="Technical Skills">
        <SkillList skills={skills} categories={categorizedSkills} />
      </Section>
      
      <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </Section>
      
      <Section id="research" title="Research Focus">
        <ResearchAreas areas={researchAreas} />
      </Section>
      
      <Section id="connect" title="Connect">
        <Connect />
      </Section>
    </main>
  );
};

export default React.memo(Main);
