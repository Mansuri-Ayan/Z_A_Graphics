import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';
import { LazyVideo } from '../../../components/ui/LazyVideo';
import poster from '../../../assets/home-hero-print.png';

export const VideoShowcase = ({ content }) => (
  <section className="bg-brand-white py-16 md:py-24 border-t border-gray-100">
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
      
      {/* Video Area */}
      <div className="relative order-2 lg:order-1 group">
        {/* Soft elegant shadow underneath */}
        <div className="absolute -inset-1 rounded-3xl bg-gray-100 opacity-50 blur-xl transition duration-500 group-hover:opacity-70" aria-hidden="true" />
        <LazyVideo
          src={content.videoSrc}
          poster={poster}
          controls
          muted
          className="relative aspect-video w-full rounded-2xl border border-gray-200 shadow-sm object-cover"
        />
      </div>

      {/* Content Area */}
      <div className="order-1 lg:order-2">
        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500">{content.eyebrow}</p>
        <h2 className="mt-3 md:mt-4 text-3xl font-black tracking-tight text-brand-black md:text-5xl leading-tight">
          {content.title}
        </h2>
        <p className="mt-4 md:mt-6 text-base leading-relaxed text-gray-500">
          {content.description}
        </p>
        
        <ul className="mt-8 space-y-4">
          {content.points.map((point) => (
            <li key={point} className="flex items-center gap-4 text-sm font-bold text-gray-800">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-brand-black transition-colors duration-300 hover:bg-gray-200">
                <svg className="size-3.5" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {point}
            </li>
          ))}
        </ul>

        <Link to={content.action.to} className="mt-10 inline-block">
          <Button variant="outline" className="border-gray-200 text-brand-black hover:bg-gray-50 py-3 px-8 font-bold transition-colors">
            {content.action.label} <span aria-hidden="true" className="ml-1">→</span>
          </Button>
        </Link>
      </div>

    </div>
  </section>
);
