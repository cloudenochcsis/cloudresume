import { render, screen } from '@testing-library/react';
import Header from '../Header';
import { ThemeProvider } from '../../contexts/ThemeContext';

const renderHeader = () => {
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

  render(
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
};

describe('Header', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
  });

  it('positions the hero around cloud, DevOps, agentic AI, Python, and automation', () => {
    renderHeader();

    expect(screen.getAllByText(/Cloud DevOps Engineer/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/Agentic AI, Python & Automation/i)).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /switch to (light|dark) mode/i })).not.toBeInTheDocument();
  });

  it('offers a direct email CTA and a work anchor in the hero', () => {
    renderHeader();

    const emailCta = screen.getByRole('link', { name: /get in touch/i });
    expect(emailCta).toHaveAttribute(
      'href',
      'mailto:cloudenochcsis@gmail.com?subject=Opportunity%20for%20Enoch'
    );
    expect(screen.getByRole('link', { name: /view work/i })).toHaveAttribute('href', '#projects');
  });
});
