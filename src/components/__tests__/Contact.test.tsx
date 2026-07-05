import { render, screen } from '@testing-library/react';
import Contact from '../Contact';

jest.mock('../VisitorCounter', () => ({ className }: { className?: string }) => (
  <div data-testid="mock-visitor-counter" className={className} />
));

describe('Contact', () => {
  it('makes email the primary, zero-friction action', () => {
    render(<Contact />);

    const emailCta = screen.getByRole('link', { name: /email me/i });
    expect(emailCta).toHaveAttribute(
      'href',
      'mailto:cloudenochcsis@gmail.com?subject=Opportunity%20for%20Enoch'
    );
    // plain selectable text for copy-paste recruiters
    expect(screen.getByText('cloudenochcsis@gmail.com')).toBeInTheDocument();
  });

  it('never renders a dead resume link before the PDF exists', () => {
    render(<Contact />);

    expect(screen.queryByRole('link', { name: /resume/i })).not.toBeInTheDocument();
  });

  it('keeps the social links', () => {
    render(<Contact />);

    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute('href', 'https://github.com/cloudenochcsis');
    expect(screen.getByRole('link', { name: /linkedin/i })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/enoch-a-b00766138/'
    );
    expect(screen.getByRole('link', { name: /blog/i })).toHaveAttribute('href', 'https://cloudenoch.hashnode.dev/');
  });
});
