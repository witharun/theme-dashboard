import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout/Layout';
import KPICard from '../components/Dashboard/KPICard';
import { BarChartComponent, LineChartComponent, PieChartComponent } from '../components/Dashboard/ChartCard';
import DataTable from '../components/Dashboard/DataTable';
import LocationCard from '../components/Dashboard/LocationCard';
import {
    mockChartData,
    mockRevenueData,
    mockSalesData,
    mockProducts,
    mockLocations
} from '../data/mockData';
import { cn } from '../utils/cn';

const Dashboard: React.FC = () => {
    const kpiData = useMemo(() => [
        {
            title: 'Customers',
            value: '3,781',
            change: '+11.01%',
            changeType: 'positive' as const
        },
        {
            title: 'Orders',
            value: '1,219',
            change: '-0.03%',
            changeType: 'negative' as const
        },
        {
            title: 'Revenue',
            value: '$695',
            change: '+15.03%',
            changeType: 'positive' as const
        },
        {
            title: 'Growth',
            value: '30.1%',
            change: '+6.08%',
            changeType: 'positive' as const
        }
    ], []);

    const productColumns = useMemo(() => [
        {
            key: 'name',
            label: 'Name'
        },
        {
            key: 'price',
            label: 'Price',
            render: (value: number) => `$${value.toFixed(2)}`
        },
        {
            key: 'quantity',
            label: 'Quantity'
        },
        {
            key: 'amount',
            label: 'Amount',
            render: (value: number) => `$${value.toFixed(2)}`
        }
    ], []);

    return (
        <Layout
            title=""
            breadcrumbs={['Dashboards', 'Default']}
            activePage="default"
        >
            <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
            >
                {/* Page Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        eCommerce
                    </h1>
                </motion.div>

                {/* 1st Row: KPI Cards + Bar Chart */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                    {/* KPI Cards (as one block inside col-1) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6 h-[252px]">
                        {kpiData.map((kpi, index) => (
                            <motion.div
                                
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.2 + index * 0.1,
                                    ease: [0.4, 0.0, 0.2, 1],
                                }}
                            >
                                <KPICard
                                    title={kpi.title}
                                    value={kpi.value}
                                    change={kpi.change}
                                    changeType={kpi.changeType}
                                    className={cn(
                                        index === 0 || index === 3 ? "bg-blue-100 dark:bg-blue-100 " : ""
                                    )}
                                    highlight={index === 0 || index === 3}
                                />
                            </motion.div>
                        ))}
                    </div>

                    {/* Bar Chart */}
                    <motion.div
                        
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <BarChartComponent data={mockChartData} dataKey="value" />
                    </motion.div>
                </div>

                {/* 2nd Row: Line Chart + Location Card */}
                <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4 lg:gap-6 ">
                    <motion.div
                        
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <LineChartComponent data={mockRevenueData}/>
                    </motion.div>
                    <motion.div
                        
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <LocationCard title="Revenue by Location" locations={mockLocations} />
                    </motion.div>
                </div>

                {/* 3rd Row: DataTable + Pie Chart */}
                <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-4 lg:gap-6 ">
                    <motion.div
                        
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.9 }}
                    >
                        <DataTable
                            title="Top Selling Products"
                            columns={productColumns}
                            data={mockProducts}
                        />
                    </motion.div>
                    <motion.div
                        
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                    >
                        <PieChartComponent data={mockSalesData} />
                    </motion.div>
                </div>

            </motion.div>
        </Layout>
    );
};

export default Dashboard;
