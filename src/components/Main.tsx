import React from 'react';
import { CoreCompetency, Skill, ResearchArea } from '../App';

interface MainProps {
  coreCompetencies: CoreCompetency[];
  skills: Skill[];
  researchAreas: ResearchArea[];
}

const Main: React.FC<MainProps> = ({ coreCompetencies, skills, researchAreas }) => {
  return (
    <>
      {/* About Section */}
      <div className="scroll-mt-20 my-16 p-8 rounded-2xl bg-[#1C2128] border border-[#30363D] shadow-lg transition-all duration-300 hover:border-[#484F58]" id="about">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-4">About Me</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          I am a Doctoral Researcher specializing in cloud computing and DevOps methodologies. My research focuses on optimizing cloud infrastructure for scalability and
          resilience. I also work as a Cloud DevOps Engineer, implementing and managing cloud solutions for various clients. My expertise spans across cloud platforms,
          automation tools, and software development practices.
        </p>
      </div>

      {/* Skills Section */}
      <div className="scroll-mt-20 my-16 p-8 rounded-2xl bg-[#1C2128] border border-[#30363D] shadow-lg transition-all duration-300 hover:border-[#484F58]" id="skills">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-6">Skills</h2>
        <div className="flex gap-4 flex-wrap">
          {coreCompetencies.map((competency, index) => (
            <div 
              key={index}
              className="flex h-10 items-center justify-center gap-x-2 rounded-lg bg-[#21262D] px-4 transition-all duration-300 hover:bg-[#30363D]"
            >
              <p className="text-white text-sm font-medium">{competency.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="scroll-mt-20 my-16" id="projects">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Project 1 */}
          <div className="group flex flex-col overflow-hidden rounded-2xl bg-[#1C2128] border border-[#30363D] shadow-lg transition-all duration-300 hover:border-[#484F58] hover:-translate-y-2">
            <div className="h-48 w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" 
                 style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTZdqqwwy-6SF6Y1J_LPXg0YXb71o-GHimVsf3vq7JyHJ5QgxJe99w5bI1M64PFBup5oIj6c-olv_4aJqCAK3janKXJSHKO4Hj1cq7C7Au8j6ZT4-fXA9GKelBISqp5uVdJmEqJKCT4N3O3zqLjHVSVz_bHp0x9Vr3AqsnSQox3oRPtQz017yPqsJ51OQTLrbiSnNhEZW-TbT7QImXwNUdhNEo87xMoNRAs9C0AvE3vrgMnCNIa9xc-f8WyeEYE2gesB8HNGBthVE")'}}></div>
            <div className="flex flex-col flex-grow p-6">
              <h3 className="text-xl font-bold text-white mb-2">Terraform GitOps for AKS</h3>
              <p className="text-gray-400 text-sm flex-grow mb-4">Implemented GitOps workflow for Azure Kubernetes Service using Terraform, enabling automated infrastructure provisioning and application deployment.</p>
              <a 
                href="https://github.com/cloudenochcsis/Terraform-GitOps-for-AKS"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start mt-auto flex items-center gap-2 min-w-[84px] cursor-pointer justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0da6f2]/80 text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#0da6f2]"
              >
                <span>View Project</span><span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group flex flex-col overflow-hidden rounded-2xl bg-[#1C2128] border border-[#30363D] shadow-lg transition-all duration-300 hover:border-[#484F58] hover:-translate-y-2">
            <div className="h-48 w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" 
                 style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDPoo5i8pYIe44ubk5FtSGSNNtfe20usVyKD93IdYx-Lb7AVslVLuAa9BmTAKszj4J4AhBfuYYmnSFpmSbY2fla1zyCIFkMG_5hdj5G3pBCw1_XKUM7TX_WBNKoiK2wd16opnDYfNYxn0pRr2lzUjxeQBAqM1eo_E1QbcRRNmdfG_JbIgjqOui7mevX66r3vl6o4Ta53sHnmXZQEqvJrlqVZbwjzXoJvqhJ3Gcl4n3z7LTqdviNQWezwiN-t6llj41-SeDb4H58Oh0")'}}></div>
            <div className="flex flex-col flex-grow p-6">
              <h3 className="text-xl font-bold text-white mb-2">AWS 3-Tier Architecture with Terraform</h3>
              <p className="text-gray-400 text-sm flex-grow mb-4">Built a scalable 3-tier architecture on AWS using Terraform for infrastructure as code, featuring automated provisioning and deployment.</p>
              <a 
                href="https://github.com/cloudenochcsis/terraform-aws-3tier-architecture"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start mt-auto flex items-center gap-2 min-w-[84px] cursor-pointer justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0da6f2]/80 text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#0da6f2]"
              >
                <span>View Project</span><span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="group flex flex-col overflow-hidden rounded-2xl bg-[#1C2128] border border-[#30363D] shadow-lg transition-all duration-300 hover:border-[#484F58] hover:-translate-y-2">
            <div className="h-48 w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105" 
                 style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYzbnJPfTW_lr6pzZ9mZ7E5Wi_3IZpDWZ-9Y59eyGU88GE4n4ScMWBZIrfLLNeaSYk4X6vcfatqrO2gPwp-i6KHr7MYy0WD1QVPEQ0p6iGvt7e6mrnV6ymg1o1ZfiKx6REVECf0VOObm13EY6R1gIJD2K44k1mVKF1F1hDOPk1pXjPwmGWywi1v_nzeb9X6K26ummkRoehJG7r4zKO06EuyhTPHxYWPLZh0EEoJvZk-T0fvQfQYM-SwaXtuOyGaiYh1YIdYhEHFcU")'}}></div>
            <div className="flex flex-col flex-grow p-6">
              <h3 className="text-xl font-bold text-white mb-2">Published Research: Information Security Awareness</h3>
              <p className="text-gray-400 text-sm flex-grow mb-4">Published research on information security awareness in International Journal of Information and Computer Security (IJICS).</p>
              <a 
                href="https://dl.acm.org/doi/abs/10.1504/ijics.2024.143938"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start mt-auto flex items-center gap-2 min-w-[84px] cursor-pointer justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#0da6f2]/80 text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-[#0da6f2]"
              >
                <span>View Research</span><span className="material-symbols-outlined text-base">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
