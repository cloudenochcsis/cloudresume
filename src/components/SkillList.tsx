import React from 'react';
import { Skill } from '../App';

interface Props {
  skills: Skill[];
  categories?: Record<string, string[]>;
}

const SkillTag: React.FC<{ skill: Skill }> = ({ skill }) => (
  <span className="inline-block bg-white dark:bg-dark-500 border border-gray-200 dark:border-dark-400 text-gray-800 dark:text-gray-200 text-sm font-medium mr-2 mb-3 px-3 py-1.5 rounded-md shadow-skill hover:shadow-md transform hover:-translate-y-0.5 transition-all">
    {skill}
  </span>
);

const CategorySkills: React.FC<{ category: string; skills: string[] }> = ({ category, skills }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">{category}</h3>
    <div className="flex flex-wrap">
      {skills.map((skill, index) => (
        <SkillTag key={index} skill={skill} />
      ))}
    </div>
  </div>
);

const SkillList: React.FC<Props> = ({ skills, categories }) => {
  if (categories) {
    return (
      <div>
        {Object.entries(categories).map(([category, categorySkills]) => (
          <CategorySkills key={category} category={category} skills={categorySkills} />
        ))}
      </div>
    );
  }
  
  return (
    <div className="flex flex-wrap">
      {skills.map((skill, index) => (
        <SkillTag key={index} skill={skill} />
      ))}
    </div>
  );
};

export default React.memo(SkillList);