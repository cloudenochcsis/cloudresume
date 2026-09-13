'use client';

import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';

export const MinimalistAbout: React.FC = () => {
  const [imgSrc, setImgSrc] = useState('/avatar.jpg');

  return (
    <section id="about" className="pt-10 pb-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-6">
        {/* Profile Picture Slot */}
        <div className="flex-shrink-0 text-center">
          <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-md ring-1 ring-neutral-200">
            <img
              src={imgSrc}
              alt={personalInfo.name}
              onError={() => setImgSrc('/avatar.svg')}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Title & Identity */}
        <div className="flex-grow text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-1.5 name-gradient">
            {personalInfo.heroName}
          </h1>
          <p className="text-base text-neutral-600 font-medium mb-1">
            {personalInfo.title}
          </p>
          <p className="text-sm text-neutral-500 mb-2">
            {personalInfo.location}
          </p>
          <p className="text-sm">
            <a
              href={personalInfo.mailtoHref}
              className="text-neutral-700 font-medium hover:text-blue-600 underline underline-offset-2 transition-colors"
            >
              {personalInfo.email}
            </a>
          </p>
        </div>
      </div>

      {/* Bio Paragraphs */}
      <div className="space-y-3 text-neutral-700 text-base leading-relaxed mb-6">
        <p>
          {personalInfo.valueProp}
        </p>
        <p>
          {personalInfo.supportingCopy}
        </p>
      </div>

      {/* Action Buttons & Links */}
      <div className="flex flex-wrap items-center gap-3 pt-1">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gradient px-4 py-1.5 rounded text-sm font-semibold shadow-sm inline-flex items-center gap-1.5 no-underline"
        >
          <b>Download CV</b>
        </a>

        <div className="flex items-center gap-2 text-sm text-neutral-500 font-mono">
          <span>[</span>
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 hover:text-blue-600 underline underline-offset-2"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 hover:text-blue-600 underline underline-offset-2"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href={personalInfo.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 hover:text-blue-600 underline underline-offset-2"
          >
            Blog
          </a>
          <span>·</span>
          <a
            href={personalInfo.openSrePrsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-700 hover:text-blue-600 underline underline-offset-2"
          >
            Open Source
          </a>
          <span>]</span>
        </div>
      </div>
    </section>
  );
};

export default MinimalistAbout;
