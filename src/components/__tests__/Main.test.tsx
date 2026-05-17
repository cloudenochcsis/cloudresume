import { render, screen } from '@testing-library/react';
import Main from '../Main';
import { CoreCompetency, ResearchArea, Skill } from '../../App';

const coreCompetencies: CoreCompetency[] = [
  { label: 'Cloud Architecture' },
  { label: 'DevOps Engineering' },
  { label: 'Agentic AI' },
  { label: 'Python Automation' },
];

const skills: Skill[] = [];
const researchAreas: ResearchArea[] = [];

describe('Main', () => {
  beforeEach(() => {
    window.IntersectionObserver = jest.fn().mockImplementation((callback) => ({
      observe: jest.fn(() => callback([{ isIntersecting: true }])),
      disconnect: jest.fn(),
    }));
  });

  it('describes a cloud, DevOps, agentic AI, Python, and automation focus', () => {
    render(<Main coreCompetencies={coreCompetencies} skills={skills} researchAreas={researchAreas} />);

    expect(screen.getByText(/cloud infrastructure, DevOps, agentic AI, Python, and automation/i)).toBeInTheDocument();
    expect(screen.getByText(/Agentic AI Automation Platform/i)).toBeInTheDocument();
    expect(screen.queryByText(/Information Security Awareness/i)).not.toBeInTheDocument();
  });
});
