import React, { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Check, Filter } from 'lucide-react';

const ProductSort = ({ setIsMobileFilterOpen, sortOption, setSortOption, searchQuery, setSearchQuery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest Arrivals' },
  ];

  const currentSortLabel = sortOptions.find(opt => opt.value === sortOption)?.label || 'Featured';

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-white border border-gray-100 rounded-2xl p-4 mb-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)] gap-4">
      
      {/* Filters Button (Mobile) & Search Bar */}
      <div className="flex items-center w-full sm:w-auto gap-3">
        <button
          className="md:hidden flex items-center justify-center text-brand-black bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold hover:bg-gray-100 transition-colors flex-shrink-0"
          onClick={() => setIsMobileFilterOpen(true)}
        >
          <Filter size={16} className="mr-2" />
          Filters
        </button>

        <div className="relative flex-grow sm:flex-grow-0 sm:w-72">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={16} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-100 focus:bg-white focus:border-brand-blue focus:ring-2 focus:ring-blue-100 rounded-xl text-sm transition-all outline-none font-medium placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Custom Sort Dropdown */}
      <div className="flex items-center w-full sm:w-auto justify-between sm:justify-start relative z-20" ref={dropdownRef}>
        <span className="text-sm font-bold text-gray-400 mr-3 hidden sm:block whitespace-nowrap">Sort by:</span>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full sm:w-48 flex items-center justify-between bg-gray-50 border border-gray-100 hover:bg-gray-100 rounded-xl px-4 py-2.5 text-sm font-bold text-brand-black transition-colors outline-none focus:ring-2 focus:ring-blue-100"
        >
          {currentSortLabel}
          <ChevronDown size={16} className={`text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 sm:left-auto right-0 mt-2 w-full sm:w-56 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
            {sortOptions.map((option) => (
              <button
                key={option.value}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm text-left transition-colors hover:bg-blue-50 ${
                  sortOption === option.value ? 'bg-blue-50 text-brand-blue font-bold' : 'text-gray-600 font-medium'
                }`}
                onClick={() => {
                  setSortOption(option.value);
                  setIsOpen(false);
                }}
              >
                {option.label}
                {sortOption === option.value && <Check size={16} className="text-brand-blue" />}
              </button>
            ))}
          </div>
        )}
      </div>
      
    </div>
  );
};

export default ProductSort;
