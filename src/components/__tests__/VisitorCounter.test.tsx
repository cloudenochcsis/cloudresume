import { render, screen, act } from '@testing-library/react';
import VisitorCounter from '../VisitorCounter';

describe('VisitorCounter', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('renders loading state initially', () => {
    render(<VisitorCounter />);
    expect(screen.getByText(/Loading visitor count/i)).toBeInTheDocument();
  });

  it('displays visitor count when API call succeeds', async () => {
    const mockCount = 42;
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ count: mockCount }),
    });

    await act(async () => {
      render(<VisitorCounter />);
    });

    expect(screen.getByText(mockCount.toString())).toBeInTheDocument();
    expect(screen.getByText(/visitors/i)).toBeInTheDocument();
  });

  it('displays error message when API call fails with HTTP error', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    await act(async () => {
      render(<VisitorCounter />);
    });

    expect(screen.getByText(/Error loading visitor count/i)).toBeInTheDocument();
  });

  it('displays error message when response has invalid format', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ invalidKey: 'invalid' }),
    });

    await act(async () => {
      render(<VisitorCounter />);
    });

    expect(screen.getByText(/Error loading visitor count/i)).toBeInTheDocument();
  });
});
