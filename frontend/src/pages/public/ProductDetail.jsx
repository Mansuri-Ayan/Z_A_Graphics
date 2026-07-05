import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import mockProducts from '../../mock-data/products.json';
import MediaGallery from '../../components/feature/MediaGallery';
import DesignUploader from '../../components/feature/DesignUploader';
import ProductCard from '../../components/feature/ProductCard';
import { useCart } from '../../context/CartContext';
import { useToast } from "../../components/ui/Toast/useToast";
import { ThumbsUp, ThumbsDown } from 'lucide-react';

const ProductDetail = () => {
  const { slug } = useParams(); // Using slug as per route, but finding by id for mock data
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { success } = useToast();
  const [isAsking, setIsAsking] = useState(false);
  const [questionText, setQuestionText] = useState('');
  
  // We're matching ID for now. If slug was really a slug, we'd find by slug.
  const product = mockProducts.find(p => p.id === slug) || mockProducts.find(p => p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug) || mockProducts[0];
  
  const [quantity, setQuantity] = useState(product.minOrderQty || 1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    success('Added to cart successfully!');
  };

  const handleAskQuestion = (e) => {
    e.preventDefault();
    if (!questionText.trim()) return;
    success('Question submitted! You can view the reply in your account.');
    setIsAsking(false);
    setQuestionText('');
  };

  const handleQuantityChange = (e) => {
    const val = parseInt(e.target.value, 10);
    if (!isNaN(val)) setQuantity(val);
  };

  const blurQuantity = () => {
    if (quantity < (product.minOrderQty || 1)) {
      setQuantity(product.minOrderQty || 1);
    }
  };

  const images = [
    product.image,
    "https://placehold.co/400x400/f8fafc/1a1a1a?text=Angle+2",
    "https://placehold.co/400x400/f8fafc/1a1a1a?text=Angle+3"
  ];
  const video = "https://www.w3schools.com/html/mov_bbb.mp4";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32 md:pb-16 bg-gray-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="text-xs md:text-sm text-gray-500 mb-4 md:mb-8 font-medium flex items-center gap-2 flex-wrap">
        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link> 
        <span className="text-gray-300">/</span> 
        <Link to="/products" className="hover:text-blue-600 transition-colors">Products</Link> 
        <span className="text-gray-300">/</span> 
        <span className="text-gray-900 font-bold truncate">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 md:gap-12 bg-white p-4 sm:p-6 md:p-10 rounded-[1.5rem] md:rounded-3xl border border-gray-100 shadow-sm">
        {/* Left: Media Gallery */}
        <div className="w-full lg:w-[45%]">
          <MediaGallery images={images} video={video} />
        </div>

        {/* Right: Product Info & Configuration */}
        <div className="w-full lg:w-[55%] flex flex-col">
          <div className="mb-2">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-blue-600">{product.category}</span>
          </div>
          <h1 className="text-2xl md:text-5xl font-black text-gray-900 mb-2 md:mb-4">{product.name}</h1>
          <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6">
            ${product.price.toFixed(2)} <span className="text-base md:text-lg text-gray-500 font-medium">/ unit</span>
          </div>
          
          <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
            High-quality {product.name.toLowerCase()} suitable for all your business needs. 
            Printed on premium material with vivid colors. Upload your custom design and we'll handle the rest.
          </p>

          {/* Configuration Block */}
          <div className="bg-gray-50 p-4 md:p-8 rounded-[1rem] md:rounded-2xl border border-gray-100 mb-6 md:mb-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Quantity</label>
                <div className="flex items-center">
                  <button 
                    className="w-12 h-12 border border-gray-200 rounded-l-xl bg-white flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-700 text-xl font-medium"
                    onClick={() => setQuantity(Math.max(product.minOrderQty, quantity - Math.max(1, Math.floor(product.minOrderQty/10))))}
                  >
                    -
                  </button>
                  <input 
                    type="number" 
                    value={quantity} 
                    onChange={handleQuantityChange}
                    onBlur={blurQuantity}
                    className="w-24 h-12 border-y border-gray-200 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 font-bold text-lg"
                  />
                  <button 
                    className="w-12 h-12 border border-gray-200 rounded-r-xl bg-white flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-700 text-xl font-medium"
                    onClick={() => setQuantity(quantity + Math.max(1, Math.floor(product.minOrderQty/10)))}
                  >
                    +
                  </button>
                </div>
              </div>
              
              <div className="text-right">
                <span className="block text-xs md:text-sm font-medium text-gray-500 mb-1">Subtotal</span>
                <span className="text-2xl md:text-3xl font-black text-gray-900">${(product.price * Math.max(quantity, product.minOrderQty)).toFixed(2)}</span>
              </div>
            </div>

            {quantity < product.minOrderQty && (
              <p className="text-red-500 text-sm mb-2 font-medium">Quantity must be at least {product.minOrderQty}.</p>
            )}
            <p className="text-sm text-gray-500 font-medium bg-blue-50 text-blue-700 py-2 px-3 rounded-lg inline-block">
              Minimum order: <span className="font-bold">{product.minOrderQty} pieces.</span>
            </p>
          </div>

          <DesignUploader />

          <div className="fixed bottom-[calc(3.5rem+env(safe-area-inset-bottom))] md:bottom-0 left-0 right-0 md:left-0 md:right-auto md:w-full bg-white/95 backdrop-blur-xl p-3 border-t border-gray-200/60 shadow-[0_-8px_30px_rgb(0,0,0,0.08)] rounded-t-3xl z-40 md:static md:bg-transparent md:p-0 md:border-0 md:shadow-none md:rounded-none md:z-auto mt-auto">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-16 bg-white p-4 sm:p-6 md:p-12 rounded-[1.5rem] md:rounded-3xl border border-gray-100 shadow-sm">
        <h2 className="text-lg md:text-3xl font-black text-gray-900 mb-4 md:mb-10 text-center">Frequently Asked Questions</h2>
        
        <div className="grid md:grid-cols-2 gap-3 md:gap-6 mb-6 md:mb-12">
          <div className="p-3 md:p-6 rounded-[1rem] md:rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100 flex flex-col justify-between">
            <div>
              <p className="font-bold text-sm md:text-base text-gray-900 mb-2 md:mb-3 flex items-start">
                <span className="text-blue-600 mr-2 md:mr-3 text-lg md:text-xl">Q.</span>
                Can I print different names on the cards in one bulk order?
              </p>
              <p className="text-gray-600 text-xs md:text-base leading-relaxed pl-6 md:pl-8">
                Yes, you can upload a multi-page PDF or a zip file containing the different designs.
              </p>
            </div>
            <div className="flex items-center gap-4 pl-6 md:pl-8 mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Was this helpful?</span>
              <div className="flex gap-2">
                <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"><ThumbsUp className="w-4 h-4" /></button>
                <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"><ThumbsDown className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
          <div className="p-3 md:p-6 rounded-[1rem] md:rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100 flex flex-col justify-between">
            <div>
              <p className="font-bold text-sm md:text-base text-gray-900 mb-2 md:mb-3 flex items-start">
                <span className="text-blue-600 mr-2 md:mr-3 text-lg md:text-xl">Q.</span>
                What is the paper thickness?
              </p>
              <p className="text-gray-600 text-xs md:text-base leading-relaxed pl-6 md:pl-8">
                Our standard business cards use 300 GSM premium cardstock.
              </p>
            </div>
            <div className="flex items-center gap-4 pl-6 md:pl-8 mt-3 md:mt-4 pt-3 md:pt-4 border-t border-gray-100">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Was this helpful?</span>
              <div className="flex gap-2">
                <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"><ThumbsUp className="w-4 h-4" /></button>
                <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors"><ThumbsDown className="w-4 h-4" /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-4 md:p-8 rounded-[1rem] md:rounded-2xl max-w-2xl mx-auto border border-blue-100">
          {!isAsking ? (
            <div className="text-center">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Still have questions?</h3>
              <p className="text-xs md:text-base text-gray-600 mb-4 md:mb-6">Ask a question if you have any.</p>
              <button 
                onClick={() => setIsAsking(true)}
                className="inline-block bg-white text-blue-600 text-sm md:text-base font-bold py-2 px-6 md:py-3 md:px-8 rounded-lg md:rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                Ask a question
              </button>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-left">Ask your question</h3>
              <form onSubmit={handleAskQuestion} className="flex flex-col items-start gap-4 w-full">
                <textarea 
                  className="w-full rounded-xl border border-gray-200 bg-white p-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 shadow-sm text-sm" 
                  rows="4" 
                  placeholder="Type your question here about this product..."
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  autoFocus
                ></textarea>
                <div className="flex gap-3 w-full justify-end">
                  <button 
                    type="button" 
                    onClick={() => setIsAsking(false)} 
                    className="px-5 py-2.5 rounded-xl text-gray-500 hover:bg-white font-medium transition-colors border border-transparent hover:border-gray-200 text-sm"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-sm transition-colors text-sm"
                  >
                    Submit Question
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-10 md:mt-16">
        <div className="flex items-center justify-between mb-4 md:mb-8">
          <h2 className="text-xl md:text-2xl font-black text-gray-900">You Might Also Like</h2>
          <Link to="/products" className="text-blue-600 font-bold hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
          {mockProducts.filter(p => p.id !== product.id).slice(0, 4).map((related) => (
            <ProductCard key={related.id} product={related} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
