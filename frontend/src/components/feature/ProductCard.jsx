import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from "../ui/Badge";
import { LazyImage } from "../ui/LazyImage";
import { Heart } from 'lucide-react';
import { useFavorites } from '../../context/FavoritesContext';

const ProductCard = ({ product }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const isFav = isFavorite(product.id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleFavorite(product);
  };

  return (
    <div className="group flex flex-col bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:border-gray-200">
      <Link to={`/products/${product.id}`} className="relative aspect-square overflow-hidden bg-[#f4f6f8] rounded-xl border border-gray-200 mb-3 sm:mb-4">
        <LazyImage
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
        />
        <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 z-10">
          <Badge className="bg-brand-black hover:bg-gray-800 text-white border-none text-[10px] sm:text-xs px-2.5 sm:px-3 py-0.5 sm:py-1 font-bold rounded-full shadow-sm tracking-widest uppercase">
            Min Qty: {product.minOrderQty}
          </Badge>
        </div>
        <div className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-10">
          <button
            onClick={handleFavoriteClick}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-400 hover:text-brand-black hover:scale-110 transition-all border border-gray-100"
          >
            <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-colors ${isFav ? 'fill-brand-black text-brand-black' : ''}`} />
          </button>
        </div>
      </Link>

      <div className="flex flex-col flex-grow px-1">
        <div className="mb-1 text-[9px] sm:text-[10px] font-bold tracking-widest text-gray-400 uppercase truncate">
          {product.category}
        </div>
        <Link to={`/products/${product.id}`} className="hover:text-brand-black transition-colors mb-1 sm:mb-2">
          <h3 className="text-sm sm:text-base font-bold text-gray-900 line-clamp-1">{product.name}</h3>
        </Link>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-sm sm:text-lg font-black text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <Link
            to={`/products/${product.id}`}
            className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-brand-black flex items-center justify-center text-white hover:bg-gray-800 hover:scale-105 transition-all shadow-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
