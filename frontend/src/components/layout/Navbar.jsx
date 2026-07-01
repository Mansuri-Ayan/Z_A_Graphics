import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileNav from './MobileNav';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { cart } = useCart();

  const isActive = (path) => location.pathname === path;
  const cartItemCount = cart.length;

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-gray-200 bg-brand-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3" aria-label="Z.A Graphics home">
              <span className="flex size-9 items-center justify-center rounded bg-brand-black text-sm font-black text-brand-white">ZA</span>
              <span className="text-lg font-bold tracking-tight text-brand-black">Z.A Graphics</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            <Link 
              to="/" 
              className={`text-sm font-semibold transition-colors ${isActive('/') ? 'text-brand-blue' : 'text-gray-700 hover:text-brand-blue'}`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`text-sm font-semibold transition-colors ${isActive('/products') ? 'text-brand-blue' : 'text-gray-700 hover:text-brand-blue'}`}
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-semibold transition-colors ${isActive('/about') ? 'text-brand-blue' : 'text-gray-700 hover:text-brand-blue'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-semibold transition-colors ${isActive('/contact') ? 'text-brand-blue' : 'text-gray-700 hover:text-brand-blue'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search Icon */}
            <Link to="/products" className="hidden text-gray-700 transition-colors hover:text-brand-blue sm:block" aria-label="Search products">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
            
            {/* User Icon */}
            <Link to="/login" className="text-gray-700 hover:text-brand-blue transition-colors hidden sm:block">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
            
            {/* Cart Icon with Badge */}
            <Link to="/cart" className="text-gray-700 hover:text-brand-blue transition-colors relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-blue-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartItemCount > 9 ? '9+' : cartItemCount}
                </span>
              )}
            </Link>

            <Link to="/contact" className="hidden lg:block ml-2">
              <span className="inline-flex min-h-10 items-center rounded-md bg-blue-600 px-4 text-sm font-semibold text-brand-white transition-colors hover:bg-blue-700">
                Get a quote
              </span>
            </Link>

            {/* Mobile Menu Hamburger */}
            <button 
              className="md:hidden text-gray-700 hover:text-brand-blue transition-colors ml-1"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNav 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        isActive={isActive} 
      />
    </>
  );
};

export default Navbar;
