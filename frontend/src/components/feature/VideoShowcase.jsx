import React from 'react';
import { LazyVideo } from "../ui/LazyVideo";
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const VideoShowcase = () => {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        
        {/* Massive Cinematic Video Container */}
        {/* 
            Fully responsive: using min-height instead of fixed aspect ratios 
            so that text never overflows on small mobile screens.
        */}
        <div className="relative group rounded-3xl md:rounded-[3rem] overflow-hidden bg-brand-black shadow-2xl ring-1 ring-gray-900/5 flex flex-col justify-end min-h-[550px] md:min-h-[600px] lg:min-h-[750px] xl:min-h-[800px]">
          
          {/* Continuous Background Video */}
          <div className="absolute inset-0 z-0">
            <LazyVideo 
              src="https://www.w3schools.com/html/mov_bbb.mp4" 
              poster="https://placehold.co/1920x1080/1a1a1a/ffffff?text=Video+Loading..."
              className="w-full h-full object-cover scale-105 transition-transform duration-[10s] group-hover:scale-100"
              autoPlay 
              muted 
              loop 
              controls={false}
            />
            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 md:via-brand-black/40 to-transparent pointer-events-none opacity-90" />
            <div className="absolute inset-0 bg-brand-black/20 pointer-events-none" />
          </div>

          {/* Floating Top Badge */}
          <div className="absolute top-6 left-6 md:top-12 md:left-12 flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md px-4 py-2 border border-white/10 pointer-events-none z-10">
            <span className="flex size-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full size-2 bg-red-500"></span>
            </span>
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white">Live Facility Feed</span>
          </div>

          {/* Technical Specs (Responsive - Hidden on small, visible on lg/xl) */}
          <div className="hidden lg:flex absolute top-10 right-10 xl:top-12 xl:right-12 flex-col gap-3 pointer-events-none z-10">
            {[
              { label: "Color Accuracy", value: "99.8% Delta-E" },
              { label: "Production Speed", value: "15k sheets/hr" },
              { label: "Quality Check", value: "Automated + Manual" }
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center justify-between gap-6 rounded-2xl bg-brand-black/40 backdrop-blur-md px-5 py-3 border border-white/10">
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{stat.label}</span>
                <span className="text-sm font-black text-white">{stat.value}</span>
              </div>
            ))}
          </div>

          {/* Content Overlay at Bottom */}
          <div className="relative z-10 p-6 sm:p-10 md:p-16 lg:p-20 flex flex-col lg:flex-row lg:items-end justify-between gap-8 md:gap-10 w-full mt-auto">
            
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-4 md:mb-6">
                Uncompromising precision, <br className="hidden md:block" />
                at absolute scale.
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium max-w-2xl leading-relaxed">
                Step inside our state-of-the-art production facility. Watch how cutting-edge Heidelberg presses and our dedicated print masters bring your most ambitious ideas to life.
              </p>
            </div>

            <div className="shrink-0 pb-2 w-full sm:w-auto">
              <Link 
                to="/about"
                className="group/btn relative w-full sm:w-auto flex items-center justify-center gap-4 rounded-full bg-white px-6 sm:px-8 py-4 font-bold text-brand-black transition-all duration-300 hover:bg-brand-blue hover:text-white"
              >
                <span className="relative z-10 text-base md:text-lg">Discover our process</span>
                <span className="relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-brand-black transition-colors duration-300 group-hover/btn:bg-white">
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </span>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default VideoShowcase;
