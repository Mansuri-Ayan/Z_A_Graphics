import React from 'react';
import { HomeIcon } from './HomeIcons';

export const ServicesStrip = ({ services }) => {
  return (
    <section className="border-y border-gray-200 bg-brand-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 md:overflow-visible">
          {services.map((service) => (
            <article
              key={service.id}
              className="min-w-64 border-r border-gray-200 px-4 py-6 first:border-l md:min-w-0 md:px-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center text-blue-700">
                  <HomeIcon name={service.icon} />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-gray-900">{service.label}</h2>
                  <p className="mt-1 text-xs text-gray-500">{service.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
