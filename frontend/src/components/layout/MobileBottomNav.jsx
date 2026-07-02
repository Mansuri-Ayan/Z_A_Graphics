import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Package, ShoppingCart, User } from 'lucide-react';

const MobileBottomNav = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Products', path: '/products', icon: Package },
    { name: 'Cart', path: '/cart', icon: ShoppingCart },
    { name: 'Profile', path: '/account', icon: User },
  ];

  return (
    <div className="md:hidden fixed bottom-6 left-4 right-4 z-50">
      {/* Floating Glassmorphic Pill Container */}
      <div className="bg-white/90 backdrop-blur-xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-[2rem] px-2 py-2 flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <Link
              key={item.name}
              to={item.path}
              className="relative flex flex-col items-center justify-center w-full py-1 group outline-none"
            >
              {/* Animated Icon Pill Container */}
              <div 
                className={`relative flex items-center justify-center w-14 h-8 rounded-full transition-all duration-300 ${
                  active 
                    ? 'bg-blue-100 text-brand-blue scale-105' 
                    : 'bg-transparent text-gray-400 group-hover:text-gray-700'
                }`}
              >
                <Icon size={20} strokeWidth={active ? 2.5 : 2} className="relative z-10" />
              </div>
              
              {/* Text Label */}
              <span 
                className={`text-[10px] font-bold mt-1 transition-all duration-300 ${
                  active ? 'text-brand-blue' : 'text-gray-400'
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
