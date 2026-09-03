import React from 'react';
import { render, screen } from '@testing-library/react';
import GitOpsDiagram from '../GitOpsDiagram';

describe('GitOpsDiagram', () => {
  it('renders pipeline architecture header and sync status', () => {
    render(<GitOpsDiagram />);

    expect(screen.getByText('pipeline-architecture.svg')).toBeInTheDocument();
    expect(screen.getByText('ArgoCD In Sync')).toBeInTheDocument();
  });

  it('renders all 5 pipeline architecture steps', () => {
    render(<GitOpsDiagram />);

    expect(screen.getByText('01 • IaC')).toBeInTheDocument();
    expect(screen.getByText('02 • Platform')).toBeInTheDocument();
    expect(screen.getByText('03 • CI Engine')).toBeInTheDocument();
    expect(screen.getByText('04 • Artifact')).toBeInTheDocument();
    expect(screen.getByText('05 • GitOps')).toBeInTheDocument();

    expect(screen.getAllByText('Terraform').length).toBeGreaterThan(0);
    expect(screen.getAllByText('AWS EKS').length).toBeGreaterThan(0);
    expect(screen.getAllByText('CircleCI').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Docker').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Argo CD').length).toBeGreaterThan(0);
  });
});
