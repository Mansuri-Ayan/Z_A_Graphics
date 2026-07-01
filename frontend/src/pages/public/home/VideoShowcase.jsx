import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/ui/Button';
import { LazyVideo } from '../../../components/ui/LazyVideo';
import poster from '../../../assets/home-hero-print.png';

export const VideoShowcase = ({ content }) => (
  <section className="bg-blue-50 py-16 md:py-24">
    <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
      <div className="relative order-2 lg:order-1">
        <div className="absolute -bottom-6 -left-6 h-full w-full rounded-md border border-blue-100" aria-hidden="true" />
        <LazyVideo
          src={content.videoSrc}
          poster={poster}
          controls
          muted
          className="relative aspect-video w-full shadow-xl"
        />
      </div>
      <div className="order-1 lg:order-2">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-700">{content.eyebrow}</p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-brand-black md:text-4xl">{content.title}</h2>
        <p className="mt-5 text-base leading-7 text-gray-700">{content.description}</p>
        <ul className="mt-6 space-y-3">
          {content.points.map((point) => (
            <li key={point} className="flex items-center gap-3 text-sm font-semibold text-gray-700">
              <span className="flex size-6 items-center justify-center rounded-full bg-blue-600 text-xs text-brand-white">✓</span>
              {point}
            </li>
          ))}
        </ul>
        <Link to={content.action.to} className="mt-8 inline-block">
          <Button variant="outline">{content.action.label} <span aria-hidden="true">→</span></Button>
        </Link>
      </div>
    </div>
  </section>
);
