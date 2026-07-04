import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import logo from '../../assets/logo/logo.png';

const forgotPasswordSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

const ForgotPassword = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    // Mock API call
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-32 pb-12 px-4 sm:px-6 relative overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse"></div>
      </div>

      {/* Main Card */}
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

          <div className="relative z-10 mb-6">
            <h2 className="text-5xl font-black text-white leading-[1.1] tracking-tight mb-6">
              Account<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-blue-400">Recovery</span><br />
              Portal.
            </h2>
            <p className="text-gray-400 text-lg font-bold leading-relaxed mb-8">
              Regain access to your customer dashboard securely to continue managing your premium bulk printing orders.
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2 p-10 sm:p-12 md:p-16 flex flex-col justify-center bg-white relative">
          {!submitted ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="mb-10 text-center lg:text-left">
                {/* Mobile Logo (Visible only on mobile) */}
                <Link to="/" className="lg:hidden inline-flex items-center gap-3 mb-8">
                  <img src={logo} alt="Z.A Graphics Logo" className="h-10 w-auto object-contain" />
                  <span className="text-xl font-black tracking-tight text-brand-black">Z.A Graphics</span>
                </Link>
                
                <h1 className="text-3xl md:text-4xl font-black text-brand-black tracking-tight mb-3">Reset Password</h1>
                <p className="text-gray-500 font-bold">Enter your email to receive a secure link.</p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2 relative">
                  <label className="block text-xs font-black text-gray-400 uppercase tracking-widest pl-1">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                      <Mail size={18} strokeWidth={2.5} />
                    </div>
                    <input 
                      type="email" 
                      {...register('email')}
                      className={`w-full border-2 ${errors.email ? 'border-red-400' : 'border-gray-100'} rounded-2xl pl-12 pr-4 py-4 text-brand-black focus:outline-none focus:border-brand-black focus:ring-4 focus:ring-brand-black/5 hover:border-gray-200 transition-all text-sm font-bold shadow-sm placeholder:text-gray-300 placeholder:font-bold bg-gray-50/50 focus:bg-white`} 
                      placeholder="you@company.com"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs font-bold pl-1 pt-1">{errors.email.message}</p>}
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-3 bg-brand-black hover:bg-gray-900 text-white font-black py-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-xl transition-all hover:-translate-y-1 text-sm uppercase tracking-widest group mt-8 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isLoading ? 'Sending...' : 'Send Reset Link'}
                  {!isLoading && <ArrowRight size={18} strokeWidth={3} className="transition-transform group-hover:translate-x-1" />}
                </button>
              </form>
              
              <div className="mt-10 text-center lg:text-left text-sm text-gray-500 font-bold">
                Remember your password?{' '}
                <Link to="/login" className="text-brand-black hover:text-brand-blue font-black underline decoration-2 underline-offset-4 transition-colors">
                  Sign in
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 animate-in fade-in zoom-in-95 duration-700 flex flex-col items-center justify-center h-full">
              <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8 shadow-sm border-2 border-green-100 relative">
                <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-20 animate-pulse"></div>
                <CheckCircle2 className="w-12 h-12 relative z-10" strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-brand-black tracking-tight mb-4">Check your email</h2>
              <p className="text-lg text-gray-500 font-bold leading-relaxed mb-10 max-w-sm">
                We've sent a secure password reset link to your email address. It will expire in 15 minutes.
              </p>
              <Link to="/login" className="inline-flex items-center text-sm font-black uppercase tracking-widest text-brand-black hover:text-brand-blue transition-colors group">
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" strokeWidth={3} />
                Back to Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;