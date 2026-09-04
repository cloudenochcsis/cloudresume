import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogPreview from '../BlogPreview';

describe('BlogPreview', () => {
  it('renders section title and link to Hashnode blog', () => {
    render(<BlogPreview />);

    expect(
      screen.getByRole('heading', { name: /Infrastructure Writing & Architecture Guides/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /All posts on Hashnode/i })).toHaveAttribute(
      'href',
      'https://cloudenoch.hashnode.dev/'
    );
  });

  it('renders featured article cards linking to published articles', () => {
    render(<BlogPreview />);

    expect(
      screen.getByRole('link', {
        name: /Declarative GitOps on Kubernetes/i,
      })
    ).toHaveAttribute(
      'href',
      'https://cloudenoch.hashnode.dev/automating-microservice-deployments-using-terraform-github-actions-and-argocd'
    );
  });
});
