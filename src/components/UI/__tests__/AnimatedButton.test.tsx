import React from 'react';
import { render, screen } from '@testing-library/react';
import AnimatedButton from '../AnimatedButton';

describe('AnimatedButton', () => {
  it('renders button with children', () => {
    render(<AnimatedButton>Click me</AnimatedButton>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<AnimatedButton variant="primary">Primary</AnimatedButton>);
    expect(screen.getByRole('button')).toHaveClass('bg-primary-500');

    rerender(<AnimatedButton variant="secondary">Secondary</AnimatedButton>);
    expect(screen.getByRole('button')).toHaveClass('bg-gray-100');
  });

  it('renders with loading state', () => {
    render(<AnimatedButton loading>Loading</AnimatedButton>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('renders with icon', () => {
    const TestIcon = () => <span data-testid="icon">📊</span>;
    render(
      <AnimatedButton icon={<TestIcon />} iconPosition="left">
        With Icon
      </AnimatedButton>
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<AnimatedButton className="custom-class">Custom</AnimatedButton>);
    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });
});
