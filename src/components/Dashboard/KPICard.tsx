import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'
import { cn } from '../../utils/cn'

interface KPICardProps {
    title: string
    value: string
    change: string
    changeType: 'positive' | 'negative'
    className?: string
    highlight?: boolean
}

const KPICard: React.FC<KPICardProps> = ({
    title, value, change, changeType, className, highlight
}) => {
    return (
        <div className={cn("card p-6 animate-fade-in", highlight ? "bg-blue-100 dark:bg-blue-100" : "", className)}>
            <div className="flex flex-row items-center justify-between">
                <div>
                    <p className={cn(
                        "text-sm font-bold mb-3",
                        highlight ? "text-black" : "text-gray-900 dark:text-gray-400"
                    )}>
                        {title}
                    </p>
                    <p className={cn(
                        "text-2xl font-bold",
                        highlight ? "text-black" : "text-gray-900 dark:text-gray-200"
                    )}>
                        {value}
                    </p>
                </div>
                <div className="mt-4 flex items-center">
                    <span className={cn(
                        "text-sm font-medium",
                        highlight ? "text-black" : "text-gray-700 dark:text-gray-300"
                    )}>
                        {change}
                    </span>
                    {changeType === 'positive' ? (
                        <TrendingUp className={cn("w-4 h-4 mr-1", highlight ? "text-black" : "text-white-500")} />
                    ) : (
                        <TrendingDown className={cn("w-4 h-4 mr-1", highlight ? "text-black" : "text-white-500")} />
                    )}
                </div>

            </div>
        </div>
    )
}

export default KPICard
