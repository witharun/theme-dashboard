import React from 'react';
import { render, screen } from '@testing-library/react';
import { TrendingUp } from 'lucide-react';
import KPICard from '../components/Dashboard/KPICard';

describe('KPICard', () => {
  const mockProps = {
    title: 'Test KPI',
    value: '1,234',
    change: '+5.2%',
    changeType: 'positive' as const,
    icon: TrendingUp
  };

  it('renders KPI card with correct content', () => {
    render(<KPICard {...mockProps} />);

    expect(screen.getByText('Test KPI')).toBeInTheDocument();
    expect(screen.getByText('1,234')).toBeInTheDocument();
    expect(screen.getByText('+5.2%')).toBeInTheDocument();
  });

  it('applies positive change styling', () => {
    render(<KPICard {...mockProps} />);

    const changeElement = screen.getByText('+5.2%');
    expect(changeElement).toHaveClass('text-green-600');
  });

  it('applies negative change styling', () => {
    const negativeProps = {
      ...mockProps,
      change: '-2.1%',
      changeType: 'negative' as const
    };

    render(<KPICard {...negativeProps} />);

    const changeElement = screen.getByText('-2.1%');
    expect(changeElement).toHaveClass('text-red-600');
  });

  it('renders icon correctly', () => {
    render(<KPICard {...mockProps} />);

    const iconContainer = screen.getByRole('img', { hidden: true });
    expect(iconContainer).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const customClass = 'custom-class';
    render(<KPICard {...mockProps} className={customClass} />);

    const card = screen.getByText('Test KPI').closest('.card');
    expect(card).toHaveClass(customClass);
  });
});
