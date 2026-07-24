import React from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import ProductCard from '../../components/feature/ProductCard';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="space-y-4 md:space-y-10">
      <div className="bg-white rounded-2xl md:rounded-[2rem] border border-gray-100 p-4 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] relative overflow-hidden min-h-[400px]">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-100 blur-2xl pointer-events-none"></div>
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 md:gap-4 mb-6 md:mb-10 relative z-10 border-b border-gray-100 pb-4">
          <h2 className="text-xl md:text-3xl font-black text-brand-black tracking-tight flex items-center gap-3">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-brand-black fill-brand-black" /> 
            My Favorites
          </h2>
          <span className="text-brand-black font-bold text-sm bg-white px-4 py-1.5 rounded-full border border-gray-200 shadow-sm">
            {favorites.length} {favorites.length === 1 ? 'Item' : 'Items'}
          </span>
        </div>

        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 md:py-24 text-center z-10 relative">
            <div className="w-20 h-20 bg-gray-50 border border-gray-100 shadow-sm rounded-full flex items-center justify-center mb-6">
              <Heart className="w-10 h-10 text-brand-black opacity-20" />
            </div>
            <h3 className="text-xl md:text-2xl font-black text-brand-black mb-2">No favorites yet</h3>
            <p className="text-gray-500 max-w-md mx-auto mb-8 font-medium">
              You haven't added any products to your favorites list. Explore our catalog and click the heart icon to save items you love.
            </p>
            <Link 
              to="/products"
              className="px-8 py-3.5 bg-brand-black text-white font-bold rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              Explore Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-10">
            {favorites.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
