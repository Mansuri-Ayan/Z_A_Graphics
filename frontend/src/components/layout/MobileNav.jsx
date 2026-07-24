import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, User, Phone, Info, Heart, Settings, LogOut, ChevronRight, Package, MessageCircle, LayoutDashboard } from 'lucide-react';

const MobileNav = ({ isOpen, onClose }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path || (path !== '/' && location.pathname.startsWith(path));
  
  // Keep pointer events active during the close transition to absorb mobile ghost clicks
  const [isBlocking, setIsBlocking] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsBlocking(true);
    } else {
      document.body.style.overflow = '';
      const timer = setTimeout(() => setIsBlocking(false), 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const navItems = [
    { path: '/account', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/account/orders', label: 'My Orders', icon: Package },
    { path: '/account/favorites', label: 'My Favorites', icon: Heart },
    { path: '/account/questions', label: 'My Questions', icon: MessageCircle },
    { path: '/account/settings', label: 'Settings', icon: Settings },
    { path: '/contact', label: 'Contact Us', icon: Phone },
    { path: '/about', label: 'About Us', icon: Info },
  ];

  return (
    <div 
      className={`fixed inset-0 z-[100] md:hidden flex justify-end ${
        (isOpen || isBlocking) ? 'pointer-events-auto' : 'pointer-events-none'
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
        className={`relative flex flex-col w-[85%] max-w-sm h-full bg-white backdrop-blur-xl border-l border-gray-100 shadow-2xl transform transition-transform duration-300 ease-in-out z-10 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        
        {/* Header - User Profile */}
        <div className="bg-gray-50/80 px-6 pt-12 pb-6 border-b border-gray-100 relative">
          <button 
            onClick={(e) => { e.stopPropagation(); onClose(); }}
            className="absolute top-4 right-4 flex items-center justify-center size-8 rounded-full bg-white text-gray-500 hover:text-brand-black shadow-sm transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                <span className="text-xl font-black text-brand-black tracking-tighter">JD</span>
              </div>
              {/* VIP / Pro Badge */}
              <div className="absolute -bottom-1 -right-1 bg-brand-black text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border border-white shadow-sm flex items-center gap-0.5">
                Pro
              </div>
            </div>
            <div>
              <h2 className="text-lg font-black text-brand-black tracking-tight">John Doe</h2>
              <p className="text-xs text-gray-500 font-bold">john.doe@example.com</p>
            </div>
          </div>
        </div>

        {/* Links */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link 
                key={item.path}
                to={item.path} 
                className={`group flex items-center justify-between px-4 py-4 rounded-2xl text-sm font-bold transition-all duration-300 ${
                  active 
                    ? 'bg-gray-50 text-brand-black shadow-sm border border-gray-100' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-brand-black border border-transparent'
                }`}
                onClick={(e) => { e.stopPropagation(); onClose(); }}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-5 h-5 ${active ? 'text-brand-black' : 'text-gray-400 group-hover:text-brand-black'}`} />
                  {item.label}
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${active ? 'text-brand-black translate-x-1' : 'text-gray-300 group-hover:text-gray-400 group-hover:translate-x-1'}`} />
              </Link>
            );
          })}
        </nav>

        {/* Footer actions */}
        <div className="p-6 border-t border-gray-100 bg-white">
          <Link 
            to="/login" 
            className="flex items-center justify-center w-full bg-white text-red-500 px-4 py-4 rounded-2xl border border-red-100 shadow-sm font-bold hover:bg-red-50 hover:border-red-200 transition-all duration-300 gap-3"
            onClick={(e) => { e.stopPropagation(); onClose(); }}
          >
            <LogOut className="w-5 h-5" />
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;