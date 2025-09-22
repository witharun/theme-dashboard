import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import RightSidebar from './RightSidebar';
import MobileNav from './MobileNav';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  breadcrumbs?: string[];
  showRightSidebar?: boolean;
  activePage?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title, 
  breadcrumbs, 
  showRightSidebar = true,
  activePage 
}) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <div className="flex h-screen">
        {/* Desktop Left Sidebar */}
        <div className="hidden lg:block">
          <Sidebar activePage={activePage} />
        </div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header title={title} breadcrumbs={breadcrumbs} />
          <main className="flex-1 overflow-y-auto">
            <div className="p-4 lg:p-6">
              {children}
            </div>
          </main>
        </div>
        
        {/* Desktop Right Sidebar */}
        {showRightSidebar && (
          <div className="hidden xl:block">
            <RightSidebar />
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      <MobileNav>
        <Sidebar activePage={activePage} />
      </MobileNav>
    </div>
  );
};

export default Layout;
