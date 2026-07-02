import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      <title>About Us | Z.A Graphics</title>
      <meta name="description" content="Learn about Z.A Graphics and our mission to empower businesses with reliable, top-tier print materials and seamless bulk ordering experiences." />
      
      {/* Hero Section */}
      <section className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl -z-10"></div>
        
        <div className="text-center mb-16 relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 mb-6 tracking-tight">
            Crafting Quality Prints<br className="hidden md:block" /> for Businesses
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed max-w-4xl mx-auto">
            At Z.A Graphics, we believe that your brand's physical presence should be as strong as its digital one. We specialize in high-volume, premium printing solutions.
          </p>
        </div>
        
        <div className="w-full h-80 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl relative group">
          <img 
            src="https://images.unsplash.com/photo-1621644727145-09bd292419a5?auto=format&fit=crop&q=80&w=1600" 
            alt="Z.A Graphics Factory" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/10 transition-colors duration-500"></div>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="bg-white rounded-3xl p-10 md:p-12 border border-gray-100 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-gray-50 rounded-full blur-2xl group-hover:bg-blue-50 transition-colors"></div>
            <h2 className="text-3xl font-black text-gray-900 mb-6 relative z-10">Our Story</h2>
            <div className="space-y-6 text-gray-600 font-medium text-lg relative z-10 leading-relaxed">
              <p>
                Founded with the vision to simplify bulk printing for enterprises, Z.A Graphics has grown from a small local shop to a full-scale printing facility.
              </p>
              <p>
                We understand that corporate printing requires precision, consistency, and speed. Our state-of-the-art machinery and dedicated quality assurance team ensure that every batch, whether it's 500 business cards or 10,000 flyers, meets the highest industry standards.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-600 rounded-3xl p-10 md:p-12 text-white shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center">
            <div className="absolute -left-8 -bottom-8 w-48 h-48 bg-blue-500 rounded-full blur-2xl"></div>
            <h2 className="text-3xl font-black mb-6 relative z-10">Our Mission</h2>
            <p className="text-blue-50 text-xl font-medium leading-relaxed relative z-10">
              To empower businesses with reliable, top-tier print materials that leave a lasting impression, backed by a seamless digital ordering experience. We strive to be the invisible force behind your brand's tangible success.
            </p>
            <div className="mt-10 relative z-10">
              <Link to="/products" className="inline-block bg-white text-blue-600 font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all">
                Explore Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Counters */}
      <section className="bg-gray-900 text-white py-24 my-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-gray-800">
            <div className="px-4 hover:scale-105 transition-transform">
              <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600 mb-3">15+</div>
              <div className="text-sm md:text-base text-gray-400 font-bold uppercase tracking-widest">Years Experience</div>
            </div>
            <div className="px-4 hover:scale-105 transition-transform">
              <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600 mb-3">50k+</div>
              <div className="text-sm md:text-base text-gray-400 font-bold uppercase tracking-widest">Orders Completed</div>
            </div>
            <div className="px-4 hover:scale-105 transition-transform">
              <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600 mb-3">100%</div>
              <div className="text-sm md:text-base text-gray-400 font-bold uppercase tracking-widest">Quality Guarantee</div>
            </div>
            <div className="px-4 hover:scale-105 transition-transform">
              <div className="text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-blue-600 mb-3">24/7</div>
              <div className="text-sm md:text-base text-gray-400 font-bold uppercase tracking-widest">Online Ordering</div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA Banner */}
      <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 border border-blue-100/50 rounded-3xl p-12 md:p-16 text-center shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -z-10"></div>
          
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6 tracking-tight">Ready to elevate your brand's print materials?</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto text-xl font-medium">Browse our catalog of premium products and start your bulk order today.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/products" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-lg">
              View All Products
            </Link>
            <Link to="/contact" className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 font-bold px-10 py-4 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all text-lg">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;