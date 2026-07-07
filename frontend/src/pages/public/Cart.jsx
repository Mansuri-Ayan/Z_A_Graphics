import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import CartItem from '../../components/feature/CartItem';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, subtotal, gst, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-32 pt-32 md:pt-40 text-center bg-gray-50 min-h-[70vh] flex flex-col items-center justify-center">
        <div className="w-20 h-20 md:w-32 md:h-32 bg-white border border-gray-100 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-16 md:w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-4xl font-black text-gray-900 mb-2 md:mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-6 md:mb-10 text-sm md:text-lg">Looks like you haven't added any products to your cart yet.</p>
        <Link to="/products" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 md:px-10 md:py-4 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-1 text-base md:text-lg">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12 pt-32 md:pt-40 bg-gray-50 min-h-screen">
      <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 md:mb-10 tracking-tight">Your Cart</h1>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
        {/* Left: Line Items */}
        <div className="w-full lg:w-2/3">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            {/* Header (Desktop only) */}
            <div className="hidden md:grid grid-cols-12 gap-6 p-6 border-b border-gray-100 bg-gray-50/50 text-sm font-bold text-gray-500 uppercase tracking-wider">
              <div className="col-span-6">Product Details</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            {/* Items */}
            <div className="divide-y divide-gray-100">
              {cart.map((item) => (
                <CartItem 
                  key={item.id} 
                  item={item} 
                  updateQuantity={updateQuantity} 
                  removeItem={removeFromCart} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-[1.5rem] md:rounded-3xl border border-gray-100 shadow-sm p-5 sm:p-6 md:p-8 sticky top-28">
            <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4 md:mb-8">Order Summary</h2>
            
            <div className="space-y-3 md:space-y-5 mb-6 md:mb-8">
              <div className="flex justify-between text-gray-600 text-sm md:text-base">
                <span>Subtotal</span>
                <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm md:text-base">
                <span>GST (18%)</span>
                <span className="font-bold text-gray-900">${gst.toFixed(2)}</span>
              </div>
            </div>
            
            <div className="border-t border-gray-100 pt-6 mb-6 md:mb-8">
              <div className="flex justify-between items-end mb-2">
                <span className="font-bold text-gray-900 text-lg md:text-xl">Grand Total</span>
                <span className="text-3xl md:text-4xl font-black text-blue-600">${total.toFixed(2)}</span>
              </div>
              <p className="text-xs md:text-sm text-gray-500 text-right font-medium">Inclusive of all taxes</p>
            </div>

            <Link to="/checkout" className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-center font-bold py-3 md:py-4 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-base md:text-lg mb-4 md:mb-6">
              Proceed to Checkout
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>

            <div className="flex items-center justify-center space-x-2 text-sm font-medium text-gray-500 bg-gray-50 py-3 rounded-lg border border-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>Secure Checkout via Stripe</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
