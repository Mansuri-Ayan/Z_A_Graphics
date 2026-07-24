import React from 'react';

export const PageLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full bg-transparent">
      <div className="relative flex items-center justify-center mb-12 mt-8">
        {/* Animated geometric rings */}
        <div className="absolute w-24 h-24 rounded-full border border-gray-200 animate-[spin_4s_linear_infinite]">
          <div className="absolute top-0 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-brand-black rounded-full shadow-sm"></div>
        </div>
        <div className="absolute w-16 h-16 rounded-full border border-gray-200 animate-[spin_3s_linear_infinite_reverse]">
          <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 -translate-x-1/2 translate-y-1/2 bg-gray-400 rounded-full"></div>
        </div>
        
        {/* Central Logo */}
        <div className="text-3xl font-black text-brand-black tracking-tighter z-10">
          ZA
        </div>
      </div>
      
      <div className="flex flex-col items-center gap-4">
        <p className="text-[10px] font-bold text-gray-400 tracking-[0.4em] uppercase">Processing</p>
        <div className="flex gap-1.5">
          <div className="w-1.5 h-1.5 bg-brand-black rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-1.5 h-1.5 bg-brand-black rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-1.5 h-1.5 bg-brand-black rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};
