import React from 'react';
import {
  ctaContent,
  heroContent,
  servicesContent,
  whyChooseUsContent,
} from '../../mock-data/homeContent';
import products from '../../mock-data/products.json';
import { CtaBanner } from './home/CtaBanner';
import { Hero } from './home/Hero';
import { ServicesStrip } from './home/ServicesStrip';
import { WhyChooseUs } from './home/WhyChooseUs';
import ProductCard from '../../components/feature/ProductCard';
import VideoShowcase from '../../components/feature/VideoShowcase';
import Testimonials from '../../components/feature/Testimonials';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProducts = products.slice(0, 12);

  return (
    <div className="w-full">
      <title>Z.A Graphics | Premium B2B Printing & Packaging Solutions</title>
      <meta name="description" content="Elevate your brand with Z.A Graphics. We specialize in premium business cards, corrugated shipping boxes, and custom marketing materials for businesses." />
      
      <Hero content={heroContent} />
      <ServicesStrip services={servicesContent} />

      {/* Featured Products Section */}
      <section className="bg-brand-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Top Sellers</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-black md:text-4xl">Featured Products</h2>
              <p className="mt-3 text-gray-500">Discover our most popular print products loved by businesses.</p>
            </div>
            <Link to="/products" className="text-sm font-bold text-blue-700 hover:text-blue-800">
              Explore all products <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link 
              to="/products" 
              className="inline-flex items-center justify-center rounded-xl bg-brand-blue px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-blue/30 transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:shadow-brand-blue/50"
            >
              View More Products
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs content={whyChooseUsContent} />
      <VideoShowcase />
      <Testimonials />
      <CtaBanner content={ctaContent} />
    </div>
  );
};

export default Home;
