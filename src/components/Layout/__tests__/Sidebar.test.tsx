import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../../contexts/ThemeContext';
import Sidebar from '../Sidebar';

const renderWithTheme = (component: React.ReactElement, theme = { mode: 'light' as const }) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  );
};

describe('Sidebar', () => {
  it('renders sidebar with light theme', () => {
    renderWithTheme(<Sidebar activePage="default" />);
    
    expect(screen.getByText('ByeWind')).toBeInTheDocument();
    expect(screen.getByText('Favorites')).toBeInTheDocument();
    expect(screen.getByText('Recently')).toBeInTheDocument();
  });

  it('renders navigation items', () => {
    renderWithTheme(<Sidebar activePage="default" />);
    
    expect(screen.getByText('Dashboards')).toBeInTheDocument();
    expect(screen.getByText('Pages')).toBeInTheDocument();
    expect(screen.getByText('Account')).toBeInTheDocument();
  });

  it('shows active page correctly', () => {
    renderWithTheme(<Sidebar activePage="default" />);
    
    const defaultItem = screen.getByText('Default');
    expect(defaultItem).toBeInTheDocument();
  });

  it('renders with proper accessibility', () => {
    renderWithTheme(<Sidebar activePage="default" />);
    
    const sidebar = screen.getByRole('complementary');
    expect(sidebar).toBeInTheDocument();
  });
});
