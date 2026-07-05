import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../../mock-data/products.json';
import ProductCard from '../../../components/feature/ProductCard';

export const BestProducts = () => {
  // Use more products for a continuous scrolling effect
  const marqueeProducts = products.slice(0, 8);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f9ff] to-white py-24 lg:py-32">
      
      {/* Soft floating background orbs */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-cyan-50/50 blur-[120px] pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <span className="inline-block px-5 py-2 rounded-full bg-white/60 backdrop-blur-md border border-blue-50 text-blue-500 font-bold tracking-widest text-[11px] uppercase mb-6 shadow-sm shadow-blue-100/20">
          Handpicked Favorites
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#1e293b] leading-tight mb-6 tracking-tight">
          Trending <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Prints</span>
        </h1>
        <p className="text-[#64748b] text-lg lg:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
          Premium materials. Flawless execution. Discover the products that leading brands choose to make a lasting impression.
        </p>
      </div>

      {/* Auto-Scrolling Marquee Container */}
      <div className="relative w-full overflow-hidden pb-12 pt-4">
        {/* Left and Right Extra-Wide Soft Fades */}
        <div className="absolute top-0 left-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-[scroll_45s_linear_infinite] hover:[animation-play-state:paused]">
          {/* Double the products array to create the infinite loop effect */}
          {[...marqueeProducts, ...marqueeProducts].map((product, index) => (
            <div key={`${product.id}-${index}`} className="w-[200px] sm:w-[240px] md:w-[320px] lg:w-[340px] mx-3 md:mx-5 shrink-0 transition-transform duration-500 hover:-translate-y-3">
              <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-2 md:p-3 shadow-[0_20px_50px_rgba(15,23,42,0.06)] border border-slate-50 h-full transition-shadow duration-500 hover:shadow-[0_30px_60px_rgba(15,23,42,0.1)]">
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 flex justify-center relative z-20">
        <Link 
          to="/products"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-10 py-4 font-bold text-blue-600 shadow-[0_8px_30px_rgba(59,130,246,0.15)] transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(59,130,246,0.25)] border border-blue-50"
        >
          <span className="relative z-10 flex items-center gap-2">
            Explore Collection
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
          {/* Soft background pulse on hover inside button */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
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
