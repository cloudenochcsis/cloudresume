import { render, screen } from '@testing-library/react';
import Main from '../Main';
import { CoreCompetency } from '../../App';

const coreCompetencies: CoreCompetency[] = [
  { label: 'Terraform' },
  { label: 'Kubernetes' },
  { label: 'ArgoCD' },
];

describe('Main', () => {
  beforeEach(() => {
    window.IntersectionObserver = jest.fn().mockImplementation((callback) => ({
      observe: jest.fn(() => callback([{ isIntersecting: true }])),
      disconnect: jest.fn(),
    }));
  });

  it('renders About, the skills chips, and Projects', () => {
    render(<Main coreCompetencies={coreCompetencies} />);

    expect(screen.getByText(/Kubernetes platforms with GitOps delivery/i)).toBeInTheDocument();
    // 'Terraform'/'ArgoCD' also appear as project tags, so use getAllByText
    expect(screen.getAllByText('Terraform').length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText('ArgoCD').length).toBeGreaterThanOrEqual(1);
    expect(screen.getByText(/OpenTelemetry DevOps Platform/i)).toBeInTheDocument();
    expect(screen.queryByText(/Agentic AI Automation Platform/i)).not.toBeInTheDocument();
  });
});
