import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <div className="min-h-[90vh] flex flex-col justify-center items-center py-16 bg-gray-50 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/40 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/40 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

      <div className="bg-white p-10 md:p-12 rounded-3xl border border-gray-100 shadow-xl max-w-md w-full relative z-10">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-3 mb-8">
            <span className="flex size-10 items-center justify-center rounded-lg bg-gray-900 text-sm font-black text-white">ZA</span>
            <span className="text-xl font-black tracking-tight text-gray-900">Z.A Graphics</span>
          </Link>
          <h1 className="text-3xl font-black text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 mt-3 font-medium">Sign in to your Z.A Graphics account</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 hover:border-gray-300 transition-all text-sm font-medium" 
              placeholder="you@company.com"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-bold text-gray-700">Password</label>
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-700 font-bold">
                Forgot password?
              </Link>
            </div>
            <input 
              type="password" 
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 hover:border-gray-300 transition-all text-sm font-medium" 
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 text-base"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500 font-medium">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:text-blue-700 font-bold">
            Register here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;