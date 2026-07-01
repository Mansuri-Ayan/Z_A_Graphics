import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MobileNav = ({ isOpen, onClose, isActive }) => {
  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-30 md:hidden flex">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-brand-black/50 transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Drawer */}
      <div className="relative flex flex-col w-4/5 max-w-sm h-full bg-white shadow-xl animate-slide-in">
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200">
          <span className="text-xl font-bold text-brand-blue tracking-tight">Z.A Graphics</span>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-brand-black p-2 rounded-md"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          <Link 
            to="/" 
            className={`block px-3 py-3 rounded-md text-base font-medium ${isActive('/') ? 'bg-blue-50 text-brand-blue' : 'text-gray-700 hover:bg-gray-50'}`}
            onClick={onClose}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={`block px-3 py-3 rounded-md text-base font-medium ${isActive('/products') ? 'bg-blue-50 text-brand-blue' : 'text-gray-700 hover:bg-gray-50'}`}
            onClick={onClose}
          >
            Products
          </Link>
          <Link 
            to="/about" 
            className={`block px-3 py-3 rounded-md text-base font-medium ${isActive('/about') ? 'bg-blue-50 text-brand-blue' : 'text-gray-700 hover:bg-gray-50'}`}
            onClick={onClose}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`block px-3 py-3 rounded-md text-base font-medium ${isActive('/contact') ? 'bg-blue-50 text-brand-blue' : 'text-gray-700 hover:bg-gray-50'}`}
            onClick={onClose}
          >
            Contact
          </Link>
        </nav>

        {/* Footer actions */}
        <div className="p-4 border-t border-gray-200">
          <Link 
            to="/login" 
            className="flex items-center justify-center w-full bg-gray-50 text-brand-black px-4 py-3 rounded-md border border-gray-200 font-medium hover:bg-gray-100 transition-colors"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Sign In / Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;