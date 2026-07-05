import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLenis } from 'lenis/react';
import { useLocation } from 'react-router-dom';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lenis = useLenis();
  const location = useLocation();

  useEffect(() => {
    // Respect user's preferences for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return; // Completely disable back-to-top feature if they prefer reduced motion

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const isProductPage = location.pathname.startsWith('/products/') && location.pathname !== '/products';
  const bottomClass = isProductPage 
    ? "bottom-[calc(9.5rem+env(safe-area-inset-bottom))] md:bottom-6" 
    : "bottom-[calc(4.5rem+env(safe-area-inset-bottom))] md:bottom-6";

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-40 p-3 bg-white text-gray-700 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] rounded-full transition-all duration-300 transform border border-gray-100 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      } ${bottomClass} left-4 md:left-6 group`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
};

export default BackToTop;
