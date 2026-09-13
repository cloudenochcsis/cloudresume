import React from 'react';
import { featuredProject, additionalProjects } from '../../data/portfolioData';

export const MinimalistProjects: React.FC = () => {
  return (
    <section id="projects" className="py-8 border-t border-neutral-200">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-xl font-bold uppercase tracking-wider text-neutral-900">
          Projects & Architecture
        </h2>
        <span className="text-xs font-mono text-neutral-500">
          Flagship Architecture
        </span>
      </div>

      <div className="space-y-6">
        {/* Featured Flagship Project */}
        <div className="pb-5 border-b border-neutral-100">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
            <h3 className="text-base sm:text-lg font-semibold text-neutral-900">
              {featuredProject.title}
            </h3>
            <span className="text-xs font-mono text-neutral-500">Production Platform</span>
          </div>

          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-2">
            {featuredProject.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-neutral-500 mb-2.5">
            <span className="font-semibold text-neutral-700">Technologies: </span>
            {featuredProject.techStack?.join(', ') || featuredProject.tags.join(', ')}
          </p>

          {/* Outcome Highlights */}
          <ul className="list-disc list-inside text-xs sm:text-sm text-neutral-600 space-y-1 mb-3 pl-1">
            {featuredProject.outcomes?.slice(0, 3).map((outcome, i) => (
              <li key={i}>{outcome}</li>
            ))}
          </ul>

          {/* Sumin Yu style bracketed links */}
          <div className="text-xs sm:text-sm font-mono text-neutral-600 flex flex-wrap gap-2">
            <span>[</span>
            <a
              href="https://github.com/cloudenochcsis/opentelemetry-devops-project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 hover:text-blue-600 underline underline-offset-2"
            >
              app code
            </a>
            <span>·</span>
            <a
              href={featuredProject.githubK8sUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 hover:text-blue-600 underline underline-offset-2"
            >
              k8s manifests
            </a>
            <span>·</span>
            <a
              href={featuredProject.githubTerraformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 hover:text-blue-600 underline underline-offset-2"
            >
              terraform
            </a>
            {featuredProject.hashnodeUrl && (
              <>
                <span>·</span>
                <a
                  href={featuredProject.hashnodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 hover:text-blue-600 underline underline-offset-2"
                >
                  architecture article
                </a>
              </>
            )}
            <span>]</span>
          </div>
        </div>

        {/* Additional Projects */}
        {additionalProjects.map((project) => (
          <div key={project.id} className="pb-4 border-b border-neutral-100 last:border-0">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
              <h3 className="text-base sm:text-lg font-semibold text-neutral-900">
                {project.title}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-2">
              {project.problem}
            </p>
            <p className="text-xs sm:text-sm text-neutral-500 mb-2">
              <span className="font-semibold text-neutral-700">Stack: </span>
              {project.tags.join(', ')}
            </p>

            <div className="text-xs sm:text-sm font-mono text-neutral-600 flex flex-wrap gap-2">
              <span>[</span>
              {project.links.map((link, lIdx) => (
                <React.Fragment key={link.label}>
                  {lIdx > 0 && <span>·</span>}
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-900 hover:text-blue-600 underline underline-offset-2"
                  >
                    {link.label.toLowerCase()}
                  </a>
                </React.Fragment>
              ))}
              <span>]</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MinimalistProjects;
