import React from 'react';
import { Link } from 'react-router-dom';

const CartItem = ({ item, updateQuantity, removeItem }) => {
  return (
    <div className="p-6 flex flex-col md:grid md:grid-cols-12 md:gap-6 md:items-center relative hover:bg-gray-50 transition-colors">
      
      {/* Product Details */}
      <div className="col-span-6 flex items-start space-x-4 mb-6 md:mb-0">
        <div className="w-24 h-24 rounded-xl overflow-hidden border border-gray-200 bg-white flex-shrink-0">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col h-full justify-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-1">{item.category}</span>
          <Link to={`/products/${item.id}`} className="font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
            {item.name}
          </Link>
          {item.files && item.files.length > 0 && (
            <div className="text-sm text-gray-500 mt-2 flex items-center bg-gray-100 px-2 py-1 rounded-md w-fit">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              {item.files.length} design file(s)
            </div>
          )}
        </div>
      </div>

      {/* Price */}
      <div className="col-span-2 md:text-center text-base font-semibold text-gray-900 mb-4 md:mb-0">
        <span className="md:hidden text-gray-500 font-medium mr-2">Price:</span>
        ${item.price.toFixed(2)}
      </div>

      {/* Quantity */}
      <div className="col-span-2 flex items-center md:justify-center mb-4 md:mb-0">
        <span className="md:hidden text-gray-500 font-medium mr-2">Qty:</span>
        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
          <button 
            className="w-10 h-10 flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-gray-700 border-r border-gray-200 transition-colors font-medium text-lg"
            onClick={() => updateQuantity(item.id, item.quantity - Math.max(1, Math.floor(item.minOrderQty / 10)))}
          >-</button>
          <input 
            type="number" 
            value={item.quantity} 
            readOnly
            className="w-14 h-10 text-center text-sm font-bold text-gray-900 focus:outline-none"
          />
          <button 
            className="w-10 h-10 flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-gray-700 border-l border-gray-200 transition-colors font-medium text-lg"
            onClick={() => updateQuantity(item.id, item.quantity + Math.max(1, Math.floor(item.minOrderQty / 10)))}
          >+</button>
        </div>
      </div>

      {/* Total & Remove */}
      <div className="col-span-2 flex justify-between items-center md:justify-end">
        <div className="font-black text-lg text-gray-900">
          <span className="md:hidden text-gray-500 font-medium mr-2 text-base">Total:</span>
          ${(item.price * item.quantity).toFixed(2)}
        </div>
        <button 
          onClick={() => removeItem(item.id)}
          className="text-gray-400 hover:text-red-500 ml-4 absolute top-6 right-6 md:static transition-colors bg-white rounded-full p-1 hover:bg-red-50"
          title="Remove item"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

    </div>
  );
};

export default CartItem;
