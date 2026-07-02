import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const CtaBanner = ({ content }) => {
  return (
    <section className="relative bg-white py-32 md:py-48 overflow-hidden border-t border-gray-100 flex items-center justify-center">
      
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Giant Blurred Orbs */}
        <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100/40 blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 right-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-100/40 blur-[120px] mix-blend-multiply" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Minimal Eyebrow */}
        <p className="text-sm font-bold uppercase tracking-widest text-brand-blue mb-8">
          {content.eyebrow}
        </p>

        {/* Massive Typographic Headline */}
        <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-black tracking-tighter text-brand-black leading-[0.9] mb-12 max-w-5xl">
          Let's make something <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-blue-500 to-indigo-600 inline-block mt-2">
            worth holding on to.
          </span>
        </h2>

        {/* Refined Description */}
        <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-2xl mb-16 leading-relaxed">
          {content.description}
        </p>

        {/* Hyper-Modern Button */}
        <Link 
          to={content.action.to} 
          className="group relative inline-flex items-center justify-center"
        >
          {/* Animated Glow Behind Button */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-brand-blue to-indigo-600 opacity-30 blur-lg transition duration-500 group-hover:opacity-100 group-hover:duration-200"></div>
          
          {/* Actual Button */}
          <div className="relative flex items-center gap-4 rounded-full bg-brand-black px-10 py-5 text-lg font-bold text-white transition-transform duration-300 group-hover:scale-[1.02]">
            <span>{content.action.label}</span>
            <div className="flex size-10 items-center justify-center rounded-full bg-white/20 transition-transform duration-500 group-hover:bg-brand-blue group-hover:rotate-45">
              <ArrowUpRight className="size-5 text-white" />
            </div>
          </div>
        </Link>
        
      </div>
      
      {/* Decorative Floating Elements (Parallax illusion) */}
      <div className="absolute top-32 left-10 md:left-32 animate-bounce" style={{ animationDuration: '4s' }}>
        <div className="size-4 rounded-full bg-blue-500/20" />
      </div>
      <div className="absolute bottom-40 right-10 md:right-40 animate-bounce" style={{ animationDuration: '6s', animationDelay: '1s' }}>
        <div className="size-8 rounded-full bg-indigo-500/10" />
      </div>
    </section>
  );
};
