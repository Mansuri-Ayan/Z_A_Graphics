import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Pagination } from '../../components/ui/Pagination';
import { ChevronRight } from 'lucide-react';

const Customers = () => {
  const navigate = useNavigate();
  const mockCustomers = [
    { id: 1, name: 'John Smith', email: 'john@acme.com', phone: '+1 234-567-8900', orders: 12, spent: 4500.00, joined: 'Jan 2023' },
    { id: 2, name: 'Sarah Connor', email: 'sarah@techstart.io', phone: '+1 987-654-3210', orders: 3, spent: 850.50, joined: 'Mar 2023' },
    { id: 3, name: 'Michael Chen', email: 'm.chen@globaldesigns.net', phone: '+44 20 7123 4567', orders: 25, spent: 12400.00, joined: 'Nov 2022' },
    { id: 4, name: 'Emma Wilson', email: 'emma.w@marketingpros.com', phone: '+61 2 9876 5432', orders: 8, spent: 2100.00, joined: 'May 2023' },
    { id: 5, name: 'David Miller', email: 'david@millercorp.com', phone: '+1 555-123-4567', orders: 1, spent: 125.00, joined: 'Oct 2023' },
  ];

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Customers</h1>
          <p className="text-sm font-medium text-gray-500 mt-1">Manage your customer accounts and history.</p>
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
              placeholder="Search customers by name or email..." 
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-100 text-xs font-black text-gray-500 uppercase tracking-wider">
                <th className="px-8 py-5">Customer</th>
                <th className="px-8 py-5">Contact</th>
                <th className="px-8 py-5">Total Orders</th>
                <th className="px-8 py-5">Total Spent</th>
                <th className="px-8 py-5">Joined</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockCustomers.map((customer) => (
                <tr 
                  key={customer.id} 
                  onClick={() => navigate(`/admin/customers/${customer.id}`)}
                  className="hover:bg-gray-50/80 transition-colors group cursor-pointer"
                >
                  <td className="px-8 py-5 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-black text-sm shadow-sm">
                        {getInitials(customer.name)}
                      </div>
                      <span className="text-sm font-black text-gray-900">{customer.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap">
                    <div className="text-sm font-bold text-gray-700">{customer.email}</div>
                    <div className="text-xs font-medium text-gray-500 mt-0.5">{customer.phone}</div>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm font-bold text-gray-900">{customer.orders}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm font-black text-gray-900">${customer.spent.toFixed(2)}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm font-medium text-gray-500">{customer.joined}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm text-right font-bold transition-opacity">
                    <Link 
                      to={`/admin/customers/${customer.id}`} 
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 rounded-lg transition-colors"
                      title="View Profile"
                    >
                      View Profile <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default Customers;