import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import mockProducts from '../../mock-data/products.json';
import MediaGallery from '../../components/feature/MediaGallery';
import DesignUploader from '../../components/feature/DesignUploader';
import ProductCard from '../../components/feature/ProductCard';
import { useCart } from '../../context/CartContext';
import { useToast } from "../../components/ui/Toast/useToast";
import { ThumbsUp, ThumbsDown, Star, Heart } from 'lucide-react';
import { useFavorites } from '../../context/FavoritesContext';

const ProductDetail = () => {
  const { slug } = useParams(); // Using slug as per route, but finding by id for mock data
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { success } = useToast();
  const [isAsking, setIsAsking] = useState(false);
  const [questionText, setQuestionText] = useState('');
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [activeTab, setActiveTab] = useState('faq');

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

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!reviewText.trim()) return;
    success('Review submitted successfully! It will be visible after moderation.');
    setIsWritingReview(false);
    setReviewText('');
    setReviewRating(5);
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

      <div className="flex flex-col lg:flex-row gap-6 md:gap-12 bg-white p-4 sm:p-6 md:p-10 border-t border-gray-100">
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
          <div className="bg-gray-50 p-4 md:p-8 rounded-sm border border-gray-200 mb-6 md:mb-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-6">
              <div>
                <label className="block text-sm font-bold text-gray-900 mb-3 uppercase tracking-wider">Quantity</label>
                <div className="flex items-center">
                  <button
                    className="w-12 h-12 cursor-pointer border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-700 text-xl font-medium"
                    onClick={() => setQuantity(Math.max(product.minOrderQty, quantity - Math.max(1, Math.floor(product.minOrderQty / 10))))}
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
                    className="w-12 h-12 cursor-pointer border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 transition-colors text-gray-700 text-xl font-medium"
                    onClick={() => setQuantity(quantity + Math.max(1, Math.floor(product.minOrderQty / 10)))}
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

          <div className="fixed bottom-[calc(3.5rem+env(safe-area-inset-bottom))] md:bottom-0 left-0 right-0 md:left-0 md:right-auto md:w-full bg-white/95 backdrop-blur-xl p-3 border-t border-gray-200/60 shadow-[0_-8px_30px_rgb(0,0,0,0.08)] rounded-t-3xl z-40 md:static md:bg-transparent md:p-0 md:border-0 md:shadow-none md:rounded-none md:z-auto mt-auto flex gap-3">
            <button
              onClick={() => toggleFavorite(product)}
              className={`px-5 bg-white border border-gray-200 text-gray-500 hover:text-brand-black rounded-sm transition-all flex items-center justify-center shrink-0 ${isFavorite(product.id) ? '!text-brand-black border-black bg-white' : ''}`}
              title={isFavorite(product.id) ? "Remove from Favorites" : "Add to Favorites"}
            >
              <Heart className={`w-7 h-7 ${isFavorite(product.id) ? 'fill-current' : ''}`} />
            </button>
            <button
              onClick={handleAddToCart}
              className="flex-1 cursor-pointer bg-brand-black hover:bg-gray-800 text-white font-bold py-3.5 rounded-sm transition-all duration-300 text-lg flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-16 bg-white p-4 sm:p-6 md:p-12 border-t border-gray-100">
        <div className="flex items-center justify-evenly border-b border-gray-200 mb-6 md:mb-10">
          <button
            onClick={() => setActiveTab('faq')}
            className={`flex-1 text-center text-base md:text-2xl font-black transition-all pb-4 border-b-4 ${activeTab === 'faq' ? 'text-brand-black border-brand-black -mb-0.5' : 'text-gray-400 hover:text-gray-600 border-transparent'}`}
          >
            <span className="hidden md:inline">Frequently Asked Questions</span>
            <span className="md:hidden">FAQs</span>
          </button>
          <button
            onClick={() => setActiveTab('reviews')}
            className={`flex-1 text-center text-base md:text-2xl font-black transition-all pb-4 border-b-4 ${activeTab === 'reviews' ? 'text-brand-black border-brand-black -mb-0.5' : 'text-gray-400 hover:text-gray-600 border-transparent'}`}
          >
            Reviews
          </button>
        </div>

        {activeTab === 'faq' ? (
          <>
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
                    <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors cursor-pointer"><ThumbsUp className="w-4 h-4" /></button>
                    <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors cursor-pointer"><ThumbsDown className="w-4 h-4" /></button>
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
                    <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors cursor-pointer"><ThumbsUp className="w-4 h-4" /></button>
                    <button className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-md transition-colors cursor-pointer"><ThumbsDown className="w-4 h-4" /></button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mb-8 md:mb-12">
              <button className="px-6 py-2.5 border border-gray-200 rounded-full text-sm font-bold text-gray-700 hover:bg-brand-black hover:text-white cursor-pointer transition-colors shadow-sm cursor-pointer">
                Show more FAQs
              </button>
            </div>

            <div className="bg-gray-50 p-4 md:p-8 rounded-sm max-w-2xl mx-auto border border-gray-200">
              {!isAsking ? (
                <div className="text-center">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Still have questions?</h3>
                  <p className="text-xs md:text-base text-gray-600 mb-4 md:mb-6">Ask a question if you have any.</p>
                  <button
                    onClick={() => setIsAsking(true)}
                    className="inline-block bg-white text-gray-900 border border-gray-300 text-sm md:text-base font-bold py-2 px-6 md:py-3 md:px-8 rounded-sm transition-all cursor-pointer hover:bg-brand-black hover:text-white"
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
                        className="px-5 py-2.5 rounded-sm text-gray-500 hover:bg-white font-medium transition-colors border border-transparent hover:border-gray-300 text-sm"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 bg-brand-black text-white rounded-sm font-bold hover:bg-gray-800 transition-colors text-sm"
                      >
                        Submit Question
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {!isWritingReview ? (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-gray-900">Customer Reviews</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex text-yellow-400">
                        <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current text-gray-300" />
                      </div>
                      <span className="text-sm font-bold text-gray-600">4.0 out of 5 (2 Reviews)</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsWritingReview(true)}
                    className="bg-brand-black hover:bg-gray-800 text-white font-bold py-2.5 px-6 rounded-xl transition-all shadow-sm hover:shadow text-sm shrink-0 cursor-pointer"
                  >
                    Write a Review
                  </button>
                </div>

                <div className="grid gap-4 md:gap-6">
                  <div className="p-4 md:p-6 rounded-[1rem] md:rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-black">AS</div>
                        <div>
                          <p className="font-bold text-gray-900">Alice Smith</p>
                          <p className="text-xs text-gray-500 font-medium">Verified Buyer</p>
                        </div>
                      </div>
                      <div className="flex text-yellow-400">
                        <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">"Excellent quality! The colors are vibrant and the cardstock is perfectly thick."</p>
                  </div>

                  <div className="p-4 md:p-6 rounded-[1rem] md:rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-black">BJ</div>
                        <div>
                          <p className="font-bold text-gray-900">Bob Jones</p>
                          <p className="text-xs text-gray-500 font-medium">Verified Buyer</p>
                        </div>
                      </div>
                      <div className="flex text-yellow-400">
                        <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current text-gray-300" />
                      </div>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">"Great product, but shipping took a day longer than expected. Will order again though."</p>
                  </div>
                </div>

                <div className="flex justify-center mb-6">
                  <button className="px-6 py-2.5 border border-gray-200 rounded-full text-sm font-bold text-gray-700 hover:bg-brand-black hover:text-white cursor-pointer transition-colors shadow-sm">
                    Show more Reviews
                  </button>
                </div>
              </>
            ) : (
              <div className="bg-gray-50 p-4 md:p-8 rounded-[1rem] md:rounded-2xl border border-gray-100 max-w-2xl mx-auto">
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-left">Write your review</h3>
                <form onSubmit={handleSubmitReview} className="flex flex-col items-start gap-4 w-full">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-bold text-gray-700">Rating:</span>
                    <div className="flex text-yellow-400 cursor-pointer">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-6 h-6 transition-colors ${star <= reviewRating ? 'fill-current' : 'text-gray-300'}`}
                          onClick={() => setReviewRating(star)}
                        />
                      ))}
                    </div>
                  </div>
                  <textarea
                    className="w-full rounded-xl border border-gray-200 bg-white p-4 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 shadow-sm text-sm"
                    rows="4"
                    placeholder="Tell us what you think about this product..."
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    autoFocus
                  ></textarea>
                  <div className="flex gap-3 w-full justify-end">
                    <button
                      type="button"
                      onClick={() => setIsWritingReview(false)}
                      className="px-5 py-2.5 rounded-xl text-gray-500 hover:bg-white font-medium transition-colors border border-transparent hover:border-gray-200 text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 shadow-sm transition-colors text-sm"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        )}
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
