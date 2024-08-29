import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-8 bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out">
      <button 
        className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <ChevronRight className={`transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
      </button>
      <div 
        className={`px-6 pb-6 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </div>
  );
};

export default React.memo(Section);
