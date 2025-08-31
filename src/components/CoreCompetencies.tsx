import React from 'react';
import { CoreCompetency } from '../App';

interface Props {
  competencies: CoreCompetency[];
}

const CoreCompetencyCard: React.FC<{ competency: CoreCompetency; index: number }> = ({ competency, index }) => {
  const Icon = competency.icon;
  
  return (
    <div 
      className="bg-white dark:bg-dark-500 rounded-xl shadow-md dark:shadow-none dark:border dark:border-dark-400 p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'backwards'
      }}
    >
      <div className="primary-gradient inline-flex p-3 rounded-lg mb-4">
        {Icon && <Icon className="h-6 w-6 text-white" />}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{competency.label}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">
        {getDescriptionForCompetency(competency.label)}
      </p>
    </div>
  );
};

const getDescriptionForCompetency = (label: string): string => {
  const descriptions: Record<string, string> = {
    "Information Security": "Expertise in protecting digital information systems from unauthorized access and ensuring data integrity.",
    "Cloud/DevOps": "Experience designing, deploying, and managing cloud infrastructure with modern DevOps methodologies.",
    "SRE": "Site Reliability Engineering practices to build and maintain highly available and scalable systems.",
    "AI Research": "Advancing the field through innovative research in artificial intelligence applied to security challenges."
  };
  
  return descriptions[label] || "";
};

const CoreCompetencies: React.FC<Props> = ({ competencies }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    {competencies.map((comp, index) => (
      <CoreCompetencyCard key={index} competency={comp} index={index} />
    ))}
  </div>
);

export default React.memo(CoreCompetencies);