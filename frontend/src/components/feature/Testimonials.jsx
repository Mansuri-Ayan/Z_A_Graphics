import React from 'react';
import testimonialsData from '../../mock-data/testimonials.json';
import { Star } from 'lucide-react';

const Testimonials = () => {
  // Define backdrop styles for the stacked card effect based on index
  const backdropStyles = [
    "bg-blue-600 rotate-[-8deg]", 
    "bg-green-500 rotate-[8deg]", 
    "bg-teal-500 rotate-[-8deg]"
  ];

  // We duplicate the data multiple times to ensure the marquee is wide enough 
  // to scroll seamlessly on all screen sizes.
  const marqueeData = [...testimonialsData, ...testimonialsData, ...testimonialsData, ...testimonialsData];

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      
      {/* Inline styles for the marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        {/* Editorial Header */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-blue shadow-sm mb-6 border border-blue-100">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
            Client Feedback
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-black tracking-tight max-w-2xl">
            Trusted by brands that care about the details.
          </h2>
        </div>
      </div>

      {/* Marquee Track Container */}
      <div className="relative flex overflow-hidden w-full py-12">
        {/* The scrolling track */}
        <div className="flex w-max animate-marquee gap-8 md:gap-16 px-4 md:px-8">
          {marqueeData.map((testimonial, index) => {
            // Use modulo to cycle through backdrop styles based on original index
            const originalIndex = index % testimonialsData.length;
            
            return (
              <div 
                key={`${testimonial.id}-${index}`} 
                className="relative group w-[320px] md:w-[380px] flex-shrink-0 mt-8"
              >
                {/* Colorful Rotated Backdrop */}
                <div 
                  className={`absolute inset-0 rounded-[2.5rem] transform transition-transform duration-500 group-hover:rotate-0 ${backdropStyles[originalIndex]}`}
                ></div>

                {/* Main White Card */}
                <div className="relative z-10 bg-white rounded-[2.5rem] shadow-xl p-8 pt-16 pb-12 flex flex-col items-center text-center h-full border border-gray-100 transform transition-transform duration-500 group-hover:-translate-y-2">
                  
                  {/* Floating Avatar (Top Center) */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                    <div className="size-24 rounded-full border-[6px] border-white shadow-md overflow-hidden bg-gray-100 flex items-center justify-center">
                      {testimonial.image ? (
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-2xl font-black text-gray-400">
                          {testimonial.name.charAt(0)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm font-medium text-gray-500 italic mb-4">
                    {testimonial.company}
                  </p>

                  {/* Star Ratings */}
                  <div className="flex items-center justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`size-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-100 text-gray-200'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {testimonial.text}
                  </p>

                  {/* Floating Bottom Star */}
                  {originalIndex === 1 && (
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                      <div className="size-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center">
                        <Star className="size-6 text-yellow-400 fill-yellow-400" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
