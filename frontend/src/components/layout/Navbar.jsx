import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Search, User, ShoppingBag, LayoutDashboard, ChevronDown } from 'lucide-react';
import { useLenis } from 'lenis/react';
import logo from '../../assets/logo/logo.png';
import mockProducts from '../../mock-data/products.json';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const location = useLocation();
  const { cart } = useCart();

  const isActive = (path) => location.pathname === path;
  const cartItemCount = cart.length;
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on location change
  useEffect(() => {
    setIsProductMenuOpen(false);
  }, [location]);

  // Extract categories dynamically
  const categories = useMemo(() => {
    return [...new Set(mockProducts.map(p => p.category))];
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-in-out bg-white ${scrolled ? 'border-b border-gray-200 shadow-sm' : 'border-b border-gray-100'}`}
        onMouseLeave={() => setIsProductMenuOpen(false)}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between transition-all duration-300 ease-in-out px-4 sm:px-6 lg:px-8 ${scrolled
              ? 'h-14 md:h-16'
              : 'h-16 md:h-20'
            }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" onClick={(e) => { handleSamePageScroll(e, '/'); setIsProductMenuOpen(false); }} className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105" aria-label="Z.A Graphics home">
              <img src={logo} alt="Z.A Graphics Logo" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 h-full" aria-label="Primary navigation">
            <Link
              to="/"
              onClick={(e) => handleSamePageScroll(e, '/')}
              className={`text-sm tracking-wide transition-all duration-200 py-2 ${isActive('/') ? 'font-bold text-brand-black border-b-2 border-brand-black' : 'font-medium text-gray-500 hover:text-brand-black'}`}
            >
              Home
            </Link>
            
            {/* Products Dropdown Trigger */}
            <div className="h-full flex items-center relative">
              <button
                onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
                className={`flex items-center gap-1 text-sm tracking-wide transition-all duration-200 py-2 ${isActive('/products') || isProductMenuOpen ? 'font-bold text-brand-black' : 'font-medium text-gray-500 hover:text-brand-black'}`}
              >
                Products
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isProductMenuOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <Link
              to="/about"
              onClick={(e) => handleSamePageScroll(e, '/about')}
              className={`text-sm tracking-wide transition-all duration-200 py-2 ${isActive('/about') ? 'font-bold text-brand-black border-b-2 border-brand-black' : 'font-medium text-gray-500 hover:text-brand-black'}`}
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={(e) => handleSamePageScroll(e, '/contact')}
              className={`text-sm tracking-wide transition-all duration-200 py-2 ${isActive('/contact') ? 'font-bold text-brand-black border-b-2 border-brand-black' : 'font-medium text-gray-500 hover:text-brand-black'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Search Icon */}
            <Link to="/products" className="hidden sm:flex items-center justify-center p-2 text-gray-500 transition-colors hover:text-brand-black" aria-label="Search products">
              <Search className="w-5 h-5" />
            </Link>

            {/* User Icon */}
            <Link to="/login" className="hidden sm:flex items-center justify-center p-2 text-gray-500 transition-colors hover:text-brand-black">
              <User className="w-5 h-5" />
            </Link>

            {/* Cart Icon with Badge */}
            <Link to="/cart" className="relative flex items-center justify-center p-2 text-gray-500 transition-colors hover:text-brand-black">
              <ShoppingBag className="w-5 h-5" />
              {cartItemCount > 0 && (
                <span className="absolute right-0 top-0 flex size-4 items-center justify-center rounded-full bg-brand-black text-[10px] font-bold text-white shadow-sm">
                  {cartItemCount > 9 ? '9+' : cartItemCount}
                </span>
              )}
            </Link>

            {/* Mobile Admin Dashboard Icon */}
            <Link to="/admin" className="flex lg:hidden items-center justify-center size-8 md:size-10 rounded-sm bg-brand-black text-white ml-2">
              <LayoutDashboard className="w-4 h-4" />
            </Link>

            <Link to="/admin" className="hidden lg:block ml-4">
              <span className="inline-flex items-center justify-center bg-brand-black px-6 py-2.5 font-bold text-white text-sm rounded-sm hover:bg-gray-900 transition-colors">
                Dashboard
              </span>
            </Link>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <div 
          className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 overflow-hidden ${isProductMenuOpen ? 'max-h-[80vh] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 overflow-y-auto max-h-[75vh]">
            <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
              <h2 className="text-xl md:text-2xl font-bold text-brand-black">All Products</h2>
              <Link to="/products" className="text-sm font-semibold text-gray-500 hover:text-brand-black underline transition-colors">Shop All Categories</Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
              {categories.map(category => (
                <div key={category} className="flex flex-col">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-brand-black mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-brand-black rounded-full block"></span>
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {mockProducts.filter(p => p.category === category).slice(0, 4).map(product => (
                      <li key={product.id}>
                        <Link 
                          to={`/products/${product.id}`}
                          className="text-sm text-gray-500 hover:text-brand-black hover:translate-x-1 inline-block transition-all duration-200"
                        >
                          {product.name}
                        </Link>
                      </li>
                    ))}
                    {mockProducts.filter(p => p.category === category).length > 4 && (
                      <li>
                        <Link 
                          to={`/products`}
                          className="text-xs font-semibold text-gray-400 hover:text-brand-black transition-colors mt-2 inline-block"
                        >
                          + View More
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
