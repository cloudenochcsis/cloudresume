import { render, screen } from '@testing-library/react';
import About from '../About';

describe('About', () => {
  beforeEach(() => {
    window.IntersectionObserver = jest.fn().mockImplementation((callback) => ({
      observe: jest.fn(() => callback([{ isIntersecting: true }])),
      disconnect: jest.fn(),
    }));
  });

  it('links every certification to its verification page', () => {
    render(<About />);

    expect(screen.getByRole('link', { name: /solutions architect/i })).toHaveAttribute(
      'href',
      'https://www.credly.com/badges/193050a7-1625-4d8e-b77d-26d2fe8dd1e2/linked_in_profile'
    );
    expect(screen.getByRole('link', { name: /terraform/i })).toHaveAttribute(
      'href',
      'https://www.credly.com/badges/59645601-fc1c-42a8-b95b-4fbf3c499ef6/linked_in_profile'
    );
    expect(screen.getByRole('link', { name: /azure administrator/i })).toHaveAttribute(
      'href',
      'https://learn.microsoft.com/en-us/users/enochayivor-0815/credentials/f46a46b56d4133fb'
    );
  });

  it('shows only verifiable trust signals', () => {
    render(<About />);

    expect(screen.getByRole('link', { name: /merged pull requests/i })).toHaveAttribute(
      'href',
      'https://github.com/Tracer-Cloud/opensre/pulls?q=is%3Apr+is%3Amerged+author%3Acloudenochcsis'
    );
    // CKA / Azure DevOps Expert have no verify links -> must not render
    expect(screen.queryByText(/kubernetes administrator/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/devops engineer expert/i)).not.toBeInTheDocument();
    // no headshot file yet -> no img element
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });
});
