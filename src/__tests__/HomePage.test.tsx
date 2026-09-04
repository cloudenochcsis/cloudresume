import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

// Mock VisitorCounter so it doesn't make real network calls
jest.mock('../components/VisitorCounter', () => () => <div data-testid="mock-counter">123 visits</div>);

describe('Home Page (Next.js App Router)', () => {
  it('renders all sections and main content without crashing', () => {
    render(<Home />);

    // Navigation
    expect(screen.getByRole('navigation')).toBeInTheDocument();

    // Hero Section
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Enoch .A');
    expect(screen.getByText('Cloud & DevOps Engineer')).toBeInTheDocument();

    // Featured Project
    expect(screen.getByText('Flagship Architecture')).toBeInTheDocument();

    // About
    expect(screen.getByText('Academic Background')).toBeInTheDocument();

    // Skills
    expect(screen.getByText('Technical Breadth')).toBeInTheDocument();

    // Experience
    expect(screen.getByText('Career Progression')).toBeInTheDocument();

    // Certifications
    expect(screen.getByText('Verified Credentials')).toBeInTheDocument();

    // Writing
    expect(screen.getByText('Technical Publications')).toBeInTheDocument();

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
