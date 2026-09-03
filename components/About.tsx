import React from 'react';
import { doctoralResearch } from '../data/portfolioData';
import { BookOpenIcon, CheckVerifiedIcon, TerminalIcon } from './icons/Icons';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-14 border-b border-terminal-800 scroll-mt-16" aria-label="About and Background">
      <div className="flex items-center gap-2 mb-2 font-mono text-xs text-electric-400 uppercase tracking-wider">
        <TerminalIcon className="w-4 h-4" />
        <span>Background &amp; Philosophy</span>
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-6">
        Systems Discipline, Cloud Leadership &amp; Applied Research
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Narrative Column */}
        <div className="lg:col-span-7 space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
          <p>
            My engineering foundation began in <strong className="text-white">technical support and systems administration</strong>, debugging kernel logs, resolving low-level TCP/IP network bottlenecks, and resolving customer escalations in high-pressure production environments. That formative experience instilled a lasting intolerance for configuration drift, flaky deployments, and unexplained outages.
          </p>
          <p>
            As a <strong className="text-white">Cloud Team Lead at Crowdbotics</strong>, I directed the engineering team responsible for provisioning, securing, and operating multi-tenant cloud environments across AWS and GCP for hundreds of client applications. By codifying infrastructure into modular Terraform modules and enforcing automated deployment guardrails, we cut customer onboarding spin-up times by over 70% and made production releases repeatable.
          </p>
          <p>
            With an academic foundation in <strong className="text-white">Computer Science</strong>, I treat infrastructure as a software problem: declarative specifications, continuous verification, GitOps reconciliation, and telemetry-driven incident response.
          </p>
        </div>

        {/* Doctoral Research & Core Tenets Column */}
        <div className="lg:col-span-5 space-y-4">
          {/* PhD Research Card */}
          <div className="p-5 rounded-xl bg-terminal-900 border border-terminal-800 shadow-card">
            <div className="flex items-center gap-2 mb-2">
              <BookOpenIcon className="w-4 h-4 text-electric-400" />
              <span className="text-xs font-mono font-semibold text-electric-400 uppercase tracking-wider">
                Doctoral Research
              </span>
            </div>
            <h3 className="text-sm font-bold text-white mb-1">
              {doctoralResearch.degree}
            </h3>
            <div className="text-xs text-slate-400 font-mono mb-2">
              {doctoralResearch.institution}
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              {doctoralResearch.description}
            </p>
            <div className="text-[11px] text-slate-400 border-t border-terminal-800 pt-2 font-mono">
              Topic: {doctoralResearch.topic}
            </div>
          </div>

          {/* Operating Principles */}
          <div className="p-5 rounded-xl bg-terminal-900 border border-terminal-800 shadow-card font-mono text-xs">
            <div className="text-[11px] text-slate-400 uppercase tracking-wider mb-3">
              Operational Principles
            </div>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <CheckVerifiedIcon className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <span>Zero manual console tweaks; everything codified in Git.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckVerifiedIcon className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <span>Strict network segmentation (private subnets, zero direct exposure).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckVerifiedIcon className="w-3.5 h-3.5 text-emerald-400 mt-0.5 shrink-0" />
                <span>Continuous reconciliation (ArgoCD) over imperative scripts.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
