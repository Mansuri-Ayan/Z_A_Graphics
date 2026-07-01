import React from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
  const mockOrders = [
    { id: 'ZAG-123456', date: 'Oct 24, 2023', total: 1550.00, status: 'Pending', items: 2 },
    { id: 'ZAG-098765', date: 'Oct 15, 2023', total: 4500.00, status: 'Printing', items: 1 },
    { id: 'ZAG-112233', date: 'Sep 30, 2023', total: 850.00, status: 'Delivered', items: 3 },
  ];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'Pending':
        return <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full font-bold">Pending</span>;
      case 'Approved':
        return <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full font-bold">Approved</span>;
      case 'Printing':
        return <span className="bg-purple-100 text-purple-800 text-xs px-3 py-1 rounded-full font-bold">Printing</span>;
      case 'Shipped':
        return <span className="bg-indigo-100 text-indigo-800 text-xs px-3 py-1 rounded-full font-bold">Shipped</span>;
      case 'Delivered':
        return <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-bold">Delivered</span>;
      default:
        return <span className="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full font-bold">{status}</span>;
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <h2 className="text-2xl font-black text-gray-900">Order History</h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white text-gray-500 text-sm font-bold border-b border-gray-100 uppercase tracking-wider">
              <th className="p-6">Order ID</th>
              <th className="p-6">Date</th>
              <th className="p-6">Items</th>
              <th className="p-6">Total</th>
              <th className="p-6">Status</th>
              <th className="p-6 text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {mockOrders.map((order) => (
              <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50/80 transition-colors group">
                <td className="p-6 font-bold text-gray-900">{order.id}</td>
                <td className="p-6 text-sm text-gray-600 font-medium">{order.date}</td>
                <td className="p-6 text-sm text-gray-600 font-medium">{order.items} items</td>
                <td className="p-6 text-sm font-black text-gray-900">${order.total.toFixed(2)}</td>
                <td className="p-6">{getStatusBadge(order.status)}</td>
                <td className="p-6 text-right">
                  <Link to={`/account/orders/${order.id}`} className="inline-flex items-center justify-center bg-white border border-gray-200 hover:border-blue-600 hover:text-blue-600 text-gray-700 text-sm font-bold px-4 py-2 rounded-lg transition-colors shadow-sm group-hover:shadow">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;