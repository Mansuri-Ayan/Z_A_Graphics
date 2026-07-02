import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Modal } from '../../components/ui/Modal';
import { Download } from 'lucide-react';

const STATUSES = ['Pending Approval', 'Approved', 'Printing', 'Shipped', 'Delivered'];

const AdminOrderDetail = () => {
  const { orderId } = useParams();
  
  // Mock data fetching
  const [order, setOrder] = useState(null);
  const [newStatus, setNewStatus] = useState('');
  const [confirmModal, setConfirmModal] = useState({ isOpen: false, newStatus: '' });

  useEffect(() => {
    // Simulate API fetch based on orderId
    setOrder({
      id: `#${orderId}`,
      customer: 'Acme Corp',
      email: 'contact@acmecorp.com',
      phone: '+1 (555) 123-4567',
      address: '123 Business Rd, Tech Park, CA 94025',
      date: '2023-10-24',
      total: 1829.00,
      status: 'Pending Approval',
      images: [
        'https://images.unsplash.com/photo-1568285958641-7913364f3317?w=800&q=80',
        'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80'
      ],
      items: [
        { name: 'Premium Business Cards', quantity: 1000, price: 125.00 },
        { name: 'Vinyl Banners', quantity: 5, price: 450.00 },
        { name: 'Glossy Flyers', quantity: 5000, price: 1254.00 }
      ]
    });
  }, [orderId]);

  useEffect(() => {
    if (order) setNewStatus(order.status);
  }, [order]);

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

  const handleUpdateStatusClick = () => {
    if (newStatus === order.status) return;
    setConfirmModal({ isOpen: true, newStatus });
  };

  const confirmStatusChange = () => {
    setOrder({ ...order, status: confirmModal.newStatus });
    setConfirmModal({ isOpen: false, newStatus: '' });
  };

  const handleDownloadSingle = async (e, imgUrl, index) => {
    e.stopPropagation();
    try {
      const response = await fetch(imgUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = `order-${order.id.replace('#', '')}-design-${index + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download failed', error);
      window.open(imgUrl, '_blank');
    }
  };

  const handleDownloadAll = async (e) => {
    e.stopPropagation();
    for (let idx = 0; idx < order.images.length; idx++) {
      await handleDownloadSingle(e, order.images[idx], idx);
      await new Promise(resolve => setTimeout(resolve, 250));
    }
  };

  if (!order) return <div className="p-8 text-center text-gray-500">Loading order...</div>;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <Link to="/admin/orders" className="text-gray-400 hover:text-gray-900 transition-colors">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
            <h1 className="text-3xl font-black text-gray-900">Order {order.id}</h1>
            <span className={`text-xs px-3 py-1 rounded-full font-bold border ${getStatusColor(order.status)}`}>
              {order.status}
            </span>
          </div>
          <p className="text-sm font-medium text-gray-500">Placed on {order.date}</p>
        </div>
        <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-gray-200 shadow-sm">
          <select 
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            className="border-none bg-transparent text-sm font-bold text-gray-700 focus:ring-0 pr-8 cursor-pointer outline-none"
          >
            {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
          <Button variant="primary" onClick={handleUpdateStatusClick} className="py-2 px-4 text-xs">
            Update Status
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Design Files</h3>
              <button 
                onClick={handleDownloadAll}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 hover:text-gray-900 rounded-lg transition-colors"
              >
                <Download className="w-3.5 h-3.5" /> Download All
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {order.images.map((img, i) => (
                <div key={i} className="aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-sm relative group cursor-pointer hover:border-blue-400 transition-all">
                  <img src={img} alt={`Design ${i+1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button 
                      onClick={(e) => handleDownloadSingle(e, img, i)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 font-bold text-sm rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors shadow-lg"
                    >
                      <Download className="w-4 h-4" /> Download File
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Order Items</h3>
            <div className="space-y-4">
              {order.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-50 last:border-0">
                  <div>
                    <p className="text-sm font-bold text-gray-900">{item.name}</p>
                    <p className="text-xs font-medium text-gray-500">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm font-black text-gray-900">${item.price.toFixed(2)}</p>
                </div>
              ))}
              <div className="pt-4 flex justify-between items-center border-t border-gray-100">
                <p className="text-base font-bold text-gray-700">Total Amount</p>
                <p className="text-xl font-black text-brand-blue">${order.total.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Customer Info */}
        <div className="space-y-8">
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Customer Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Name</p>
                <p className="text-sm font-bold text-gray-900">{order.customer}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Email</p>
                <a href={`mailto:${order.email}`} className="text-sm font-bold text-blue-600 hover:underline">{order.email}</a>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Phone</p>
                <p className="text-sm font-medium text-gray-900">{order.phone}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Shipping Address</h3>
            <p className="text-sm font-medium text-gray-700 leading-relaxed">
              {order.address.split(', ').map((line, i) => (
                <React.Fragment key={i}>
                  {line} <br />
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>

      {/* Confirmation Modal for Status Change */}
      <Modal
        isOpen={confirmModal.isOpen}
        onClose={() => setConfirmModal({ isOpen: false, newStatus: '' })}
        title="Confirm Status Update"
        size="sm"
        footer={
          <>
            <Button variant="outline" onClick={() => setConfirmModal({ isOpen: false, newStatus: '' })}>Cancel</Button>
            <Button variant="primary" onClick={confirmStatusChange}>Update Status</Button>
          </>
        }
      >
        <div className="py-3">
          <p className="text-sm font-medium text-gray-600 leading-relaxed">
            Are you sure you want to change the status of order <span className="font-bold text-gray-900">{order.id}</span> to <span className="font-bold text-blue-600">{confirmModal.newStatus}</span>?
          </p>
        </div>
      </Modal>

    </div>
  );
};

export default AdminOrderDetail;
