import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0D1117]/90 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-xl font-bold text-white hover:text-[#0da6f2] transition-colors duration-300 bg-transparent border-none cursor-pointer tracking-tight"
              >
                <span className="gradient-text">E.A</span>
              </button>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <a
                    key={item}
                    className="nav-link text-gray-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white p-2 rounded-lg transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
          {/* Mobile menu */}
          <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/5">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  className="text-gray-400 hover:text-white hover:bg-white/5 block px-3 py-2.5 rounded-lg text-base font-medium transition-all duration-200"
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center text-center px-4">
        {/* Status badge */}
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0da6f2]/10 border border-[#0da6f2]/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-sm text-gray-300 font-medium">Open to opportunities</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-6 text-white leading-[0.9]">
          Enoch <span className="gradient-text">.A</span>
        </h1>
        <div className="h-12">
          <h2 className="typing-effect text-lg sm:text-xl md:text-2xl font-medium text-gray-400" 
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
          <h2 className="typing-effect text-lg sm:text-xl md:text-2xl font-medium text-gray-400" 
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
        <a 
          className="relative mt-10 flex items-center gap-2 cursor-pointer justify-center rounded-xl h-12 px-8 bg-[#0da6f2] text-white text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-[#0a8cd1] hover:scale-[1.03] hover:shadow-lg hover:shadow-[#0da6f2]/20 pulse-ring" 
          href="#projects"
        >
          <span>View My Work</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 animate-bounce opacity-30">
          <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Header;
