import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../About';

describe('About', () => {
  it('renders headline and systems engineering narrative', () => {
    render(<About />);

    expect(
      screen.getByRole('heading', {
        name: /systems discipline, cloud leadership & engineering foundation/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/technical support and systems administration/i)).toBeInTheDocument();
    expect(screen.getByText(/Cloud Team Lead at Crowdbotics/i)).toBeInTheDocument();
  });

  it('renders academic background showcasing MS and BSc degrees with zero PhD mentions', () => {
    render(<About />);

    expect(screen.getByText('Academic Background')).toBeInTheDocument();
    expect(screen.getByText('MS in Information Systems')).toBeInTheDocument();
    expect(screen.getByText('BSc in Computer Science and Information Technology')).toBeInTheDocument();

    // Verifies zero PhD/doctoral mentions
    expect(screen.queryByText(/phd/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/doctoral/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/cape town/i)).not.toBeInTheDocument();
  });

  it('renders operational principles list', () => {
    render(<About />);

    expect(screen.getByText(/Zero manual console tweaks; everything codified in Git/i)).toBeInTheDocument();
    expect(screen.getByText(/Strict network segmentation/i)).toBeInTheDocument();
    expect(screen.getByText(/Continuous reconciliation \(ArgoCD\) over imperative scripts/i)).toBeInTheDocument();
  });
});
