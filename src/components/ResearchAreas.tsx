import React from 'react';
import { ResearchArea } from '../App';
import { ArrowRight, Brain, Search, Shield, Code } from 'lucide-react';

interface Props {
  areas: ResearchArea[];
}

// Helper function to match icons to research areas based on keywords
const getIconForResearchArea = (area: string): React.ElementType => {
  const lowerArea = area.toLowerCase();
  
  if (lowerArea.includes('ai') || lowerArea.includes('artificial intelligence') || lowerArea.includes('machine learning')) {
    return Brain;
  } else if (lowerArea.includes('security') || lowerArea.includes('threat') || lowerArea.includes('protection')) {
    return Shield;
  } else if (lowerArea.includes('detect') || lowerArea.includes('vulnerab') || lowerArea.includes('assess')) {
    return Search;
  } else {
    return Code;
  }
};

const ResearchAreaCard: React.FC<{ area: ResearchArea; index: number }> = ({ area, index }) => {
  const Icon = getIconForResearchArea(area);
  
  return (
    <div 
      className="bg-white dark:bg-dark-500 rounded-xl p-6 shadow-md dark:shadow-none dark:border dark:border-dark-400 relative overflow-hidden flex flex-col h-full"
      style={{ 
        animationDelay: `${index * 150}ms`,
        animationFillMode: 'backwards'
      }}
    >
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-1 primary-gradient"></div>
      
      <div className="mb-4">
        <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
      </div>
      
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
        {area}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm mt-auto">
        {getResearchDescription(area)}
      </p>
      
      <button 
        className="text-primary-600 dark:text-primary-400 text-sm font-medium mt-4 inline-flex items-center group border-none bg-transparent p-0 cursor-pointer"
        onClick={() => window.alert('Research details coming soon')}
      >
        Learn more 
        <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
};

// Helper function to provide more detailed descriptions for each research area
const getResearchDescription = (area: string): string => {
  const descriptions: Record<string, string> = {
    "AI-driven threat detection systems": "Developing neural networks capable of identifying patterns associated with novel attack vectors in real-time network traffic.",
    "Automated vulnerability assessment": "Building autonomous systems that continuously probe for security weaknesses and prioritize remediation efforts.",
    "Adaptive security frameworks": "Creating security systems that evolve in response to emerging threats through reinforcement learning techniques.",
    "Machine learning for anomaly detection in network traffic": "Implementing unsupervised learning algorithms to detect unusual patterns that may indicate security breaches."
  };
  
  return descriptions[area] || "Innovative research combining AI and information security to address evolving cyber threats.";
};

const ResearchAreas: React.FC<Props> = ({ areas }) => (
  <div>
    <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
      My doctoral research is at the cutting edge of Artificial Intelligence applications in Information Security. I'm exploring how advanced machine learning techniques can enhance cybersecurity practices and develop more resilient systems.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
      {areas.map((area, index) => (
        <ResearchAreaCard key={index} area={area} index={index} />
      ))}
    </div>
  </div>
);

export default React.memo(ResearchAreas);
