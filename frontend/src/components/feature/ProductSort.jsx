import React from 'react';
import { Search } from 'lucide-react';

const ProductSort = ({ setIsMobileFilterOpen, sortOption, setSortOption, searchQuery, setSearchQuery }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-white border border-gray-100 rounded-2xl p-4 mb-8 shadow-sm gap-4">
      <div className="flex items-center w-full sm:w-auto gap-3">
        <button
          className="md:hidden flex items-center justify-center text-gray-700 bg-gray-50 rounded-xl px-4 py-2 text-sm font-semibold hover:bg-gray-100 transition-colors flex-shrink-0"
          onClick={() => setIsMobileFilterOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filters
        </button>

        <div className="relative flex-grow sm:flex-grow-0 sm:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={16} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl text-sm transition-all"
          />
        </div>
      </div>

      <div className="flex items-center w-full sm:w-auto justify-between sm:justify-start">
        <label htmlFor="sort" className="text-sm font-medium text-gray-600 mr-3 hidden sm:block whitespace-nowrap">Sort by:</label>
        <select
          id="sort"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="w-full sm:w-auto bg-gray-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 rounded-xl text-sm px-4 py-2 cursor-pointer text-gray-700 font-medium transition-all"
        >
          <option value="featured">Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="newest">Newest Arrivals</option>
        </select>
      </div>
    </div>
  );
};

export default ProductSort;
