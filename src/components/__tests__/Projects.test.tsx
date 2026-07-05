import { render, screen } from '@testing-library/react';
import Projects from '../Projects';

describe('Projects', () => {
  beforeEach(() => {
    window.IntersectionObserver = jest.fn().mockImplementation((callback) => ({
      observe: jest.fn(() => callback([{ isIntersecting: true }])),
      disconnect: jest.fn(),
    }));
  });

  it('leads with the OpenTelemetry platform as a featured case study', () => {
    render(<Projects />);

    expect(screen.getByText(/OpenTelemetry DevOps Platform/i)).toBeInTheDocument();
    expect(screen.getByText(/what this demonstrates/i)).toBeInTheDocument();
    // several cards use a "View code" link — the featured one renders first
    const codeLinks = screen.getAllByRole('link', { name: /view code/i });
    expect(codeLinks[0]).toHaveAttribute(
      'href',
      'https://github.com/cloudenochcsis/opentelemetry-devops-project'
    );
  });

  it('shows the multi-cloud 3-tier card with one link per cloud', () => {
    render(<Projects />);

    expect(screen.getByRole('link', { name: 'AWS' })).toHaveAttribute(
      'href',
      'https://github.com/cloudenochcsis/terraform-aws-3tier-architecture'
    );
    expect(screen.getByRole('link', { name: 'Azure' })).toHaveAttribute(
      'href',
      'https://github.com/cloudenochcsis/terraform-azure-3tier-architecture'
    );
    expect(screen.getByRole('link', { name: 'GCP' })).toHaveAttribute(
      'href',
      'https://github.com/cloudenochcsis/terraform-gcp-3tier-architecture'
    );
  });

  it('includes this site as a project and drops the profile-only card', () => {
    render(<Projects />);

    expect(screen.getByText(/This Site/i)).toBeInTheDocument();
    expect(screen.queryByText(/Agentic AI Automation Platform/i)).not.toBeInTheDocument();
  });
});
