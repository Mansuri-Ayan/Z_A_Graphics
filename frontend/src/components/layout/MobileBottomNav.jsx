import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Package, ShoppingCart, Menu } from 'lucide-react';
import { useLenis } from 'lenis/react';
import { useCart } from '../../context/CartContext';

const MobileBottomNav = ({ onOpenMenu }) => {
  const location = useLocation();
  const { cart } = useCart();
  
  // Calculate total items in cart
  const cartItemCount = cart?.reduce((total, item) => total + item.quantity, 0) || 0;

  const isActive = (path) => {
    if (!path) return false;
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
    { name: 'Home', path: '/', icon: Home, isAction: false },
    { name: 'Products', path: '/products', icon: Package, isAction: false },
    { name: 'Cart', path: '/cart', icon: ShoppingCart, isAction: false },
    { name: 'More', isAction: true, icon: Menu },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 pb-[env(safe-area-inset-bottom)]">
      <div className="flex justify-around items-center h-14 px-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = !item.isAction && isActive(item.path);
          const isCart = item.name === 'Cart';
          
          const content = (
            <>
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
            </>
          );

          if (item.isAction) {
            return (
              <button
                key={item.name}
                onClick={onOpenMenu}
                className="relative flex flex-col items-center justify-center w-full h-full space-y-1 outline-none tap-highlight-transparent cursor-pointer"
              >
                {content}
              </button>
            );
          }

          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={(e) => handleSamePageScroll(e, item.path)}
              className="relative flex flex-col items-center justify-center w-full h-full space-y-1 outline-none tap-highlight-transparent"
            >
              {content}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileBottomNav;
