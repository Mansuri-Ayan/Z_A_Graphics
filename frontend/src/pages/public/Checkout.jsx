import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { checkoutSchema } from '../../schemas/checkoutSchemas';
import { useCart } from '../../context/CartContext';
import { useToast } from "../../components/ui/Toast/useToast";

const AddressForm = ({ register, prefix, errors }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Full Name *</label>
      <input {...register(`${prefix}.fullName`)} type="text" className={`w-full border ${errors?.fullName ? 'border-red-500' : 'border-gray-200'} rounded px-3 py-1.5 md:py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500`} />
      {errors?.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
    </div>
    <div>
      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Company Name</label>
      <input {...register(`${prefix}.companyName`)} type="text" className="w-full border border-gray-200 rounded px-3 py-1.5 md:py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
    </div>
    <div className="md:col-span-2">
      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Email Address *</label>
      <input {...register(`${prefix}.email`)} type="email" className={`w-full border ${errors?.email ? 'border-red-500' : 'border-gray-200'} rounded px-3 py-1.5 md:py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500`} />
      {errors?.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
    </div>
    <div className="md:col-span-2">
      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Street Address *</label>
      <input {...register(`${prefix}.streetAddress`)} type="text" className={`w-full border ${errors?.streetAddress ? 'border-red-500' : 'border-gray-200'} rounded px-3 py-1.5 md:py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500`} />
      {errors?.streetAddress && <p className="text-red-500 text-xs mt-1">{errors.streetAddress.message}</p>}
    </div>
    <div>
      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">City *</label>
      <input {...register(`${prefix}.city`)} type="text" className={`w-full border ${errors?.city ? 'border-red-500' : 'border-gray-200'} rounded px-3 py-1.5 md:py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500`} />
      {errors?.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
    </div>
    <div>
      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">State *</label>
      <input {...register(`${prefix}.state`)} type="text" className={`w-full border ${errors?.state ? 'border-red-500' : 'border-gray-200'} rounded px-3 py-1.5 md:py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500`} />
      {errors?.state && <p className="text-red-500 text-xs mt-1">{errors.state.message}</p>}
    </div>
    <div>
      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">PIN Code *</label>
      <input {...register(`${prefix}.pinCode`)} type="text" className={`w-full border ${errors?.pinCode ? 'border-red-500' : 'border-gray-200'} rounded px-3 py-1.5 md:py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500`} />
      {errors?.pinCode && <p className="text-red-500 text-xs mt-1">{errors.pinCode.message}</p>}
    </div>
    <div>
      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
      <input {...register(`${prefix}.phone`)} type="tel" className={`w-full border ${errors?.phone ? 'border-red-500' : 'border-gray-200'} rounded px-3 py-1.5 md:py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500`} />
      {errors?.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
    </div>
  </div>
);

const Checkout = () => {
  const [step, setStep] = useState(1); // 1 = Shipping/Billing, 2 = Payment
  const navigate = useNavigate();
  const { cart, subtotal, gst, total, clearCart } = useCart();
  const { success, info } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      sameAsBilling: true,
    }
  });

  const sameAsBilling = watch('sameAsBilling');

  const onShippingSubmit = (data) => {
    setStep(2);
  };

  const handlePayment = () => {
    // Mock processing delay
    info('Processing payment...');
    setTimeout(() => {
      clearCart();
      success('Payment successful!');
      navigate('/account');
    }, 1500);
  };

  if (cart.length === 0 && step < 3) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/products" className="text-blue-600 hover:underline">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
      {/* Minimal Header for Checkout */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-center relative">
          <Link to="/cart" className="absolute left-4 sm:left-6 lg:left-8 text-gray-500 hover:text-gray-900 transition-colors">
            &larr; Back to Cart
          </Link>
          <Link to="/" className="text-2xl font-black text-gray-900 tracking-tight">
            Z.A Graphics
          </Link>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8 w-full">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
          
          {/* Left Column: Flow */}
          <div className="w-full lg:w-3/5">
            {/* Progress Indicator */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center text-sm md:text-base">
                <div className={`flex items-center ${step >= 1 ? 'text-blue-600' : 'text-gray-400'}`}>
                  <span className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold border-2 ${step >= 1 ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}>1</span>
                  <span className="ml-2 font-medium">Shipping & Billing</span>
                </div>
                <div className={`flex-grow border-t-2 mx-2 md:mx-4 ${step >= 2 ? 'border-blue-600' : 'border-gray-200'}`}></div>
                <div className={`flex items-center ${step >= 2 ? 'text-blue-600' : 'text-gray-400'}`}>
                  <span className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center font-bold border-2 ${step >= 2 ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}>2</span>
                  <span className="ml-2 font-medium">Payment</span>
                </div>
              </div>
            </div>

            {/* Step 1: Shipping/Billing Form */}
            {step === 1 && (
              <form onSubmit={handleSubmit(onShippingSubmit)} className="bg-white rounded-2xl md:rounded-3xl border border-gray-100 p-5 sm:p-6 md:p-10 shadow-sm">
                <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4 md:mb-6">Billing Address</h2>
                
                <AddressForm register={register} prefix="billingAddress" errors={errors.billingAddress} />

                <div className="flex items-center my-8 bg-gray-50 p-4 rounded-xl">
                  <input 
                    type="checkbox" 
                    id="sameAddress" 
                    {...register('sameAsBilling')}
                    className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="sameAddress" className="ml-3 text-sm text-gray-700 cursor-pointer font-medium">
                    Shipping address is same as billing
                  </label>
                </div>

                {!sameAsBilling && (
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Shipping Address</h3>
                    <AddressForm register={register} prefix="shippingAddress" errors={errors.shippingAddress} />
                  </div>
                )}

                <div className="flex justify-end border-t border-gray-100 pt-8 mt-4">
                  <button 
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Continue to Payment
                  </button>
                </div>
              </form>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-100 p-5 sm:p-6 md:p-10 shadow-sm">
                <div className="flex justify-between items-center mb-6 md:mb-8">
                  <h2 className="text-xl md:text-2xl font-black text-gray-900">Payment Method</h2>
                  <button onClick={() => setStep(1)} className="text-blue-600 text-sm font-bold hover:underline">
                    Edit Details
                  </button>
                </div>

                <div className="border-2 border-blue-600 bg-blue-50 rounded-[1rem] md:rounded-2xl p-4 md:p-6 mb-6 md:mb-8 flex items-start">
                  <input type="radio" checked readOnly className="mt-1 h-5 w-5 text-blue-600 focus:ring-blue-500" />
                  <div className="ml-4">
                    <span className="block font-bold text-gray-900 text-lg">Razorpay Secure</span>
                    <span className="block text-sm text-gray-600 mt-1">Pay via Credit Card, Debit Card, NetBanking, or UPI.</span>
                    <div className="flex space-x-3 mt-4">
                      <div className="w-12 h-8 bg-white border border-gray-200 rounded text-xs flex items-center justify-center font-bold text-gray-500">CC</div>
                      <div className="w-12 h-8 bg-white border border-gray-200 rounded text-xs flex items-center justify-center font-bold text-gray-500">UPI</div>
                      <div className="w-12 h-8 bg-white border border-gray-200 rounded text-xs flex items-center justify-center font-bold text-gray-500">NET</div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center border-t border-gray-100 pt-8">
                  <button 
                    onClick={() => setStep(1)}
                    className="text-gray-500 hover:text-gray-900 font-bold px-4 py-2 transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    onClick={handlePayment}
                    className="bg-gray-900 hover:bg-black text-white font-bold px-10 py-4 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  >
                    Pay ${total.toFixed(2)} Securely
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Order Summary Sidebar */}
          <div className="w-full lg:w-2/5">
            <div className="bg-white rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 sticky top-24 border border-gray-100 shadow-sm">
              <h3 className="text-lg md:text-xl font-black text-gray-900 mb-4 md:mb-6">Order Summary</h3>
            
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8 max-h-[40vh] overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-start">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 border border-gray-100 rounded-lg md:rounded-xl flex-shrink-0 overflow-hidden">
                      <img src={item.image} alt="Product" className="w-full h-full object-cover" />
                    </div>
                    <div className="ml-3 md:ml-4 flex-grow">
                      <h4 className="text-xs md:text-sm font-bold text-gray-900 line-clamp-2 leading-snug">{item.name}</h4>
                      <p className="text-[10px] md:text-xs text-gray-500 mt-0.5 md:mt-1 font-medium">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-sm font-bold text-gray-900 ml-4">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-6 space-y-3 mb-6 text-sm">
                <div className="flex justify-between text-gray-600 font-medium">
                  <span>Subtotal</span>
                  <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600 font-medium">
                  <span>Shipping</span>
                  <span className="text-gray-500 italic">Free</span>
                </div>
                <div className="flex justify-between text-gray-600 font-medium">
                  <span>GST (18%)</span>
                  <span className="text-gray-900">${gst.toFixed(2)}</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-5 md:pt-6 mb-6 md:mb-8">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-gray-900 text-base md:text-lg">Total</span>
                  <span className="text-2xl md:text-3xl font-black text-blue-600">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-xs text-gray-500 flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 flex-shrink-0 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p className="leading-relaxed text-gray-600">Secure checkout with SSL encryption. Your data is safe with us.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
