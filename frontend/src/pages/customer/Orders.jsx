import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Orders = () => {
  // Expanded mock data to demonstrate pagination
  const allOrders = [
    { id: 'ZAG-123456', date: 'Oct 24, 2023', total: 1550.00, status: 'Pending', items: 2 },
    { id: 'ZAG-098765', date: 'Oct 15, 2023', total: 4500.00, status: 'Printing', items: 1 },
    { id: 'ZAG-112233', date: 'Sep 30, 2023', total: 850.00, status: 'Delivered', items: 3 },
    { id: 'ZAG-223344', date: 'Sep 15, 2023', total: 120.00, status: 'Delivered', items: 1 },
    { id: 'ZAG-334455', date: 'Aug 22, 2023', total: 3400.00, status: 'Delivered', items: 5 },
    { id: 'ZAG-445566', date: 'Aug 05, 2023', total: 45.00, status: 'Delivered', items: 1 },
    { id: 'ZAG-556677', date: 'Jul 18, 2023', total: 890.00, status: 'Delivered', items: 2 },
    { id: 'ZAG-667788', date: 'Jul 02, 2023', total: 1250.00, status: 'Delivered', items: 4 },
    { id: 'ZAG-778899', date: 'Jun 20, 2023', total: 560.00, status: 'Delivered', items: 1 },
    { id: 'ZAG-889900', date: 'Jun 11, 2023', total: 2300.00, status: 'Delivered', items: 3 },
    { id: 'ZAG-990011', date: 'May 25, 2023', total: 150.00, status: 'Delivered', items: 1 },
    { id: 'ZAG-001122', date: 'May 10, 2023', total: 480.00, status: 'Delivered', items: 2 },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(allOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOrders = allOrders.slice(startIndex, startIndex + itemsPerPage);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Pending':
        return <span className="bg-yellow-50 text-yellow-800 border border-yellow-200 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">Pending</span>;
      case 'Approved':
        return <span className="bg-gray-50 text-gray-800 border border-gray-200 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">Approved</span>;
      case 'Printing':
        return <span className="bg-gray-50 text-gray-800 border border-gray-200 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">Printing</span>;
      case 'Shipped':
        return <span className="bg-gray-50 text-gray-800 border border-gray-200 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">Shipped</span>;
      case 'Delivered':
        return <span className="bg-green-50 text-green-800 border border-green-200 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">Delivered</span>;
      default:
        return <span className="bg-gray-50 text-gray-800 border border-gray-200 text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-bold">{status}</span>;
    }
  };

  return (
    <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] overflow-hidden">
      
      {/* Header */}
      <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <h2 className="text-2xl font-black text-brand-black tracking-tight">Order History</h2>
        
        {/* Simple items per page toggle (optional visual indicator) */}
        <div className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-400">
          Showing 5 records per page
        </div>
      </div>

      {/* Table Area */}
      <div className="overflow-x-auto min-h-[400px]">
        <table className="w-full text-left border-collapse whitespace-nowrap">
          <thead>
            <tr className="bg-white text-gray-400 text-xs font-bold border-b border-gray-100 uppercase tracking-widest">
              <th className="px-8 py-5">Order ID</th>
              <th className="px-8 py-5">Date</th>
              <th className="px-8 py-5">Items</th>
              <th className="px-8 py-5">Total</th>
              <th className="px-8 py-5">Status</th>
              <th className="px-8 py-5 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors group">
                <td className="px-8 py-6 font-black text-brand-black">{order.id}</td>
                <td className="px-8 py-6 text-sm text-gray-500 font-bold">{order.date}</td>
                <td className="px-8 py-6 text-sm text-gray-500 font-bold">{order.items} items</td>
                <td className="px-8 py-6 text-sm font-black text-brand-black">${order.total.toFixed(2)}</td>
                <td className="px-8 py-6">{getStatusBadge(order.status)}</td>
                <td className="px-8 py-6 text-right">
                  <Link 
                    to={`/account/orders/${order.id}`} 
                    className="inline-flex items-center justify-center bg-white border border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white text-brand-black text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-xl transition-all shadow-sm group-hover:shadow"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between px-8 py-6 border-t border-gray-100 bg-gray-50/50 gap-4">
        
        {/* Pagination Info */}
        <div className="text-sm text-gray-500 font-medium">
          Showing <span className="font-black text-brand-black">{startIndex + 1}</span> to{' '}
          <span className="font-black text-brand-black">
            {Math.min(startIndex + itemsPerPage, allOrders.length)}
          </span>{' '}
          of <span className="font-black text-brand-black">{allOrders.length}</span> entries
        </div>
        
        {/* Pagination Buttons */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-brand-black disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm cursor-pointer"
            aria-label="Previous Page"
          >
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>
          
          <div className="flex items-center gap-1 hidden sm:flex">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-xl text-sm font-black flex items-center justify-center transition-all ${
                  currentPage === i + 1 
                    ? 'bg-brand-black text-white shadow-md' 
                    : 'bg-transparent text-gray-500 hover:bg-gray-200'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button 
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center w-10 h-10 rounded-xl border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 hover:text-brand-black disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm cursor-pointer"
            aria-label="Next Page"
          >
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        </div>

      </div>

    </div>
  );
};

export default Orders;