import React from 'react';
import { render, screen } from '@testing-library/react';
import SkillsGrid from '../SkillsGrid';

describe('SkillsGrid', () => {
  it('renders section heading and technical breadth intro', () => {
    render(<SkillsGrid />);

    expect(
      screen.getByRole('heading', { name: /Core Infrastructure & Tooling Stack/i })
    ).toBeInTheDocument();
    expect(screen.getByText('Technical Breadth')).toBeInTheDocument();
  });

  it('renders all key infrastructure skill categories', () => {
    render(<SkillsGrid />);

    expect(screen.getByText('Cloud Platforms')).toBeInTheDocument();
    expect(screen.getByText('Infrastructure & Platforms')).toBeInTheDocument();
    expect(screen.getByText('Delivery & Automation')).toBeInTheDocument();
    expect(screen.getByText('Observability')).toBeInTheDocument();
    expect(screen.getByText('Networking & Security')).toBeInTheDocument();
    expect(screen.getByText('AI & Applied Automation')).toBeInTheDocument();
  });

  it('renders essential tooling chips', () => {
    render(<SkillsGrid />);

    expect(screen.getByText('Terraform')).toBeInTheDocument();
    expect(screen.getByText('Kubernetes')).toBeInTheDocument();
    expect(screen.getByText('Argo CD')).toBeInTheDocument();
    expect(screen.getByText('CircleCI')).toBeInTheDocument();
    expect(screen.getByText('Docker')).toBeInTheDocument();
  });
});
