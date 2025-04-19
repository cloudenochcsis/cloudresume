import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { VisitorCounter } from '../VisitorCounter';

// Mock fetch
global.fetch = jest.fn();

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
    (fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ count: mockCount }),
      })
    );

    render(<VisitorCounter />);

    await waitFor(() => {
      expect(screen.getByText(`Visitors: ${mockCount}`)).toBeInTheDocument();
    });
  });

  it('displays error message when API call fails', async () => {
    (fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject(new Error('API Error'))
    );

    render(<VisitorCounter />);

    await waitFor(() => {
      expect(screen.getByText(/Error loading visitor count/i)).toBeInTheDocument();
    });
  });
});
