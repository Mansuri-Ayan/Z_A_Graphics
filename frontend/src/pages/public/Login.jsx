import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Mail, Lock } from 'lucide-react';
import logo from '../../assets/logo/logo.png';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-32 pb-12 px-4 sm:px-6 relative overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
      </div>

      {/* Main Login Card */}
      <div className="w-full max-w-5xl bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative z-10 flex overflow-hidden">

        {/* Left Side: Premium Branding (Hidden on mobile) */}
        <div className="hidden lg:flex lg:w-1/2 bg-brand-black p-12 relative flex-col justify-center gap-12">

          <div className="relative z-10">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={logo} alt="Z.A Graphics Logo" className="h-16 w-auto object-contain" />
            </Link>
          </div>

          <div className="relative z-10 mb-10">
            <h2 className="text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Premium<br />
              <span className="font-serif italic text-gray-400 font-medium tracking-tight">Print & Design</span><br />
              Services.
            </h2>
            <p className="text-gray-400 text-lg font-bold leading-relaxed mb-10">
              Log in to access your customer dashboard, manage active orders, and track live shipments instantly.
            </p>

            {/* Trust badges */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-brand-black bg-blue-100 flex items-center justify-center text-brand-blue font-bold text-xs">JP</div>
                <div className="w-10 h-10 rounded-full border-2 border-brand-black bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">SK</div>
                <div className="w-10 h-10 rounded-full border-2 border-brand-black bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">MR</div>
              </div>
              <p className="text-sm font-black text-white">Trusted by 500+ clients.</p>
            </div>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-14 lg:p-16 flex flex-col justify-center">
          <div className="mb-10 text-center lg:text-left">
            {/* Mobile Logo (Visible only on mobile) */}
            <Link to="/" className="lg:hidden inline-flex items-center gap-3 mb-8">
              <img src={logo} alt="Z.A Graphics Logo" className="h-10 w-auto object-contain" />
              <span className="text-xl font-black tracking-tight text-brand-black">Z.A Graphics</span>
            </Link>

            <h1 className="text-3xl md:text-4xl font-black text-brand-black tracking-tight mb-3">Welcome Back</h1>
            <p className="text-gray-500 font-bold">Sign in to your Z.A Graphics portal</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2 relative">
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} strokeWidth={2.5} />
                </div>
                <input
                  type="email"
                  required
                  className="w-full border-2 border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-brand-black focus:outline-none focus:border-brand-black focus:ring-4 focus:ring-brand-black/5 hover:border-gray-200 transition-all text-sm font-bold shadow-sm placeholder:text-gray-300 placeholder:font-bold bg-gray-50/50 focus:bg-white"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="space-y-2 relative">
              <div className="flex justify-between items-center pl-1 pr-1">
                <label className="block text-xs font-black text-gray-400 uppercase tracking-widest">Password</label>
                <Link to="/forgot-password" className="text-xs font-black text-gray-500 hover:text-brand-black transition-colors uppercase tracking-wider">
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} strokeWidth={2.5} />
                </div>
                <input
                  type="password"
                  required
                  className="w-full border-2 border-gray-100 rounded-2xl pl-12 pr-4 py-4 text-brand-black focus:outline-none focus:border-brand-black focus:ring-4 focus:ring-brand-black/5 hover:border-gray-200 transition-all text-sm font-bold shadow-sm placeholder:text-gray-300 placeholder:font-bold bg-gray-50/50 focus:bg-white"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-brand-black hover:bg-gray-900 text-white font-bold py-4 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-sm uppercase tracking-widest group mt-8"
            >
              Sign In
              <ArrowRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <div className="mt-10 text-center lg:text-left text-sm text-gray-500 font-bold">
            Don't have an account?{' '}
            <Link to="/register" className="text-brand-black hover:text-gray-600 font-black underline decoration-2 underline-offset-4 transition-colors">
              Create account
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;