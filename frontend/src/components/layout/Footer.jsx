import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

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

const Footer = () => (
  <footer className="bg-[#050505] text-white pt-20 md:pt-32 relative overflow-hidden rounded-t-[2.5rem] md:rounded-t-[4rem]">

    {/* Decorative Top Glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(0,102,255,0.15),transparent_70%)] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

      {/* Top Section: Navigation & Info */}
      <div className="flex flex-col md:flex-row justify-between gap-16 md:gap-8 mb-24">

        {/* Left: Contact CTA */}
        <div className="md:w-1/2">
          <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-6">Let's Talk</p>
          <a href="mailto:hello@zagraphics.com" className="group inline-flex items-center gap-4 text-3xl md:text-5xl font-medium tracking-tight text-white hover:text-brand-blue transition-colors duration-500">
            hello@zagraphics.com
            <div className="flex size-10 md:size-14 items-center justify-center rounded-full bg-white/10 group-hover:bg-brand-blue transition-all duration-500 group-hover:rotate-45">
              <ArrowUpRight className="text-white size-5 md:size-6" />
            </div>
          </a>
        </div>

        {/* Right: Links & Address */}
        <div className="md:w-1/2 flex flex-col sm:flex-row justify-between md:justify-end gap-12 md:gap-24">

          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">Sitemap</h4>
            <Link to="/products" className="text-lg font-medium text-gray-300 hover:text-white transition-colors">Products</Link>
            <Link to="/about" className="text-lg font-medium text-gray-300 hover:text-white transition-colors">Our Story</Link>
            <Link to="/contact" className="text-lg font-medium text-gray-300 hover:text-white transition-colors">Contact</Link>
          </div>

          <div className="flex flex-col gap-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500">Socials</h4>
            <a href="#" className="flex items-center gap-3 text-lg font-medium text-gray-300 hover:text-white transition-colors group">
              <InstagramIcon className="size-5 group-hover:-translate-y-1 transition-transform" /> Instagram
            </a>
            <a href="#" className="flex items-center gap-3 text-lg font-medium text-gray-300 hover:text-white transition-colors group">
              <TwitterIcon className="size-5 group-hover:-translate-y-1 transition-transform" /> Twitter
            </a>
            <a href="#" className="flex items-center gap-3 text-lg font-medium text-gray-300 hover:text-white transition-colors group">
              <FacebookIcon className="size-5 group-hover:-translate-y-1 transition-transform" /> Facebook
            </a>
          </div>

        </div>
      </div>

    </div>

    {/* Massive Screen-Spanning Typography */}
    <div className="w-full flex justify-center overflow-hidden border-b border-white/10 pb-4">
      <h1 className="text-[15vw] font-black tracking-tighter leading-[0.75] text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/0 select-none pointer-events-none">
        Z.A GRAPHICS
      </h1>
    </div>

    {/* Bottom Copyright Bar */}
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium text-gray-500">
      <p>© {new Date().getFullYear()} Z.A Graphics. All rights reserved.</p>
      <div className="flex items-center gap-6">
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <a href="#" className="hover:text-white transition-colors">Terms</a>
        <p>Mumbai, MH</p>
      </div>
    </div>

  </footer>
);

export default Footer;
