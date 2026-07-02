import React from 'react';

const CustomerInquiries = () => {
  const mockInquiries = [
    {
      id: 1,
      product: 'Premium Business Cards',
      question: 'Do you offer foil stamping on these cards?',
      date: '2023-10-24',
      status: 'Answered',
      reply: 'Yes, we do! You can select foil stamping in the finishing options during checkout.',
      replyDate: '2023-10-25'
    },
    {
      id: 2,
      product: 'Vinyl Banners',
      question: 'Can these banners be used outdoors in the rain?',
      date: '2023-11-02',
      status: 'Pending',
      reply: null,
      replyDate: null
    }
  ];

  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-8">My Questions</h1>
      
      <div className="space-y-6">
        {mockInquiries.map(inquiry => (
          <div key={inquiry.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">{inquiry.date}</span>
                <h3 className="text-lg font-bold text-gray-900 mt-1">{inquiry.product}</h3>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                inquiry.status === 'Answered' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
              }`}>
                {inquiry.status}
              </span>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <p className="text-gray-800 font-medium">Q: {inquiry.question}</p>
            </div>

            {inquiry.reply ? (
              <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">ZA</div>
                  <span className="text-sm font-bold text-blue-900">Z.A Graphics Support</span>
                  <span className="text-xs text-blue-600/70 ml-auto">{inquiry.replyDate}</span>
                </div>
                <p className="text-blue-900 text-sm">{inquiry.reply}</p>
              </div>
            ) : (
              <p className="text-sm text-gray-500 italic px-2">Waiting for a reply from our team...</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerInquiries;
