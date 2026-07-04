import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, LogIn, ChevronRight } from 'lucide-react';
import logo from '../../assets/logo/logo.png';

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

  return (
    <div 
      className={`fixed inset-0 z-[100] md:hidden flex justify-end pointer-events-none ${
        isOpen ? 'pointer-events-auto' : ''
      }`}
    >
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-brand-black/40 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`} 
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Drawer */}
      <div 
        className={`relative flex flex-col w-[85%] max-w-sm h-full bg-white/95 backdrop-blur-xl border-l border-gray-200/50 shadow-[0_0_40px_rgba(0,0,0,0.1)] transform transition-transform duration-300 ease-in-out z-10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        
        {/* Header */}
        <div className="h-24 flex items-center justify-between px-6 border-b border-gray-200/50 pt-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Z.A Graphics Logo" className="h-10 w-auto object-contain" />
            <span className="text-xl font-bold tracking-tight text-brand-black">Z.A Graphics</span>
          </div>
          <button 
            onClick={onClose}
            className="flex items-center justify-center size-10 rounded-full text-gray-500 hover:text-brand-black hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
          {[
            { path: '/', label: 'Home' },
            { path: '/products', label: 'Products' },
            { path: '/about', label: 'About' },
            { path: '/contact', label: 'Contact' },
          ].map((item) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`group flex items-center justify-between px-4 py-4 rounded-xl text-base font-medium transition-all duration-300 ${
                isActive(item.path) 
                  ? 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-brand-black border border-transparent'
              }`}
              onClick={onClose}
            >
              {item.label}
              <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isActive(item.path) ? 'text-brand-blue translate-x-1' : 'text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1'}`} />
            </Link>
          ))}
        </nav>

        {/* Footer actions */}
        <div className="p-6 border-t border-gray-200/50 pb-12">
          <Link 
            to="/login" 
            className="flex items-center justify-center w-full bg-white text-brand-black px-4 py-4 rounded-xl border border-gray-200/50 shadow-sm font-bold hover:bg-gray-50 hover:shadow-md transition-all duration-300 gap-3"
            onClick={onClose}
          >
            <LogIn className="w-5 h-5 text-gray-500" />
            Sign In / Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;