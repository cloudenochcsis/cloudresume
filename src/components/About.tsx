import React from 'react';
import { useReveal } from '../hooks/useReveal';

// Set to '/headshot.jpg' after adding the image to public/. Null = text-only layout.
const HEADSHOT_SRC: string | null = null;

const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    href: 'https://www.credly.com/badges/193050a7-1625-4d8e-b77d-26d2fe8dd1e2/linked_in_profile',
  },
  {
    name: 'HashiCorp Certified: Terraform Associate',
    issuer: 'HashiCorp',
    href: 'https://www.credly.com/badges/59645601-fc1c-42a8-b95b-4fbf3c499ef6/linked_in_profile',
  },
  {
    name: 'Microsoft Certified: Azure Administrator Associate',
    issuer: 'Microsoft',
    href: 'https://learn.microsoft.com/en-us/users/enochayivor-0815/credentials/f46a46b56d4133fb',
  },
];

const About: React.FC = () => {
  const reveal = useReveal();

  return (
    <div
      ref={reveal.ref}
      className={`reveal ${reveal.visible ? 'visible' : ''} scroll-mt-20 my-16 p-8 md:p-10 rounded-2xl glass-card glow-blue-hover transition-all duration-500`}
      id="about"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="h-8 w-1 rounded-full bg-gradient-to-b from-[#0da6f2] to-[#a855f7]"></div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">About Me</h2>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        {HEADSHOT_SRC && (
          <img
            src={HEADSHOT_SRC}
            alt="Enoch, Cloud DevOps Engineer"
            className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover border border-white/10 shrink-0"
          />
        )}
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          I'm a Cloud DevOps engineer who builds the infrastructure teams ship on: Kubernetes
          platforms with GitOps delivery, Terraform-provisioned environments across AWS, Azure,
          and GCP, and the CI/CD and observability pipelines that keep deployments boring.
          Everything below is verifiable — certifications link to their issuers, and every
          project links to public code.
        </p>
      </div>

      {/* Trust rows */}
      <div className="mt-8 pt-8 border-t border-white/5 space-y-6">
        {/* Certifications */}
        <div>
          <h3 className="text-sm font-mono text-gray-500 mb-3">{'// certifications — click to verify'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-[#0da6f2]/30 transition-all duration-300 no-underline"
              >
                <div className="text-sm font-semibold text-gray-200 group-hover:text-[#0da6f2] transition-colors">
                  {cert.name}
                </div>
                <div className="text-xs text-gray-500 mt-1 flex items-center gap-1.5">
                  {cert.issuer}
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Open source + GitHub */}
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://github.com/Tracer-Cloud/opensre/pulls?q=is%3Apr+is%3Amerged+author%3Acloudenochcsis"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 p-4 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-[#0da6f2]/30 transition-all duration-300 no-underline"
          >
            <div className="text-sm font-semibold text-gray-200">Open source: 9 merged pull requests to OpenSRE</div>
            <div className="text-xs text-gray-500 mt-1">Bug fixes and tests merged upstream into Tracer-Cloud/opensre →</div>
          </a>
          <a
            href="https://github.com/cloudenochcsis"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 p-4 rounded-xl bg-white/[0.04] border border-white/[0.06] hover:border-[#0da6f2]/30 transition-all duration-300 no-underline"
          >
            <div className="text-sm font-semibold text-gray-200">Every project below is public</div>
            <div className="text-xs text-gray-500 mt-1">Don't take my word for it — read the code on GitHub →</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
