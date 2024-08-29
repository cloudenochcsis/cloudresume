import React from 'react';
import { Skill } from '../App';

interface Props {
  skills: Skill[];
}

const SkillTag: React.FC<{ skill: Skill }> = ({ skill }) => (
  <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium mr-2 mb-2 px-3 py-1 rounded-full">
    {skill}
  </span>
);

const SkillList: React.FC<Props> = ({ skills }) => (
  <div className="flex flex-wrap -mx-1">
    {skills.map((skill, index) => (
      <SkillTag key={index} skill={skill} />
    ))}
  </div>
);

export default React.memo(SkillList);