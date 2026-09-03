import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import FeaturedProject from '../components/FeaturedProject';
import About from '../components/About';
import SkillsGrid from '../components/SkillsGrid';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Certifications from '../components/Certifications';
import BlogPreview from '../components/BlogPreview';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      {/* Top Sticky Navigation */}
      <Navigation />

      {/* Main Content Sections */}
      <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full">
        {/* 1. Hero with value prop, Crowdbotics arc & verified cert badges */}
        <Hero />

        {/* 2. Featured Project: GitOps Portfolio Pipeline (Centerpiece) */}
        <FeaturedProject />

        {/* 3. About: Technical Support -> DevOps arc, Crowdbotics leadership, Academic Background */}
        <About />

        {/* 4. Skills / Stack Grid: AWS, IaC, Orchestration, CI/CD, Containers, Networking */}
        <SkillsGrid />

        {/* 5. Experience Timeline: Crowdbotics, Support, OpenSRE */}
        <ExperienceTimeline />

        {/* 6. Certifications: AWS SAA, Terraform Associate, Azure */}
        <Certifications />

        {/* 7. Writing & Blog: Hashnode Publications & Architecture Guides */}
        <BlogPreview />

        {/* 8. Contact & Footer */}
        <Footer />
      </main>
    </>
  );
}
