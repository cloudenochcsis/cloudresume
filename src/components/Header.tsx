import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0D1117]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-200 bg-transparent border-none cursor-pointer"
              >
                Enoch .A
              </button>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a className="text-gray-300 hover:bg-[#1b2327] hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#about">About</a>
                <a className="text-gray-300 hover:bg-[#1b2327] hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#skills">Skills</a>
                <a className="text-gray-300 hover:bg-[#1b2327] hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#projects">Projects</a>
                <a className="text-gray-300 hover:bg-[#1b2327] hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="#contact">Contact</a>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white hover:bg-[#1b2327] p-2 rounded-md"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#0D1117]/95 border-t border-gray-700">
                <a 
                  className="text-gray-300 hover:bg-[#1b2327] hover:text-white block px-3 py-2 rounded-md text-base font-medium" 
                  href="#about"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  className="text-gray-300 hover:bg-[#1b2327] hover:text-white block px-3 py-2 rounded-md text-base font-medium" 
                  href="#skills"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Skills
                </a>
                <a 
                  className="text-gray-300 hover:bg-[#1b2327] hover:text-white block px-3 py-2 rounded-md text-base font-medium" 
                  href="#projects"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Projects
                </a>
                <a 
                  className="text-gray-300 hover:bg-[#1b2327] hover:text-white block px-3 py-2 rounded-md text-base font-medium" 
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-white">Enoch .A</h1>
        <div className="h-12">
          <h2 className="typing-effect text-xl md:text-2xl font-semibold text-gray-300" 
              style={{
                animationDelay: '0s', 
                animationDuration: '3s', 
                animationIterationCount: '1', 
                animationTimingFunction: 'steps(30, end)',
                animationFillMode: 'forwards'
              }}>
            Doctoral Researcher
          </h2>
        </div>
        <div className="h-12">
          <h2 className="typing-effect text-xl md:text-2xl font-semibold text-gray-300" 
              style={{
                animationDelay: '3s', 
                animationDuration: '3.5s', 
                animationIterationCount: '1', 
                animationTimingFunction: 'steps(40, end)',
                animationFillMode: 'forwards'
              }}>
            & Cloud Infrastructure Engineer
          </h2>
        </div>
        <a className="mt-8 flex items-center gap-2 min-w-[84px] max-w-[480px] cursor-pointer justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#0da6f2] text-white text-base font-bold tracking-[0.015em] transition-all duration-300 hover:bg-[#0a8cd1] hover:scale-105" href="#projects">
          <span>View My Work</span>
          <span className="material-symbols-outlined">arrow_downward</span>
        </a>
      </div>
    </>
  );
};

export default Header;
