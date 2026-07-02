import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Edit3, Trash2, Tag, Box, Layers, Maximize } from 'lucide-react';
import { Modal } from '../../components/ui/Modal';
import { Button } from '../../components/ui/Button';

const ProductView = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  // Mock product data
  const product = {
    id: productId || '1',
    name: 'Premium Business Cards',
    description: 'High quality 300gsm business cards with a sleek matte finish. Perfect for making a lasting first impression. Includes double-sided printing and optional foil stamping.',
    category: 'Cards',
    price: 1250.00,
    minQty: 500,
    paperType: '300gsm Cardstock',
    finish: 'Matte',
    size: '3.5" x 2"',
    status: 'Active',
    images: [
      'https://images.unsplash.com/photo-1568285958641-7913364f3317?w=800&q=80',
      'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80'
    ]
  };

  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDelete = () => {
    // Mock delete
    setIsDeleteModalOpen(false);
    navigate('/admin/products');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div className="flex items-center gap-4">
          <Link 
            to="/admin/products" 
            className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-500 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-black text-gray-900">{product.name}</h1>
              <span className={`text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider ${
                product.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
              }`}>
                {product.status}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-500 mt-1">Product ID: #{product.id}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link 
            to={`/admin/products/${product.id}/edit`}
            className="px-4 py-2.5 flex items-center gap-2 text-sm font-bold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors shadow-sm"
          >
            <Edit3 className="w-4 h-4" /> Edit Product
          </Link>
          <button 
            onClick={() => setIsDeleteModalOpen(true)}
            className="p-2.5 text-red-600 bg-white border border-gray-200 rounded-xl hover:bg-red-50 transition-colors shadow-sm" 
            title="Delete Product"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Column (Images) */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm relative">
            <img src={activeImage} alt={product.name} className="w-full h-full object-cover" />
          </div>
          
          {product.images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2 custom-scrollbar">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-24 h-24 shrink-0 rounded-2xl overflow-hidden border-2 transition-all ${
                    activeImage === img ? 'border-blue-500 shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column (Details) */}
        <div className="space-y-6">
          
          {/* Pricing & Category */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Base Price</p>
                <p className="text-3xl font-black text-blue-600">${product.price.toFixed(2)}</p>
              </div>
              <span className="flex items-center gap-1.5 bg-gray-100 border border-gray-200 text-gray-700 text-xs font-bold px-3 py-1.5 rounded-full">
                <Tag className="w-3.5 h-3.5" /> {product.category}
              </span>
            </div>
            
            <div className="pt-4 border-t border-gray-100">
              <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Description</p>
              <p className="text-sm font-medium text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Specifications Grid */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8 space-y-6">
            <h3 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-4">Specifications</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <Box className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Min. Order Qty</p>
                  <p className="text-sm font-bold text-gray-900 mt-1">{product.minQty} units</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Layers className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Material / Paper</p>
                  <p className="text-sm font-bold text-gray-900 mt-1">{product.paperType || 'N/A'}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Tag className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Finish Options</p>
                  <p className="text-sm font-bold text-gray-900 mt-1">{product.finish || 'N/A'}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Maximize className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Available Sizes</p>
                  <p className="text-sm font-bold text-gray-900 mt-1">{product.size || 'N/A'}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Confirm Deletion"
        size="sm"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsDeleteModalOpen(false)}>Cancel</Button>
            <Button 
              variant="primary" 
              onClick={handleDelete}
              className="!bg-red-600 hover:!bg-red-700 focus:!ring-red-500/20"
            >
              Delete Product
            </Button>
          </>
        }
      >
        <div className="py-2">
          <p className="text-sm font-medium text-gray-600">
            Are you sure you want to delete <span className="font-bold text-gray-900">"{product.name}"</span>? This action cannot be undone.
          </p>
        </div>
      </Modal>

    </div>
  );
};

export default ProductView;
