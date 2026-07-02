import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import mockProducts from '../../mock-data/products.json';
import ProductFilters from '../../components/feature/ProductFilters';
import ProductSort from '../../components/feature/ProductSort';
import ProductCard from '../../components/feature/ProductCard';
import { Skeleton } from '../../components/ui/Skeleton';
import { useIntersection } from "../../hooks/useIntersection";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [sortOption, setSortOption] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Pagination / Infinite scroll state
  const [visibleCount, setVisibleCount] = useState(8);
  const { ref: observerRef, hasIntersected: isIntersecting } = useIntersection({ threshold: 0.1 });

  // Mock fetching data
  useEffect(() => {
    const timer = setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Infinite scroll trigger
  useEffect(() => {
    if (isIntersecting && !loading) {
      setVisibleCount(prev => prev + 4);
    }
  }, [isIntersecting, loading]);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(lowerQuery) || p.category.toLowerCase().includes(lowerQuery));
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Price filter
    if (priceRange.min !== '') {
      result = result.filter(p => p.price >= Number(priceRange.min));
    }
    if (priceRange.max !== '') {
      result = result.filter(p => p.price <= Number(priceRange.max));
    }

    // Sort
    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => b.id - a.id); // Mocking newest
        break;
      case 'featured':
      default:
        // Keep original order
        break;
    }

    return result;
  }, [products, selectedCategories, priceRange, sortOption, searchQuery]);

  const displayedProducts = filteredAndSortedProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredAndSortedProducts.length;

  return (
    <div className="w-full bg-gray-50 min-h-screen pt-28 md:pt-36 pb-12">
      <title>Our Products | Z.A Graphics Bulk Printing</title>
      <meta name="description" content="Browse our extensive catalog of premium print products including packaging, marketing materials, and stationery tailored for enterprises." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-10">
          <div className="text-sm text-gray-500 mb-4 font-medium flex items-center gap-2">
            <Link to="/" className="hover:text-brand-blue transition-colors">Home</Link> 
            <span className="text-gray-300">/</span> 
            <span className="text-gray-900 font-bold">All Products</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-brand-black tracking-tight mb-2">Our Products</h1>
              <p className="text-gray-500 font-medium">Showing {filteredAndSortedProducts.length} premium options</p>
            </div>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
        
        <ProductFilters 
          isMobileOpen={isMobileFilterOpen}
          setIsMobileOpen={setIsMobileFilterOpen}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        <div className="w-full md:w-3/4">
          
          <ProductSort 
            setIsMobileFilterOpen={setIsMobileFilterOpen}
            sortOption={sortOption}
            setSortOption={setSortOption}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {loading ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
               {Array(6).fill(0).map((_, i) => (
                 <Skeleton key={`skel-${i}`} variant="card" />
               ))}
             </div>
          ) : filteredAndSortedProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 bg-white border border-dashed border-gray-300 rounded-2xl text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-500 mb-6 font-medium">We couldn't find anything matching your current filters and search.</p>
              <button 
                onClick={() => {
                  setSelectedCategories([]);
                  setPriceRange({min: '', max: ''});
                  setSearchQuery('');
                }}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {displayedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {/* Infinite Scroll trigger area */}
              {hasMore && (
                <div ref={observerRef} className="mt-12 py-8 flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Products;
