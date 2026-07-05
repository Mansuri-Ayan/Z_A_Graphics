import React, { useRef, useState, useEffect } from 'react';
import testimonialsData from '../../mock-data/testimonials.json';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const resumeTimeoutRef = useRef(null);

  const handlePause = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    setIsHovered(true);
  };

  const handleResume = () => {
    resumeTimeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 2000);
  };

  useEffect(() => {
    let animationId;
    const scrollContainer = scrollRef.current;
    
    const scroll = () => {
      if (scrollContainer && !isHovered) {
        scrollContainer.scrollLeft += 1; 
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => {
      cancelAnimationFrame(animationId);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [isHovered]);

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
    <section className="bg-white py-12 md:py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-20">
        {/* Editorial Header */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 md:px-4 md:py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-blue shadow-sm mb-4 md:mb-6 border border-blue-100">
            <span className="h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-brand-blue" />
            Client Feedback
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-brand-black tracking-tight max-w-2xl">
            Trusted by brands that care about the details.
          </h2>
        </div>
      </div>

      {/* Marquee Track Container */}
      <div className="relative w-full pb-6 md:pb-12 pt-4">
        {/* The scrolling track */}
        <div 
          ref={scrollRef}
          className="flex w-full overflow-x-auto no-scrollbar py-12 md:py-16 px-4 md:px-8"
          onMouseEnter={handlePause}
          onMouseLeave={handleResume}
          onTouchStart={handlePause}
          onTouchEnd={handleResume}
        >
          {marqueeData.map((testimonial, index) => {
            // Use modulo to cycle through backdrop styles based on original index
            const originalIndex = index % testimonialsData.length;
            
            return (
              <div 
                key={`${testimonial.id}-${index}`} 
                className="relative group w-[260px] sm:w-[300px] md:w-[360px] flex-shrink-0 mx-4 sm:mx-6 md:mx-8"
              >
                {/* Colorful Rotated Backdrop */}
                <div 
                  className={`absolute inset-0 rounded-3xl md:rounded-[2.5rem] transform transition-transform duration-500 group-hover:rotate-0 ${backdropStyles[originalIndex]}`}
                ></div>

                {/* Main White Card */}
                <div className="relative z-10 bg-white rounded-3xl md:rounded-[2.5rem] shadow-xl p-5 pt-12 pb-8 md:p-8 md:pt-16 md:pb-12 flex flex-col items-center text-center h-full border border-gray-100 transform transition-transform duration-500 group-hover:-translate-y-2">
                  
                  {/* Floating Avatar (Top Center) */}
                  <div className="absolute -top-8 md:-top-12 left-1/2 -translate-x-1/2">
                    <div className="size-16 md:size-24 rounded-full border-4 md:border-[6px] border-white shadow-md overflow-hidden bg-gray-100 flex items-center justify-center">
                      {testimonial.image ? (
                        <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-xl md:text-2xl font-black text-gray-400">
                          {testimonial.name.charAt(0)}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-0.5 md:mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-[10px] md:text-sm font-medium text-gray-500 italic mb-3 md:mb-4">
                    {testimonial.company}
                  </p>

                  {/* Star Ratings */}
                  <div className="flex items-center justify-center gap-1 mb-4 md:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`size-3 md:size-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-100 text-gray-200'}`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed text-xs md:text-sm">
                    {testimonial.text}
                  </p>

                  {/* Floating Bottom Star */}
                  {originalIndex === 1 && (
                    <div className="absolute -bottom-4 md:-bottom-6 left-1/2 -translate-x-1/2">
                      <div className="size-8 md:size-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center">
                        <Star className="size-4 md:size-6 text-yellow-400 fill-yellow-400" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
