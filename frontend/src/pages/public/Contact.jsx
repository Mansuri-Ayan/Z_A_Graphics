import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <title>Contact Us | Z.A Graphics</title>
      <meta name="description" content="Get in touch with Z.A Graphics. Reach our support team for any inquiries regarding your bulk printing orders, custom quotes, or technical assistance." />

      {/* Cinematic Contact Hero Section */}
      <section className="relative w-full pt-16 pb-20 md:pt-32 md:pb-40 lg:pt-40 lg:pb-48 flex items-center justify-center overflow-hidden bg-[#050505] rounded-b-[2rem] md:rounded-b-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] mb-6 md:mb-8">

        {/* Dynamic Abstract Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-20"></div>

          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-brand-black via-brand-black/90 to-brand-blue/10"></div>

          {/* Animated Glows */}
          <div className="absolute top-1/4 left-1/4 w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] bg-brand-blue/20 rounded-full mix-blend-screen filter blur-[100px] md:blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[15rem] h-[15rem] md:w-[25rem] md:h-[25rem] bg-purple-600/10 rounded-full mix-blend-screen filter blur-[80px] md:blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-20 right-20 hidden lg:block opacity-30">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="49" stroke="url(#paint0_linear)" strokeWidth="2" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" />
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3B82F6" />
                <stop offset="1" stopColor="#3B82F6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-black text-gray-200 uppercase tracking-widest">Support is Online</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 md:mb-6 tracking-tight text-white drop-shadow-lg">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-brand-blue">Together</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Have a question about a bulk order or need a custom quote? We're here to help bring your brand's vision to life.
          </p>
        </div>

        {/* Curved bottom edge decorative shadow */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </section>

      <section className="pb-10 md:pb-16 -mt-12 md:-mt-32 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-12">
          {/* Left: Contact Form */}
          <div className="w-full lg:w-1/2">
            {!submitted ? (
              <div className="bg-white/90 backdrop-blur-2xl rounded-3xl md:rounded-[2.5rem] border border-white/50 p-5 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] relative overflow-hidden">
                <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-gradient-to-br from-brand-blue/20 to-purple-400/20 rounded-full blur-[80px] -z-10"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-64 h-64 bg-gradient-to-tr from-blue-400/20 to-teal-400/20 rounded-full blur-[80px] -z-10"></div>

                <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-2 tracking-tight">Send an Inquiry</h2>
                <p className="text-sm md:text-base text-gray-500 font-medium mb-6 md:mb-10">We usually respond within 2-4 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-gray-700">Full Name *</label>
                      <input type="text" required className="w-full bg-gray-50/50 border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue hover:border-gray-300 transition-all font-medium placeholder:text-gray-400 shadow-sm" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-bold text-gray-700">Email Address *</label>
                      <input type="email" required className="w-full bg-gray-50/50 border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue hover:border-gray-300 transition-all font-medium placeholder:text-gray-400 shadow-sm" placeholder="you@company.com" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Phone Number</label>
                    <input type="tel" className="w-full bg-gray-50/50 border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue hover:border-gray-300 transition-all font-medium placeholder:text-gray-400 shadow-sm" placeholder="+1 (555) 000-0000" />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-700">Message *</label>
                    <textarea required rows="5" className="w-full bg-gray-50/50 border border-gray-200 rounded-2xl px-5 py-4 text-gray-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue hover:border-gray-300 transition-all font-medium resize-none placeholder:text-gray-400 shadow-sm" placeholder="Tell us about your printing needs, quantity, and timeline..."></textarea>
                  </div>

                  <button type="submit" className="group relative w-full bg-brand-black text-white font-black py-4 rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 transition-all overflow-hidden mt-4 flex items-center justify-center gap-3">
                    <span className="relative z-10">Send Message</span>
                    <svg className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    <div className="absolute inset-0 bg-brand-blue transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"></div>
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white/90 backdrop-blur-2xl rounded-[2.5rem] border border-white/50 p-12 text-center flex flex-col items-center justify-center h-full min-h-[600px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
                <div className="relative">
                  <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 text-white rounded-full flex items-center justify-center mb-8 shadow-lg relative z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-4 tracking-tight">Message Sent!</h2>
                <p className="text-xl text-gray-500 font-medium max-w-sm mx-auto mb-10 leading-relaxed">Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-4 px-10 rounded-2xl transition-all shadow-sm hover:shadow">
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Right: Info & Map */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 pt-4 md:pt-8 lg:pt-0">
            <div>
              <h2 className="text-2xl md:text-3xl font-black text-brand-black mb-4 md:mb-8">Get in Touch</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gray-50 rounded-2xl p-4 md:p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-black text-gray-900 text-base md:text-lg mb-1 md:mb-2">Our Office</h3>
                  <p className="text-sm md:text-base text-gray-600 font-medium">123 Printing Hub Road<br />Industrial Estate, Phase 1<br />Mumbai, MH 400001</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 md:p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-black text-gray-900 text-base md:text-lg mb-1 md:mb-2">Email Us</h3>
                  <p className="text-sm md:text-base text-gray-600 font-medium">support@zagraphics.com<br />sales@zagraphics.com</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 md:p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-black text-gray-900 text-base md:text-lg mb-1 md:mb-2">Call Us</h3>
                  <p className="text-sm md:text-base text-gray-600 font-medium">+91 98765 43210<br />Toll Free: 1800-123-456</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-4 md:p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-black text-gray-900 text-base md:text-lg mb-1 md:mb-2">Working Hours</h3>
                  <p className="text-sm md:text-base text-gray-600 font-medium">Monday - Saturday:<br />9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full flex-1 min-h-[300px] bg-gray-200 rounded-3xl flex flex-col items-center justify-center text-gray-500 border border-gray-200 overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" alt="Map Location" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale mix-blend-multiply" />
              <div className="relative z-10 flex flex-col items-center bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center mx-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="font-black text-gray-900 text-lg">Interactive Map</p>
                <p className="text-sm font-medium text-gray-500 mt-1">Google Maps Embed Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;