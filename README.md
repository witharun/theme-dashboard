# React Light/Dark Theme Dashboard

A modern, responsive React dashboard application with light and dark theme support, built with TypeScript, Tailwind CSS, and Recharts.

## Features

### 🎨 Theme System
- **Light/Dark Mode Toggle**: Seamless switching between light and dark themes
- **Persistent Theme**: User preference saved in localStorage
- **Smooth Transitions**: Animated theme switching with CSS transitions

### 📊 Dashboard Components
- **KPI Cards**: Key performance indicators with trend indicators
- **Interactive Charts**: Bar charts, line charts, and pie charts using Recharts
- **Data Tables**: Sortable and filterable data tables
- **Location Cards**: Revenue by location with visual indicators

### 📋 Order Management
- **Order List**: Comprehensive order management interface
- **Advanced Filtering**: Filter by status, date range, and search terms
- **Sorting**: Sort by any column (ascending/descending)
- **Pagination**: Efficient data pagination with customizable page sizes
- **Bulk Actions**: Select multiple orders for batch operations

### 📱 Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Responsive layout for tablet screens
- **Desktop Experience**: Full-featured desktop interface
- **Collapsible Sidebar**: Mobile-friendly navigation

### ♿ Accessibility
- **ARIA Labels**: Proper accessibility labels and roles
- **Keyboard Navigation**: Full keyboard support for all interactions
- **Focus Management**: Clear focus indicators and logical tab order
- **Screen Reader Support**: Semantic HTML and proper labeling

### 🎭 Animations & Microinteractions
- **Smooth Animations**: Fade-in, slide-in, and scale animations
- **Hover Effects**: Interactive hover states for better UX
- **Loading States**: Loading indicators for async operations
- **Theme Transitions**: Smooth color transitions when switching themes

## Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Recharts** for data visualization
- **React Router** for navigation
- **Lucide React** for icons
- **Context API** for state management

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-light-dark-assigment
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Dashboard/       # Dashboard-specific components
│   ├── Layout/          # Layout components (Header, Sidebar, etc.)
│   ├── OrderList/       # Order management components
│   └── UI/              # Generic UI components
├── contexts/            # React contexts
├── data/                # Mock data and constants
├── hooks/               # Custom React hooks
├── pages/               # Page components
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
└── index.css            # Global styles
```

## Key Components

### Theme System
- `ThemeContext`: Manages theme state and provides theme switching functionality
- `useTheme`: Custom hook for accessing theme context

### Layout Components
- `Layout`: Main layout wrapper with responsive sidebar
- `Header`: Top navigation with search and user profile
- `Sidebar`: Left navigation with collapsible sections
- `RightSidebar`: Notifications, activities, and contacts
- `MobileNav`: Mobile-friendly navigation overlay

### Dashboard Components
- `KPICard`: Key performance indicator cards with trend indicators
- `ChartCard`: Wrapper for various chart types
- `DataTable`: Sortable and filterable data table
- `LocationCard`: Location-based revenue display

### Order Management
- `OrderTable`: Comprehensive order management interface with filtering, sorting, and pagination

## Customization

### Theme Colors
Modify the color palette in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Your primary color palette
  },
  dark: {
    // Your dark theme colors
  }
}
```

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update the sidebar navigation in `src/components/Layout/Sidebar.tsx`

### Adding New Chart Types
1. Create a new chart component in `src/components/Dashboard/`
2. Use Recharts components for data visualization
3. Follow the existing pattern for responsive design

## Performance Optimizations

- **Lazy Loading**: Components are loaded on demand
- **Memoization**: React.memo and useMemo for expensive calculations
- **Efficient Re-renders**: Optimized state management to prevent unnecessary re-renders
- **Bundle Splitting**: Code splitting for better loading performance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## Demo

[Live Demo](https://your-demo-url.com) - *Update with your deployed URL*

## Screenshots

### Light Theme Dashboard
![Light Theme Dashboard](./docs/light-dashboard.png)

### Dark Theme Dashboard
![Dark Theme Dashboard](./docs/dark-dashboard.png)

### Order List Page
![Order List Page](./docs/order-list.png)

## Support

If you have any questions or need help, please:
1. Check the documentation
2. Search existing issues
3. Create a new issue with detailed information

---

Built with ❤️ using React and TypeScript
