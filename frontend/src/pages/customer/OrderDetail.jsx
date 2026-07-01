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
      <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-12 shadow-sm mb-8 overflow-hidden relative">
        <div className="relative flex flex-col md:flex-row justify-between items-center z-10 mb-2">
          <div className="absolute top-1/2 left-0 w-full h-1.5 bg-gray-100 -z-10 hidden md:block rounded-full"></div>
          {/* Active progress bar */}
          <div 
            className="absolute top-1/2 left-0 h-1.5 bg-blue-600 -z-10 hidden md:block rounded-full transition-all duration-1000 ease-out" 
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>
          
          {steps.map((step, index) => (
            <div key={step} className="flex flex-col items-center mb-6 md:mb-0 relative group">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black border-4 shadow-sm mb-3 transition-all duration-500 ${
                index < currentStep 
                  ? 'bg-blue-600 border-white text-white' 
                  : index === currentStep 
                    ? 'bg-white border-blue-600 text-blue-600 ring-4 ring-blue-50' 
                    : 'bg-white border-gray-100 text-gray-400'
              }`}>
                {index < currentStep ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              <span className={`text-sm ${index <= currentStep ? 'font-bold text-gray-900' : 'font-medium text-gray-400'}`}>
                {step}
              </span>
            </div>
          ))}
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
              <Link to="/products/1" className="text-lg font-black text-gray-900 hover:text-blue-600 transition-colors">Premium Business Cards</Link>
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
              <span className="text-blue-600 text-2xl">$1550.00</span>
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