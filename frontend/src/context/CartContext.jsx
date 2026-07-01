import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('za_cart');
    return saved ? JSON.parse(saved) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('za_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, quantity) => {
    const qty = Math.max(quantity, product.minOrderQty || 1);
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + qty } : item);
      }
      return [...prev, { ...product, quantity: qty }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const validQty = Math.max(quantity, item.minOrderQty || 1);
        return { ...item, quantity: validQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));
  const clearCart = () => setCart([]);

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const gstRate = 0.18; // 18% mock GST
  const gst = subtotal * gstRate;
  const total = subtotal + gst;

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, clearCart, subtotal, gst, total, gstRate }}>
      {children}
    </CartContext.Provider>
  );
};
