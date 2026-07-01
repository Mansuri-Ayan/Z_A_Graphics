import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-[80vh] flex flex-col justify-center items-center py-12 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-md border border-gray-200 shadow-sm max-w-md w-full">
        {!submitted ? (
          <>
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-brand-black">Reset Password</h1>
              <p className="text-sm text-gray-500 mt-2">Enter your email and we'll send you a reset link</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  className="w-full border border-gray-200 rounded px-3 py-2 text-brand-black focus:outline-none focus:ring-1 focus:ring-brand-blue hover:border-gray-400 transition-colors" 
                  placeholder="you@company.com"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-blue hover:bg-blue-700 text-white font-medium py-3 rounded shadow-sm transition-colors text-base"
              >
                Send Reset Link
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 bg-green-50 text-success rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-brand-black mb-2">Check your email</h2>
            <p className="text-sm text-gray-600 mb-6">We've sent a password reset link to your email address.</p>
          </div>
        )}

        <div className="mt-6 text-center text-sm">
          <Link to="/login" className="text-brand-blue hover:underline font-medium flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;