import React from 'react';
import { HomeIcon } from './HomeIcons';

export const WhyChooseUs = ({ content }) => {
  // Define bento box grid positions
  const bentoGridClasses = [
    "md:col-span-2 md:row-span-1", // Bulk Pricing (Wide)
    "md:col-span-1 md:row-span-2", // Turnaround (Tall)
    "md:col-span-1 md:row-span-1", // Quality (Square)
    "md:col-span-1 md:row-span-1", // Uploads (Square)
  ];

  return (
    <section className="relative bg-gray-50 py-16 md:py-24 lg:py-32 overflow-hidden border-t border-gray-100">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-10 md:mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-200 border border-gray-300 px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-600 mb-4 md:mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-black" />
              {content.eyebrow}
            </div>
            <h2 className="text-3xl font-black tracking-tight text-brand-black md:text-5xl lg:text-6xl leading-[1.1]">
              {content.title}
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-lg leading-relaxed text-gray-500 pb-2">
            {content.description}
          </p>
        </div>

        {/* Premium Light Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 sm:gap-6 lg:gap-8 auto-rows-[240px] md:auto-rows-[280px]">
          {content.items.map((item, index) => (
            <article
              key={item.id}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[1.5rem] md:rounded-[2rem] bg-white p-6 sm:p-8 md:p-10 border border-gray-200 transition-all duration-500 hover:shadow-xl hover:border-gray-300 ${bentoGridClasses[index]}`}
            >
              
              {/* Top Icon Area */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="flex size-10 md:size-14 items-center justify-center rounded-xl md:rounded-2xl bg-gray-50 border border-gray-100 text-brand-black transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-black group-hover:text-white">
                  <HomeIcon name={item.icon} className="size-5 md:size-6" />
                </div>
                
                {/* Index Number for an editorial touch */}
                <span className="text-4xl md:text-5xl font-black text-gray-100 select-none transition-colors duration-500 group-hover:text-gray-200">
                  0{index + 1}
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 mt-auto pt-8">
                <h3 className="mb-2 md:mb-3 text-xl md:text-2xl font-bold tracking-tight text-brand-black transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-gray-500 line-clamp-3 md:line-clamp-none">
                  {item.description}
                </p>
              </div>

              {/* Decorative Large Background Icon (Watermark effect) */}
              <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 opacity-[0.02] text-brand-black transform rotate-12 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-6 group-hover:opacity-[0.04] pointer-events-none">
                <HomeIcon name={item.icon} className="size-40 md:size-64" />
              </div>

            </article>
          ))}
        </div>
        
      </div>
    </section>
  );
};
