import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '../../../components/ui/Badge';
import { Button } from '../../../components/ui/Button';
import { LazyImage } from '../../../components/ui/LazyImage';

const productSlug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const FeaturedProducts = ({ content, products }) => (
  <section className="bg-brand-white py-16 md:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-blue-700">{content.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-black md:text-4xl">{content.title}</h2>
          <p className="mt-3 text-gray-500">{content.description}</p>
        </div>
        <Link to="/products" className="text-sm font-bold text-blue-700 hover:text-blue-800">
          Explore all products <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
        {products.map((product) => (
          <article key={product.id} className="group">
            <Link to={`/products/${productSlug(product.name)}`} className="block">
              <div className="relative overflow-hidden rounded-md bg-gray-100">
                <LazyImage
                  src={product.image}
                  alt={product.name}
                  className="aspect-square w-full transition-transform duration-500 group-hover:scale-105"
                />
                <Badge variant="min-order" className="absolute left-3 top-3 bg-brand-white">
                  Min {product.minOrderQty}
                </Badge>
              </div>
              <div className="flex items-start justify-between gap-4 pt-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{product.category}</p>
                  <h3 className="mt-1 font-bold text-brand-black transition-colors group-hover:text-blue-700">{product.name}</h3>
                </div>
                <p className="shrink-0 text-sm font-bold text-brand-black">₹{product.price.toFixed(2)}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center sm:hidden">
        <Link to="/products"><Button variant="outline" fullWidth>View all products</Button></Link>
      </div>
    </div>
  </section>
);
