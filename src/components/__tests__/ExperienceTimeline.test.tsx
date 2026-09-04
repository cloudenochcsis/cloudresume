import React from 'react';
import { render, screen } from '@testing-library/react';
import ExperienceTimeline from '../ExperienceTimeline';

describe('ExperienceTimeline', () => {
  it('renders section header and subtitle', () => {
    render(<ExperienceTimeline />);

    expect(
      screen.getByRole('heading', {
        name: /Professional Experience & Engineering Track Record/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByText('Career Progression')).toBeInTheDocument();
  });

  it('renders Crowdbotics Cloud Team Lead role and tenure', () => {
    render(<ExperienceTimeline />);

    expect(screen.getByText('Cloud Team Lead')).toBeInTheDocument();
    expect(screen.getByText('Crowdbotics')).toBeInTheDocument();
  });

  it('renders open-source engineering contributions', () => {
    render(<ExperienceTimeline />);

    expect(screen.getByText('OpenSRE (Tracer-Cloud)')).toBeInTheDocument();
    expect(screen.getByText('Open Source Contributor')).toBeInTheDocument();
  });
});
