import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navigation from '../Navigation';

describe('Navigation', () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
  });

  it('renders brand name and all required navigation links', () => {
    render(<Navigation />);

    expect(screen.getByText('Enoch A.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '#work');
    expect(screen.getByRole('link', { name: 'Experience' })).toHaveAttribute('href', '#experience');
    expect(screen.getByRole('link', { name: 'Writing & Research' })).toHaveAttribute('href', '#writing');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact');
  });

  it('includes prominent Let’s talk CTA button', () => {
    render(<Navigation />);

    const talkLinks = screen.getAllByRole('link', { name: /let’s talk|talk/i });
    expect(talkLinks[0]).toHaveAttribute(
      'href',
      'mailto:cloudenochcsis@gmail.com?subject=Opportunity%20for%20Enoch'
    );
  });

  it('toggles mobile menu on button click and provides accessible controls', () => {
    render(<Navigation />);

    const menuButton = screen.getByRole('button', { name: /toggle navigation menu/i });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');

    // Menu should now be open
    expect(screen.getByTestId('mobile-nav')).toBeInTheDocument();

    // Clicking again should close it
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByTestId('mobile-nav')).not.toBeInTheDocument();
  });
});
