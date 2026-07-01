import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';
import heroImage from '../../../assets/home-hero-print.png';

export const Hero = ({ content }) => {
  return (
    <section className="overflow-hidden bg-gray-50">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            {content.eyebrow}
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-brand-black sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-700 md:text-lg">
            {content.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to={content.primaryAction.to} className="sm:w-auto">
              <Button size="lg" fullWidth>
                {content.primaryAction.label}
                <span aria-hidden="true">→</span>
              </Button>
            </Link>
            <Link to={content.secondaryAction.to} className="sm:w-auto">
              <Button variant="ghost" size="lg" fullWidth>
                {content.secondaryAction.label}
              </Button>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-gray-200 pt-6">
            {content.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-xl font-bold text-brand-black">{stat.value}</div>
                <div className="mt-1 text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-blue-100" aria-hidden="true" />
          <div className="absolute -bottom-8 -right-8 h-32 w-32 bg-blue-600" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-md bg-brand-white p-2 shadow-xl">
            <img
              src={heroImage}
              alt="A curated arrangement of premium printed business materials"
              className="aspect-square w-full rounded object-cover sm:aspect-video lg:aspect-square"
            />
          </div>
          <div className="absolute bottom-6 left-6 rounded-md bg-brand-white px-4 py-3 shadow-md">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Bulk orders from</p>
            <p className="mt-1 text-lg font-bold text-brand-black">500 pieces</p>
          </div>
        </div>
      </div>
    </section>
  );
};
