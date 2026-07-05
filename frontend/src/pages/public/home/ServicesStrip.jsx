import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from './HomeIcons';

export const ServicesStrip = ({ services }) => {
  return (
    <section className="bg-[#050505] border-y border-white/5 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 relative z-10">
          
          {services.map((service) => (
            <Link
              to={`/products${service.label === 'Custom Print' ? '' : `?search=${encodeURIComponent(service.label)}`}`}
              key={service.id}
              className="group relative flex items-center gap-4 md:gap-6 px-4 py-8 md:px-6 md:py-12 transition-all duration-500 hover:bg-white/5 cursor-pointer overflow-hidden block"
            >
              {/* Subtle hover gradient inside the block */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/0 via-transparent to-brand-blue/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

              <div className="relative z-10 flex size-10 md:size-12 shrink-0 items-center justify-center text-gray-500 transition-colors duration-500 group-hover:text-white">
                <HomeIcon name={service.icon} className="size-6 md:size-8" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-base md:text-lg font-medium text-gray-300 tracking-tight transition-colors duration-300 group-hover:text-white">
                  {service.label}
                </h2>
                <p className="mt-1 md:mt-1.5 text-xs md:text-sm text-gray-500 font-medium">
                  {service.detail}
                </p>
              </div>
            </Link>
          ))}
          
        </div>
      </div>
    </section>
  );
};
