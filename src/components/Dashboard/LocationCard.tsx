import React from 'react';
import { cn } from '../../utils/cn';

interface Location {
  name: string;
  revenue: string;
}

interface LocationCardProps {
  title: string;
  locations: Location[];
  className?: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ title, locations, className }) => {
  return (
    <div className={cn('card p-6 animate-fade-in', className)}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      
      {/* World Map with location pins */}
      <div className="mb-6">
        <div className="w-full h-32 bg-gray-50 dark:bg-gray-800 rounded-lg relative overflow-hidden">
          <svg
            viewBox="0 0 400 160"
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* World map outline */}
            <path
              d="M50 80 C 80 60, 120 70, 150 75 C 180 80, 220 85, 250 80 C 280 75, 320 70, 350 75"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-gray-300 dark:text-gray-600"
            />
            <path
              d="M50 100 C 80 90, 120 95, 150 100 C 180 105, 220 110, 250 105 C 280 100, 320 95, 350 100"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-gray-300 dark:text-gray-600"
            />
            
            {/* Location pins */}
            {/* New York */}
            <circle cx="120" cy="70" r="4" fill="#6C5DD3" className="animate-pulse" />
            <circle cx="120" cy="70" r="8" fill="#6C5DD3" fillOpacity="0.2" />
            
            {/* San Francisco */}
            <circle cx="80" cy="85" r="4" fill="#10B981" className="animate-pulse" />
            <circle cx="80" cy="85" r="8" fill="#10B981" fillOpacity="0.2" />
            
            {/* Sydney */}
            <circle cx="280" cy="120" r="4" fill="#F59E0B" className="animate-pulse" />
            <circle cx="280" cy="120" r="8" fill="#F59E0B" fillOpacity="0.2" />
            
            {/* Singapore */}
            <circle cx="200" cy="110" r="4" fill="#EF4444" className="animate-pulse" />
            <circle cx="200" cy="110" r="8" fill="#EF4444" fillOpacity="0.2" />
          </svg>
        </div>
      </div>
      
      {/* Location list */}
      <div className="space-y-3">
        {locations.map((location, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-dark-700 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-600 transition-colors duration-200"
          >
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {location.name}
              </span>
            </div>
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {location.revenue}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationCard;
