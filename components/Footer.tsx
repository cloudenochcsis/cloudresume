import React from 'react';
import { personalInfo } from '../data/portfolioData';
import VisitorCounter from './VisitorCounter';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons/Icons';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-16 border-t border-terminal-800 text-slate-400" aria-label="Contact and Footer">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
            Let’s Build Resilient Infrastructure
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Looking for a Senior DevOps Engineer who brings systems discipline, production Kubernetes expertise, and automated delivery platforms?
          </p>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={personalInfo.mailtoHref}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-electric-500 hover:bg-electric-600 text-white text-sm font-semibold transition-colors shadow-glow no-underline w-full sm:w-auto justify-center"
          >
            <MailIcon className="w-4 h-4" />
            <span>Email me</span>
          </a>

          {personalInfo.resumeAvailable && (
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-terminal-900 border border-terminal-800 text-slate-200 hover:text-white text-sm font-medium transition-colors no-underline w-full sm:w-auto justify-center"
            >
              <span>Download Résumé</span>
            </a>
          )}
        </div>

        {/* Selectable Email */}
        <p className="text-xs font-mono text-slate-400 select-all">
          {personalInfo.email}
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 pt-4 border-t border-terminal-800">
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white transition-colors no-underline"
          >
            <GitHubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <span className="text-slate-600">•</span>

          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white transition-colors no-underline"
          >
            <LinkedInIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <span className="text-slate-600">•</span>

          <a
            href={personalInfo.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-300 hover:text-white transition-colors no-underline"
          >
            <span>Hashnode</span>
          </a>
        </div>

        {/* Secondary Visitor Counter */}
        <div className="pt-2">
          <VisitorCounter />
        </div>

        {/* Infra Metadata */}
        <div className="text-[11px] font-mono text-slate-500 space-y-1">
          <p>
            cloudenoch.com &bull; Next.js Static Export &bull; Tailwind CSS &bull; FastAPI Backend &bull; CircleCI GitOps
          </p>
          <p>
            &copy; {new Date().getFullYear()} Enoch Ayivor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
