import React from 'react';
import { cn } from '../ui/utils';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const ProductFilters = ({
  isMobileOpen,
  setIsMobileOpen,
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
  categories = ['Cards', 'Banners', 'Gifts', 'Stationery', 'Signage', 'Apparel', 'Marketing', 'Packaging']
}) => {
  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const MIN_PRICE = 0;
  const MAX_PRICE = 5000;

  const minVal = priceRange.min === '' ? MIN_PRICE : Number(priceRange.min);
  const maxVal = priceRange.max === '' ? MAX_PRICE : Number(priceRange.max);

  const handleMinSlider = (e) => {
    const val = Math.min(Number(e.target.value), maxVal - 10);
    setPriceRange(prev => ({ ...prev, min: val }));
  };

  const handleMaxSlider = (e) => {
    const val = Math.max(Number(e.target.value), minVal + 10);
    setPriceRange(prev => ({ ...prev, max: val }));
  };

  const handlePriceInput = (e, type) => {
    const val = e.target.value === '' ? '' : Number(e.target.value);
    setPriceRange(prev => ({ ...prev, [type]: val }));
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange({ min: '', max: '' });
  };

  const thumbStyles = `pointer-events-auto appearance-none w-5 h-5 rounded-full bg-white border-2 border-blue-600 cursor-pointer shadow-md hover:scale-110 transition-transform`;

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      <aside
        className={`
          fixed md:relative top-0 left-0 h-full md:h-auto w-3/4 sm:w-80 md:w-1/4
          bg-white md:bg-transparent z-50 md:z-auto
          transform transition-transform duration-300 ease-in-out
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          overflow-y-auto md:overflow-visible
        `}
      >
        <div className="md:sticky md:top-24 p-4 md:p-6 bg-white md:rounded-3xl shadow-2xl md:shadow-xl md:border md:border-gray-100 min-h-full md:min-h-0">
          <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-4 md:mb-6">
            <h3 className="font-black text-xl md:text-2xl text-gray-900">Filters</h3>
            <button 
              className="md:hidden p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors" 
              onClick={() => setIsMobileOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Categories */}
          <div className="mb-6 md:mb-8">
            <h4 className="font-bold text-[10px] md:text-sm text-gray-900 mb-3 md:mb-4 uppercase tracking-wider flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
              Categories
            </h4>
            <ul className="space-y-1">
              {categories.map((cat) => (
                <li key={cat}>
                  <label className="flex items-center p-2 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors group">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(cat)}
                        onChange={() => toggleCategory(cat)}
                        className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-md checked:bg-blue-600 checked:border-blue-600 transition-colors cursor-pointer"
                      />
                      <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`ml-3 text-sm font-medium transition-colors ${selectedCategories.includes(cat) ? 'text-blue-700' : 'text-gray-600 group-hover:text-gray-900'}`}>
                      {cat}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range */}
          <div className="mb-6 md:mb-8">
            <h4 className="font-bold text-[10px] md:text-sm text-gray-900 mb-4 md:mb-6 uppercase tracking-wider flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Price Range
            </h4>
            
            <div className="px-2 mb-8 mt-4">
              <Slider
                range
                min={MIN_PRICE}
                max={MAX_PRICE}
                value={[minVal, maxVal]}
                onChange={(val) => {
                  setPriceRange({ min: val[0], max: val[1] });
                }}
                styles={{
                  track: { backgroundColor: '#2563eb', height: 8 },
                  rail: { backgroundColor: '#f3f4f6', height: 8 },
                  handle: { 
                    borderColor: '#2563eb', 
                    borderWidth: 2,
                    backgroundColor: '#fff',
                    opacity: 1,
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                    width: 20,
                    height: 20,
                    marginTop: -6,
                  },
                }}
              />
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative w-full">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">$</span>
                <input
                  type="number"
                  placeholder="Min"
                  value={priceRange.min}
                  onChange={(e) => handlePriceInput(e, 'min')}
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl pl-7 pr-3 py-2.5 text-sm font-medium text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
                />
              </div>
              <span className="text-gray-300 font-bold">-</span>
              <div className="relative w-full">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-medium text-sm">$</span>
                <input
                  type="number"
                  placeholder="Max"
                  value={priceRange.max}
                  onChange={(e) => handlePriceInput(e, 'max')}
                  className="w-full border border-gray-200 bg-gray-50 rounded-xl pl-7 pr-3 py-2.5 text-sm font-medium text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all"
                />
              </div>
            </div>
          </div>

          <button
            onClick={clearFilters}
            className="w-full py-3 px-4 bg-gray-50 border border-gray-100 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors shadow-sm"
          >
            Clear all filters
          </button>
        </div>
      </aside>
    </>
  );
};

export default ProductFilters;
