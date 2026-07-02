import React, { useState, useRef, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { UploadCloud, X, Star, FileVideo, Image as ImageIcon, ChevronLeft, Tag } from 'lucide-react';

const ProductForm = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(productId);

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: 'Cards',
    price: '',
    minQty: '',
    paperType: '',
    finish: '',
    size: '',
    status: 'Active',
  });

  // Media State
  const [images, setImages] = useState([]); // { file: File, preview: string }
  const [video, setVideo] = useState(null); // { file: File, preview: string }
  const [draggedImageIndex, setDraggedImageIndex] = useState(null);
  
  // Drag state
  const [isDraggingImages, setIsDraggingImages] = useState(false);
  const [isDraggingVideo, setIsDraggingVideo] = useState(false);

  const imageInputRef = useRef(null);
  const videoInputRef = useRef(null);

  // Mock fetching data if editing
  useEffect(() => {
    if (isEditing) {
      setFormData({
        name: 'Premium Business Cards',
        description: 'High quality 300gsm business cards with matte finish.',
        category: 'Cards',
        price: '1250',
        minQty: '500',
        paperType: '300gsm Cardstock',
        finish: 'Matte',
        size: '3.5" x 2"',
        status: 'Active',
      });
      setImages([
        { file: null, preview: 'https://images.unsplash.com/photo-1568285958641-7913364f3317?w=400&q=80' }
      ]);
    }
  }, [isEditing]);

  const imagesRef = useRef(images);
  const videoRef = useRef(video);

  useEffect(() => {
    imagesRef.current = images;
    videoRef.current = video;
  }, [images, video]);

  // Only revoke on unmount
  useEffect(() => {
    return () => {
      imagesRef.current.forEach(img => {
        if (img.file) URL.revokeObjectURL(img.preview);
      });
      if (videoRef.current?.file) URL.revokeObjectURL(videoRef.current.preview);
    };
  }, []);

  const handleImageFiles = (files) => {
    const newImages = Array.from(files)
      .filter(file => file.type.startsWith('image/'))
      .map(file => ({
        file,
        preview: URL.createObjectURL(file)
      }));
    
    setImages(prev => {
      const combined = [...prev, ...newImages];
      return combined.slice(0, 5);
    });
  };

  const handleImageDrop = (e) => {
    e.preventDefault();
    setIsDraggingImages(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleImageFiles(e.dataTransfer.files);
    }
  };

  const removeImage = (index) => {
    setImages(prev => {
      const updated = [...prev];
      const removed = updated.splice(index, 1)[0];
      if (removed.file) URL.revokeObjectURL(removed.preview);
      return updated;
    });
  };

  const makePrimary = (index) => {
    if (index === 0) return;
    setImages(prev => {
      const updated = [...prev];
      const [item] = updated.splice(index, 1);
      updated.unshift(item);
      return updated;
    });
  };

  const handleDragStartItem = (e, index) => {
    setDraggedImageIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOverItem = (e, index) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDropItem = (e, targetIndex) => {
    e.preventDefault();
    if (draggedImageIndex === null || draggedImageIndex === targetIndex) return;
    
    setImages(prev => {
      const updated = [...prev];
      const [draggedItem] = updated.splice(draggedImageIndex, 1);
      updated.splice(targetIndex, 0, draggedItem);
      return updated;
    });
    setDraggedImageIndex(null);
  };

  const handleVideoFiles = (files) => {
    const file = Array.from(files).find(f => f.type.startsWith('video/'));
    if (file) {
      if (video?.file) URL.revokeObjectURL(video.preview);
      setVideo({
        file,
        preview: URL.createObjectURL(file)
      });
    }
  };

  const handleVideoDrop = (e) => {
    e.preventDefault();
    setIsDraggingVideo(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleVideoFiles(e.dataTransfer.files);
    }
  };

  const removeVideo = () => {
    if (video?.file) URL.revokeObjectURL(video.preview);
    setVideo(null);
  };

  const handleSave = () => {
    console.log("Saving Product...", { formData, images, video });
    navigate('/admin/products');
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link 
          to="/admin/products" 
          className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-500 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-black text-gray-900">
            {isEditing ? 'Edit Product' : 'Add Product'}
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/admin/products')}
            className="px-5 py-2.5 text-sm font-bold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
          >
            Discard
          </button>
          <button 
            onClick={handleSave}
            className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-xl shadow-sm hover:bg-blue-700 hover:shadow-md transition-all hover:-translate-y-0.5"
          >
            {isEditing ? 'Save changes' : 'Save product'}
          </button>
        </div>
      </div>

      {/* FULL WIDTH MEDIA SECTION */}
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm space-y-8">
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Media Gallery</h2>
            <p className="text-sm font-medium text-gray-500 mt-1">Upload product images and a promotional video.</p>
          </div>
        </div>
        
        {/* Images Dropzone & Previews */}
        <div className="space-y-4">
          <label className="block text-sm font-bold text-gray-700">Images ({images.length} / 5)</label>
          
          {/* Grid adapts to larger width: up to 6 columns (5 images + 1 dropzone) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {images.map((img, idx) => (
              <div 
                key={img.preview + idx} 
                draggable
                onDragStart={(e) => handleDragStartItem(e, idx)}
                onDragOver={(e) => handleDragOverItem(e, idx)}
                onDrop={(e) => handleDropItem(e, idx)}
                onDragEnd={() => setDraggedImageIndex(null)}
                className={`relative group aspect-square rounded-xl overflow-hidden border-2 cursor-move ${idx === 0 ? 'border-blue-500 shadow-md' : 'border-gray-200'} ${draggedImageIndex === idx ? 'opacity-50' : 'opacity-100'}`}
              >
                <img src={img.preview} alt={`Upload ${idx}`} className="w-full h-full object-cover pointer-events-none" />
                
                {/* Order Indicator */}
                <div className="absolute top-2 left-2 bg-black/70 text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center shadow-sm backdrop-blur-sm border border-white/20 z-10">
                  {idx + 1}
                </div>

                {idx !== 0 && (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                    <button 
                      onClick={() => makePrimary(idx)}
                      className="text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 bg-white text-gray-700 hover:bg-gray-100 shadow-sm transition-transform hover:scale-105"
                    >
                      <Star className="w-3.5 h-3.5" /> Set Cover
                    </button>
                  </div>
                )}

                <button 
                  onClick={() => removeImage(idx)}
                  className="absolute top-2 right-2 bg-white/90 hover:bg-red-500 hover:text-white text-gray-700 p-1.5 rounded-full backdrop-blur-sm transition-colors shadow-sm z-10"
                >
                  <X className="w-4 h-4" />
                </button>
                
                {idx === 0 && (
                  <div className="absolute bottom-2 left-2 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1.5 z-10">
                    <Star className="w-3 h-3 fill-white" /> Cover
                  </div>
                )}
              </div>
            ))}

            {/* Dropzone square */}
            {images.length < 5 && (
              <div 
                className={`aspect-square border-2 border-dashed rounded-xl flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
                  isDraggingImages ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400 bg-gray-50 hover:bg-gray-100'
                }`}
                onDragOver={(e) => { e.preventDefault(); setIsDraggingImages(true); }}
                onDragLeave={() => setIsDraggingImages(false)}
                onDrop={handleImageDrop}
                onClick={() => imageInputRef.current?.click()}
              >
                <input 
                  type="file" 
                  multiple 
                  accept="image/*" 
                  className="hidden" 
                  ref={imageInputRef}
                  onChange={(e) => handleImageFiles(e.target.files)}
                />
                <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-3">
                  <UploadCloud className="w-6 h-6 text-gray-500" />
                </div>
                <p className="text-sm font-bold text-gray-700 px-2">Add images</p>
                <p className="text-xs text-gray-400 mt-1">PNG, JPG</p>
              </div>
            )}
          </div>
        </div>

        {/* Video Dropzone */}
        <div className="pt-6 border-t border-gray-100">
          <label className="block text-sm font-bold text-gray-700 mb-4">Product Video (Optional)</label>
          {!video ? (
            <div 
              className={`border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${
                isDraggingVideo ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400 bg-gray-50 hover:bg-gray-100'
              }`}
              onDragOver={(e) => { e.preventDefault(); setIsDraggingVideo(true); }}
              onDragLeave={() => setIsDraggingVideo(false)}
              onDrop={handleVideoDrop}
              onClick={() => videoInputRef.current?.click()}
            >
              <input 
                type="file" 
                accept="video/*" 
                className="hidden" 
                ref={videoInputRef}
                onChange={(e) => handleVideoFiles(e.target.files)}
              />
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4">
                <FileVideo className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-base font-bold text-gray-700">Click or drag a video to upload</p>
              <p className="text-sm text-gray-500 mt-1">Accepts MP4, WebM up to 50MB</p>
            </div>
          ) : (
            <div className="relative rounded-xl overflow-hidden border border-gray-200 bg-black aspect-video max-w-2xl mx-auto">
              <video src={video.preview} controls className="w-full h-full object-contain" />
              <button 
                onClick={removeVideo}
                className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2.5 rounded-full shadow-lg transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* LOWER GRID FOR REMAINING CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (General Info, Specs) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* General Information */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm space-y-5">
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-4">General Information</h2>
            
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Product Title *</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
                placeholder="e.g. Premium Business Cards"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Description</label>
              <textarea 
                rows="5"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors custom-scrollbar"
                placeholder="Write a detailed description..."
              />
            </div>
          </div>

          {/* Product Specifications */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm space-y-5">
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-4">Product Specifications</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Material / Paper Type</label>
                <input 
                  type="text" 
                  value={formData.paperType}
                  onChange={(e) => setFormData({...formData, paperType: e.target.value})}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  placeholder="e.g. 300gsm Glossy"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Finish Options</label>
                <input 
                  type="text" 
                  value={formData.finish}
                  onChange={(e) => setFormData({...formData, finish: e.target.value})}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  placeholder="e.g. Matte, Spot UV"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Available Sizes</label>
                <input 
                  type="text" 
                  value={formData.size}
                  onChange={(e) => setFormData({...formData, size: e.target.value})}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  placeholder="e.g. 3.5x2, 4x6"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Sidebar Column (Status, Org) */}
        <div className="space-y-6">
          
          {/* Status */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-4">Status</h2>
            <div>
              <select 
                value={formData.status}
                onChange={(e) => setFormData({...formData, status: e.target.value})}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
              >
                <option>Active</option>
                <option>Draft</option>
                <option>Archived</option>
              </select>
            </div>
            <p className="text-xs text-gray-500 font-medium">
              Draft products will be hidden from the storefront.
            </p>
          </div>

          {/* Organization */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-4">
              <Tag className="w-4 h-4 text-gray-400" />
              <h2 className="text-lg font-bold text-gray-900">Organization</h2>
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5">Category</label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
              >
                <option>Cards</option>
                <option>Stationery</option>
                <option>Merchandise</option>
                <option>Signage</option>
                <option>Marketing</option>
              </select>
            </div>
          </div>

          {/* Pricing & Inventory */}
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-4">Pricing & Inventory</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Base Price *</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                  <input 
                    type="number" 
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    className="w-full border border-gray-200 rounded-xl pl-8 pr-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
                    placeholder="0.00"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1.5">Minimum Order Quantity *</label>
                <input 
                  type="number" 
                  value={formData.minQty}
                  onChange={(e) => setFormData({...formData, minQty: e.target.value})}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white"
                  placeholder="e.g. 500"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductForm;
