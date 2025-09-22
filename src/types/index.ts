export interface Theme {
  mode: 'light' | 'dark';
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  initials: string;
}

export interface Order {
  id: string;
  orderId: string;
  user: User;
  project: string;
  address: string;
  date: string;
  status: 'pending' | 'in-progress' | 'complete' | 'approved' | 'rejected';
}

export interface KPICard {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: React.ComponentType<any>;
}

export interface ChartData {
  name: string;
  value?: number;
  [key: string]: any;
}

export interface Product {
  name: string;
  price: number;
  quantity: number;
  amount: number;
}

export interface Location {
  name: string;
  revenue: string;
}

export interface Notification {
  id: string;
  message: string;
  timestamp: string;
  type: 'info' | 'success' | 'warning' | 'error';
}

export interface Activity {
  id: string;
  action: string;
  timestamp: string;
  type: 'create' | 'update' | 'delete' | 'other';
}

export interface Contact {
  id: string;
  name: string;
  avatar?: string;
  initials: string;
  isOnline?: boolean;
}

export interface FilterOptions {
  status?: string;
  dateRange?: {
    start: Date;
    end: Date;
  };
  search?: string;
}

export interface SortOptions {
  field: string;
  direction: 'asc' | 'desc';
}

export interface PaginationOptions {
  page: number;
  limit: number;
  total: number;
}
