import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useLenis } from 'lenis/react';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Footer = () => {
  const location = useLocation();
  const lenis = useLenis();

  const handleSamePageScroll = (e, path) => {
    if (location.pathname === path) {
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-brand-black text-white pt-12 md:pt-24 relative overflow-hidden border-t border-white/5">

      {/* Background purely solid for a clean look */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

      {/* Top Section: Navigation & Info */}
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-8 mb-12 md:mb-24">

        {/* Left: Contact CTA */}
        <div className="md:w-1/2">
          <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 md:mb-6">Let's Talk</p>
          <a href="mailto:hello@zagraphics.com" className="group inline-flex items-center gap-3 md:gap-4 text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight text-white hover:text-gray-300 transition-colors duration-300">
            hello@zagraphics.com
            <div className="flex size-8 md:size-12 items-center justify-center rounded-full border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-300 shrink-0">
              <ArrowUpRight className="size-4 md:size-5 transition-transform duration-500 group-hover:rotate-45" />
            </div>
          </a>
        </div>

        {/* Right: Links & Address */}
        <div className="md:w-[60%] grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-8 justify-items-start md:justify-items-end">

          <div className="flex flex-col gap-4 md:gap-6">
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">Sitemap</h4>
            <Link to="/products" onClick={(e) => handleSamePageScroll(e, '/products')} className="text-sm md:text-lg font-medium text-gray-300 hover:text-white transition-colors">Products</Link>
            <Link to="/about" onClick={(e) => handleSamePageScroll(e, '/about')} className="text-sm md:text-lg font-medium text-gray-300 hover:text-white transition-colors">Our Story</Link>
            <Link to="/contact" onClick={(e) => handleSamePageScroll(e, '/contact')} className="text-sm md:text-lg font-medium text-gray-300 hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">Legal</h4>
            <Link to="/legal/refund" onClick={(e) => handleSamePageScroll(e, '/legal/refund')} className="text-sm md:text-lg font-medium text-gray-300 hover:text-white transition-colors">Refund Policy</Link>
            <Link to="/legal/shipping" onClick={(e) => handleSamePageScroll(e, '/legal/shipping')} className="text-sm md:text-lg font-medium text-gray-300 hover:text-white transition-colors">Shipping Info</Link>
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">Socials</h4>
            <a href="#" className="flex items-center gap-2 md:gap-3 text-sm md:text-lg font-medium text-gray-300 hover:text-white transition-colors group">
              <InstagramIcon className="size-4 md:size-5 group-hover:-translate-y-1 transition-transform" /> Instagram
            </a>
            <a href="#" className="flex items-center gap-2 md:gap-3 text-sm md:text-lg font-medium text-gray-300 hover:text-white transition-colors group">
              <TwitterIcon className="size-4 md:size-5 group-hover:-translate-y-1 transition-transform" /> Twitter
            </a>
            <a href="#" className="flex items-center gap-2 md:gap-3 text-sm md:text-lg font-medium text-gray-300 hover:text-white transition-colors group">
              <FacebookIcon className="size-4 md:size-5 group-hover:-translate-y-1 transition-transform" /> Facebook
            </a>
          </div>

        </div>
      </div>

    </div>

    {/* Massive Screen-Spanning Typography */}
    <div className="w-full flex justify-center overflow-hidden border-b border-white/5 pb-4 md:pb-8">
      <h1 className="text-[14.5vw] font-black tracking-tighter leading-[0.75] text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent select-none pointer-events-none">
        Z.A GRAPHICS
      </h1>
    </div>

    {/* Bottom Copyright Bar */}
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium text-gray-500">
      <p>© {new Date().getFullYear()} Z.A Graphics. All rights reserved.</p>
      <div className="flex items-center gap-6">
        <Link to="/legal/privacy" onClick={(e) => handleSamePageScroll(e, '/legal/privacy')} className="hover:text-white transition-colors">Privacy</Link>
        <Link to="/legal/terms" onClick={(e) => handleSamePageScroll(e, '/legal/terms')} className="hover:text-white transition-colors">Terms</Link>
        <p>Mumbai, MH</p>
      </div>
    </div>

  </footer>
  );
};

export default Footer;
