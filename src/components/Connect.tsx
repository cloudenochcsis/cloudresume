import React from 'react';
import { Github, Linkedin, Mail, Twitter, ExternalLink } from 'lucide-react';

interface SocialLink {
  href: string;
  icon: React.ElementType;
  label: string;
  color: string;
}

const socialLinks: SocialLink[] = [
  { 
    href: "https://github.com/CloudEnochCSIS", 
    icon: Github, 
    label: "GitHub",
    color: "hover:bg-gray-800" 
  },
  { 
    href: "https://www.linkedin.com/in/enoch-a-b00766138/", 
    icon: Linkedin, 
    label: "LinkedIn",
    color: "hover:bg-blue-600" 
  },
  { 
    href: "mailto:cloudenochcsis@gmail.com", 
    icon: Mail, 
    label: "Email",
    color: "hover:bg-red-500" 
  },
];

const IconLink: React.FC<SocialLink> = ({ href, icon: Icon, label, color }) => (
  <a 
    href={href}
    className={`flex flex-col items-center group`}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className={`p-4 rounded-full bg-white dark:bg-dark-500 shadow-md dark:shadow-none border dark:border-dark-400 transition-all duration-300 ${color} group-hover:text-white group-hover:scale-110 group-hover:shadow-lg`}>
      <Icon className="h-6 w-6" />
    </div>
    <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
      {label}
    </span>
  </a>
);

const Connect: React.FC = () => (
  <div>
    <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 text-center">
      I'm always interested in collaborating on innovative projects in cloud. Feel free to connect with me.
    </p>
    <div className="flex justify-center space-x-8 sm:space-x-12">
      {socialLinks.map((link, index) => (
        <IconLink key={index} {...link} />
      ))}
    </div>
    
    <div className="mt-10 text-center">
      <button 
        className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:underline"
        onClick={() => window.alert('Portfolio link coming soon')}
      >
        View my full portfolio
        <ExternalLink className="h-4 w-4 ml-1" />
      </button>
    </div>
  </div>
);

export default React.memo(Connect);