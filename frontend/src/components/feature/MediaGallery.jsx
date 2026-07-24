import React, { useState, useRef } from 'react';
import { LazyVideo } from "../ui/LazyVideo";

const MediaGallery = ({ images = [], video = null }) => {
  const allMedia = [...images];
  if (video) {
    allMedia.push({ type: 'video', src: video });
  }

  const [activeIndex, setActiveIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [bgPos, setBgPos] = useState('50% 50%');
  const containerRef = useRef(null);

  if (allMedia.length === 0) return null;

  const activeMedia = allMedia[activeIndex];
  const isVideo = activeMedia?.type === 'video';

  const handleMouseMove = (e) => {
    if (isVideo || !containerRef.current) return;
    // Disable zoom on touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    
    setBgPos(`${Math.max(0, Math.min(100, x))}% ${Math.max(0, Math.min(100, y))}%`);
    setIsZooming(true);
  };

  const handleMouseLeave = () => {
    setIsZooming(false);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Viewer */}
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseMove}
        className={`aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center relative group ${!isVideo ? 'md:cursor-crosshair' : ''}`}
      >
        {isVideo ? (
          <LazyVideo 
            src={activeMedia.src} 
            className="w-full h-full object-cover" 
            controls 
            autoPlay 
          />
        ) : (
          <>
            {/* Base Image */}
            <img 
              src={activeMedia.src || activeMedia} 
              alt="Product View" 
              className="w-full h-full object-cover" 
            />
            
            {/* Zoom Overlay (Only active on desktop hover) */}
            <div 
              className="absolute inset-0 z-20 pointer-events-none bg-no-repeat transition-opacity duration-150 ease-in-out bg-white"
              style={{
                backgroundImage: `url(${activeMedia.src || activeMedia})`,
                backgroundPosition: bgPos,
                backgroundSize: '250%',
                opacity: isZooming ? 1 : 0
              }}
            ></div>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {allMedia.length > 1 && (
        <div className="flex flex-wrap gap-3 pb-2">
          {allMedia.map((media, index) => {
            const isMediaVideo = media.type === 'video';
            const src = isMediaVideo ? 'https://placehold.co/100x100/1a1a1a/ffffff?text=Video' : (media.src || media);
            
            return (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsZooming(false);
                }}
                className={`relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                  activeIndex === index ? 'border-brand-black scale-105 shadow-sm' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img src={src} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                {isMediaVideo && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MediaGallery;
