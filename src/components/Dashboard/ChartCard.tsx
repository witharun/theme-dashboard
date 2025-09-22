import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { cn } from '../../utils/cn';

interface ChartCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, children, className }) => {
  return (
    <div className={cn('card p-6 animate-fade-in', className)}>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      {children}
    </div>
  );
};

interface BarChartProps {
  data: any[];
  dataKey: string;
  className?: string;
}

export const BarChartComponent: React.FC<BarChartProps> = ({ data, dataKey, className }) => {
  return (
    <ChartCard title="Projections vs Actuals" className={className}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis 
            dataKey="name" 
            stroke="#6B7280"
            fontSize={12}
          />
          <YAxis 
            stroke="#6B7280"
            fontSize={12}
            tickFormatter={(value) => `${value}M`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#404040',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#F9FAFB'
            }}
          />
          <Bar 
            dataKey={dataKey} 
            fill="#6C5DD3" 
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

interface LineChartProps {
  data: any[];
  className?: string;
}

export const LineChartComponent: React.FC<LineChartProps> = ({ data, className }) => {
  return (
    <ChartCard title="Revenue" className={className}>
      <div className="mb-4 flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Current Week $58,211</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Previous Week $68,768</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis 
            dataKey="name" 
            stroke="#6B7280"
            fontSize={12}
          />
          <YAxis 
            stroke="#6B7280"
            fontSize={12}
            tickFormatter={(value) => `${value}M`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#404040',
              border: '1px solid #374151',
              borderRadius: '8px',
              color: '#F9FAFB'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="current" 
            stroke="#6C5DD3" 
            strokeWidth={2}
            dot={{ fill: '#6C5DD3', strokeWidth: 2, r: 4 }}
          />
          <Line 
            type="monotone" 
            dataKey="previous" 
            stroke="#9CA3AF" 
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: '#9CA3AF', strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartCard>
  );
};

interface PieChartProps {
  data: any[];
  className?: string;
}

export const PieChartComponent: React.FC<PieChartProps> = ({ data, className }) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  return (
    <ChartCard title="Total Sales" className={className}>
      <div className="flex items-center justify-center">
        <div className="relative">
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              38.6%
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {item.name}
              </span>
            </div>
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              ${item.value.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </ChartCard>
  );
};

export default ChartCard;
