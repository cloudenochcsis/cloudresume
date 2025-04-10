import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

interface SectionProps {
  title: string;
  id?: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  title, 
  children, 
  id,
  defaultOpen = true
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  
  useEffect(() => {
    if (isVisible && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  }, [isVisible, hasBeenVisible]);

  return (
    <div 
      id={id}
      ref={sectionRef} 
      className={`mb-8 section-card animated-section transition-all duration-300 ease-in-out ${hasBeenVisible ? 'visible' : ''}`}
    >
      <button 
        className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset dark:focus:ring-primary-400"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{title}</h2>
        <ChevronRight 
          className={`h-5 w-5 text-gray-500 dark:text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} 
        />
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isOpen}
      >
        <div className="px-6 pb-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Section);
