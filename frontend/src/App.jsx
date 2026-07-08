import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ToastProvider } from './components/ui/Toast/ToastProvider';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext';

function App() {
  return (
    <ToastProvider>
      <FavoritesProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </FavoritesProvider>
    </ToastProvider>
  );
}

export default App;
