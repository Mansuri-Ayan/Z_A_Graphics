import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import products from '../../../mock-data/products.json';
import ProductCard from '../../../components/feature/ProductCard';

export const BestProducts = () => {
  const marqueeProducts = products.slice(0, 8);
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const resumeTimeoutRef = useRef(null);

  const handlePause = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    setIsHovered(true);
  };

  const handleResume = () => {
    resumeTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 2000);
  };

  useEffect(() => {
    let animationId;
    const scrollContainer = scrollRef.current;

    const scroll = () => {
      if (scrollContainer && !isHovered) {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => {
      cancelAnimationFrame(animationId);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [isHovered]);

  return (
    <section
      className="relative overflow-hidden pt-20 pb-12 sm:pt-28 md:pb-24 lg:pt-36 lg:pb-32 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=2000')" }}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] z-0"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10 md:mb-20 text-center">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-brand-black leading-tight mb-4 md:mb-6 tracking-tight">
          Trending <span className="text-blue-900">Prints</span>
        </h1>
        <p className="text-gray-800 text-base lg:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
          Premium materials. Flawless execution. Discover the products that leading brands choose to make a lasting impression.
        </p>
      </div>

      {/* Auto-Scrolling Marquee Container */}
      <div className="relative z-10 w-full mb-6 mt-4">
        <div
          ref={scrollRef}
          className="flex w-full overflow-x-auto no-scrollbar py-8 px-4"
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
          onTouchStart={handlePause}
          onTouchEnd={handleResume}
        >
          {/* Double the products array to create the infinite loop effect */}
          {[...marqueeProducts, ...marqueeProducts].map((product, index) => (
            <div key={`${product.id}-${index}`} className="w-[160px] sm:w-[200px] md:w-[260px] lg:w-[280px] mx-2 md:mx-4 shrink-0 transition-transform duration-500 hover:-translate-y-2">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 md:mt-16 flex justify-center relative z-20">
        <Link
          to="/products"
          className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm bg-brand-black px-6 py-3 md:px-10 md:py-4 font-bold text-white transition-all duration-300 hover:bg-gray-800 text-sm md:text-base"
        >
          <span className="relative z-10 flex items-center gap-2">
            Explore Collection
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </span>
        </Link>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
