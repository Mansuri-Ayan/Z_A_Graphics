import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../../mock-data/products.json';
import ProductCard from '../../../components/feature/ProductCard';

export const BestProducts = () => {
  // Use more products for a continuous scrolling effect
  const marqueeProducts = products.slice(0, 8);

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28 border-b border-gray-100">
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-brand-blue font-bold tracking-widest text-xs uppercase mb-4">
          Trending Now
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-black leading-tight mb-6">
          Our Best <span className="text-brand-blue">Sellers</span>
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Explore the premium prints and designs that our top corporate clients rely on. Elevate your brand with our best-in-class products.
        </p>
      </div>

      {/* Auto-Scrolling Marquee Container */}
      <div className="relative w-full overflow-hidden pb-8 pt-4">
        {/* Left and Right Gradient Fades for a seamless look */}
        <div className="absolute top-0 left-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-[scroll_40s_linear_infinite] hover:[animation-play-state:paused]">
          {/* Double the products array to create the infinite loop effect */}
          {[...marqueeProducts, ...marqueeProducts].map((product, index) => (
            <div key={`${product.id}-${index}`} className="w-[280px] md:w-[320px] mx-4 shrink-0 transition-transform duration-300 hover:-translate-y-2">
              <div className="bg-white rounded-3xl p-2 shadow-lg shadow-gray-200/50 border border-gray-100 h-full">
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 flex justify-center relative z-20">
        <Link 
          to="/products"
          className="inline-flex items-center justify-center rounded-xl bg-brand-blue px-10 py-4 text-base font-bold text-white shadow-xl shadow-brand-blue/30 transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:shadow-brand-blue/50"
        >
          Explore All Products
        </Link>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};
