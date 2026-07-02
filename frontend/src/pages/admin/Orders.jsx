import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal } from '../../components/ui/Modal';
import { Button } from '../../components/ui/Button';
import { Pagination } from '../../components/ui/Pagination';
import { ChevronRight, Edit3, Download } from 'lucide-react';

const initialOrders = [
  { id: '#ZAG-128945', customer: 'Acme Corp', date: '2023-10-24', total: 1829.00, status: 'Pending Approval', images: ['https://images.unsplash.com/photo-1568285958641-7913364f3317?w=300&q=80', 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&q=80'] },
  { id: '#ZAG-128944', customer: 'TechStart Inc', date: '2023-10-23', total: 450.50, status: 'Printing', images: ['https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=300&q=80'] },
  { id: '#ZAG-128943', customer: 'Global Designs', date: '2023-10-22', total: 3200.00, status: 'Shipped', images: ['https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&q=80', 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=300&q=80'] },
  { id: '#ZAG-128942', customer: 'Jane Doe', date: '2023-10-21', total: 125.00, status: 'Delivered', images: ['https://images.unsplash.com/photo-1581428982868-e410dd047a90?w=300&q=80'] },
  { id: '#ZAG-128941', customer: 'Marketing Pros', date: '2023-10-20', total: 890.00, status: 'Approved', images: ['https://images.unsplash.com/photo-1544390623-dfc588a44b82?w=300&q=80'] },
];

const STATUSES = ['Pending Approval', 'Approved', 'Printing', 'Shipped', 'Delivered'];

const Orders = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState(initialOrders);
  
  const [previewImage, setPreviewImage] = useState(null);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  // Status update modal state
  const [statusModal, setStatusModal] = useState({ isOpen: false, order: null, selectedStatus: '' });

  const handleImageClick = (imageUrl) => {
    setPreviewImage(imageUrl);
    setIsPreviewOpen(true);
  };

  const handleOpenStatusModal = (e, order) => {
    e.stopPropagation();
    setStatusModal({ isOpen: true, order, selectedStatus: order.status });
  };

  const confirmStatusChange = () => {
    if (statusModal.selectedStatus !== statusModal.order.status) {
      setOrders(prev => prev.map(o => o.id === statusModal.order.id ? { ...o, status: statusModal.selectedStatus } : o));
    }
    setStatusModal({ isOpen: false, order: null, selectedStatus: '' });
  };

  const handleDownloadAll = async (e, order) => {
    e.stopPropagation();
    for (let idx = 0; idx < order.images.length; idx++) {
      const img = order.images[idx];
      try {
        const response = await fetch(img);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = `order-${order.id.replace('#', '')}-design-${idx + 1}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error('Download failed, falling back to new tab', error);
        window.open(img, '_blank');
      }
      await new Promise(resolve => setTimeout(resolve, 250));
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending Approval': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Approved': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Printing': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Shipped': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'Delivered': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Orders Management</h1>
          <p className="text-sm font-medium text-gray-500 mt-1">Track and update customer orders.</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search by Order ID or Customer..." 
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
            />
          </div>
          <select className="w-full sm:w-auto border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 bg-white shadow-sm">
            <option>All Statuses</option>
            {STATUSES.map(s => <option key={s}>{s}</option>)}
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-100 text-xs font-black text-gray-500 uppercase tracking-wider">
                <th className="px-8 py-5">Design</th>
                <th className="px-8 py-5">Order ID</th>
                <th className="px-8 py-5">Customer</th>
                <th className="px-8 py-5">Date</th>
                <th className="px-8 py-5">Total</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {orders.map((order) => (
                <tr 
                  key={order.id} 
                  onClick={() => navigate(`/admin/orders/${order.id.replace('#', '')}`)}
                  className="hover:bg-gray-50/80 transition-colors group cursor-pointer"
                >
                  <td className="px-8 py-5 whitespace-nowrap">
                    <div 
                      className="w-24 h-24 rounded-xl overflow-hidden border border-gray-200 shadow-sm relative cursor-pointer group/img"
                      onClick={(e) => { e.stopPropagation(); handleImageClick(order.images[0]); }}
                    >
                      <img src={order.images[0]} alt="Design" className="w-full h-full object-cover transition-transform duration-300 group-hover/img:scale-110" />
                      {order.images.length > 1 && (
                        <div className="absolute inset-0 bg-black/40 group-hover/img:bg-black/60 transition-colors flex items-center justify-center text-white text-[12px] font-bold">
                          +{order.images.length - 1}
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm font-black text-gray-900">{order.id}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm font-bold text-gray-700">{order.customer}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm font-medium text-gray-500">{order.date}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm font-black text-gray-900">${order.total.toFixed(2)}</td>
                  <td className="px-8 py-5 whitespace-nowrap">
                    <button
                      onClick={(e) => handleOpenStatusModal(e, order)}
                      className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full font-bold border transition-colors hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${getStatusColor(order.status)}`}
                      title="Update Status"
                    >
                      {order.status} <Edit3 className="w-3.5 h-3.5 opacity-60" />
                    </button>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm text-right font-bold space-x-3 transition-opacity">
                    <button 
                      onClick={(e) => handleDownloadAll(e, order)} 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 hover:text-gray-900 rounded-lg transition-colors"
                      title="Download Design"
                    >
                      <Download className="w-3.5 h-3.5" /> Download
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); navigate(`/admin/orders/${order.id.replace('#', '')}`); }} 
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 rounded-lg transition-colors"
                      title="Manage Order"
                    >
                      Manage Order <ChevronRight className="w-3.5 h-3.5" />
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

      {/* Status Update Modal */}
      <Modal
        isOpen={statusModal.isOpen}
        onClose={() => setStatusModal({ isOpen: false, order: null, selectedStatus: '' })}
        title="Update Order Status"
        size="sm"
        footer={
          <>
            <Button variant="outline" onClick={() => setStatusModal({ isOpen: false, order: null, selectedStatus: '' })}>Cancel</Button>
            <Button variant="primary" onClick={confirmStatusChange}>Save Changes</Button>
          </>
        }
      >
        {statusModal.order && (
          <div className="py-2 space-y-4">
            <p className="text-sm font-medium text-gray-600">
              Select a new status for order <span className="font-bold text-gray-900">{statusModal.order.id}</span>.
            </p>
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">New Status</label>
              <select 
                value={statusModal.selectedStatus}
                onChange={(e) => setStatusModal({ ...statusModal, selectedStatus: e.target.value })}
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 bg-white"
              >
                {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
        )}
      </Modal>

    </div>
  );
};

export default Orders;