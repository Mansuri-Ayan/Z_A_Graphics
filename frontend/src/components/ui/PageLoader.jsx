import React from 'react';

export const PageLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] w-full bg-transparent">
      {/* Brand logo pulse effect */}
      <div className="relative w-20 h-20 mb-6">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-cyan-500 opacity-20 animate-ping"></div>
        <div className="relative flex items-center justify-center w-full h-full rounded-2xl bg-gradient-to-br from-primary to-cyan-500 shadow-lg shadow-primary/30">
          <span className="text-2xl font-black text-white">ZA</span>
        </div>
      </div>
      
      {/* Loading bar */}
      <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div className="w-1/2 h-full bg-primary rounded-full animate-[progress_1s_ease-in-out_infinite] origin-left"></div>
      </div>
      <p className="mt-4 text-sm font-medium text-gray-400 tracking-widest uppercase">Loading...</p>

      <style jsx>{`
        @keyframes progress {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
};
