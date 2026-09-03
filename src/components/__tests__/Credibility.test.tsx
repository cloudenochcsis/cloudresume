import React from 'react';
import { render, screen } from '@testing-library/react';
import Credibility from '../Credibility';

describe('Credibility', () => {
  beforeEach(() => {
    window.IntersectionObserver = jest.fn().mockImplementation((callback) => ({
      observe: jest.fn(() => callback([{ isIntersecting: true }])),
      disconnect: jest.fn(),
    }));
  });

  it('renders all 4 verified credentials with valid verification links', () => {
    render(<Credibility />);

    const awsLink = screen.getByRole('link', { name: /AWS Certified Solutions Architect/i });
    expect(awsLink).toHaveAttribute(
      'href',
      'https://www.credly.com/badges/193050a7-1625-4d8e-b77d-26d2fe8dd1e2/linked_in_profile'
    );

    const terraformLink = screen.getByRole('link', { name: /HashiCorp Certified: Terraform Associate/i });
    expect(terraformLink).toHaveAttribute(
      'href',
      'https://www.credly.com/badges/59645601-fc1c-42a8-b95b-4fbf3c499ef6/linked_in_profile'
    );

    const azureLink = screen.getByRole('link', { name: /Microsoft Certified: Azure Administrator Associate/i });
    expect(azureLink).toHaveAttribute(
      'href',
      'https://learn.microsoft.com/en-us/users/enochayivor-0815/credentials/f46a46b56d4133fb'
    );

    const openSreLink = screen.getByRole('link', { name: /OpenSRE Core Contributor/i });
    expect(openSreLink).toHaveAttribute(
      'href',
      'https://github.com/Tracer-Cloud/opensre/pulls?q=is%3Apr+is%3Amerged+author%3Acloudenochcsis'
    );
  });
});
