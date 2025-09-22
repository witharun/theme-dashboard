import React, { useState } from 'react';
import { 
  Star, 
  Home, 
  ShoppingCart, 
  Folder, 
  GraduationCap,
  User,
  FileText,
  Target,
  Users,
  Building,
  BookOpen,
  ChevronDown,
  ChevronRight,
  PieChart,
  UserCheck,
  MessageSquare
} from 'lucide-react';
import { cn } from '../../utils/cn';
import { useTheme } from '../../contexts/ThemeContext';

interface SidebarProps {
  activePage?: string;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    id: 'favorites',
    label: 'Favorites',
    icon: Star,
    children: [
      { id: 'overview', label: 'Overview', icon: Home },
      { id: 'projects', label: 'Projects', icon: Folder }
    ]
  },
  {
    id: 'dashboards',
    label: 'Dashboards',
    icon: PieChart,
    children: [
      { id: 'default', label: 'Default', icon: PieChart },
      { id: 'ecommerce', label: 'eCommerce', icon: ShoppingCart },
      { id: 'projects-dashboard', label: 'Projects', icon: Folder },
      { id: 'courses', label: 'Online Courses', icon: GraduationCap }
    ]
  },
  {
    id: 'pages',
    label: 'Pages',
    icon: FileText,
    children: [
      { id: 'user-profile', label: 'User Profile', icon: User },
      { id: 'overview-page', label: 'Overview', icon: Home },
      { id: 'projects-page', label: 'Projects', icon: Folder },
      { id: 'campaigns', label: 'Campaigns', icon: Target },
      { id: 'documents', label: 'Documents', icon: FileText },
      { id: 'followers', label: 'Followers', icon: Users }
    ]
  },
  {
    id: 'account',
    label: 'Account',
    icon: UserCheck
  },
  {
    id: 'corporate',
    label: 'Corporate',
    icon: Building
  },
  {
    id: 'blog',
    label: 'Blog',
    icon: BookOpen
  },
  {
    id: 'social',
    label: 'Social',
    icon: MessageSquare
  }
];

const Sidebar: React.FC<SidebarProps> = ({ activePage = 'default' }) => {
  const { theme } = useTheme();
  const [expandedSections, setExpandedSections] = useState<string[]>(['favorites', 'dashboards', 'pages']);
  const [activeTab, setActiveTab] = useState<'favorites' | 'recently'>('favorites');

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const renderMenuItem = (item: MenuItem, level = 0) => {
    const isExpanded = expandedSections.includes(item.id);
    const hasChildren = item.children && item.children.length > 0;
    const isActive = activePage === item.id;

    return (
      <div key={item.id}>
        <div
          className={cn(
            'flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer group',
            level > 0 && 'ml-4',
            isActive 
              ? 'bg-primary-500 text-white shadow-lg' 
              : theme.mode === 'dark'
                ? 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
          )}
          onClick={() => hasChildren ? toggleSection(item.id) : undefined}
        >
          <item.icon className={cn(
            "w-4 h-4 mr-3 transition-colors duration-200",
            isActive 
              ? "text-white" 
              : theme.mode === 'dark'
                ? "text-gray-400 group-hover:text-white"
                : "text-gray-500 group-hover:text-gray-700"
          )} />
          <span className="flex-1">{item.label}</span>
          {hasChildren && (
            isExpanded ? (
              <ChevronDown className={cn(
                "w-4 h-4",
                theme.mode === 'dark' ? "text-gray-400" : "text-gray-500"
              )} />
            ) : (
              <ChevronRight className={cn(
                "w-4 h-4",
                theme.mode === 'dark' ? "text-gray-400" : "text-gray-500"
              )} />
            )
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="mt-1 ml-2 space-y-1">
            {item.children?.map(child => renderMenuItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className={cn(
      "w-64 border-r h-full overflow-y-auto",
      theme.mode === 'dark' 
        ? "bg-gray-900 border-gray-800" 
        : "bg-white border-gray-200"
    )}>
      <div className="p-6">
        {/* Logo */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <span className={cn(
            "text-xl font-bold",
            theme.mode === 'dark' ? "text-white" : "text-gray-900"
          )}>
            ByeWind
          </span>
        </div>

        {/* Favorites/Recently Tabs */}
            <div className={cn(
              "flex mb-6 rounded-lg p-1",
              theme.mode === 'dark' ? "bg-gray-800" : "bg-gray-100"
            )}>
          <button
            onClick={() => setActiveTab('favorites')}
            className={cn(
              'flex-1 py-2 px-3 text-sm font-medium rounded-md transition-all duration-200',
              activeTab === 'favorites'
                ? theme.mode === 'dark'
                  ? 'bg-gray-700 text-white'
                  : 'bg-white text-gray-900 shadow-sm'
                : theme.mode === 'dark'
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
            )}
          >
            Favorites
          </button>
          <button
            onClick={() => setActiveTab('recently')}
            className={cn(
              'flex-1 py-2 px-3 text-sm font-medium rounded-md transition-all duration-200',
              activeTab === 'recently'
                ? theme.mode === 'dark'
                  ? 'bg-gray-700 text-white'
                  : 'bg-white text-gray-900 shadow-sm'
                : theme.mode === 'dark'
                  ? 'text-gray-400 hover:text-white'
                  : 'text-gray-600 hover:text-gray-900'
            )}
          >
            Recently
          </button>
        </div>

        {/* Navigation */}
        <nav className="space-y-1">
          {menuItems.map(item => renderMenuItem(item))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
