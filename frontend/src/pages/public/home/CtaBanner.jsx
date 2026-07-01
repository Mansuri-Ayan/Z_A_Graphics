import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';

export const CtaBanner = ({ content }) => {
  return (
    <section className="bg-blue-600 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          <div className="absolute right-0 top-0 h-32 w-32 rounded-full border border-blue-100 opacity-50" aria-hidden="true" />
          <div className="relative flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-100">{content.eyebrow}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-white md:text-5xl">
                {content.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-blue-50">
                {content.description}
              </p>
            </div>

            <Link to={content.action.to} className="md:shrink-0">
              <Button variant="secondary" size="lg" className="w-full md:w-auto">
                {content.action.label}
                <span aria-hidden="true">→</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
