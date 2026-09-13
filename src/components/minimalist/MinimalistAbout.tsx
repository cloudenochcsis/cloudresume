'use client';

import React, { useState } from 'react';
import { personalInfo } from '../../data/portfolioData';

export const MinimalistAbout: React.FC = () => {
  const [imgSrc, setImgSrc] = useState('/profile-crisp.png');

  return (
    <section id="about" className="pt-8 pb-10">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 mb-6">
        {/* Profile Picture Slot */}
        <div className="flex-shrink-0 text-center sm:text-left">
          <img
            src={imgSrc}
            alt={personalInfo.name}
            onError={() => {
              if (imgSrc === '/profile-crisp.png') {
                setImgSrc('/profile.png');
              } else {
                setImgSrc('/avatar.svg');
              }
            }}
            className="img-profile-inline"
            style={{
              objectPosition: 'center 15%',
              imageRendering: 'auto',
            }}
          />
        </div>

        {/* Title & Identity */}
        <div className="flex-grow text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase mb-2 name-gradient">
            {personalInfo.heroName}
          </h1>

          <p className="lead mb-2 font-normal text-neutral-800">
            <span>{personalInfo.title}</span> · <span>Doctoral Researcher in Information Systems</span>
          </p>

          <p className="text-base text-neutral-600 mb-2">
            {personalInfo.location}
          </p>

          <p className="text-base">
            <a
              href={personalInfo.mailtoHref}
              className="text-neutral-900 font-medium hover:text-blue-600 underline underline-offset-4 transition-colors"
            >
              {personalInfo.email}
            </a>
          </p>
        </div>
      </div>

      {/* Bio Paragraphs */}
      <div className="space-y-4 mb-8">
        <p className="lead">
          {personalInfo.valueProp}
        </p>
        <p className="lead">
          {personalInfo.supportingCopy}
        </p>
      </div>

      {/* Action Buttons & Links */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gradient px-5 py-2 rounded text-base font-semibold shadow-sm inline-flex items-center gap-2 no-underline"
        >
          <b>CV</b>
        </a>

        <div className="flex items-center gap-2.5 text-base text-neutral-600 font-mono">
          <span>[</span>
          <a
            href={personalInfo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 hover:text-blue-600 underline underline-offset-4"
          >
            GitHub
          </a>
          <span>·</span>
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 hover:text-blue-600 underline underline-offset-4"
          >
            LinkedIn
          </a>
          <span>·</span>
          <a
            href={personalInfo.blogUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 hover:text-blue-600 underline underline-offset-4"
          >
            Blog
          </a>
          <span>·</span>
          <a
            href={personalInfo.openSrePrsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-900 hover:text-blue-600 underline underline-offset-4"
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
