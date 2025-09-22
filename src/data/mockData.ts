import { Order, Product, Location, Notification, Activity, Contact, ChartData } from '../types';

export const mockOrders: Order[] = [
  {
    id: '1',
    orderId: '#CM9801',
    user: {
      id: '1',
      name: 'Natali Craig',
      email: 'natali@example.com',
      initials: 'NC'
    },
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: 'Just now',
    status: 'in-progress'
  },
  {
    id: '2',
    orderId: '#CM9802',
    user: {
      id: '2',
      name: 'Kate Morrison',
      email: 'kate@example.com',
      initials: 'KM'
    },
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: 'A minute ago',
    status: 'complete'
  },
  {
    id: '3',
    orderId: '#CM9803',
    user: {
      id: '3',
      name: 'Drew Cano',
      email: 'drew@example.com',
      initials: 'DC'
    },
    project: 'Client Project',
    address: 'Bagwell Avenue Ocala',
    date: '1 hour ago',
    status: 'pending'
  },
  {
    id: '4',
    orderId: '#CM9804',
    user: {
      id: '4',
      name: 'Orlando Diggs',
      email: 'orlando@example.com',
      initials: 'OD'
    },
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: 'Yesterday',
    status: 'approved'
  },
  {
    id: '5',
    orderId: '#CM9805',
    user: {
      id: '5',
      name: 'Andi Lane',
      email: 'andi@example.com',
      initials: 'AL'
    },
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: 'Feb 2, 2023',
    status: 'rejected'
  }
];

export const mockProducts: Product[] = [
  {
    name: 'ASOS Ridley High Waist',
    price: 79.49,
    quantity: 82,
    amount: 6518.18
  },
  {
    name: 'Marco Lightweight Shirt',
    price: 128.50,
    quantity: 37,
    amount: 4754.50
  },
  {
    name: 'Half Sleeve Shirt',
    price: 39.99,
    quantity: 64,
    amount: 2559.36
  },
  {
    name: 'Lightweight Jacket',
    price: 20.00,
    quantity: 184,
    amount: 3680.00
  },
  {
    name: 'Marco Shoes',
    price: 79.49,
    quantity: 64,
    amount: 1965.81
  }
];

export const mockLocations: Location[] = [
  { name: 'New York', revenue: '72K' },
  { name: 'San Francisco', revenue: '39K' },
  { name: 'Sydney', revenue: '25K' },
  { name: 'Singapore', revenue: '61K' }
];

export const mockNotifications: Notification[] = [
  {
    id: '1',
    message: 'You have a bug that needs to be fixed',
    timestamp: 'Just now',
    type: 'warning'
  },
  {
    id: '2',
    message: 'New user registered',
    timestamp: '59 minutes ago',
    type: 'info'
  },
  {
    id: '3',
    message: 'You have a bug that needs to be fixed',
    timestamp: '12 hours ago',
    type: 'warning'
  },
  {
    id: '4',
    message: 'Andi Lane subscribed to you',
    timestamp: 'Today, 11:59 AM',
    type: 'success'
  }
];

export const mockActivities: Activity[] = [
  {
    id: '1',
    action: 'You have a bug that needs to be fixed',
    timestamp: 'Just now',
    type: 'other'
  },
  {
    id: '2',
    action: 'Released a new version',
    timestamp: '59 minutes ago',
    type: 'create'
  },
  {
    id: '3',
    action: 'Submitted a bug',
    timestamp: '12 hours ago',
    type: 'create'
  },
  {
    id: '4',
    action: 'Modified A data in Page X',
    timestamp: 'Today, 11:59 AM',
    type: 'update'
  },
  {
    id: '5',
    action: 'Deleted a page in Project X',
    timestamp: 'Feb 2, 2023',
    type: 'delete'
  }
];

export const mockContacts: Contact[] = [
  {
    id: '1',
    name: 'Natali Craig',
    initials: 'NC',
    isOnline: true
  },
  {
    id: '2',
    name: 'Drew Cano',
    initials: 'DC',
    isOnline: false
  },
  {
    id: '3',
    name: 'Sri Harsha M',
    initials: 'SH',
    isOnline: true
  },
  {
    id: '4',
    name: 'Andi Lane',
    initials: 'AL',
    isOnline: false
  },
  {
    id: '5',
    name: 'Kate Morrison',
    initials: 'KM',
    isOnline: true
  },
  {
    id: '6',
    name: 'Koray Okumus',
    initials: 'KO',
    isOnline: false
  }
];

export const mockChartData: ChartData[] = [
  { name: 'Jan', value: 20 },
  { name: 'Feb', value: 25 },
  { name: 'Mar', value: 15 },
  { name: 'Apr', value: 30 },
  { name: 'May', value: 22 },
  { name: 'Jun', value: 28 }
];

export const mockRevenueData: ChartData[] = [
  { name: 'Jan', current: 20, previous: 18 },
  { name: 'Feb', current: 25, previous: 22 },
  { name: 'Mar', current: 15, previous: 20 },
  { name: 'Apr', current: 30, previous: 25 },
  { name: 'May', current: 22, previous: 28 },
  { name: 'Jun', current: 28, previous: 30 }
];

export const mockSalesData: ChartData[] = [
  { name: 'Direct', value: 300.56, color: '#6C5DD3' },
  { name: 'Affiliate', value: 135.18, color: '#4CAF50' },
  { name: 'Sponsored', value: 154.02, color: '#2196F3' },
  { name: 'E-mail', value: 48.96, color: '#9E9E9E' }
];
