import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { MailIcon } from './icons/Icons';

export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Work', href: '#work' },
    { label: 'Experience', href: '#experience' },
    { label: 'Writing & Research', href: '#writing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-[#0B0F17]/95 backdrop-blur-md border-b border-slate-800 shadow-lg'
          : 'bg-[#0B0F17] border-b border-slate-850'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Name */}
          <div className="flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-lg font-bold text-white hover:text-[#0066FF] transition-colors bg-transparent border-none cursor-pointer tracking-tight flex items-center gap-2 p-1.5 rounded focus:outline-none"
              aria-label="Enoch A. - Scroll to top"
            >
              <span className="font-mono text-[#0066FF] font-black tracking-wider">EA</span>
              <span className="text-white font-semibold tracking-tight">{personalInfo.shortName}</span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="nav-link text-slate-300 hover:text-white px-3 py-2 rounded text-sm font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop "Let's talk" CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={personalInfo.mailtoHref}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0066FF] text-white text-sm font-medium hover:bg-[#0052D6] transition-colors shadow-sm focus:outline-none"
            >
              <MailIcon className="w-4 h-4" />
              <span>Let’s talk</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={personalInfo.mailtoHref}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0066FF] text-white text-xs font-medium hover:bg-[#0052D6] transition-colors"
            >
              <span>Talk</span>
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div
            id="mobile-nav"
            className="md:hidden py-3 px-2 border-t border-slate-800 bg-[#0B0F17] space-y-1"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="text-slate-300 hover:text-white hover:bg-slate-800/60 block px-3 py-3 rounded-lg text-base font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <a
                href={personalInfo.mailtoHref}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-lg bg-[#0066FF] text-white font-medium text-sm text-center"
              >
                <MailIcon className="w-4 h-4" />
                <span>Let’s talk</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
