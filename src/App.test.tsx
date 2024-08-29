import React from 'react';
import { render, screen } from '@testing-library/react';
import App, { CoreCompetency, Skill, ResearchArea } from './App';

// Mock the components and contexts
jest.mock('./components/Header', () => () => <div data-testid="mock-header">Header</div>);
jest.mock('./components/Main', () => ({ 
  coreCompetencies, 
  skills, 
  researchAreas 
}: { 
  coreCompetencies: CoreCompetency[], 
  skills: Skill[], 
  researchAreas: ResearchArea[] 
}) => (
  <div data-testid="mock-main">
    Main Component
    <div data-testid="core-competencies">{coreCompetencies.length}</div>
    <div data-testid="skills">{skills.length}</div>
    <div data-testid="research-areas">{researchAreas.length}</div>
  </div>
));
jest.mock('./contexts/ThemeContext', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="theme-provider">{children}</div>,
}));
jest.mock('./contexts/ResumeContext', () => ({
  ResumeProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="resume-provider">{children}</div>,
}));

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('theme-provider')).toBeInTheDocument();
    expect(screen.getByTestId('resume-provider')).toBeInTheDocument();
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-main')).toBeInTheDocument();
  });

  test('passes correct props to Main component', () => {
    render(<App />);
    expect(screen.getByTestId('core-competencies').textContent).toBe('4');
    expect(screen.getByTestId('skills').textContent).toBe('14');
    expect(screen.getByTestId('research-areas').textContent).toBe('4');
  });

  test('applies correct CSS classes', () => {
    render(<App />);
    const outerDiv = screen.getByTestId('resume-provider').firstChild as HTMLElement;
    
    if (!outerDiv) {
      throw new Error('Outer div not found');
    }

    const actualClasses = outerDiv.className.split(' ').filter(Boolean);
    console.log('Actual classes:', actualClasses);

    const expectedClasses = [
      'min-h-screen',
      'bg-gradient-to-br',
      'from-blue-100',
      'via-white',
      'to-purple-100',
      'py-12',
      'px-4',
      'sm:px-6',
      'lg:px-8'
    ];

    console.log('Expected classes:', expectedClasses);

    const missingClasses = expectedClasses.filter(cls => !actualClasses.includes(cls));
    const extraClasses = actualClasses.filter(cls => !expectedClasses.includes(cls));

    console.log('Missing classes:', missingClasses);
    console.log('Extra classes:', extraClasses);

    expect(missingClasses).toEqual([]);
    expect(extraClasses).toEqual([]);

    // Check for the inner div with max-w-4xl and mx-auto classes
    const innerDiv = outerDiv.firstChild as HTMLElement;
    expect(innerDiv).toHaveClass('max-w-4xl', 'mx-auto');
  });
});