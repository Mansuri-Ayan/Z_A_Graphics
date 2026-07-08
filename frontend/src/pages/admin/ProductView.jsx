import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Edit3, Trash2, Tag, Box, Layers, Maximize, Star } from 'lucide-react';
import { Modal } from '../../components/ui/Modal';
import { Button } from '../../components/ui/Button';
import { Pagination } from '../../components/ui/Pagination';
import { useToast } from '../../components/ui/Toast/useToast';

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
  const [deleteModalState, setDeleteModalState] = useState({ isOpen: false, type: null, id: null });
  const [activeTab, setActiveTab] = useState('faq');
  const { success } = useToast();

  const [faqs, setFaqs] = useState([
    { id: 1, question: "Can I print different names on the cards in one bulk order?", answer: "Yes, you can upload a multi-page PDF or a zip file containing the different designs." },
    { id: 2, question: "What is the paper thickness?", answer: "Our standard business cards use 300 GSM premium cardstock." }
  ]);

  const [reviews, setReviews] = useState([
    { id: 1, name: "Alice Smith", rating: 5, text: "Excellent quality! The colors are vibrant and the cardstock is perfectly thick." },
    { id: 2, name: "Bob Jones", rating: 4, text: "Great product, but shipping took a day longer than expected. Will order again though." }
  ]);

  const [isFaqModalOpen, setIsFaqModalOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState(null);

  const handleOpenAddFaq = () => {
    setEditingFaq(null);
    setIsFaqModalOpen(true);
  };
  
  const handleOpenEditFaq = (faq) => {
    setEditingFaq(faq);
    setIsFaqModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (deleteModalState.type === 'product') {
      setDeleteModalState({ isOpen: false, type: null, id: null });
      navigate('/admin/products');
    } else if (deleteModalState.type === 'faq') {
      setFaqs(faqs.filter(f => f.id !== deleteModalState.id));
      success("FAQ deleted successfully.");
      setDeleteModalState({ isOpen: false, type: null, id: null });
    } else if (deleteModalState.type === 'review') {
      setReviews(reviews.filter(r => r.id !== deleteModalState.id));
      success("Review deleted successfully.");
      setDeleteModalState({ isOpen: false, type: null, id: null });
    }
  };

  const handleSaveFaq = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const question = formData.get('question');
    const answer = formData.get('answer');
    
    if (editingFaq) {
      setFaqs(faqs.map(f => f.id === editingFaq.id ? { ...f, question, answer } : f));
      success("FAQ updated successfully.");
    } else {
      setFaqs([...faqs, { id: Date.now(), question, answer }]);
      success("FAQ added successfully.");
    }
    setIsFaqModalOpen(false);
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
            onClick={() => setDeleteModalState({ isOpen: true, type: 'product', id: product.id })}
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

      {/* Product Interaction (FAQ & Reviews) */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8 overflow-hidden">
        <div className="flex items-center border-b border-gray-200 mb-6 w-full">
          <button 
            onClick={() => setActiveTab('faq')}
            className={`flex-1 text-center text-sm md:text-base font-bold uppercase tracking-wider transition-all pb-4 border-b-2 ${activeTab === 'faq' ? 'text-gray-900 border-blue-600 -mb-0.5' : 'text-gray-400 hover:text-gray-600 border-transparent'}`}
          >
            FAQs
          </button>
          <button 
            onClick={() => setActiveTab('reviews')}
            className={`flex-1 text-center text-sm md:text-base font-bold uppercase tracking-wider transition-all pb-4 border-b-2 ${activeTab === 'reviews' ? 'text-gray-900 border-blue-600 -mb-0.5' : 'text-gray-400 hover:text-gray-600 border-transparent'}`}
          >
            Reviews
          </button>
        </div>

        {activeTab === 'faq' ? (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">Manage FAQs</h3>
              <button onClick={handleOpenAddFaq} className="text-sm font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors">Add New FAQ</button>
            </div>
            {faqs.map(faq => (
              <div key={faq.id} className="p-4 rounded-xl border border-gray-100 bg-gray-50 flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <p className="font-bold text-gray-900 mb-1 flex items-start">
                    <span className="text-blue-600 mr-2">Q.</span>
                    {faq.question}
                  </p>
                  <p className="text-gray-600 text-sm pl-6">
                    {faq.answer}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button onClick={() => handleOpenEditFaq(faq)} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-all"><Edit3 className="w-4 h-4" /></button>
                  <button onClick={() => setDeleteModalState({ isOpen: true, type: 'faq', id: faq.id })} className="p-2 text-gray-400 hover:text-red-600 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-all"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            ))}
            {faqs.length === 0 && <p className="text-center text-gray-500 py-8">No FAQs found.</p>}
            
            {faqs.length > 0 && (
              <div className="-mx-6 md:-mx-8 -mb-6 md:-mb-8 mt-6">
                <Pagination />
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-900">Manage Reviews</h3>
              <div className="flex items-center gap-1 text-yellow-400 bg-yellow-50 px-3 py-1.5 rounded-lg border border-yellow-100">
                <Star className="w-4 h-4 fill-current" />
                <span className="text-sm font-bold text-yellow-700">
                  {reviews.length > 0 ? (reviews.reduce((a, b) => a + b.rating, 0) / reviews.length).toFixed(1) : "0.0"} Avg Rating
                </span>
              </div>
            </div>
            
            {reviews.map(review => (
              <div key={review.id} className="p-4 rounded-xl border border-gray-100 bg-gray-50 flex flex-col sm:flex-row justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map(star => (
                        <Star key={star} className={`w-4 h-4 ${star <= review.rating ? 'fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-gray-500">{review.name}</span>
                  </div>
                  <p className="text-gray-700 text-sm">"{review.text}"</p>
                </div>
                <div className="flex gap-2 shrink-0 items-start">
                  <button onClick={() => setDeleteModalState({ isOpen: true, type: 'review', id: review.id })} className="p-2 text-gray-400 hover:text-red-600 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-all"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            ))}
            {reviews.length === 0 && <p className="text-center text-gray-500 py-8">No reviews yet.</p>}
            
            {reviews.length > 0 && (
              <div className="-mx-6 md:-mx-8 -mb-6 md:-mb-8 mt-6">
                <Pagination />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={deleteModalState.isOpen}
        onClose={() => setDeleteModalState({ isOpen: false, type: null, id: null })}
        title="Confirm Deletion"
        size="sm"
        footer={
          <>
            <Button variant="outline" onClick={() => setDeleteModalState({ isOpen: false, type: null, id: null })}>Cancel</Button>
            <Button 
              variant="primary" 
              onClick={handleConfirmDelete}
              className="!bg-red-600 hover:!bg-red-700 focus:!ring-red-500/20"
            >
              Delete {deleteModalState.type === 'product' ? 'Product' : deleteModalState.type === 'faq' ? 'FAQ' : 'Review'}
            </Button>
          </>
        }
      >
        <div className="py-2">
          <p className="text-sm font-medium text-gray-600">
            Are you sure you want to delete this {deleteModalState.type === 'product' ? 'product' : deleteModalState.type === 'faq' ? 'FAQ' : 'review'}? This action cannot be undone.
          </p>
        </div>
      </Modal>

      {/* FAQ Modal */}
      <Modal
        isOpen={isFaqModalOpen}
        onClose={() => setIsFaqModalOpen(false)}
        title={editingFaq ? "Edit FAQ" : "Add New FAQ"}
        size="md"
        footer={
          <div className="flex w-full justify-end gap-3">
            <Button type="button" variant="outline" onClick={() => setIsFaqModalOpen(false)}>Cancel</Button>
            <Button type="submit" form="faqForm" variant="primary">
              {editingFaq ? "Save Changes" : "Add FAQ"}
            </Button>
          </div>
        }
      >
        <form id="faqForm" onSubmit={handleSaveFaq} className="flex flex-col gap-4 py-2">
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Question</label>
            <input 
              name="question"
              required
              defaultValue={editingFaq?.question || ''}
              className="w-full rounded-xl border border-gray-200 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" 
              placeholder="e.g. What is the paper thickness?"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-2">Answer</label>
            <textarea 
              name="answer"
              required
              defaultValue={editingFaq?.answer || ''}
              rows="4"
              className="w-full rounded-xl border border-gray-200 bg-white p-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600" 
              placeholder="Provide the answer here..."
            />
          </div>
        </form>
      </Modal>

    </div>
  );
};

export default ProductView;
