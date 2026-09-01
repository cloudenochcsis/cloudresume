import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from '../Skills';

describe('Skills', () => {
  beforeEach(() => {
    window.IntersectionObserver = jest.fn().mockImplementation((callback) => ({
      observe: jest.fn(() => callback([{ isIntersecting: true }])),
      disconnect: jest.fn(),
    }));
  });

  it('renders grouped capabilities across Cloud, Infrastructure, Delivery, Observability, and AI', () => {
    render(<Skills />);

    // Group categories
    expect(screen.getByText(/Cloud Platforms/i)).toBeInTheDocument();
    expect(screen.getByText(/Infrastructure & Platforms/i)).toBeInTheDocument();
    expect(screen.getByText(/Delivery & Automation/i)).toBeInTheDocument();
    expect(screen.getByText(/Observability/i)).toBeInTheDocument();
    expect(screen.getByText(/AI & Applied Automation/i)).toBeInTheDocument();

    // Specific technologies
    expect(screen.getByText('Kubernetes')).toBeInTheDocument();
    expect(screen.getByText('OpenTelemetry')).toBeInTheDocument();
    expect(screen.getByText('Terraform')).toBeInTheDocument();
    expect(screen.getByText('Agentic AI')).toBeInTheDocument();
  });
});
