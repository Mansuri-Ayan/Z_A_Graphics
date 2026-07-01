import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-brand-black text-brand-white">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="grid gap-10 border-b border-gray-700 pb-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded bg-blue-600 text-sm font-black">ZA</span>
            <span className="text-xl font-bold">Z.A Graphics</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-gray-400">
            Thoughtful, dependable printing for businesses that need quality at scale.
          </p>
          <a href="mailto:hello@zagraphics.com" className="mt-6 inline-block text-sm font-semibold text-brand-white hover:text-blue-500">
            hello@zagraphics.com
          </a>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/products" className="hover:text-blue-500">All products</Link></li>
            <li><Link to="/about" className="hover:text-blue-500">Our story</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">Popular print</h2>
          <ul className="mt-5 space-y-3 text-sm text-gray-100">
            <li>Business cards</li>
            <li>Brochures</li>
            <li>Flyers</li>
            <li>Custom orders</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400">Visit us</h2>
          <address className="mt-5 text-sm not-italic leading-6 text-gray-400">
            Mumbai, Maharashtra<br />
            Mon-Sat, 9am-7pm
          </address>
          <Link to="/contact" className="mt-4 inline-block text-sm font-semibold text-blue-500 hover:text-blue-100">
            Get directions →
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-6 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Z.A Graphics. All rights reserved.</p>
        <p>Made for ideas worth printing.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
