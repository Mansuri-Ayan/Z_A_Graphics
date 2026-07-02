import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

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
    <div className="min-h-screen flex flex-col justify-center items-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-50">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-brand-blue/10 via-blue-200/20 to-transparent rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 mix-blend-multiply"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-gray-300/30 via-transparent to-transparent rounded-full blur-[80px] translate-x-1/2 translate-y-1/2 mix-blend-multiply"></div>
      </div>

      <div className="bg-white/80 backdrop-blur-xl p-10 md:p-12 rounded-[2.5rem] border border-white shadow-[0_8px_40px_rgb(0,0,0,0.04)] max-w-lg w-full relative z-10 transition-all duration-500 hover:shadow-[0_8px_50px_rgb(0,0,0,0.08)] hover:bg-white">
        
        {!submitted ? (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-blue-100">
                <Mail className="w-7 h-7" />
              </div>
              <h1 className="text-3xl font-black text-brand-black tracking-tight mb-3">Reset Password</h1>
              <p className="text-base text-gray-500 font-medium">Enter your email and we'll send you a secure reset link.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                label="Email Address"
                type="email"
                placeholder="you@company.com"
                icon={Mail}
                error={errors.email?.message}
                {...register('email')}
              />

              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                className="w-full text-lg shadow-lg hover:shadow-xl mt-4"
                isLoading={isLoading}
              >
                Send Reset Link
              </Button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 animate-in fade-in zoom-in-95 duration-700">
            <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-green-100">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-black text-brand-black tracking-tight mb-3">Check your email</h2>
            <p className="text-base text-gray-500 font-medium leading-relaxed mb-8">
              We've sent a secure password reset link to your email address. It will expire in 15 minutes.
            </p>
          </div>
        )}

        <div className="mt-10 text-center">
          <Link to="/login" className="inline-flex items-center text-sm font-bold text-gray-500 hover:text-brand-black transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;