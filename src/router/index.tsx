import Card from '@/components/Card/Card';
import Catalog from '@/components/Catalog/Catalog';
import Order from '@/components/Order/Order';
import OrderList from '@/components/Order/OrderList';
import Login from '@/pages/Login';

export const privateRoutes = [
  { path: '/', component: Catalog, exact: true },
  { path: '/card', component: Card, exact: true },
  { path: '/order', component: Order, exact: true },
  { path: '/orders', component: OrderList, exact: true },
];

export const publicRoutes = [{ path: '/login', component: Login, exact: true }];
