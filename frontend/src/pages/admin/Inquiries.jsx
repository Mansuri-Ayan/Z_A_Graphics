import React from 'react';

const Inquiries = () => {
  const mockInquiries = [
    { id: 1, name: 'Alice Walker', email: 'alice@example.com', subject: 'Custom Quote for 10k Flyers', date: '2 hours ago', status: 'New' },
    { id: 2, name: 'Bob Builder', email: 'bob@construction.com', subject: 'Banner material inquiry', date: '5 hours ago', status: 'Read' },
    { id: 3, name: 'Charlie Davis', email: 'charlie@davis.net', subject: 'Artwork requirements', date: '1 day ago', status: 'Replied' },
    { id: 4, name: 'Diana Prince', email: 'diana@amazon.org', subject: 'Bulk discount pricing', date: '2 days ago', status: 'Replied' },
  ];

  const getStatusStyle = (status) => {
    switch(status) {
      case 'New': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Read': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Replied': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Contact Inquiries</h1>
          <p className="text-sm font-medium text-gray-500 mt-1">Manage messages received from the contact form.</p>
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
              placeholder="Search inquiries..." 
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-100 text-xs font-black text-gray-500 uppercase tracking-wider">
                <th className="px-8 py-5">Sender</th>
                <th className="px-8 py-5">Subject / Preview</th>
                <th className="px-8 py-5">Date</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockInquiries.map((inquiry) => (
                <tr key={inquiry.id} className="hover:bg-gray-50/80 transition-colors group cursor-pointer">
                  <td className="px-8 py-5 whitespace-nowrap">
                    <div className="text-sm font-black text-gray-900">{inquiry.name}</div>
                    <div className="text-xs font-bold text-gray-500 mt-0.5">{inquiry.email}</div>
                  </td>
                  <td className="px-8 py-5">
                    <div className={`text-sm ${inquiry.status === 'New' ? 'font-black text-gray-900' : 'font-bold text-gray-700'}`}>
                      {inquiry.subject}
                    </div>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm font-medium text-gray-500">{inquiry.date}</td>
                  <td className="px-8 py-5 whitespace-nowrap">
                    <span className={`text-xs px-3 py-1 rounded-full font-bold border ${getStatusStyle(inquiry.status)}`}>
                      {inquiry.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm text-right font-bold space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {inquiry.status === 'New' && (
                      <button className="text-gray-600 hover:text-gray-900 transition-colors">Mark Read</button>
                    )}
                    <button className="text-blue-600 hover:text-blue-800 transition-colors">Reply</button>
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

export default Inquiries;