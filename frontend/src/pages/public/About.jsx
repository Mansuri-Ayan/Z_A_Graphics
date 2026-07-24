import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      <title>About Us | Z.A Graphics</title>
      <meta name="description" content="Learn about Z.A Graphics and our mission to empower businesses with reliable, top-tier print materials and seamless bulk ordering experiences." />
      
      {/* Premium Minimal Hero Section */}
      <section className="relative w-full pt-32 pb-24 lg:pt-48 lg:pb-40 flex items-center justify-center overflow-hidden bg-gray-50 border-b border-gray-100 mb-16">
        
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-white rounded-full blur-[100px] opacity-60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8 md:mb-10 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-black"></span>
            </span>
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Premium Printing Agency</span>
          </div>
          
          {/* Massive Typographic Headline */}
          <h1 className="text-5xl sm:text-7xl lg:text-[7rem] font-black text-brand-black mb-6 md:mb-8 tracking-tighter leading-[0.95] max-w-5xl">
            Crafting Tangible <br className="hidden md:block" />
            <span className="font-serif italic text-gray-400 font-medium mt-1 md:mt-2 inline-block tracking-tight">
              Excellence.
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-500 font-medium leading-relaxed max-w-3xl mx-auto mb-10 md:mb-12">
            We don't just print on paper; we engineer brand experiences. Z.A Graphics delivers immaculate quality for the modern enterprise.
          </p>
          
          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="flex -space-x-3 hover:-space-x-1 transition-all duration-300 group cursor-default">
              <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-gray-50 object-cover relative z-40 transition-transform group-hover:scale-105" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Client 1" />
              <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-gray-50 object-cover relative z-30 transition-transform group-hover:scale-105 delay-75" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Client 2" />
              <img className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-gray-50 object-cover relative z-20 transition-transform group-hover:scale-105 delay-150" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Client 3" />
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-gray-50 bg-brand-black flex items-center justify-center text-white text-[10px] md:text-xs font-bold relative z-10 shadow-sm transition-transform group-hover:scale-105 delay-200">
                +1k
              </div>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 mb-1">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className="w-3 h-3 md:w-4 md:h-4 text-brand-black" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">Trusted globally</p>
            </div>
          </div>
          
        </div>
      </section>

      {/* Story & Mission Bento Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-brand-black tracking-tight mb-6">
            Our Journey & Purpose
          </h2>
          <p className="text-xl text-gray-500 font-medium leading-relaxed">
            Discover the passion, precision, and principles that drive Z.A Graphics to deliver excellence every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 auto-rows-[minmax(300px,auto)]">
          
          {/* Story Card - Large */}
          <div className="md:col-span-12 lg:col-span-8 bg-white rounded-[2rem] p-10 md:p-14 border border-gray-200 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all duration-500">
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 mb-8">
                  <span className="w-1.5 h-1.5 bg-brand-black rounded-full"></span>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Our Story</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-brand-black mb-6 tracking-tight leading-tight">
                  From a local print shop to a <br className="hidden md:block" />
                  <span className="font-serif italic text-gray-400 font-medium tracking-tight">national powerhouse.</span>
                </h3>
                
                <div className="space-y-4 text-gray-500 font-medium text-lg leading-relaxed max-w-2xl">
                  <p>
                    Founded with the vision to simplify bulk printing for enterprises, Z.A Graphics has grown from a small, passionate team to a full-scale industrial printing facility.
                  </p>
                  <p>
                    We understand that corporate printing requires precision, consistency, and absolute speed. Our state-of-the-art machinery and rigorous QA team ensure that every batch meets the uncompromising standards of modern business.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual/Image Card */}
          <div className="md:col-span-6 lg:col-span-4 rounded-[2rem] overflow-hidden relative group shadow-sm hover:shadow-xl transition-all duration-500 min-h-[300px]">
            <img src="https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?auto=format&fit=crop&w=800&q=80" alt="Printing Equipment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white font-bold text-xl tracking-tight">Precision at scale.</p>
              <p className="text-gray-300 font-medium text-sm mt-1">State-of-the-art facilities</p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="md:col-span-6 lg:col-span-5 bg-brand-black rounded-[2rem] p-10 md:p-12 text-white shadow-xl relative overflow-hidden group">
            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-8 self-start">
                <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-200">Our Mission</span>
              </div>
              
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight leading-tight">
                Empowering brands with tangible success.
              </h3>
              
              <p className="text-gray-400 font-medium leading-relaxed mb-8 flex-1">
                To empower businesses with reliable, top-tier print materials that leave a lasting impression, backed by a seamless digital ordering experience. We strive to be the invisible force behind your brand's physical presence.
              </p>
              
              <Link to="/products" className="inline-flex items-center gap-2 text-white font-bold hover:text-gray-300 transition-colors group/link mt-auto">
                Explore Our Work
                <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
          </div>

          {/* Core Values Card */}
          <div className="md:col-span-12 lg:col-span-7 bg-gray-50 border border-gray-200 rounded-[2rem] p-10 md:p-12 text-brand-black shadow-sm relative overflow-hidden group flex flex-col justify-center">
            
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-brand-black mb-8 tracking-tight">Our Core Values</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-4 shadow-sm">
                    <svg className="w-5 h-5 text-brand-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h4 className="font-bold text-brand-black text-lg mb-2">Uncompromising Quality</h4>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed">Every print run undergoes rigorous checks. We never settle for 'good enough'.</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-4 shadow-sm">
                    <svg className="w-5 h-5 text-brand-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h4 className="font-bold text-brand-black text-lg mb-2">Blazing Speed</h4>
                  <p className="text-gray-500 font-medium text-sm leading-relaxed">Modern business moves fast. Our optimized workflows ensure rapid turnarounds.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Stats / Counters */}
      <section className="py-20 md:py-24 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            
            <div className="text-center group pt-6 md:pt-0">
              <div className="text-5xl md:text-6xl lg:text-7xl font-black text-brand-black mb-2 transition-transform duration-500 group-hover:scale-105">
                15+
              </div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 mt-3 md:mt-4 group-hover:text-brand-black transition-colors duration-300">Years Experience</div>
            </div>

            <div className="text-center group pt-6 md:pt-0">
              <div className="text-5xl md:text-6xl lg:text-7xl font-black text-brand-black mb-2 transition-transform duration-500 group-hover:scale-105">
                50k+
              </div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 mt-3 md:mt-4 group-hover:text-brand-black transition-colors duration-300">Orders Completed</div>
            </div>

            <div className="text-center group pt-6 md:pt-0">
              <div className="text-5xl md:text-6xl lg:text-7xl font-black text-brand-black mb-2 transition-transform duration-500 group-hover:scale-105">
                100%
              </div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 mt-3 md:mt-4 group-hover:text-brand-black transition-colors duration-300">Quality Guarantee</div>
            </div>

            <div className="text-center group pt-6 md:pt-0">
              <div className="text-5xl md:text-6xl lg:text-7xl font-black text-brand-black mb-2 transition-transform duration-500 group-hover:scale-105">
                24/7
              </div>
              <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 mt-3 md:mt-4 group-hover:text-brand-black transition-colors duration-300">Online Ordering</div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Premium CTA Banner */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="relative rounded-[2rem] p-12 md:p-20 overflow-hidden shadow-2xl group bg-brand-black">
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 md:py-2 rounded-full bg-white/10 border border-white/10 mb-6 md:mb-8 shadow-sm">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                </span>
                <span className="text-[10px] font-bold text-white uppercase tracking-widest">Let's Create Together</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight leading-[1.1]">
                Ready to make your <br className="hidden md:block" />
                <span className="font-serif italic text-gray-400 font-medium mt-1 md:mt-2 inline-block">
                  brand unforgettable?
                </span>
              </h2>
              
              <p className="text-gray-400 text-base md:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                Join industry leaders who rely on Z.A Graphics for absolute precision and speed. Upgrade your physical marketing today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-end gap-4 shrink-0 w-full lg:w-auto mt-4 lg:mt-0">
              <Link to="/products" className="group/btn relative inline-flex items-center justify-center gap-3 bg-white text-brand-black font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300">
                <span>Explore Catalog</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
              
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-brand-black hover:bg-gray-900 text-white border border-gray-700 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:border-gray-500">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;