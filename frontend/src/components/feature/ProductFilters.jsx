import React from 'react';

const ProductFilters = ({
  isMobileOpen,
  setIsMobileOpen,
  selectedCategories,
  setSelectedCategories,
  priceRange,
  setPriceRange,
  categories = ['Cards', 'Banners', 'Gifts', 'Stationery', 'Signage', 'Apparel']
}) => {
  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const handlePriceChange = (e, type) => {
    const val = e.target.value ? Number(e.target.value) : '';
    setPriceRange(prev => ({ ...prev, [type]: val }));
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange({ min: '', max: '' });
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      <aside
        className={`
          fixed md:relative top-0 left-0 h-full md:h-auto w-4/5 sm:w-80 md:w-1/4 
          bg-white shadow-2xl md:shadow-none z-50 md:z-auto
          transform transition-transform duration-300 ease-in-out
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          overflow-y-auto md:overflow-visible
        `}
      >
        <div className="md:sticky md:top-24 p-6 bg-white md:rounded-2xl md:border md:border-gray-100 min-h-full md:min-h-0">
          <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-6">
            <h3 className="font-bold text-xl text-gray-900">Filters</h3>
            <button className="md:hidden text-gray-500 hover:text-gray-900 transition-colors" onClick={() => setIsMobileOpen(false)}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Categories */}
          <div className="mb-8">
            <h4 className="font-semibold text-sm text-gray-900 mb-4 uppercase tracking-wider">Categories</h4>
            <ul className="space-y-3">
              {categories.map((cat) => (
                <li key={cat} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`cat-${cat}`}
                    checked={selectedCategories.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer transition-colors"
                  />
                  <label htmlFor={`cat-${cat}`} className="ml-3 text-sm text-gray-700 cursor-pointer font-medium select-none hover:text-blue-600 transition-colors">
                    {cat}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range */}
          <div className="mb-8">
            <h4 className="font-semibold text-sm text-gray-900 mb-4 uppercase tracking-wider">Price Range ($)</h4>
            <div className="flex items-center space-x-3">
              <input
                type="number"
                placeholder="Min"
                value={priceRange.min}
                onChange={(e) => handlePriceChange(e, 'min')}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow"
              />
              <span className="text-gray-400 font-medium">-</span>
              <input
                type="number"
                placeholder="Max"
                value={priceRange.max}
                onChange={(e) => handlePriceChange(e, 'max')}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-shadow"
              />
            </div>
          </div>

          <button
            onClick={clearFilters}
            className="w-full py-2 px-4 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
          >
            Clear all filters
          </button>
        </div>
      </aside>
    </>
  );
};

export default ProductFilters;
