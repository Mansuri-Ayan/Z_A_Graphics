import React, { useEffect, useState } from 'react';

export const Testimonials = ({ content }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveIndex((current) => (current + 1) % content.items.length),
      6000,
    );
    return () => window.clearInterval(timer);
  }, [content.items.length]);

  const testimonial = content.items[activeIndex];

  return (
    <section className="bg-gray-50 py-16 md:py-24 border-t border-gray-100">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">{content.eyebrow}</p>
        <h2 className="mx-auto mt-3 md:mt-4 max-w-3xl text-3xl font-black tracking-tight text-brand-black md:text-5xl">{content.title}</h2>
        
        <div className="mt-12 md:mt-16 transition-opacity duration-500" aria-live="polite">
          <div className="text-6xl md:text-8xl font-serif text-gray-200 leading-none h-10 md:h-16 select-none" aria-hidden="true">“</div>
          
          <blockquote className="mx-auto max-w-4xl text-xl font-medium leading-relaxed text-brand-black md:text-3xl px-4">
            {testimonial.quote}
          </blockquote>
          
          <div className="mt-8 md:mt-10 flex flex-col items-center justify-center">
            <p className="font-bold text-brand-black text-lg">{testimonial.name}</p>
            <p className="mt-1 text-sm font-medium text-gray-500">{testimonial.role}</p>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-3" aria-label="Choose testimonial">
          {content.items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${index === activeIndex ? 'w-8 bg-brand-black' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};
