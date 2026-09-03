import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../Hero';

describe('Hero', () => {
  it('renders hero display name, title, and status pill', () => {
    render(<Hero />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Enoch .A');
    expect(screen.getByText('Cloud & DevOps Engineer')).toBeInTheDocument();
    expect(screen.getByText('Cloud & DevOps Roles')).toBeInTheDocument();
    expect(screen.getByText(/EU Remote Friendly/i)).toBeInTheDocument();
  });

  it('renders career arc progression', () => {
    render(<Hero />);

    expect(
      screen.getByText(/Technical Support → Systems Specialist → Cloud Team Lead @/i)
    ).toBeInTheDocument();
    expect(screen.getByText('Crowdbotics')).toBeInTheDocument();
  });

  it('renders verified certification badges with Credly and MS Learn links', () => {
    render(<Hero />);

    expect(screen.getByRole('link', { name: /AWS SAA-C03/i })).toHaveAttribute(
      'href',
      'https://www.credly.com/badges/193050a7-1625-4d8e-b77d-26d2fe8dd1e2/linked_in_profile'
    );
    expect(screen.getByRole('link', { name: /Terraform Associate/i })).toHaveAttribute(
      'href',
      'https://www.credly.com/badges/59645601-fc1c-42a8-b95b-4fbf3c499ef6/linked_in_profile'
    );
    expect(screen.getByRole('link', { name: /Azure AZ-104/i })).toHaveAttribute(
      'href',
      'https://learn.microsoft.com/en-us/users/enochayivor-0815/credentials/f46a46b56d4133fb'
    );
  });

  it('renders primary contact CTA and social links', () => {
    render(<Hero />);

    expect(screen.getByRole('link', { name: /get in touch/i })).toHaveAttribute(
      'href',
      'mailto:cloudenochcsis@gmail.com?subject=Opportunity%20for%20Enoch'
    );
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
      'href',
      'https://github.com/cloudenochcsis'
    );
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/enoch-a-b00766138/'
    );
    expect(screen.getByRole('link', { name: /hashnode blog/i })).toHaveAttribute(
      'href',
      'https://cloudenoch.hashnode.dev/'
    );
  });
});
