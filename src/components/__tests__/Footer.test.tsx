import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

// Mock VisitorCounter so it doesn't try to fetch /api/counter in footer test
jest.mock('../VisitorCounter', () => () => <div data-testid="visitor-counter">Visitor Counter Mock</div>);

describe('Footer', () => {
  it('renders call to action and email CTA button', () => {
    render(<Footer />);

    expect(
      screen.getByRole('heading', { name: /Let’s Build Resilient Infrastructure/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /email me/i })).toHaveAttribute(
      'href',
      'mailto:cloudenochcsis@gmail.com?subject=Opportunity%20for%20Enoch'
    );
  });

  it('renders selectable email address', () => {
    render(<Footer />);

    expect(screen.getByText('cloudenochcsis@gmail.com')).toBeInTheDocument();
  });

  it('renders social profile links', () => {
    render(<Footer />);

    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
      'href',
      'https://github.com/cloudenochcsis'
    );
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/enoch-a-b00766138/'
    );
    expect(screen.getByRole('link', { name: /hashnode/i })).toHaveAttribute(
      'href',
      'https://cloudenoch.hashnode.dev/'
    );
  });

  it('renders infrastructure tech stack metadata and copyright', () => {
    render(<Footer />);

    expect(
      screen.getByText(/cloudenoch\.com • Next\.js Static Export • Tailwind CSS • FastAPI Backend • CircleCI GitOps/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Enoch Ayivor\. All rights reserved\./i)).toBeInTheDocument();
  });
});
