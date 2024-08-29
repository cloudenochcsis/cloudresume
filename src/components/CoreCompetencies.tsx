import React from 'react';
import { CoreCompetency } from '../App';

interface Props {
  competencies: CoreCompetency[];
}

const CoreCompetencies: React.FC<Props> = ({ competencies }) => (
  <div>
    {competencies.map((comp, index) => (
      <div key={index}>{comp.label}</div>
    ))}
  </div>
);

export default CoreCompetencies;