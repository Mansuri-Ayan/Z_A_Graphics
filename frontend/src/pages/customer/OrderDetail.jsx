import React from 'react';
import { Link, useParams } from 'react-router-dom';

const OrderDetail = () => {
  const { id } = useParams();
  
  // Mock data for order detail
  const orderId = id || 'ZAG-123456';
  const currentStep = 2; // 0: Pending, 1: Approved, 2: Printing, 3: Shipped, 4: Delivered
  const steps = ['Pending', 'Approved', 'Printing', 'Shipped', 'Delivered'];

  return (
    <div className="space-y-8">
      
      {/* Back Button */}
      <div className="mb-2">
        <Link to="/account/orders" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Orders
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
        <div>
          <h2 className="text-3xl font-black text-gray-900">Order #{orderId}</h2>
          <p className="text-sm text-gray-500 font-medium mt-1">Placed on October 24, 2023</p>
        </div>
        <button className="bg-white border border-gray-200 hover:border-gray-900 text-gray-900 px-6 py-3 rounded-xl text-sm font-bold transition-all shadow-sm hover:shadow-md">
          Download Invoice
        </button>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm mb-8 relative">
        <div className="px-6 py-12 md:p-12 md:pb-16">
          <div className="relative flex justify-between items-center z-10 w-full">
            
            {/* Horizontal Line Background */}
            <div className="absolute top-1/2 left-0 w-full h-1 md:h-1.5 bg-gray-100 -z-10 rounded-full -translate-y-1/2"></div>
            {/* Horizontal Line Active */}
            <div 
              className="absolute top-1/2 left-0 h-1 md:h-1.5 bg-gray-900 -z-10 rounded-full transition-all duration-1000 ease-out -translate-y-1/2" 
              style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
            ></div>
            
            {steps.map((step, index) => {
              const isCompleted = index < currentStep;
              const isActive = index === currentStep;
              
              return (
                <div key={step} className="flex flex-col items-center relative group bg-white z-10">
                  {/* Dot */}
                  <div className={`rounded-full flex items-center justify-center font-black shadow-sm transition-all duration-500 ${
                    isCompleted 
                      ? 'bg-gray-900 text-white w-8 h-8 md:w-12 md:h-12 border-2 md:border-4 border-white' 
                      : isActive 
                        ? 'bg-white border-gray-900 text-gray-900 ring-4 ring-gray-100 w-12 h-12 border-4' 
                        : 'bg-white border-gray-200 text-gray-400 w-8 h-8 md:w-12 md:h-12 border-2 md:border-4'
                  }`}>
                    {isCompleted ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <span className={isActive ? 'text-lg md:text-xl' : 'text-xs md:text-base'}>{index + 1}</span>
                    )}
                  </div>

                  {/* Label */}
                  <span className={`absolute top-14 left-1/2 -translate-x-1/2 text-center px-2 bg-white whitespace-nowrap transition-all duration-300 ${
                    isActive 
                      ? 'block font-black text-gray-900 text-sm md:text-base scale-110 md:scale-100' 
                      : 'hidden md:block text-xs md:text-sm font-medium text-gray-400'
                  } ${isCompleted ? 'md:text-gray-900 md:font-bold' : ''}`}>
                    {step}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-100 bg-gray-50/50">
          <h3 className="text-xl font-black text-gray-900">Items in Order</h3>
        </div>
        <div className="divide-y divide-gray-100">
          <div className="p-8 flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-gray-50/50 transition-colors">
            <div className="w-24 h-24 bg-gray-100 rounded-2xl border border-gray-200 flex-shrink-0 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400" alt="Product" className="w-full h-full object-cover" />
            </div>
            <div className="flex-grow">
              <Link to="/products/1" className="text-lg font-black text-gray-900 hover:text-gray-600 transition-colors">Premium Business Cards</Link>
              <p className="text-sm text-gray-500 mt-2 font-medium">Design: <span className="text-gray-900">front_back_design.pdf</span></p>
              <p className="text-sm text-gray-500 mt-1 font-medium">Qty: <span className="text-gray-900">500</span></p>
            </div>
            <div className="text-right mt-4 md:mt-0">
              <p className="font-black text-gray-900 text-xl">$1250.00</p>
            </div>
          </div>
        </div>
        
        {/* Summary Footer */}
        <div className="bg-gray-50/80 p-8 flex justify-end border-t border-gray-100">
          <div className="w-full md:w-1/3 space-y-3 text-sm">
            <div className="flex justify-between text-gray-600 font-medium">
              <span>Subtotal</span>
              <span className="text-gray-900">$1250.00</span>
            </div>
            <div className="flex justify-between text-gray-600 font-medium">
              <span>GST (18%)</span>
              <span className="text-gray-900">$225.00</span>
            </div>
            <div className="flex justify-between text-gray-600 font-medium">
              <span>Shipping</span>
              <span className="text-gray-900">$75.00</span>
            </div>
            <div className="border-t border-gray-200 pt-4 mt-4 flex justify-between font-black text-gray-900 text-lg">
              <span>Total</span>
              <span className="text-brand-black text-2xl">$1550.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Constraints note */}
      <div className="bg-yellow-50/80 border border-yellow-200 rounded-2xl p-6 text-sm text-yellow-800 flex items-start shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 flex-shrink-0 mt-0.5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <p className="font-black mb-1 text-base text-yellow-900">Modification Restricted</p>
          <p className="font-medium text-yellow-800/80 leading-relaxed">This order is currently in the <strong className="text-yellow-900">Printing</strong> phase and can no longer be modified or cancelled. (Pending final cancellation policy).</p>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;