import React from 'react';
import { certifications, aboutContent } from '../data/portfolioData';
import { useReveal } from '../hooks/useReveal';
import { ExternalLinkIcon, CheckVerifiedIcon, ShieldCheckIcon } from './icons/Icons';

// Set to '/headshot.jpg' after adding a verified professional photo to public/.
// Null = graceful text-only layout as required.
const HEADSHOT_SRC: string | null = null;

export const About: React.FC = () => {
  const reveal = useReveal();

  return (
    <section
      ref={reveal.ref}
      id="about"
      className={`reveal ${reveal.visible ? 'reveal visible' : ''} scroll-mt-20 py-12 border-b border-editorial-border`}
      aria-label="About and Engineering Approach"
    >
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-mono font-semibold tracking-wider text-[#0066FF] uppercase block mb-1">
            Engineering Approach &amp; Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-editorial-text tracking-tight">
            About Me
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-editorial-caption max-w-md">
          How I think about systems engineering, operational reliability, and software delivery platforms.
        </p>
      </div>

      {/* Main Intro */}
      <div className="rounded-xl bg-editorial-surface border border-editorial-border p-6 sm:p-8 shadow-card mb-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {HEADSHOT_SRC && (
            <img
              src={HEADSHOT_SRC}
              alt="Enoch Ayivor, Cloud DevOps Engineer"
              className="w-32 h-32 md:w-40 md:h-40 rounded-xl object-cover border border-editorial-border shrink-0"
            />
          )}
          <div className="space-y-4 text-editorial-subtext text-base sm:text-lg leading-relaxed">
            <p>
              I’m a Cloud DevOps engineer who builds the infrastructure teams ship on: Kubernetes platforms with GitOps delivery, modular Terraform environments across AWS, Azure, and GCP, and the CI/CD and observability pipelines that keep production releases predictable and boring.
            </p>
            <p className="text-sm sm:text-base text-editorial-caption">
              My engineering foundation is built on verification and transparency. Every certification links directly to its issuing authority, every project links to public source code, and my work with the OpenSRE community is verified in upstream merged pull requests.
            </p>
          </div>
        </div>

        {/* 6 Core Principles */}
        <div className="mt-8 pt-6 border-t border-editorial-border">
          <h3 className="text-xs font-mono font-semibold text-editorial-caption uppercase tracking-wider mb-4">
            Core Engineering Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aboutContent.principles.map((principle) => (
              <div
                key={principle.title}
                className="p-4 rounded-lg bg-editorial-bg border border-editorial-border"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheckIcon className="w-4 h-4 text-[#0066FF] shrink-0" />
                  <h4 className="text-xs sm:text-sm font-bold text-editorial-text">
                    {principle.title}
                  </h4>
                </div>
                <p className="text-xs text-editorial-caption leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Verified Trust & Certifications Block */}
      <div className="space-y-4">
        <h3 className="text-xs font-mono font-semibold text-editorial-caption uppercase tracking-wider">
          Verifiable Credentials
        </h3>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {certifications.slice(0, 3).map((cert) => (
            <a
              key={cert.name}
              href={cert.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl bg-editorial-surface border border-editorial-border hover:border-[#0066FF]/40 shadow-card hover:shadow-card-hover transition-all no-underline flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded bg-blue-50 text-[#0066FF] border border-blue-100">
                    <CheckVerifiedIcon className="w-3 h-3 text-[#0066FF]" />
                    {cert.badge}
                  </span>
                  <ExternalLinkIcon className="w-3.5 h-3.5 text-editorial-caption group-hover:text-[#0066FF] transition-colors" />
                </div>
                <div className="text-sm font-semibold text-editorial-text group-hover:text-[#0066FF] transition-colors leading-snug">
                  {cert.name}
                </div>
              </div>
              <div className="text-xs text-editorial-caption mt-3 font-mono">
                {cert.issuer}
              </div>
            </a>
          ))}
        </div>

        {/* Open Source Trust Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <a
            href="https://github.com/Tracer-Cloud/opensre/pulls?q=is%3Apr+is%3Amerged+author%3Acloudenochcsis"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-xl bg-editorial-surface border border-editorial-border hover:border-emerald-500/40 shadow-card hover:shadow-card-hover transition-all no-underline"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-mono font-bold text-emerald-600 uppercase tracking-wider">
                Upstream Contributions
              </span>
              <ExternalLinkIcon className="w-3.5 h-3.5 text-editorial-caption group-hover:text-emerald-600 transition-colors" />
            </div>
            <div className="text-sm font-semibold text-editorial-text group-hover:text-emerald-600 transition-colors">
              Open source: 13 merged pull requests to OpenSRE
            </div>
            <div className="text-xs text-editorial-caption mt-1">
              Bug fixes, reliability tests, and telemetry hooks merged upstream into Tracer-Cloud/opensre &rarr;
            </div>
          </a>

          <a
            href="https://github.com/cloudenochcsis"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-4 rounded-xl bg-editorial-surface border border-editorial-border hover:border-[#0066FF]/40 shadow-card hover:shadow-card-hover transition-all no-underline"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-mono font-bold text-[#0066FF] uppercase tracking-wider">
                Public Code
              </span>
              <ExternalLinkIcon className="w-3.5 h-3.5 text-editorial-caption group-hover:text-[#0066FF] transition-colors" />
            </div>
            <div className="text-sm font-semibold text-editorial-text group-hover:text-[#0066FF] transition-colors">
              Every project below is public
            </div>
            <div className="text-xs text-editorial-caption mt-1">
              Inspect architecture manifests, infrastructure code, and CI/CD pipelines on GitHub &rarr;
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
