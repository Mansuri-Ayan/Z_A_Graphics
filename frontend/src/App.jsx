import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ToastProvider } from './components/ui/Toast/ToastProvider';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ToastProvider>
  );
}

export default App;
