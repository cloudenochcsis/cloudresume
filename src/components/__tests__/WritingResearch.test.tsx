import React from 'react';
import { render, screen } from '@testing-library/react';
import WritingResearch from '../WritingResearch';

describe('WritingResearch', () => {
  beforeEach(() => {
    window.IntersectionObserver = jest.fn().mockImplementation((callback) => ({
      observe: jest.fn(() => callback([{ isIntersecting: true }])),
      disconnect: jest.fn(),
    }));
  });

  it('connects engineering practice with blog and academic foundation in CS and Info Systems', () => {
    render(<WritingResearch />);

    // Blog links
    const blogLinks = screen.getAllByRole('link', { name: /visit blog|read all articles/i });
    expect(blogLinks[0]).toHaveAttribute('href', 'https://cloudenoch.hashnode.dev/');

    // Featured articles
    expect(screen.getByText(/Declarative GitOps on Kubernetes/i)).toBeInTheDocument();
    expect(screen.getByText(/End-to-End Distributed Tracing in Microservices/i)).toBeInTheDocument();

    // Academic background in Computer Science & Information Systems
    expect(screen.getByText(/MS in Information Systems/i)).toBeInTheDocument();
    expect(screen.getByText(/BSc in Computer Science and Information Technology/i)).toBeInTheDocument();
  });
});
