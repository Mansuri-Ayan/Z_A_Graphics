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
    <section className="relative bg-[#050505] py-24 md:py-32 overflow-hidden">
      
      {/* Premium Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gray-300 shadow-sm mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse" />
              {content.eyebrow}
            </div>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.1]">
              {content.title}
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-gray-400 pb-2">
            {content.description}
          </p>
        </div>

        {/* Cohesive Dark Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6 lg:gap-8 auto-rows-[280px]">
          {content.items.map((item, index) => (
            <article
              key={item.id}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white/5 p-8 md:p-10 border border-white/10 transition-all duration-500 hover:bg-white/10 hover:border-brand-blue/30 hover:shadow-[0_0_40px_rgba(0,102,255,0.1)] ${bentoGridClasses[index]}`}
            >
              
              {/* Top Icon Area */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-blue group-hover:border-brand-blue">
                  <HomeIcon name={item.icon} className="size-6" />
                </div>
                
                {/* Index Number for an editorial touch */}
                <span className="text-5xl font-black text-white/5 select-none transition-colors duration-500 group-hover:text-white/10">
                  0{index + 1}
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="relative z-10 mt-auto">
                <h3 className="mb-3 text-2xl font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-brand-blue">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>

              {/* Decorative Large Background Icon (Watermark effect) */}
              <div className="absolute -bottom-10 -right-10 opacity-[0.03] text-white transform rotate-12 transition-all duration-700 group-hover:scale-110 group-hover:-rotate-6 group-hover:opacity-[0.08] pointer-events-none">
                <HomeIcon name={item.icon} className="size-64" />
              </div>

            </article>
          ))}
        </div>
        
      </div>
    </section>
  );
};
