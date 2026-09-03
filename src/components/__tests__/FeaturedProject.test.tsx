import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturedProject from '../FeaturedProject';

describe('FeaturedProject', () => {
  it('renders flagship project title, badges, and description', () => {
    render(<FeaturedProject />);

    expect(
      screen.getByRole('heading', {
        name: /GitOps Portfolio Pipeline/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText('Flagship Architecture')).toBeInTheDocument();
    expect(screen.getByText('Featured Case Study')).toBeInTheDocument();
  });

  it('renders architecture tech stack badges', () => {
    render(<FeaturedProject />);

    expect(screen.getAllByText('AWS EKS')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Terraform')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Argo CD')[0]).toBeInTheDocument();
    expect(screen.getAllByText('CircleCI')[0]).toBeInTheDocument();
    expect(screen.getAllByText('Docker')[0]).toBeInTheDocument();
  });

  it('links to Hashnode architecture writeup and GitHub repositories', () => {
    render(<FeaturedProject />);

    expect(screen.getByRole('link', { name: /Hashnode Writeup/i })).toHaveAttribute(
      'href',
      'https://cloudenoch.hashnode.dev/automating-microservice-deployments-using-terraform-github-actions-and-argocd'
    );
    expect(screen.getByRole('link', { name: /k8s Manifests/i })).toHaveAttribute(
      'href',
      'https://github.com/cloudenochcsis/opentelemetry-k8s-manifests'
    );
    expect(screen.getByRole('link', { name: /Terraform Code/i })).toHaveAttribute(
      'href',
      'https://github.com/cloudenochcsis/opentelemetry-k8s-terraform'
    );
  });
});
