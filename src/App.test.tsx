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
jest.mock('./components/VisitorCounter', () => ({ className }: { className?: string }) => (
  <div data-testid="mock-visitor-counter" className={className}>Mock Visitor Counter</div>
));
jest.mock('./contexts/ThemeContext', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="theme-provider">{children}</div>,
  useTheme: () => ({ theme: 'light', animationPreference: 'full' }),
}));
jest.mock('./contexts/ResumeContext', () => ({
  ResumeProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="resume-provider">{children}</div>,
}));

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('theme-provider')).toBeInTheDocument();
    expect(screen.getByTestId('resume-provider')).toBeInTheDocument();
    expect(screen.getByTestId('app-outer-div')).toBeInTheDocument();
    expect(screen.getByTestId('app-inner-div')).toBeInTheDocument();
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
    expect(screen.getByTestId('mock-main')).toBeInTheDocument();
  });

  test('passes correct props to Main component', () => {
    render(<App />);
    expect(screen.getByTestId('core-competencies')).toHaveTextContent('12');
    expect(screen.getByTestId('skills')).toHaveTextContent('12');
    expect(screen.getByTestId('research-areas')).toHaveTextContent('3');
  });

  test('applies correct CSS classes', () => {
    render(<App />);
    const outerDiv = screen.getByTestId('app-outer-div');
    const innerDiv = screen.getByTestId('app-inner-div');
    
    const expectedOuterClasses = [
      'relative',
      'flex',
      'size-full',
      'min-h-screen',
      'flex-col',
      'dark',
      'group/design-root',
      'overflow-x-hidden'
    ];

    expectedOuterClasses.forEach(className => {
      expect(outerDiv).toHaveClass(className);
    });

    expect(innerDiv).toHaveClass('layout-content-container', 'flex', 'flex-col', 'max-w-5xl', 'flex-1', 'px-4');
  });
});