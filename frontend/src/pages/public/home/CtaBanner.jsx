import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const CtaBanner = ({ content }) => {
  return (
    <section className="relative bg-white py-20 sm:py-32 md:py-48 overflow-hidden flex items-center justify-center border-b border-gray-100">
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Minimal Eyebrow */}
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 md:mb-8">
          {content.eyebrow}
        </p>

        {/* Massive Typographic Headline */}
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tighter text-brand-black leading-[0.95] md:leading-[0.9] mb-8 md:mb-12 max-w-5xl">
          Let's make something <br className="hidden md:block" />
          <span className="font-serif italic text-gray-400 font-medium tracking-tight mt-1 md:mt-3 inline-block">
            worth holding on to.
          </span>
        </h2>

        {/* Refined Description */}
        <p className="text-base sm:text-lg md:text-2xl text-gray-500 font-medium max-w-2xl mb-10 md:mb-16 leading-relaxed">
          {content.description}
        </p>

        {/* Premium Button */}
        <Link 
          to={content.action.to} 
          className="group relative inline-flex items-center justify-center"
        >
          <div className="relative flex items-center gap-3 md:gap-4 rounded-full bg-brand-black px-8 py-4 md:px-12 md:py-5 text-base md:text-xl font-bold text-white transition-all duration-300 group-hover:scale-[1.03] group-hover:bg-gray-900 shadow-xl">
            <span>{content.action.label}</span>
            <div className="flex size-8 md:size-10 items-center justify-center rounded-full bg-white transition-transform duration-500 group-hover:rotate-45 shrink-0">
              <ArrowUpRight className="size-4 md:size-5 text-brand-black" />
            </div>
          </div>
        </Link>
        
      </div>
    </section>
  );
};
