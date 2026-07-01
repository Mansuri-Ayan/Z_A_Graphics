import React from 'react';
import { HomeIcon } from './HomeIcons';

export const WhyChooseUs = ({ content }) => {
  return (
    <section className="bg-brand-black py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500">
            {content.eyebrow}
          </span>
          <h2 className="mt-4 max-w-xl text-3xl font-bold tracking-tight text-brand-white md:text-4xl">
            {content.title}
          </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-gray-400 lg:justify-self-end">
            {content.description}
          </p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-md bg-gray-700 md:grid-cols-2 xl:grid-cols-4">
          {content.items.map((item) => (
            <article
              key={item.id}
              className="bg-brand-black p-6 transition-colors hover:bg-gray-900 md:p-8"
            >
              <div className="flex size-12 items-center justify-center rounded-full border border-gray-700 text-blue-500">
                <HomeIcon name={item.icon} />
              </div>
              <h3 className="mt-8 text-lg font-bold text-brand-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-gray-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
