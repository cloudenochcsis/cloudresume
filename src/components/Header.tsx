import React from 'react';
import { useResume } from '../contexts/ResumeContext';

const Header: React.FC = () => {
  const { name, title } = useResume();

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-t-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-2">{name}</h1>
      <p className="text-xl">{title}</p>
    </header>
  );
};

export default React.memo(Header);