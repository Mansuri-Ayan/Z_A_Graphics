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
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-700">{content.eyebrow}</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight text-brand-black md:text-4xl">{content.title}</h2>
        <div className="mt-10" aria-live="polite">
          <div className="text-4xl font-bold text-blue-600" aria-hidden="true">“</div>
          <blockquote className="mx-auto max-w-3xl text-xl font-medium leading-8 text-gray-700 md:text-2xl">
            {testimonial.quote}
          </blockquote>
          <p className="mt-6 font-bold text-brand-black">{testimonial.name}</p>
          <p className="mt-1 text-sm text-gray-500">{testimonial.role}</p>
        </div>
        <div className="mt-8 flex justify-center gap-2" aria-label="Choose testimonial">
          {content.items.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Show testimonial ${index + 1}`}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-blue-600' : 'w-2 bg-gray-200 hover:bg-gray-400'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
