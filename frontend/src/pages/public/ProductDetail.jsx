import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import mockProducts from '../../mock-data/products.json';
import MediaGallery from '../../components/feature/MediaGallery';
import DesignUploader from '../../components/feature/DesignUploader';
import ProductCard from '../../components/feature/ProductCard';
import { useCart } from '../../context/CartContext';
import { useToast } from "../../components/ui/Toast/useToast";

const ProductDetail = () => {
  const { slug } = useParams(); // Using slug as per route, but finding by id for mock data
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { success } = useToast();
  // We're matching ID for now. If slug was really a slug, we'd find by slug.
  const product = mockProducts.find(p => p.id === slug) || mockProducts.find(p => p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') === slug) || mockProducts[0];
  
  const [quantity, setQuantity] = useState(product.minOrderQty || 1);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    success('Added to cart successfully!');
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-32 md:pb-16 bg-gray-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-8 font-medium">
        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link> <span className="mx-2">&gt;</span> 
        <Link to="/products" className="hover:text-blue-600 transition-colors">Products</Link> <span className="mx-2">&gt;</span> 
        <span className="text-gray-900">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 bg-white p-6 md:p-10 rounded-3xl border border-gray-100 shadow-sm">
        {/* Left: Media Gallery */}
        <div className="w-full lg:w-[45%]">
          <MediaGallery images={images} video={video} />
        </div>

        {/* Right: Product Info & Configuration */}
        <div className="w-full lg:w-[55%] flex flex-col">
          <div className="mb-2">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">{product.category}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">{product.name}</h1>
          <div className="text-3xl font-bold text-gray-900 mb-6">
            ${product.price.toFixed(2)} <span className="text-lg text-gray-500 font-medium">/ unit</span>
          </div>
          
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            High-quality {product.name.toLowerCase()} suitable for all your business needs. 
            Printed on premium material with vivid colors. Upload your custom design and we'll handle the rest.
          </p>

          {/* Configuration Block */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 mb-8">
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
                <span className="block text-sm font-medium text-gray-500 mb-1">Subtotal</span>
                <span className="text-3xl font-black text-gray-900">${(product.price * Math.max(quantity, product.minOrderQty)).toFixed(2)}</span>
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

          <div className="fixed bottom-16 md:bottom-0 left-0 w-full bg-white/80 backdrop-blur-md p-4 border-t border-gray-200 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)] z-40 md:static md:bg-transparent md:p-0 md:border-0 md:shadow-none md:z-auto mt-auto">
            <button 
              onClick={handleAddToCart}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-lg flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
            <p className="font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-blue-600 mr-3 text-xl">Q.</span>
              Can I print different names on the cards in one bulk order?
            </p>
            <p className="text-gray-600 text-base leading-relaxed pl-8">
              Yes, you can upload a multi-page PDF or a zip file containing the different designs.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-md transition-all border border-transparent hover:border-gray-100">
            <p className="font-bold text-gray-900 mb-3 flex items-start">
              <span className="text-blue-600 mr-3 text-xl">Q.</span>
              What is the paper thickness?
            </p>
            <p className="text-gray-600 text-base leading-relaxed pl-8">
              Our standard business cards use 300 GSM premium cardstock.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-2xl text-center max-w-2xl mx-auto border border-blue-100">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-6">Our printing experts are ready to help you with your order.</p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-xl shadow-sm hover:shadow-md transition-all">
            Contact Support
          </Link>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-black text-gray-900">You Might Also Like</h2>
          <Link to="/products" className="text-blue-600 font-bold hover:underline">View All</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProducts.filter(p => p.id !== product.id).slice(0, 4).map((related) => (
            <ProductCard key={related.id} product={related} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
