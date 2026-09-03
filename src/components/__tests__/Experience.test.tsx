import React from 'react';
import { render, screen } from '@testing-library/react';
import Experience from '../Experience';

describe('Experience', () => {
  beforeEach(() => {
    window.IntersectionObserver = jest.fn().mockImplementation((callback) => ({
      observe: jest.fn(() => callback([{ isIntersecting: true }])),
      disconnect: jest.fn(),
    }));
  });

  it('renders progression timeline with factual cloud and DevOps milestones', () => {
    render(<Experience />);

    expect(screen.getByText(/Cloud & DevOps Engineer/i)).toBeInTheDocument();
    expect(screen.getByText(/Open Source Contributor/i)).toBeInTheDocument();
    expect(screen.getByText(/Infrastructure & Systems Engineer/i)).toBeInTheDocument();

    // Verify key technical evidence is present
    expect(screen.getByText(/OpenSRE \(Tracer-Cloud\)/i)).toBeInTheDocument();
    expect(screen.getByText(/13 pull requests upstream/i)).toBeInTheDocument();
  });
});
