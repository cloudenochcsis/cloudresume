'use client';

import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';

export const MinimalistNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Skills', href: '#skills' },
    { label: 'Writing', href: '#writing' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#about"
          className="font-medium text-neutral-900 tracking-tight text-sm hover:text-neutral-600 transition-colors"
        >
          {personalInfo.shortName}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-5 text-xs text-neutral-600 font-medium" role="navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-neutral-950 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.mailtoHref}
            className="btn-gradient px-3 py-1 rounded text-xs font-semibold shadow-sm inline-flex items-center gap-1"
          >
            Contact
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 text-neutral-600 hover:text-neutral-900 rounded border border-neutral-200"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <nav className="md:hidden bg-white border-b border-neutral-200 px-4 py-3 space-y-2 text-sm text-neutral-700" role="navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-1 hover:text-neutral-950 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default MinimalistNav;
