import React from 'react';
import { personalInfo, certifications } from '../data/portfolioData';
import { ExternalLinkIcon, GitHubIcon, LinkedInIcon, MailIcon, ShieldCheckIcon, TerminalIcon } from './icons/Icons';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-16 border-b border-terminal-800" aria-label="Introduction and Overview">
      {/* Background Subtle Infra Grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.08) 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10">
        {/* Terminal Eyebrow Status */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-terminal-900 border border-terminal-800 text-xs font-mono text-slate-300 mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-400">status:</span>
          <span className="text-emerald-400 font-semibold">Available for Senior &amp; Staff DevOps roles</span>
          <span className="text-slate-500 hidden sm:inline">• EU Remote Friendly</span>
        </div>

        {/* Name and Title */}
        <div className="space-y-3 mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            {personalInfo.name}
          </h1>
          <p className="text-xl sm:text-2xl font-mono font-medium text-electric-400">
            {personalInfo.title}
          </p>
        </div>

        {/* Value Prop */}
        <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
          {personalInfo.valueProp}
        </p>

        {/* Career Arc Snippet */}
        <div className="p-4 rounded-lg bg-terminal-900/90 border border-terminal-800 max-w-3xl mb-8 text-xs sm:text-sm text-slate-300 font-mono flex items-start gap-3">
          <TerminalIcon className="w-5 h-5 text-electric-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-slate-400">arc:</span> Technical Support &rarr; Systems Specialist &rarr; Cloud Team Lead @ <strong className="text-white font-semibold">Crowdbotics</strong> &rarr; Senior DevOps Engineer
          </div>
        </div>

        {/* Certification Badges */}
        <div className="mb-8">
          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-3">
            Verified Certifications
          </div>
          <div className="flex flex-wrap gap-3">
            {certifications.map((cert) => (
              <a
                key={cert.badge}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-terminal-900 border border-terminal-800 hover:border-electric-500/50 text-xs font-mono text-slate-200 transition-colors no-underline"
              >
                <ShieldCheckIcon className="w-3.5 h-3.5 text-electric-400" />
                <span className="font-semibold text-white group-hover:text-electric-400 transition-colors">
                  {cert.badge}
                </span>
                <span className="text-slate-500">• {cert.issuer}</span>
                <ExternalLinkIcon className="w-3 h-3 text-slate-500 group-hover:text-electric-400" />
              </a>
            ))}
          </div>
        </div>

        {/* CTAs and Links */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={personalInfo.mailtoHref}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-electric-500 hover:bg-electric-600 text-white text-sm font-semibold transition-colors shadow-glow no-underline"
          >
            <MailIcon className="w-4 h-4" />
            <span>Get in touch</span>
          </a>

          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-terminal-900 border border-terminal-800 hover:border-slate-700 text-slate-200 hover:text-white text-sm font-medium transition-colors no-underline"
          >
            <GitHubIcon className="w-4 h-4 text-slate-400" />
            <span>GitHub</span>
          </a>

          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-terminal-900 border border-terminal-800 hover:border-slate-700 text-slate-200 hover:text-white text-sm font-medium transition-colors no-underline"
          >
            <LinkedInIcon className="w-4 h-4 text-slate-400" />
            <span>LinkedIn</span>
          </a>

          <a
            href={personalInfo.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-terminal-900 border border-terminal-800 hover:border-slate-700 text-slate-200 hover:text-white text-sm font-medium transition-colors no-underline"
          >
            <span>Hashnode Blog</span>
            <ExternalLinkIcon className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
