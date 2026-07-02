import React, { useState } from 'react';

export const Pagination = () => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  
  return (
    <div className="border-t border-gray-100 p-4 flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-4 bg-gray-50/50">
      
      {/* Mobile: Bottom (order-2), Desktop: Left (order-1) */}
      <div className="order-2 sm:order-1 flex flex-row flex-wrap items-center justify-between sm:justify-start gap-4 w-full sm:w-auto">
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-gray-500">Show</span>
          <select 
            value={rowsPerPage} 
            onChange={(e) => setRowsPerPage(Number(e.target.value))}
            className="border border-gray-200 rounded-lg px-2 py-1.5 text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 bg-white shadow-sm"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
          </select>
          <span className="text-sm font-bold text-gray-500">entries</span>
        </div>
        
        {/* Now visible on mobile, perfectly aligned with the dropdown */}
        <span className="text-sm font-bold text-gray-500">1 to {rowsPerPage}</span>
      </div>
      
      {/* Mobile: Top (order-1), Desktop: Right (order-2) */}
      <div className="order-1 sm:order-2 flex items-center gap-3 w-full sm:w-auto">
        <button 
          disabled 
          className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-400 font-bold hover:bg-gray-50 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm text-center"
        >
          Previous
        </button>
        <button 
          className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-gray-200 bg-white text-gray-700 font-bold hover:bg-gray-50 hover:text-blue-600 transition-colors shadow-sm text-center"
        >
          Next
        </button>
      </div>

    </div>
  );
};
