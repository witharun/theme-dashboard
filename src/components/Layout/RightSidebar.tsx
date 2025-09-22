import React from 'react';
import { Bug, User, Bell, CheckCircle, FileText, Trash2 } from 'lucide-react';
import { mockNotifications, mockActivities, mockContacts } from '../../data/mockData';
import { cn } from '../../utils/cn';

const RightSidebar: React.FC = () => {
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <Bug className="w-4 h-4 text-orange-500" />;
      case 'success':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'error':
        return <Bug className="w-4 h-4 text-red-500" />;
      default:
        return <Bell className="w-4 h-4 text-blue-500" />;
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'create':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'update':
        return <FileText className="w-4 h-4 text-blue-500" />;
      case 'delete':
        return <Trash2 className="w-4 h-4 text-red-500" />;
      default:
        return <Bell className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <aside className="w-80 bg-white dark:bg-dark-800 border-l border-gray-200 dark:border-dark-700 h-full overflow-y-auto">
      <div className="p-6 space-y-8">
        {/* Notifications */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Notifications
          </h3>
          <div className="space-y-3">
            {mockNotifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors duration-200"
              >
                {getNotificationIcon(notification.type)}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 dark:text-white">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {notification.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Activities
          </h3>
          <div className="space-y-3">
            {mockActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700 transition-colors duration-200"
              >
                {getActivityIcon(activity.type)}
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 dark:text-white">
                    {activity.action}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {activity.timestamp}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacts */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Contacts
          </h3>
          <div className="space-y-3">
            {mockContacts.map((contact) => (
              <div
                key={contact.id}
                className={cn(
                  'flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 cursor-pointer',
                  contact.name === 'Sri Harsha M' 
                    ? 'bg-orange-100 dark:bg-orange-900/20' 
                    : 'hover:bg-gray-50 dark:hover:bg-dark-700'
                )}
              >
                <div className="relative">
                  <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                    {contact.initials}
                  </div>
                  {contact.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white dark:border-dark-800 rounded-full"></div>
                  )}
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {contact.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
