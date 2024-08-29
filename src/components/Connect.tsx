import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface SocialLink {
  href: string;
  icon: React.ElementType;
  label: string;
}

const socialLinks: SocialLink[] = [
  { href: "https://github.com/yourusername", icon: Github, label: "GitHub" },
  { href: "https://linkedin.com/in/yourusername", icon: Linkedin, label: "LinkedIn" },
  { href: "mailto:your.email@example.com", icon: Mail, label: "Email" },
];

const IconLink: React.FC<SocialLink> = ({ href, icon: Icon, label }) => (
  <a 
    href={href}
    className="text-gray-600 hover:text-blue-600 transition-colors" 
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className="h-8 w-8" />
  </a>
);

const Connect: React.FC = () => (
  <div className="flex justify-center space-x-6">
    {socialLinks.map((link, index) => (
      <IconLink key={index} {...link} />
    ))}
  </div>
);

export default React.memo(Connect);