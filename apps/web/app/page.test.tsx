import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders the heading with correct text', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { name: /hello asdfworld!/i });
    expect(heading).toBeInTheDocument();
  });

  it('applies the correct classes to the heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { name: /hello asdfworld!/i });
    expect(heading).toHaveClass('text-red-700');
    expect(heading).toHaveClass('font-bold');
    expect(heading).toHaveClass('underline');
    expect(heading).toHaveClass('text-4xl');
  });
});
