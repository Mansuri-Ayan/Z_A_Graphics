import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Package, Phone, User, ShoppingCart } from 'lucide-react';
import { useLenis } from 'lenis/react';
import { useCart } from '../../context/CartContext';

const MobileBottomNav = () => {
  const location = useLocation();
  const { cart } = useCart();
  
  // Calculate total items in cart
  const cartItemCount = cart?.reduce((total, item) => total + item.quantity, 0) || 0;

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };
  const lenis = useLenis();

  const handleSamePageScroll = (e, path) => {
    if (isActive(path)) {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Products', path: '/products', icon: Package },
    { name: 'Contact', path: '/contact', icon: Phone },
    { name: 'Account', path: '/account', icon: User },
    { name: 'Cart', path: '/cart', icon: ShoppingCart },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around items-center h-14 px-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          const isCart = item.name === 'Cart';
          
          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={(e) => handleSamePageScroll(e, item.path)}
              className="relative flex flex-col items-center justify-center w-full h-full space-y-1 outline-none tap-highlight-transparent"
            >
              <div className="relative flex items-center justify-center">
                <Icon 
                  size={20} 
                  strokeWidth={active ? 2.5 : 2} 
                  className={`transition-colors duration-200 ${active ? 'text-blue-600' : 'text-gray-500'}`}
                />
                
                {/* Cart Notification Badge */}
                {isCart && cartItemCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 min-w-[18px] text-center rounded-full border-2 border-white shadow-sm">
                    {cartItemCount > 99 ? '99+' : cartItemCount}
                  </span>
                )}
              </div>
              
              <span 
                className={`text-[10px] transition-colors duration-200 ${
                  active ? 'text-blue-600 font-bold' : 'text-gray-500 font-medium'
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileBottomNav;
