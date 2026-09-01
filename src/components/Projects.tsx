import React from 'react';
import FeaturedProject from './FeaturedProject';
import AdditionalProjects from './AdditionalProjects';
import { useReveal } from '../hooks/useReveal';

const Projects: React.FC = () => {
  const reveal = useReveal();

  return (
    <section
      ref={reveal.ref}
      id="projects"
      className={`reveal ${reveal.visible ? 'visible' : ''} scroll-mt-20 py-12 border-b border-editorial-border`}
      aria-label="Selected Engineering Work"
    >
      {/* Anchor for #work navigation */}
      <div id="work" className="scroll-mt-20 -mt-20 pt-20" />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <span className="text-xs font-mono font-semibold tracking-wider text-[#0066FF] uppercase block mb-1">
            Case Studies &amp; Infrastructure Systems
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-editorial-text tracking-tight">
            Selected Work
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-editorial-caption max-w-md">
          Production-grade Kubernetes platforms, multi-cloud Terraform architectures, and GitOps pipelines backed by public repositories.
        </p>
      </div>

      {/* Featured Deep-Dive Case Study */}
      <FeaturedProject />

      {/* Additional Case Studies Grid */}
      <div className="mt-8">
        <h3 className="text-xs font-mono font-semibold text-editorial-caption uppercase tracking-wider mb-4">
          Additional Production Architectures
        </h3>
        <AdditionalProjects />
      </div>
    </section>
  );
};

export default Projects;
