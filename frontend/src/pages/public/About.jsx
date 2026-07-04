import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      <title>About Us | Z.A Graphics</title>
      <meta name="description" content="Learn about Z.A Graphics and our mission to empower businesses with reliable, top-tier print materials and seamless bulk ordering experiences." />
      
      {/* Cinematic Hero Section */}
      <section className="relative w-full pt-32 pb-24 lg:pt-40 lg:pb-32 flex items-center justify-center overflow-hidden bg-[#050505] rounded-b-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] mb-16">
        {/* Abstract Cinematic Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1562240020-ce31ccb0fa7d?auto=format&fit=crop&q=80&w=2000" 
            alt="Printing Press Close-up" 
            className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-[#050505]/80 to-[#050505]"></div>
          {/* Glowing orbs for depth */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-[-100px] right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 transition-transform hover:scale-105 hover:bg-white/10 cursor-default">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-blue shadow-[0_0_10px_rgba(0,102,255,0.8)]"></span>
            </span>
            <span className="text-xs font-bold text-white uppercase tracking-widest">Premium Printing Agency</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-[1.1]">
            Crafting Tangible <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-brand-blue to-blue-600 drop-shadow-sm">
              Excellence.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed max-w-3xl mx-auto mb-12">
            We don't just print on paper; we engineer brand experiences. Z.A Graphics delivers high-volume, immaculate quality for the modern enterprise.
          </p>
          
          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex -space-x-4 hover:-space-x-2 transition-all duration-300 group cursor-default">
              <img className="w-14 h-14 rounded-full border-4 border-[#050505] object-cover relative z-40 transition-transform group-hover:scale-110" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Client Avatar 1" />
              <img className="w-14 h-14 rounded-full border-4 border-[#050505] object-cover relative z-30 transition-transform group-hover:scale-110 delay-75" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Client Avatar 2" />
              <img className="w-14 h-14 rounded-full border-4 border-[#050505] object-cover relative z-20 transition-transform group-hover:scale-110 delay-150" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="Client Avatar 3" />
              <div className="w-14 h-14 rounded-full border-4 border-[#050505] bg-gradient-to-br from-brand-blue to-blue-600 flex items-center justify-center text-white text-xs font-black relative z-10 shadow-lg shadow-brand-blue/30 transition-transform group-hover:scale-110 delay-200">
                +1k
              </div>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1 mb-1">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-sm text-gray-400 font-bold leading-tight">
                Trusted by over 1,000+<br />businesses worldwide.
              </p>
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
          <div className="md:col-span-12 lg:col-span-8 bg-white rounded-[2.5rem] p-10 md:p-14 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] transition-all duration-500">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full blur-3xl group-hover:scale-110 transition-transform duration-1000 -z-10"></div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100 mb-8">
                  <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Our Story</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-black text-brand-black mb-6 tracking-tight leading-tight">
                  From a local print shop to a <br className="hidden md:block" />
                  <span className="text-brand-blue">national powerhouse.</span>
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
          <div className="md:col-span-6 lg:col-span-4 rounded-[2.5rem] overflow-hidden relative group shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] transition-all duration-500 min-h-[300px]">
            <img src="https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?auto=format&fit=crop&w=800&q=80" alt="Printing Equipment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-white font-bold text-xl tracking-tight">Precision at scale.</p>
              <p className="text-gray-300 font-medium text-sm mt-1">State-of-the-art facilities</p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="md:col-span-6 lg:col-span-5 bg-brand-black rounded-[2.5rem] p-10 md:p-12 text-white shadow-[0_8px_30px_rgb(0,0,0,0.1)] relative overflow-hidden group">
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-brand-blue/20 rounded-full blur-3xl group-hover:bg-brand-blue/30 transition-colors duration-700"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md mb-8 self-start">
                <svg className="w-4 h-4 text-brand-blue" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A120.153 120.153 0 0119 5.924c-1.657 8.673-9.056 14.344-16.52 14.344A120.16 120.16 0 012 5.925c.34-.059 1.155-.183 2.155-.37l.4-.075c1.472-.28 3.522-.72 5.485-1.378l.056-.018a1 1 0 01.764 0l.44.148zM9 13l4-4-1.414-1.414L9 10.172l-1.586-1.586L6 10l3 3z" clipRule="evenodd"/></svg>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-200">Our Mission</span>
              </div>
              
              <h3 className="text-3xl font-black text-white mb-4 tracking-tight leading-tight">
                Empowering brands with tangible success.
              </h3>
              
              <p className="text-gray-400 font-medium leading-relaxed mb-8 flex-1">
                To empower businesses with reliable, top-tier print materials that leave a lasting impression, backed by a seamless digital ordering experience. We strive to be the invisible force behind your brand's physical presence.
              </p>
              
              <Link to="/products" className="inline-flex items-center gap-2 text-brand-blue font-bold hover:text-white transition-colors group/link mt-auto">
                Explore Our Work
                <svg className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
          </div>

          {/* Core Values Card */}
          <div className="md:col-span-12 lg:col-span-7 bg-gradient-to-br from-brand-blue to-blue-600 rounded-[2.5rem] p-10 md:p-12 text-white shadow-xl shadow-brand-blue/20 relative overflow-hidden group flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
            <div className="absolute -right-10 -top-10 w-64 h-64 bg-white/10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white mb-8 tracking-tight">Our Core Values</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm border border-white/10">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h4 className="font-bold text-white text-lg mb-2">Uncompromising Quality</h4>
                  <p className="text-blue-100 font-medium text-sm leading-relaxed">Every print run undergoes rigorous checks. We never settle for 'good enough'.</p>
                </div>
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 backdrop-blur-sm border border-white/10">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h4 className="font-bold text-white text-lg mb-2">Blazing Speed</h4>
                  <p className="text-blue-100 font-medium text-sm leading-relaxed">Modern business moves fast. Our optimized workflows ensure rapid turnarounds.</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Stats / Counters */}
      <section className="py-20 my-12 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-brand-black rounded-[3rem] shadow-2xl overflow-hidden mx-4 sm:mx-6 lg:mx-8">
          {/* Subtle animated glowing orbs in the background */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue/20 rounded-full blur-[100px] animate-pulse pointer-events-none"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        </div>
        
        <div className="relative z-10 py-16 px-8 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 divide-x-0 md:divide-x divide-gray-800">
            
            <div className="text-center group">
              <div className="inline-block relative">
                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2 transition-transform duration-500 group-hover:scale-110">
                  15+
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-brand-blue rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-gray-500 mt-4 group-hover:text-brand-blue transition-colors duration-300">Years Experience</div>
            </div>

            <div className="text-center group">
              <div className="inline-block relative">
                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2 transition-transform duration-500 group-hover:scale-110">
                  50k+
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-brand-blue rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-gray-500 mt-4 group-hover:text-brand-blue transition-colors duration-300">Orders Completed</div>
            </div>

            <div className="text-center group">
              <div className="inline-block relative">
                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2 transition-transform duration-500 group-hover:scale-110">
                  100%
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-brand-blue rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-gray-500 mt-4 group-hover:text-brand-blue transition-colors duration-300">Quality Guarantee</div>
            </div>

            <div className="text-center group">
              <div className="inline-block relative">
                <div className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-2 transition-transform duration-500 group-hover:scale-110">
                  24/7
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-brand-blue rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>
              <div className="text-sm font-bold uppercase tracking-widest text-gray-500 mt-4 group-hover:text-brand-blue transition-colors duration-300">Online Ordering</div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Vibrant Premium CTA Banner */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="relative rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl shadow-blue-900/20 group bg-gradient-to-br from-brand-blue via-blue-600 to-purple-600">
          {/* Glassmorphic decorative shapes */}
          <div className="absolute top-[-10%] right-[-5%] w-72 h-72 bg-white/10 backdrop-blur-2xl rounded-full border border-white/20 transform rotate-12 group-hover:rotate-45 group-hover:scale-110 transition-all duration-1000"></div>
          <div className="absolute bottom-[-15%] left-[-5%] w-96 h-96 bg-white/5 backdrop-blur-xl rounded-[4rem] border border-white/10 transform -rotate-12 group-hover:-rotate-45 group-hover:scale-110 transition-all duration-1000"></div>
          
          {/* Subtle Grid overlay for texture */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-8 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
                </span>
                <span className="text-xs font-black text-white uppercase tracking-[0.2em]">Let's Create Together</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                Ready to make your <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white drop-shadow-sm">
                  brand unforgettable?
                </span>
              </h2>
              
              <p className="text-blue-100 text-lg md:text-xl font-medium leading-relaxed">
                Join industry leaders who rely on Z.A Graphics for absolute precision and speed. Upgrade your physical marketing today.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-end gap-5 shrink-0 w-full lg:w-auto">
              <Link to="/products" className="group/btn relative inline-flex items-center justify-center gap-3 bg-white text-brand-blue font-black px-10 py-5 rounded-2xl shadow-[0_15px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                <span className="relative z-10">Explore Catalog</span>
                <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                <div className="absolute inset-0 bg-gray-50 transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </Link>
              
              <Link to="/contact" className="inline-flex items-center justify-center gap-3 bg-brand-black/20 hover:bg-brand-black/40 text-white border border-white/20 backdrop-blur-md font-bold px-10 py-5 rounded-2xl transition-all duration-300 hover:-translate-y-2">
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