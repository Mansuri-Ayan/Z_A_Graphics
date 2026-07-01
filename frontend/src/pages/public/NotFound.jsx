import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
        
        <h1 className="text-9xl font-black text-gray-100 tracking-tighter mb-4 select-none">404</h1>
        
        <div className="-mt-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">Page Not Found</h2>
          <p className="text-xl text-gray-600 font-medium mb-10">
            Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
              Back to Home
            </Link>
            <Link to="/products" className="bg-white border border-gray-200 hover:border-gray-900 text-gray-900 font-bold py-4 px-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;