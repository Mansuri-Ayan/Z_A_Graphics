import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Search, User, ShoppingBag, Menu } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { cart } = useCart();

  const isActive = (path) => location.pathname === path;
  const cartItemCount = cart.length;

  // Handle scroll effect for the floating nav
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled ? 'pt-2 px-4 sm:px-6 lg:px-8' : 'pt-6 px-4 sm:px-6 lg:px-8'
        }`}
      >
        <div 
          className={`mx-auto flex max-w-7xl items-center justify-between transition-all duration-500 ease-in-out ${
            scrolled 
              ? 'h-16 rounded-full bg-white/80 backdrop-blur-xl border border-gray-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] px-6' 
              : 'h-20 rounded-2xl bg-white/60 backdrop-blur-lg border border-gray-200/50 shadow-sm px-6'
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105" aria-label="Z.A Graphics home">
              <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue to-blue-400 shadow-lg shadow-brand-blue/30 text-sm font-black text-white">
                ZA
              </div>
              <span className="text-xl font-bold tracking-tight text-brand-black group-hover:text-brand-blue transition-colors duration-300">
                Z.A Graphics
              </span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/50 rounded-full p-1 border border-gray-200/50 shadow-sm" aria-label="Primary navigation">
            {[
              { path: '/', label: 'Home' },
              { path: '/products', label: 'Products' },
              { path: '/about', label: 'About' },
              { path: '/contact', label: 'Contact' },
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive(item.path) 
                    ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/20' 
                    : 'text-gray-600 hover:text-brand-black hover:bg-white shadow-none'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <Link to="/products" className="hidden sm:flex items-center justify-center size-10 rounded-full text-gray-600 transition-all duration-300 hover:bg-gray-100 hover:text-brand-black" aria-label="Search products">
              <Search className="w-5 h-5" />
            </Link>
            
            {/* User Icon */}
            <Link to="/login" className="hidden sm:flex items-center justify-center size-10 rounded-full text-gray-600 transition-all duration-300 hover:bg-gray-100 hover:text-brand-black">
              <User className="w-5 h-5" />
            </Link>
            
            {/* Cart Icon with Badge */}
            <Link to="/cart" className="relative flex items-center justify-center size-10 rounded-full text-gray-600 transition-all duration-300 hover:bg-gray-100 hover:text-brand-black">
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute 0 right-0 top-0 flex size-4 items-center justify-center rounded-full bg-brand-blue text-[10px] font-bold text-white shadow-sm animate-pulse">
                  {cartItemCount > 9 ? '9+' : cartItemCount}
                </span>
              )}
            </Link>

            <Link to="/admin" className="hidden lg:block ml-2">
              <span className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand-black px-6 py-2.5 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,0,0,0.15)]">
                <span className="absolute inset-0 bg-gradient-to-r from-gray-800 via-brand-black to-gray-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                <span className="relative z-10 text-sm font-bold">Dashboard</span>
              </span>
            </Link>

          </div>
        </div>
      </header>

    </>
  );
};

export default Navbar;
