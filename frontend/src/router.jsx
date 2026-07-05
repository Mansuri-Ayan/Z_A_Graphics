import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { PageLoader } from './components/ui/PageLoader';

// Layouts (Loaded synchronously to prevent navbar flicker)
import Layout from './components/layout/Layout';
import CustomerLayout from './layouts/CustomerLayout';
import AdminLayout from './layouts/AdminLayout';

// Higher Order Component to wrap lazy loaded routes with Suspense
const Loadable = (Component) => (props) => (
  <Suspense fallback={<PageLoader />}>
    <Component {...props} />
  </Suspense>
);

// Public Pages (Lazy Loaded)
const Home = Loadable(lazy(() => import('./pages/public/Home')));
const Products = Loadable(lazy(() => import('./pages/public/Products')));
const ProductDetail = Loadable(lazy(() => import('./pages/public/ProductDetail')));
const Cart = Loadable(lazy(() => import('./pages/public/Cart')));
const Checkout = Loadable(lazy(() => import('./pages/public/Checkout')));
const OrderConfirmation = Loadable(lazy(() => import('./pages/public/OrderConfirmation')));
const Login = Loadable(lazy(() => import('./pages/public/Login')));
const Register = Loadable(lazy(() => import('./pages/public/Register')));
const ForgotPassword = Loadable(lazy(() => import('./pages/public/ForgotPassword')));
const Contact = Loadable(lazy(() => import('./pages/public/Contact')));
const About = Loadable(lazy(() => import('./pages/public/About')));
const NotFound = Loadable(lazy(() => import('./pages/public/NotFound')));
const TermsOfService = Loadable(lazy(() => import('./pages/public/legal/TermsOfService')));
const PrivacyPolicy = Loadable(lazy(() => import('./pages/public/legal/PrivacyPolicy')));
const RefundPolicy = Loadable(lazy(() => import('./pages/public/legal/RefundPolicy')));
const ShippingPolicy = Loadable(lazy(() => import('./pages/public/legal/ShippingPolicy')));

// Customer Pages (Lazy Loaded)
const Account = Loadable(lazy(() => import('./pages/customer/Account')));
const CustomerOrders = Loadable(lazy(() => import('./pages/customer/Orders')));
const OrderDetail = Loadable(lazy(() => import('./pages/customer/OrderDetail')));
const CustomerInquiries = Loadable(lazy(() => import('./pages/customer/Inquiries')));
const CustomerSettings = Loadable(lazy(() => import('./pages/customer/Settings')));

// Admin Pages (Lazy Loaded)
const AdminDashboard = Loadable(lazy(() => import('./pages/admin/Dashboard')));
const AdminProducts = Loadable(lazy(() => import('./pages/admin/Products')));
const AdminProductForm = Loadable(lazy(() => import('./pages/admin/ProductForm')));
const AdminProductView = Loadable(lazy(() => import('./pages/admin/ProductView')));
const AdminOrders = Loadable(lazy(() => import('./pages/admin/Orders')));
const AdminOrderDetail = Loadable(lazy(() => import('./pages/admin/OrderDetail')));
const AdminSettings = Loadable(lazy(() => import('./pages/admin/Settings')));
const AdminQA = Loadable(lazy(() => import('./pages/admin/QA')));
const AdminCustomers = Loadable(lazy(() => import('./pages/admin/Customers')));
const AdminCustomerDetail = Loadable(lazy(() => import('./pages/admin/CustomerDetail')));
const AdminInquiries = Loadable(lazy(() => import('./pages/admin/Inquiries')));
const AdminPromo = Loadable(lazy(() => import('./pages/admin/Promo')));

/**
 * Route Configuration using React Router v6 createBrowserRouter
 * 
 * Approach: We use `createBrowserRouter` over the older `<BrowserRouter>` component
 * because it enables newer React Router data APIs (loaders, actions, fetchers) which 
 * will be extremely useful later when wiring up the actual backend data fetching and 
 * form submissions without needing excessive useEffect hooks.
 */
export const router = createBrowserRouter([
  {
    // Public Layout Wrapper
    element: <Layout />,
    errorElement: <NotFound />, // Catch errors within layout
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/contact', element: <Contact /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:slug', element: <ProductDetail /> }, // SEO friendly slug
      { path: '/cart', element: <Cart /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/forgot-password', element: <ForgotPassword /> },
      { path: '/legal/terms', element: <TermsOfService /> },
      { path: '/legal/privacy', element: <PrivacyPolicy /> },
      { path: '/legal/refund', element: <RefundPolicy /> },
      { path: '/legal/shipping', element: <ShippingPolicy /> },
      {
        path: '/account',
        element: <CustomerLayout />,
        children: [
          { index: true, element: <Account /> },
          { path: 'orders', element: <CustomerOrders /> },
          { path: 'orders/:orderId', element: <OrderDetail /> },
          { path: 'questions', element: <CustomerInquiries /> },
          { path: 'settings', element: <CustomerSettings /> },
        ],
      },
      { path: '*', element: <NotFound /> }, // Catch-all 404
    ],
  },
  {
    // Checkout gets its own isolated route (no global Navbar/Footer to prevent drop-off)
    path: '/checkout',
    element: <Checkout />,
  },
  {
    // Order Confirmation gets its own isolated route
    path: '/order-confirmation',
    element: <OrderConfirmation />,
  },
  {
    // Admin Panel Layout
    // TODO: Add route guard wrapper here (e.g. <RequireAuth allowedRoles={['admin']}>)
    path: '/admin',
    element: <AdminLayout />,
    children: [
      { index: true, element: <Navigate to="/admin/dashboard" replace /> },
      { path: 'dashboard', element: <AdminDashboard /> },
      { path: 'products', element: <AdminProducts /> },
      { path: 'products/new', element: <AdminProductForm /> },
      { path: 'products/:productId', element: <AdminProductView /> },
      { path: 'products/:productId/edit', element: <AdminProductForm /> },
      { path: 'orders', element: <AdminOrders /> },
      { path: 'orders/:orderId', element: <AdminOrderDetail /> },
      { path: 'qa', element: <AdminQA /> },
      { path: 'customers', element: <AdminCustomers /> },
      { path: 'customers/:customerId', element: <AdminCustomerDetail /> },
      { path: 'inquiries', element: <AdminInquiries /> },
      { path: 'promo', element: <AdminPromo /> },
      { path: 'settings', element: <AdminSettings /> },
    ],
  },
]);
