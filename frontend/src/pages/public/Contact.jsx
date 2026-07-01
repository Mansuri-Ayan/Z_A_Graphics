import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-blue-900/40 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">Let's Build Together</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-medium">
            Have a question about a bulk order or need a custom quote? We're here to help bring your brand's vision to life.
          </p>
        </div>
      </section>

      <section className="py-16 -mt-10 relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Contact Form */}
          <div className="w-full lg:w-1/2">
            {!submitted ? (
              <div className="bg-white rounded-3xl border border-gray-100 p-8 md:p-10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2"></div>
                
                <h2 className="text-3xl font-black text-gray-900 mb-8">Send an Inquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name *</label>
                    <input type="text" required className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 hover:border-gray-300 transition-all font-medium" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                    <input type="email" required className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 hover:border-gray-300 transition-all font-medium" placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                    <input type="tel" className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 hover:border-gray-300 transition-all font-medium" placeholder="+91 98765 43210" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message *</label>
                    <textarea required rows="5" className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 hover:border-gray-300 transition-all font-medium resize-none" placeholder="Tell us about your project..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg hover:bg-blue-700 transition-all hover:-translate-y-0.5 mt-2">
                    Send Message
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-gray-100 p-10 text-center flex flex-col items-center justify-center h-full min-h-[500px] shadow-xl">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-4">Message Sent!</h2>
                <p className="text-lg text-gray-600 font-medium max-w-sm mx-auto mb-8">Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-bold py-3 px-8 rounded-xl transition-all">
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Right: Info & Map */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 pt-8 lg:pt-0">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-8">Get in Touch</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="font-black text-gray-900 text-lg mb-2">Our Office</h3>
                  <p className="text-gray-600 font-medium">123 Printing Hub Road<br />Industrial Estate, Phase 1<br />Mumbai, MH 400001</p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-black text-gray-900 text-lg mb-2">Email Us</h3>
                  <p className="text-gray-600 font-medium">support@zagraphics.com<br/>sales@zagraphics.com</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="font-black text-gray-900 text-lg mb-2">Call Us</h3>
                  <p className="text-gray-600 font-medium">+91 98765 43210<br/>Toll Free: 1800-123-456</p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-black text-gray-900 text-lg mb-2">Working Hours</h3>
                  <p className="text-gray-600 font-medium">Monday - Saturday:<br/>9:00 AM - 6:00 PM</p>
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