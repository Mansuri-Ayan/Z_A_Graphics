import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';
import ProductCard from '../../../components/feature/ProductCard';

export const FeaturedProducts = ({ content, products }) => (
  <section className="bg-brand-white py-16 md:py-24 border-t border-gray-100">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between border-b border-gray-100 pb-6 mb-8 md:mb-12">
        <div className="max-w-2xl">
          <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">{content.eyebrow}</p>
          <h2 className="mt-2 md:mt-4 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-brand-black">{content.title}</h2>
          <p className="mt-2 md:mt-3 text-sm md:text-base text-gray-500">{content.description}</p>
        </div>
        <Link to="/products" className="text-sm font-bold text-gray-600 hover:text-brand-black hover:underline transition-colors mt-4 md:mt-0 inline-block">
          Explore all products <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
        {products.map((product) => (
          <div key={product.id} className="h-full">
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-center sm:hidden">
        <Link to="/products" className="w-full">
          <Button variant="outline" className="w-full py-3 border-gray-200 text-brand-black font-bold text-sm hover:bg-gray-50 transition-colors">
            View all products
          </Button>
        </Link>
      </div>
    </div>
  </section>
);
