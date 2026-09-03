import React from 'react';
import VisitorCounter from './VisitorCounter';
import { personalInfo } from '../data/portfolioData';
import { MailIcon, GitHubIcon, LinkedInIcon, HashnodeIcon } from './icons/Icons';

const CONTACT_EMAIL = personalInfo.email;
const MAILTO_HREF = personalInfo.mailtoHref;
// Flip to true after adding public/resume.pdf — keeps the button from ever 404ing.
const RESUME_AVAILABLE = false;

const socialLinks = [
  {
    href: personalInfo.githubUrl,
    label: 'GitHub',
    detail: 'github.com/cloudenochcsis',
    Icon: GitHubIcon,
  },
  {
    href: personalInfo.linkedinUrl,
    label: 'LinkedIn',
    detail: 'in/enoch-a-b00766138',
    Icon: LinkedInIcon,
  },
  {
    href: personalInfo.blogUrl,
    label: 'Blog',
    detail: 'cloudenoch.hashnode.dev',
    Icon: HashnodeIcon,
  },
];

export const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#0B0F17] text-white pt-16 pb-12 border-t border-slate-800" aria-label="Contact and Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>Open to Senior &amp; Staff DevOps Opportunities</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Need someone who can improve how your infrastructure is built, shipped, and observed?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            I build the infrastructure teams ship on and the systems that keep releases predictable. Send an email to start the conversation.
          </p>

          {/* Primary Action & Resume */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            <a
              href={MAILTO_HREF}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#0066FF] text-white text-sm font-semibold hover:bg-[#0052D6] transition-colors shadow-md pulse-ring no-underline w-full sm:w-auto"
            >
              <MailIcon className="w-4 h-4" />
              <span>Email me</span>
            </a>

            {RESUME_AVAILABLE && (
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 text-sm font-semibold hover:text-white hover:border-slate-700 transition-colors no-underline w-full sm:w-auto"
              >
                <span>Download resume (PDF)</span>
              </a>
            )}
          </div>

          {/* Plain selectable email */}
          <p className="text-xs font-mono text-slate-400 mb-10 select-all">
            {CONTACT_EMAIL}
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {socialLinks.map(({ href, label, detail, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-850 transition-all text-xs font-medium no-underline"
              >
                <Icon className="w-4 h-4 text-slate-400" />
                <span>{label}</span>
                <span className="text-slate-500 font-mono hidden md:inline text-[11px]">({detail})</span>
              </a>
            ))}
          </div>

          {/* Small Secondary Visitor Counter */}
          <div className="mb-8 pt-4 border-t border-slate-850">
            <VisitorCounter className="mx-auto" />
          </div>

          {/* Copyright & Tech Stack */}
          <div className="text-xs text-slate-300 font-mono space-y-1">
            <p>
              &copy; {new Date().getFullYear()} Enoch Ayivor &bull; Cape Town, South Africa
            </p>
            <p className="text-slate-400">
              Engineered with React, FastAPI &amp; MongoDB &bull; Automated via CircleCI &bull; Deployed with Docker &amp; Nginx
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
