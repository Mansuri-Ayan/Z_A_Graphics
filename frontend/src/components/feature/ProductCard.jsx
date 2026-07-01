import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from "../ui/Badge";
import { LazyImage } from "../ui/LazyImage"; 

const ProductCard = ({ product }) => {
  return (
    <div className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-100">
      <Link to={`/products/${product.id}`} className="relative aspect-square overflow-hidden bg-gray-50">
        <LazyImage 
          src={product.image} 
          alt={product.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="primary" className="backdrop-blur-md bg-white/80">
            Min Qty: {product.minOrderQty}
          </Badge>
        </div>
      </Link>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-1 text-xs font-semibold tracking-wider text-blue-600 uppercase">
          {product.category}
        </div>
        <Link to={`/products/${product.id}`} className="hover:text-blue-600 transition-colors">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{product.name}</h3>
        </Link>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-xl font-black text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <Link 
            to={`/products/${product.id}`}
            className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-700 hover:bg-blue-600 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
               <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
