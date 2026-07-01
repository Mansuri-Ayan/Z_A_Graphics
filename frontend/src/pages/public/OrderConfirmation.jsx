import React from 'react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-between">
      {/* Minimal Header */}
      <header className="bg-white border-b border-gray-100 py-4 px-6 sm:px-8">
        <Link to="/" className="inline-flex items-center gap-3">
          <span className="flex size-8 items-center justify-center rounded-md bg-gray-900 text-xs font-black text-white">ZA</span>
          <span className="text-lg font-black tracking-tight text-gray-900">Z.A Graphics</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-gray-100 p-8 sm:p-12 shadow-xl max-w-2xl w-full text-center relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-50/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-4xl font-black text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-lg text-gray-600 font-medium mb-10 max-w-md mx-auto">
            Thank you for choosing Z.A Graphics. Your order has been placed and is currently pending approval.
          </p>

          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-6 mb-8 text-left">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 font-bold mb-1">Order ID</p>
                <p className="text-lg font-black text-gray-900">#ZAG-128945</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-bold mb-1">Amount</p>
                <p className="text-lg font-black text-gray-900">$1,829.00</p>
              </div>
              <div className="col-span-2 mt-2">
                <p className="text-sm text-gray-500 font-bold mb-1">Status</p>
                <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-bold">Pending Approval</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50/80 border border-yellow-200 rounded-2xl p-5 text-sm text-yellow-800 flex items-start text-left mb-10">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-black mb-1 text-yellow-900 text-base">Modification Window</p>
              <p className="font-medium text-yellow-800/80">You have <strong>2 hours</strong> to update your artwork or cancel the order before it enters the printing phase.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/account/orders" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
              Track Order
            </Link>
            <Link to="/products" className="bg-white border border-gray-200 hover:border-gray-900 text-gray-900 font-bold py-4 px-8 rounded-xl shadow-sm hover:shadow-md transition-all">
              Continue Shopping
            </Link>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="bg-white border-t border-gray-100 py-6 text-center">
        <p className="text-sm text-gray-500 font-medium">&copy; {new Date().getFullYear()} Z.A Graphics. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default OrderConfirmation;