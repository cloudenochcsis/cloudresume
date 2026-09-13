'use client';

import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';

export const MinimalistAbout: React.FC = () => {
  const [imgSrc, setImgSrc] = useState('/profile.png');

  return (
    <section id="about" className="pt-10 pb-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 mb-6">
        {/* Profile Picture Slot */}
        <div className="flex-shrink-0 text-center sm:text-left">
          <img
            src={imgSrc}
            alt={personalInfo.name}
            onError={() => setImgSrc('/avatar.svg')}
            className="w-36 h-36 sm:w-40 sm:h-40 rounded-full object-cover shadow-md border-4 border-white ring-1 ring-neutral-200"
          />
        </div>

        {/* Title & Identity */}
        <div className="flex-grow text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-2 name-gradient">
            {personalInfo.heroName}
          </h1>
          <p className="text-lg text-neutral-700 font-medium mb-1">
            <span>{personalInfo.title}</span> · <span className="text-neutral-800">Doctoral Researcher in Information Systems</span>
          </p>
          <p className="text-base text-neutral-500 mb-2">
            {personalInfo.location}
          </p>
          <p className="text-base">
            <a
              href={personalInfo.mailtoHref}
              className="text-neutral-800 font-medium hover:text-blue-600 underline underline-offset-4 transition-colors"
            >
              {personalInfo.email}
            </a>
          </p>
        </div>
      </div>

      {/* Bio */}
      <div className="text-neutral-700 text-base sm:text-lg leading-relaxed mb-6">
        <p>
          I am a Doctoral Researcher and an IT professional with interests in Cloud and DevOps.
        </p>
      </div>

      {/* Action Links */}
      <div className="flex flex-wrap items-center gap-3.5 pt-1">

        <div className="flex items-center gap-2.5 text-sm sm:text-base text-neutral-600 font-mono">
          <span>[</span>
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-800 hover:text-blue-600 underline underline-offset-4"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-800 hover:text-blue-600 underline underline-offset-4"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href={personalInfo.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-800 hover:text-blue-600 underline underline-offset-4"
          >
            Blog
          </a>
          <span>·</span>
          <a
            href={personalInfo.openSrePrsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-800 hover:text-blue-600 underline underline-offset-4"
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
