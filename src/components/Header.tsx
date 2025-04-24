import React, { useRef } from 'react';
import { useResume } from '../contexts/ResumeContext';
import { useTheme } from '../contexts/ThemeContext';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Header: React.FC = () => {
  const { name, title } = useResume();
  const { theme, toggleTheme } = useTheme();
  const headerRef = useRef<HTMLDivElement>(null);
  const isIntersecting = useIntersectionObserver(headerRef, { threshold: 0.1 });
  const [menuOpen, setMenuOpen] = React.useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div ref={headerRef} className={`mb-8 transition-all duration-500 ${isIntersecting ? 'opacity-100' : 'opacity-95'}`}>
      {/* Mobile menu button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <button 
          onClick={toggleMenu}
          className="p-2 rounded-full bg-white dark:bg-dark-600 shadow-md"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-gray-700 dark:text-gray-200" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700 dark:text-gray-200" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-all duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className={`fixed inset-y-0 right-0 w-64 bg-white dark:bg-dark-600 transform transition-transform duration-300 ease-in-out shadow-xl ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-6 flex flex-col h-full">
            <button 
              onClick={toggleMenu}
              className="absolute top-4 right-4 p-2"
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-gray-700 dark:text-gray-200" />
            </button>
            <div className="flex flex-col space-y-6 mt-12">
              <div className="flex items-center justify-center space-x-2">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-500"
                  aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {theme === 'dark' ? (
                    <Sun className="h-5 w-5 text-yellow-400" />
                  ) : (
                    <Moon className="h-5 w-5 text-gray-700" />
                  )}
                </button>
              </div>
              <a 
                href="#about" 
                onClick={toggleMenu}
                className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
              >
                About
              </a>
              <a 
                href="#experience" 
                onClick={toggleMenu}
                className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
              >
                Experience
              </a>
              <a 
                href="#education" 
                onClick={toggleMenu}
                className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
              >
                Education
              </a>
              <a 
                href="#skills" 
                onClick={toggleMenu}
                className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
              >
                Skills
              </a>
              <a 
                href="#projects" 
                onClick={toggleMenu}
                className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
              >
                Projects
              </a>
              <a 
                href="#research" 
                onClick={toggleMenu}
                className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
              >
                Research
              </a>
              <a 
                href="#connect" 
                onClick={toggleMenu}
                className="text-gray-800 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
              >
                Connect
              </a>
              <button 
                className="button-primary"
                onClick={() => {
                  alert('Download functionality would be implemented here');
                  toggleMenu();
                }}
              >
                <span className="flex items-center justify-center">
                  <Download className="h-5 w-5 mr-2" />
                  Download PDF
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <header className="section-card overflow-visible mb-6">
        <div className="primary-gradient text-white p-8 sm:p-10 rounded-t-xl">
          {/* Desktop nav/controls */}
          <div className="hidden md:flex justify-end mb-4 space-x-4">
            <nav className="flex space-x-6 items-center mr-auto">
              <a href="#about" className="text-white hover:text-white/80 font-medium text-sm transition-colors">About</a>
              <a href="#experience" className="text-white hover:text-white/80 font-medium text-sm transition-colors">Experience</a>
              <a href="#education" className="text-white hover:text-white/80 font-medium text-sm transition-colors">Education</a>
              <a href="#skills" className="text-white hover:text-white/80 font-medium text-sm transition-colors">Skills</a>
              <a href="#projects" className="text-white hover:text-white/80 font-medium text-sm transition-colors">Projects</a>
              <a href="#research" className="text-white hover:text-white/80 font-medium text-sm transition-colors">Research</a>
              <a href="#connect" className="text-white hover:text-white/80 font-medium text-sm transition-colors">Connect</a>
            </nav>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5 text-yellow-200" />
              ) : (
                <Moon className="h-5 w-5 text-white" />
              )}
            </button>
            <button
              className="flex items-center text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg"
              onClick={() => alert('Download functionality would be implemented here')}
            >
              <Download className="h-4 w-4 mr-2" />
              Resume PDF
            </button>
          </div>

          <div className="flex flex-col md:flex-row md:items-end">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold mb-2 tracking-tight">{name}</h1>
              <p className="text-xl sm:text-2xl font-light tracking-wide mb-4">{title}</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default React.memo(Header);