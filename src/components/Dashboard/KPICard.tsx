import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { cn } from '../../utils/cn';

interface KPICardProps {
    title: string;
    value: string;
    change: string;
    changeType: 'positive' | 'negative';
    className?: string;
}

const KPICard: React.FC<KPICardProps> = ({
    title,
    value,
    change,
    changeType,
    className
}) => {
    return (
        <div className={cn('card p-6 animate-fade-in', className)}>
            <div className="flex flex-row items-center justify-between">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                            {title}
                        </p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-white">
                            {value}
                        </p>
                    </div>
                </div>

                <div className="mt-4 flex items-center">
                    <span className={cn(
                        'text-sm font-medium',
                        
                    )}>
                        {change}
                    </span>
                    {changeType === 'positive' ? (
                        <TrendingUp className="w-4 h-4 text-500 mr-1" />
                    ) : (
                        <TrendingDown className="w-4 h-4 text-500 mr-1" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default KPICard;
