import React from 'react';
import { render, screen } from '@testing-library/react';
import VisitorCounter from '../VisitorCounter';

describe('VisitorCounter', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('renders loading state initially', () => {
    (fetch as jest.Mock).mockReturnValueOnce(new Promise(() => {}));
    render(<VisitorCounter />);
    expect(screen.getByText('...')).toBeInTheDocument();
    expect(screen.getByText('Visitors:')).toBeInTheDocument();
  });

  it('displays visitor count when API call succeeds', async () => {
    const mockCount = 42;
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ count: mockCount }),
    });

    render(<VisitorCounter />);
    expect(await screen.findByText('42')).toBeInTheDocument();
    expect(screen.getByText('Visitors:')).toBeInTheDocument();
  });

  it('displays graceful fallback when API call fails', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    render(<VisitorCounter />);
    expect(await screen.findByText('live')).toBeInTheDocument();
  });
});
