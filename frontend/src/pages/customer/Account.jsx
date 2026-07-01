import React from 'react';

const Account = () => {
  return (
    <div className="space-y-10">
      {/* Notifications Panel */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
        <h2 className="text-2xl font-black text-gray-900 mb-6">Recent Notifications</h2>
        <div className="space-y-4">
          <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <p className="text-base text-gray-900 font-bold">Order #ZAG-123456 has been approved!</p>
              <p className="text-sm text-gray-500 mt-1">2 hours ago</p>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">Status Update</span>
          </div>
          <div className="bg-white border border-gray-100 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <p className="text-base text-gray-700 font-medium">Your order #ZAG-987654 has been delivered.</p>
              <p className="text-sm text-gray-500 mt-1">3 days ago</p>
            </div>
            <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap self-start sm:self-auto">Delivered</span>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-blue-50/50 blur-2xl"></div>
        
        <div className="flex justify-between items-center mb-8 relative z-10">
          <h2 className="text-2xl font-black text-gray-900">Profile Details</h2>
          <button className="text-blue-600 text-sm font-bold hover:underline">Edit Profile</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          <div>
            <p className="text-sm text-gray-500 mb-2 font-medium">Full Name</p>
            <p className="font-bold text-gray-900 text-lg">John Doe</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2 font-medium">Email Address</p>
            <p className="font-bold text-gray-900 text-lg">john.doe@example.com</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-2 font-medium">Phone Number</p>
            <p className="font-bold text-gray-900 text-lg">+91 98765 43210</p>
          </div>
        </div>
      </div>

      {/* Saved Addresses */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-black text-gray-900">Saved Addresses</h2>
          <button className="bg-gray-900 hover:bg-black text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors">
            + Add New
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-blue-600 rounded-2xl p-6 bg-blue-50/30 relative shadow-sm">
            <span className="absolute top-6 right-6 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">Primary</span>
            <h3 className="font-black text-gray-900 text-lg mb-3">Office Headquarters</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 font-medium">
              123 Corporate Blvd, Suite 400<br/>
              Mumbai, MH 400001
            </p>
            <div className="flex space-x-4 text-sm font-bold">
              <button className="text-blue-600 hover:text-blue-800 transition-colors">Edit</button>
              <button className="text-red-500 hover:text-red-700 transition-colors">Delete</button>
            </div>
          </div>

          <div className="border border-gray-100 rounded-2xl p-6 bg-gray-50/50 hover:bg-white hover:shadow-md transition-all">
            <h3 className="font-black text-gray-900 text-lg mb-3">Branch Office</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6 font-medium">
              456 Tech Park, Building B<br/>
              Pune, MH 411057
            </p>
            <div className="flex space-x-4 text-sm font-bold">
              <button className="text-blue-600 hover:text-blue-800 transition-colors">Edit</button>
              <button className="text-blue-600 hover:text-blue-800 transition-colors">Set Primary</button>
              <button className="text-red-500 hover:text-red-700 transition-colors">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;