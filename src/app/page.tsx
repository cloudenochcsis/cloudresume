import React from 'react';
import MinimalistNav from '../components/minimalist/MinimalistNav';
import MinimalistAbout from '../components/minimalist/MinimalistAbout';
import MinimalistEducation from '../components/minimalist/MinimalistEducation';
import MinimalistProjects from '../components/minimalist/MinimalistProjects';
import MinimalistExperience from '../components/minimalist/MinimalistExperience';
import MinimalistCertifications from '../components/minimalist/MinimalistCertifications';
import MinimalistSkills from '../components/minimalist/MinimalistSkills';
import MinimalistWriting from '../components/minimalist/MinimalistWriting';
import MinimalistFooter from '../components/minimalist/MinimalistFooter';

export default function Home() {
  return (
    <>
      <MinimalistNav />

      <main id="main-content" className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10 flex-1 w-full">
        <MinimalistAbout />
        <MinimalistEducation />
        <MinimalistProjects />
        <MinimalistExperience />
        <MinimalistCertifications />
        <MinimalistSkills />
        <MinimalistWriting />
        <MinimalistFooter />
      </main>
    </>
  );
}
