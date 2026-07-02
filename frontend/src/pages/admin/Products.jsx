import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Modal } from '../../components/ui/Modal';
import { Pagination } from '../../components/ui/Pagination';
import { Button } from '../../components/ui/Button';
import { Edit3, Trash2 } from 'lucide-react';

const initialProducts = [
  { id: 1, name: 'Premium Business Cards', price: 1250, minQty: 500, category: 'Cards', image: 'https://images.unsplash.com/photo-1568285958641-7913364f3317?w=400&q=80' },
  { id: 2, name: 'Standard Letterheads', price: 800, minQty: 1000, category: 'Stationery', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80' },
  { id: 3, name: 'Custom Coffee Mugs', price: 300, minQty: 50, category: 'Merchandise', image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80' },
  { id: 4, name: 'Vinyl Banners', price: 450, minQty: 1, category: 'Signage', image: 'https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=400&q=80' },
  { id: 5, name: 'Glossy Flyers', price: 900, minQty: 1000, category: 'Marketing', image: 'https://images.unsplash.com/photo-1544390623-dfc588a44b82?w=400&q=80' },
];

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(initialProducts);

  // Image Preview State
  const [previewImage, setPreviewImage] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Delete State
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const handleImageClick = (imageUrl) => {
    setPreviewImage(imageUrl);
    setIsPreviewOpen(true);
  };

  const handleOpenDelete = (product) => {
    setProductToDelete(product);
    setIsDeleteModalOpen(true);
  };

  const handleDelete = () => {
    setProducts(products.filter(p => p.id !== productToDelete.id));
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Products Management</h1>
          <p className="text-sm font-medium text-gray-500 mt-1">Manage your print catalog and pricing.</p>
        </div>
        <Link 
          to="/admin/products/new"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Product
        </Link>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
            />
          </div>
          <select className="w-full sm:w-auto border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 bg-white shadow-sm">
            <option>All Categories</option>
            <option>Cards</option>
            <option>Stationery</option>
            <option>Merchandise</option>
            <option>Signage</option>
            <option>Marketing</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-100 text-xs font-black text-gray-500 uppercase tracking-wider">
                <th className="px-8 py-5">Image</th>
                <th className="px-8 py-5">Product Name</th>
                <th className="px-8 py-5">Category</th>
                <th className="px-8 py-5">Base Price</th>
                <th className="px-8 py-5">Min. Qty</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {products.map((product) => (
                <tr 
                  key={product.id} 
                  onClick={() => navigate(`/admin/products/${product.id}`)}
                  className="hover:bg-gray-50/80 transition-colors group cursor-pointer"
                >
                  <td className="px-8 py-5 whitespace-nowrap">
                    <div 
                      className="w-20 h-20 rounded-xl overflow-hidden border border-gray-200 shadow-sm relative cursor-pointer group/img"
                      onClick={(e) => { e.stopPropagation(); handleImageClick(product.image); }}
                    >
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-110" />
                      <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors flex items-center justify-center">
                        <svg className="w-6 h-6 text-white opacity-0 group-hover/img:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm font-black text-gray-900">{product.name}</td>
                  <td className="px-8 py-5 whitespace-nowrap">
                    <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-bold border border-gray-200">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm font-black text-gray-900">${product.price.toFixed(2)}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm font-bold text-gray-500">{product.minQty} units</td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm text-right font-bold space-x-3 transition-opacity">
                    <Link 
                      to={`/admin/products/${product.id}/edit`} 
                      onClick={(e) => e.stopPropagation()} 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 rounded-lg transition-colors"
                      title="Edit Product"
                    >
                      <Edit3 className="w-3.5 h-3.5" /> Edit
                    </Link>
                    <button 
                      onClick={(e) => { e.stopPropagation(); handleOpenDelete(product); }} 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 hover:text-red-700 rounded-lg transition-colors"
                      title="Delete Product"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>

      {/* Image Preview Modal */}
      <Modal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        size="lg"
      >
        {previewImage && (
          <div className="p-2">
            <img src={previewImage} alt="Preview" className="w-full h-auto rounded-xl object-contain max-h-[75vh]" />
          </div>
        )}
      </Modal>

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
            Are you sure you want to delete <span className="font-bold text-gray-900">"{productToDelete?.name}"</span>? This action cannot be undone.
          </p>
        </div>
      </Modal>

    </div>
  );
};

export default Products;