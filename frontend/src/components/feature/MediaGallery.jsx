import React, { useState } from 'react';
import { LazyVideo } from "../ui/LazyVideo";

const MediaGallery = ({ images = [], video = null }) => {
  const allMedia = [...images];
  if (video) {
    allMedia.push({ type: 'video', src: video });
  }

  const [activeIndex, setActiveIndex] = useState(0);

  if (allMedia.length === 0) return null;

  const activeMedia = allMedia[activeIndex];

  return (
    <div className="flex flex-col gap-4">
      {/* Main Viewer */}
      <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center relative">
        {activeMedia.type === 'video' ? (
          <LazyVideo 
            src={activeMedia.src} 
            className="w-full h-full object-cover" 
            controls 
            autoPlay 
          />
        ) : (
          <img 
            src={activeMedia.src || activeMedia} 
            alt="Product View" 
            className="w-full h-full object-cover" 
          />
        )}
      </div>

      {/* Thumbnails */}
      {allMedia.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {allMedia.map((media, index) => {
            const isVideo = media.type === 'video';
            const src = isVideo ? 'https://placehold.co/100x100/1a1a1a/ffffff?text=Video' : (media.src || media);
            
            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                  activeIndex === index ? 'border-blue-600 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={src} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                {isVideo && (
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
