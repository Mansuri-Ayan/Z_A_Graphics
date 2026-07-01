import React from 'react';

const Orders = () => {
  const mockOrders = [
    { id: '#ZAG-128945', customer: 'Acme Corp', date: '2023-10-24', total: 1829.00, status: 'Pending Approval' },
    { id: '#ZAG-128944', customer: 'TechStart Inc', date: '2023-10-23', total: 450.50, status: 'Printing' },
    { id: '#ZAG-128943', customer: 'Global Designs', date: '2023-10-22', total: 3200.00, status: 'Shipped' },
    { id: '#ZAG-128942', customer: 'Jane Doe', date: '2023-10-21', total: 125.00, status: 'Delivered' },
    { id: '#ZAG-128941', customer: 'Marketing Pros', date: '2023-10-20', total: 890.00, status: 'Approved' },
  ];

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
            <option>Pending</option>
            <option>Printing</option>
            <option>Shipped</option>
            <option>Delivered</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-100 text-xs font-black text-gray-500 uppercase tracking-wider">
                <th className="px-8 py-5">Order ID</th>
                <th className="px-8 py-5">Customer</th>
                <th className="px-8 py-5">Date</th>
                <th className="px-8 py-5">Total</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50/80 transition-colors group">
                  <td className="px-8 py-5 whitespace-nowrap text-sm font-black text-gray-900">{order.id}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm font-bold text-gray-700">{order.customer}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm font-medium text-gray-500">{order.date}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm font-black text-gray-900">${order.total.toFixed(2)}</td>
                  <td className="px-8 py-5 whitespace-nowrap">
                    <span className={`text-xs px-3 py-1 rounded-full font-bold border ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm text-right font-bold space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-blue-600 hover:text-blue-800 transition-colors">View</button>
                    <button className="text-gray-600 hover:text-gray-900 transition-colors">Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;