import React from 'react';
import Navigation from './Navigation';
import { HeroVisual } from './HeroVisual';
import { personalInfo } from '../data/portfolioData';
import { MailIcon, ArrowRightIcon, ExternalLinkIcon, MapPinIcon } from './icons/Icons';

const Header: React.FC = () => {
  return (
    <header className="bg-[#0B0F17] text-white border-b border-slate-850">
      {/* Sticky Navigation */}
      <Navigation />

      {/* Hero Section — Compact, does not take over full screen */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Hero Narrative & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono mb-5">
              <MapPinIcon className="w-3.5 h-3.5 text-[#0066FF]" />
              <span>{personalInfo.eyebrow}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-5">
              Cloud infrastructure that helps teams ship with confidence.
            </h1>

            {/* Supporting Copy */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4 max-w-2xl">
              {personalInfo.supportingCopy}
            </p>

            {/* Secondary Specialty Subtext (supports Agentic AI & Python positioning) */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              <span>DevOps Infrastructure • Kubernetes • Agentic AI, Python & Automation</span>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                aria-label="View work - Selected work"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0066FF] text-white text-sm font-semibold hover:bg-[#0052D6] transition-colors shadow-md pulse-ring no-underline"
              >
                <span>View selected work</span>
                <ArrowRightIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.mailtoHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm font-semibold hover:text-white hover:border-slate-700 hover:bg-slate-850 transition-colors no-underline"
              >
                <MailIcon className="w-4 h-4 text-[#0066FF]" />
                <span>Get in touch</span>
              </a>
            </div>

            {/* Proof Row */}
            <div className="w-full pt-6 border-t border-slate-800/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col">
                  <span className="text-base font-bold text-white font-mono">4+ years</span>
                  <span className="text-xs text-slate-400 mt-0.5">DevOps &amp; cloud engineering</span>
                </div>
                <div className="flex flex-col">
                  <a
                    href={personalInfo.openSrePrsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-base font-bold text-emerald-400 font-mono hover:text-emerald-300 transition-colors no-underline"
                  >
                    <span>13 merged pull requests</span>
                    <ExternalLinkIcon className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                  </a>
                  <span className="text-xs text-slate-400 mt-0.5">upstream to OpenSRE</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-white font-mono">AWS, Azure &amp; Terraform</span>
                  <span className="text-xs text-slate-400 mt-0.5">verified certifications</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Meaningful Infrastructure Flow Visual */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
