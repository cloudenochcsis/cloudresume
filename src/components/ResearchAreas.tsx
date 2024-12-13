import React from 'react';
import { ChevronRight } from 'lucide-react';
import { ResearchArea } from '../App';

interface Props {
  areas: ResearchArea[];
}

const ResearchAreas: React.FC<Props> = ({ areas }) => (
  <div>
    <p className="text-gray-700 mb-4">
      My doctoral research is at the cutting edge of Artificial Intelligence applications in Information Security. Key focus areas include:
    </p>
    <ul className="space-y-2 text-gray-700">
      {areas.map((area, index) => (
        <li key={index} className="flex items-start">
          <ChevronRight className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
          <span>{area}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default React.memo(ResearchAreas);
