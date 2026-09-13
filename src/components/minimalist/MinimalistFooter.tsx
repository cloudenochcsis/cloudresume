import React from 'react';
import { personalInfo } from '../../data/portfolioData';

export const MinimalistFooter: React.FC = () => {
  return (
    <footer role="contentinfo" className="py-12 mt-12 border-t border-neutral-200 text-xs text-neutral-500 font-mono">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/cloudenochcsis/cloudresume"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-900 transition-colors"
          >
            GitHub Pages
          </a>
          <span>·</span>
          <a
            href={personalInfo.mailtoHref}
            className="hover:text-neutral-900 transition-colors"
          >
            Email
          </a>
          <span>·</span>
          <a
            href="#about"
            className="hover:text-neutral-900 transition-colors"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default MinimalistFooter;
