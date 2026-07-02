import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, Mail, Phone, MapPin, Calendar, ShoppingBag, CreditCard, Ban, Edit3, Tag } from 'lucide-react';

const CustomerDetail = () => {
  const { customerId } = useParams();

  // Mock customer data
  const customer = {
    id: customerId || '1',
    name: 'John Smith',
    email: 'john@acme.com',
    phone: '+1 234-567-8900',
    joined: 'Jan 15, 2023',
    status: 'Active',
    totalOrders: 12,
    totalSpent: 4500.00,
    aov: 375.00,
    address: {
      line1: '123 Business Avenue',
      line2: 'Suite 400',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'United States'
    },
    tags: ['VIP', 'Wholesale', 'Net-30']
  };

  // Mock order history
  const recentOrders = [
    { id: 'ZAG-128945', date: 'Oct 24, 2023', amount: 1829.00, status: 'Delivered', items: 3 },
    { id: 'ZAG-128892', date: 'Sep 12, 2023', amount: 450.00, status: 'Delivered', items: 1 },
    { id: 'ZAG-128711', date: 'Jul 05, 2023', amount: 2221.00, status: 'Delivered', items: 5 },
  ];

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Top Header Navigation */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-4">
          <Link 
            to="/admin/customers" 
            className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-500 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-black text-gray-900">Customer Profile</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2.5 text-sm font-bold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
            Edit Customer
          </button>
          <button className="p-2.5 text-red-600 bg-white border border-gray-200 rounded-xl hover:bg-red-50 transition-colors shadow-sm" title="Suspend Account">
            <Ban className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Full-Width Profile Banner */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8 justify-between items-start lg:items-center">
          
          {/* Identity & Contact */}
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-3xl shadow-md shrink-0">
              {getInitials(customer.name)}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-2xl font-black text-gray-900">{customer.name}</h2>
                <span className="bg-green-100 text-green-700 text-xs font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {customer.status}
                </span>
              </div>
              <p className="text-sm font-medium text-gray-500 mb-3">Customer ID: #{customer.id} &bull; Joined {customer.joined}</p>
              
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-700">
                <a href={`mailto:${customer.email}`} className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                  <Mail className="w-4 h-4 text-gray-400" /> {customer.email}
                </a>
                <a href={`tel:${customer.phone}`} className="flex items-center gap-1.5 hover:text-blue-600 transition-colors">
                  <Phone className="w-4 h-4 text-gray-400" /> {customer.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Key Metrics / LTV */}
          <div className="flex items-center gap-6 lg:border-l border-gray-100 lg:pl-8 w-full lg:w-auto">
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Total Spent</p>
              <p className="text-2xl font-black text-blue-600">${customer.totalSpent.toFixed(2)}</p>
            </div>
            <div className="w-px h-12 bg-gray-100 hidden sm:block"></div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Orders</p>
              <p className="text-2xl font-black text-gray-900">{customer.totalOrders}</p>
            </div>
            <div className="w-px h-12 bg-gray-100 hidden sm:block"></div>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Avg Order</p>
              <p className="text-2xl font-black text-gray-900">${customer.aov.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Column */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Order History */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 md:p-8 border-b border-gray-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
              <Link to="/admin/orders" className="text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors">
                View All
              </Link>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50/50 border-b border-gray-100 text-xs font-black text-gray-500 uppercase tracking-wider">
                    <th className="px-6 py-4">Order ID</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50/80 transition-colors group cursor-pointer">
                      <td className="px-6 py-5 whitespace-nowrap">
                        <Link to={`/admin/orders/${order.id.split('-')[1]}`} className="text-sm font-black text-blue-600 hover:underline">
                          {order.id}
                        </Link>
                        <div className="text-xs font-medium text-gray-500 mt-1">{order.items} items</div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm font-bold text-gray-700">
                        {order.date}
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <span className="bg-gray-100 text-gray-700 text-xs font-bold px-3 py-1.5 rounded-full border border-gray-200">
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm font-black text-gray-900 text-right">
                        ${order.amount.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          
          {/* Default Address */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <h3 className="text-lg font-bold text-gray-900">Default Address</h3>
              <button className="text-gray-400 hover:text-blue-600 transition-colors">
                <Edit3 className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-start gap-4 pt-1">
              <MapPin className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
              <div className="text-sm font-medium text-gray-700 space-y-1">
                <p className="font-bold text-gray-900">{customer.name}</p>
                <p>{customer.address.line1}</p>
                <p>{customer.address.line2}</p>
                <p>{customer.address.city}, {customer.address.state} {customer.address.zip}</p>
                <p>{customer.address.country}</p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 md:p-8 space-y-5">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4">
              <h3 className="text-lg font-bold text-gray-900">Tags</h3>
              <button className="text-gray-400 hover:text-blue-600 transition-colors">
                <Edit3 className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {customer.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1.5 bg-gray-100 border border-gray-200 text-gray-700 text-xs font-bold px-3 py-1.5 rounded-full">
                  <Tag className="w-3 h-3" /> {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CustomerDetail;
