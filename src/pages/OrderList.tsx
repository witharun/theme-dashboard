import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout/Layout';
import OrderTable from '../components/OrderList/OrderTable';
import { mockOrders } from '../data/mockData';
import { FilterOptions, SortOptions, PaginationOptions } from '../types';
import { useDebounce } from '../hooks/useDebounce';

const OrderList: React.FC = () => {
  const [orders] = useState(mockOrders);
  const [filters, setFilters] = useState<FilterOptions>({});
  const [sort, setSort] = useState<SortOptions>({ field: '', direction: 'asc' });
  const [pagination, setPagination] = useState<PaginationOptions>({
    page: 1,
    limit: 10,
    total: mockOrders.length
  });

  // Debounce search to improve performance
  const debouncedSearch = useDebounce(filters.search || '', 300);

  // Memoize filtered and sorted orders
  const processedOrders = useMemo(() => {
    let filtered = orders.filter(order => {
      const matchesSearch = !debouncedSearch || 
        order.user.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        order.project.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        order.orderId.toLowerCase().includes(debouncedSearch.toLowerCase());
      
      const matchesStatus = !filters.status || order.status === filters.status;
      
      return matchesSearch && matchesStatus;
    });

    if (sort.field) {
      filtered.sort((a, b) => {
        let aValue = a[sort.field as keyof typeof a];
        let bValue = b[sort.field as keyof typeof b];
        
        if (sort.field === 'user.name') {
          aValue = a.user.name;
          bValue = b.user.name;
        }
        
        if (typeof aValue === 'string' && typeof bValue === 'string') {
          aValue = aValue.toLowerCase();
          bValue = bValue.toLowerCase();
        }
        
        if (sort.direction === 'asc') {
          return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        } else {
          return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
        }
      });
    }

    return filtered;
  }, [orders, debouncedSearch, filters.status, sort]);

  const handleFilter = useCallback((newFilters: FilterOptions) => {
    setFilters(newFilters);
    setPagination(prev => ({ ...prev, page: 1 })); // Reset to first page when filtering
  }, []);

  const handleSort = useCallback((newSort: SortOptions) => {
    setSort(newSort);
  }, []);

  const handlePagination = useCallback((newPagination: PaginationOptions) => {
    setPagination(newPagination);
  }, []);

  return (
    <Layout 
      title="Order List - Light" 
      breadcrumbs={['Dashboards', 'Default']}
      showRightSidebar={false}
      activePage="default"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
      >
        <OrderTable
          orders={processedOrders}
          onFilter={handleFilter}
          onSort={handleSort}
          onPagination={handlePagination}
          pagination={{ ...pagination, total: processedOrders.length }}
        />
      </motion.div>
    </Layout>
  );
};

export default OrderList;
