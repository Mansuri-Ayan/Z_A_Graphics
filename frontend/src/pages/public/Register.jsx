import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Mail, Lock, User, Phone } from 'lucide-react';
import logo from '../../assets/logo/logo.png';

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-32 pb-12 px-4 sm:px-6 relative overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Register Card */}
      <div className="w-full max-w-5xl bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] relative z-10 flex overflow-hidden">

        {/* Left Side: Premium Branding (Hidden on mobile) */}
        <div className="hidden lg:flex lg:w-1/2 bg-brand-black p-12 relative flex-col justify-center gap-12">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-blue/30 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-purple-500/20 rounded-full blur-[80px]"></div>
          </div>

          <div className="relative z-10">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={logo} alt="Z.A Graphics Logo" className="h-16 w-auto object-contain" />
            </Link>
          </div>

          <div className="relative z-10 mt-8 mb-10">
            <h2 className="text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Join the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400"> Creative</span><br />
              Network.
            </h2>
            <p className="text-gray-400 text-lg font-bold leading-relaxed mb-8">
              Create your customer account to unlock bulk pricing, direct priority support, and instant tracking for all your printing needs.
            </p>

            {/* Features List */}
            <ul className="space-y-4">
              {['Priority bulk ordering', 'Dedicated account manager', 'Live shipment tracking'].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-black text-gray-300 uppercase tracking-widest">
                  <div className="w-6 h-6 rounded-full bg-brand-blue/20 flex items-center justify-center text-brand-blue shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Register Form */}
        <div className="w-full lg:w-1/2 p-8 md:p-10 lg:p-14 flex flex-col justify-center">
          <div className="mb-8 text-center lg:text-left">
            {/* Mobile Logo (Visible only on mobile) */}
            <Link to="/" className="lg:hidden inline-flex items-center gap-3 mb-6">
              <img src={logo} alt="Z.A Graphics Logo" className="h-10 w-auto object-contain" />
              <span className="text-xl font-black tracking-tight text-brand-black">Z.A Graphics</span>
            </Link>

            <h1 className="text-3xl md:text-4xl font-black text-brand-black tracking-tight mb-2">Create Account</h1>
            <p className="text-gray-500 font-bold">Sign up for your Z.A Graphics portal</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            <div className="space-y-1.5 relative">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <User size={18} strokeWidth={2.5} />
                </div>
                <input
                  type="text"
                  required
                  className="w-full border-2 border-gray-100 rounded-xl pl-12 pr-4 py-3.5 text-brand-black focus:outline-none focus:border-brand-black focus:ring-4 focus:ring-brand-black/5 hover:border-gray-200 transition-all text-sm font-bold shadow-sm placeholder:text-gray-300 placeholder:font-bold bg-gray-50/50 focus:bg-white"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="space-y-1.5 relative">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} strokeWidth={2.5} />
                </div>
                <input
                  type="email"
                  required
                  className="w-full border-2 border-gray-100 rounded-xl pl-12 pr-4 py-3.5 text-brand-black focus:outline-none focus:border-brand-black focus:ring-4 focus:ring-brand-black/5 hover:border-gray-200 transition-all text-sm font-bold shadow-sm placeholder:text-gray-300 placeholder:font-bold bg-gray-50/50 focus:bg-white"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="space-y-1.5 relative">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Phone Number</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Phone size={18} strokeWidth={2.5} />
                </div>
                <input
                  type="tel"
                  required
                  className="w-full border-2 border-gray-100 rounded-xl pl-12 pr-4 py-3.5 text-brand-black focus:outline-none focus:border-brand-black focus:ring-4 focus:ring-brand-black/5 hover:border-gray-200 transition-all text-sm font-bold shadow-sm placeholder:text-gray-300 placeholder:font-bold bg-gray-50/50 focus:bg-white"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div className="space-y-1.5 relative">
              <label className="block text-[10px] font-black text-gray-400 uppercase tracking-widest pl-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock size={18} strokeWidth={2.5} />
                </div>
                <input
                  type="password"
                  required
                  className="w-full border-2 border-gray-100 rounded-xl pl-12 pr-4 py-3.5 text-brand-black focus:outline-none focus:border-brand-black focus:ring-4 focus:ring-brand-black/5 hover:border-gray-200 transition-all text-sm font-bold shadow-sm placeholder:text-gray-300 placeholder:font-bold bg-gray-50/50 focus:bg-white"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-brand-black hover:bg-gray-900 text-white font-black py-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-xl transition-all hover:-translate-y-1 text-sm uppercase tracking-widest group mt-6"
            >
              Sign Up
              <ArrowRight size={18} strokeWidth={3} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <div className="mt-8 text-center lg:text-left text-sm text-gray-500 font-bold">
            Already have an account?{' '}
            <Link to="/login" className="text-brand-black hover:text-brand-blue font-black underline decoration-2 underline-offset-4 transition-colors">
              Sign in
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;