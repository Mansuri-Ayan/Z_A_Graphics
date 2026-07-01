import React from 'react';
import { useLocation } from 'react-router-dom';

const PagePlaceholder = ({ title }) => {
  const location = useLocation();

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-md shadow-sm border border-gray-200 text-center max-w-md w-full">
        <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-brand-black mb-2">{title}</h1>
        <p className="text-gray-500 mb-6">
          This page is currently under construction.
        </p>
        <div className="bg-gray-50 p-3 rounded border border-gray-200 text-sm font-mono text-gray-600 break-all">
          Route: {location.pathname}
        </div>
      </div>
    </div>
  );
};

export default PagePlaceholder;