import React from 'react';
import { render, screen } from '@testing-library/react';
import Certifications from '../Certifications';

describe('Certifications', () => {
  it('renders section title and verified badge header', () => {
    render(<Certifications />);

    expect(
      screen.getByRole('heading', { name: /Industry Certifications/i })
    ).toBeInTheDocument();
    expect(screen.getByText('Verified Credentials')).toBeInTheDocument();
  });

  it('links each certification to its verification URL', () => {
    render(<Certifications />);

    expect(
      screen.getByRole('link', { name: /AWS Certified Solutions Architect – Associate/i })
    ).toHaveAttribute(
      'href',
      'https://www.credly.com/badges/193050a7-1625-4d8e-b77d-26d2fe8dd1e2/linked_in_profile'
    );
    expect(
      screen.getByRole('link', { name: /HashiCorp Certified: Terraform Associate/i })
    ).toHaveAttribute(
      'href',
      'https://www.credly.com/badges/59645601-fc1c-42a8-b95b-4fbf3c499ef6/linked_in_profile'
    );
    expect(
      screen.getByRole('link', { name: /Microsoft Certified: Azure Administrator Associate/i })
    ).toHaveAttribute(
      'href',
      'https://learn.microsoft.com/en-us/users/enochayivor-0815/credentials/f46a46b56d4133fb'
    );
  });

  it('never renders unverifiable certification claims', () => {
    render(<Certifications />);

    expect(screen.queryByText(/CKA/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Kubernetes Administrator/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/DevOps Engineer Expert/i)).not.toBeInTheDocument();
  });
});
