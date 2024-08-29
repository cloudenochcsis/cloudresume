import React, { createContext, useContext, ReactNode } from 'react';

interface ResumeData {
  name: string;
  title: string;
  about: string;
}

const resumeData: ResumeData = {
  name: "Enoch",
  title: "Information Security Specialist | Cloud/DevOps Engineer | SRE | PhD Researcher",
  about: "As a passionate Information Security and Cybersecurity professional, I bring extensive experience in Cloud/DevOps and Site Reliability Engineering to the table. My current focus is on pushing the boundaries of cybersecurity through my PhD research, where I'm exploring innovative ways to leverage Artificial Intelligence in enhancing Information Security practices."
};

const ResumeContext = createContext<ResumeData | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ResumeContext.Provider value={resumeData}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = (): ResumeData => {
  const context = useContext(ResumeContext);
  if (context === undefined) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};