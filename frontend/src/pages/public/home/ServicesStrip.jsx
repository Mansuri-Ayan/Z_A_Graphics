import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from './HomeIcons';

export const ServicesStrip = ({ services }) => {
  return (
    <section className="bg-brand-black border-y border-gray-900 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-800 relative z-10">
          
          {services.map((service) => (
            <Link
              to={`/products${service.label === 'Custom Print' ? '' : `?search=${encodeURIComponent(service.label)}`}`}
              key={service.id}
              className="group relative flex items-center gap-4 md:gap-6 px-4 py-8 md:px-6 md:py-10 transition-all duration-300 hover:bg-gray-900 cursor-pointer overflow-hidden block"
            >

              <div className="relative z-10 flex size-10 md:size-12 shrink-0 items-center justify-center text-gray-400 transition-colors duration-300 group-hover:text-white">
                <HomeIcon name={service.icon} className="size-6 md:size-8" />
              </div>
              
              <div className="relative z-10">
                <h2 className="text-sm md:text-base font-bold text-gray-200 tracking-tight transition-colors duration-300 group-hover:text-white uppercase">
                  {service.label}
                </h2>
                <p className="mt-1 md:mt-1.5 text-xs text-gray-500 font-medium">
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
