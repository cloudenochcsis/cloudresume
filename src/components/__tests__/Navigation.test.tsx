import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from '../Navigation';

describe('Navigation', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
  });

  it('renders brand name and all required navigation links', () => {
    render(<Navigation />);

    expect(screen.getByText('Enoch A.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Featured Project' })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about');
    expect(screen.getByRole('link', { name: 'Skills' })).toHaveAttribute('href', '#skills');
    expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '#experience');
    expect(screen.getByRole('link', { name: 'Writing' })).toHaveAttribute('href', '#writing');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact');
  });

  it('includes prominent Let’s talk CTA button', () => {
    render(<Navigation />);

    const talkLinks = screen.getAllByRole('link', { name: /let’s talk/i });
    expect(talkLinks[0]).toHaveAttribute(
      'href',
      'mailto:cloudenochcsis@gmail.com?subject=Opportunity%20for%20Enoch'
    );
  });

  it('toggles mobile menu on button click and provides accessible controls', () => {
    render(<Navigation />);

    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    // Clicking again should close it
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });
});
