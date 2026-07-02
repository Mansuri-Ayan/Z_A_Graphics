import React from 'react';
import { Link } from 'react-router-dom';
import { LazyVideo } from '../../../components/ui/LazyVideo';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = ({ content }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-[#050505]">
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <LazyVideo 
          src="https://www.w3schools.com/html/mov_bbb.mp4" 
          poster="https://placehold.co/1920x1080/050505/ffffff?text=Loading+Experience..."
          className="w-full h-full object-cover scale-105 transform origin-center animate-[slowPan_20s_ease-in-out_infinite_alternate]"
          autoPlay 
          muted 
          loop 
          controls={false}
        />
        {/* Dark Gradient Overlays for Readability and Blending */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-3xl">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-sm mb-8">
            <Sparkles className="size-4 text-brand-blue animate-pulse" />
            {content.eyebrow}
          </div>

          {/* Massive Cinematic Title */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.05] tracking-tighter text-white mb-8">
            {/* Split title conceptually for visual flair */}
            Big ideas deserve a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-brand-blue">
              brilliant finish.
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium max-w-2xl leading-relaxed mb-12">
            {content.description}
          </p>

          {/* High-Contrast Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link 
              to={content.primaryAction.to} 
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-brand-blue px-8 py-4 font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,102,255,0.4)]"
            >
              <span className="relative z-10 text-base md:text-lg">{content.primaryAction.label}</span>
              <ArrowRight className="relative z-10 size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            
            <Link 
              to={content.secondaryAction.to} 
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white/20 hover:scale-105"
            >
              <span className="text-base md:text-lg">{content.secondaryAction.label}</span>
            </Link>
          </div>

          {/* Floating Glassmorphic Stats */}
          <div className="flex flex-wrap items-center gap-8 md:gap-16 pt-8 border-t border-white/20">
            {content.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-3xl md:text-4xl font-black text-white">{stat.value}</span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};
