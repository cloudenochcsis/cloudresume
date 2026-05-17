import { fireEvent, render, screen } from '@testing-library/react';
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

  it('renders a theme toggle that switches between light and dark modes', () => {
    renderHeader();

    const toggle = screen.getByRole('button', { name: /switch to dark mode/i });
    expect(document.documentElement).not.toHaveClass('dark');

    fireEvent.click(toggle);

    expect(document.documentElement).toHaveClass('dark');
    expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeInTheDocument();
  });
});
