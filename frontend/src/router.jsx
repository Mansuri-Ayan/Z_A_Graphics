import { createBrowserRouter, Navigate } from 'react-router-dom';

// Layouts
import Layout from './components/layout/Layout';
import CustomerLayout from './layouts/CustomerLayout';
import AdminLayout from './layouts/AdminLayout';

// Public Pages
import Home from './pages/public/Home';
import Products from './pages/public/Products';
import ProductDetail from './pages/public/ProductDetail';
import Cart from './pages/public/Cart';
import Checkout from './pages/public/Checkout';
import OrderConfirmation from './pages/public/OrderConfirmation';
import Login from './pages/public/Login';
import Register from './pages/public/Register';
import ForgotPassword from './pages/public/ForgotPassword';
import Contact from './pages/public/Contact';
import About from './pages/public/About';
import NotFound from './pages/public/NotFound';

// Customer Pages
import Account from './pages/customer/Account';
import CustomerOrders from './pages/customer/Orders';
import OrderDetail from './pages/customer/OrderDetail';

// Admin Pages
import AdminDashboard from './pages/admin/Dashboard';
import AdminProducts from './pages/admin/Products';
import AdminOrders from './pages/admin/Orders';
import AdminSettings from './pages/admin/Settings';
import AdminQA from './pages/admin/QA';
import AdminCustomers from './pages/admin/Customers';
import AdminInquiries from './pages/admin/Inquiries';
import AdminPromo from './pages/admin/Promo';

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
    // Customer Dashboard Layout
    // TODO: Add route guard wrapper here (e.g. <RequireAuth allowedRoles={['customer']}>)
    path: '/account',
    element: <CustomerLayout />,
    children: [
      { index: true, element: <Account /> },
      { path: 'orders', element: <CustomerOrders /> },
      { path: 'orders/:orderId', element: <OrderDetail /> }, // Dynamic order ID
    ],
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
      { path: 'orders', element: <AdminOrders /> },
      { path: 'qa', element: <AdminQA /> },
      { path: 'customers', element: <AdminCustomers /> },
      { path: 'inquiries', element: <AdminInquiries /> },
      { path: 'promo', element: <AdminPromo /> },
      { path: 'settings', element: <AdminSettings /> },
    ],
  },
]);
