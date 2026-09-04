'use client';

import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { MailIcon } from './icons/Icons';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Featured Project', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Writing', href: '#writing' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-terminal-950/90 border-b border-terminal-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <a
          href="/"
          className="flex items-center gap-2.5 font-mono text-sm font-bold text-white tracking-tight no-underline"
        >
          <span className="w-2.5 h-2.5 rounded-sm bg-electric-500" />
          <span>Enoch A.</span>
          <span className="text-[11px] text-slate-500 font-normal hidden sm:inline">~/devops</span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-mono">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-300 hover:text-white transition-colors no-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.mailtoHref}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-electric-500 hover:bg-electric-600 text-white text-xs font-mono font-semibold transition-colors no-underline"
          >
            <MailIcon className="w-3.5 h-3.5" />
            <span>Let’s talk</span>
          </a>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg border border-terminal-800 bg-terminal-900 focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-terminal-800 bg-terminal-950 px-4 py-3 space-y-1 font-mono text-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-slate-300 hover:text-white no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navigation;
