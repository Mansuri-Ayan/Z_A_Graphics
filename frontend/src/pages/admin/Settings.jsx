import React from 'react';

const Settings = () => {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-brand-black">Platform Settings</h1>
        <button className="bg-brand-black text-white px-6 py-2 rounded-md hover:opacity-90 text-sm font-medium shadow-sm">
          Save Changes
        </button>
      </div>

      {/* Pricing Settings */}
      <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm">
        <h2 className="text-lg font-bold text-brand-black mb-4">Pricing & Taxes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Global GST Percentage (%)</label>
            <input 
              type="number" 
              defaultValue="18"
              className="w-full border border-gray-200 rounded px-3 py-2 text-brand-black focus:outline-none focus:ring-1 focus:ring-brand-blue" 
            />
            <p className="text-xs text-gray-500 mt-1">Applied globally to all orders at checkout.</p>
          </div>
        </div>
      </div>

      {/* Upload Limits */}
      <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm">
        <h2 className="text-lg font-bold text-brand-black mb-4">Media & Upload Limits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Max Product Images (Gallery)</label>
            <input 
              type="number" 
              defaultValue="5"
              className="w-full border border-gray-200 rounded px-3 py-2 text-brand-black focus:outline-none focus:ring-1 focus:ring-brand-blue" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Max Product Videos (Gallery)</label>
            <input 
              type="number" 
              defaultValue="1"
              className="w-full border border-gray-200 rounded px-3 py-2 text-brand-black focus:outline-none focus:ring-1 focus:ring-brand-blue" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Customer Design Uploads (Images)</label>
            <input 
              type="number" 
              defaultValue="4"
              className="w-full border border-gray-200 rounded px-3 py-2 text-brand-black focus:outline-none focus:ring-1 focus:ring-brand-blue" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Customer Design Uploads (Videos)</label>
            <input 
              type="number" 
              defaultValue="1"
              className="w-full border border-gray-200 rounded px-3 py-2 text-brand-black focus:outline-none focus:ring-1 focus:ring-brand-blue" 
            />
          </div>
        </div>
      </div>
      
      {/* File Configuration */}
      <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm">
        <h2 className="text-lg font-bold text-brand-black mb-4">File Constraints</h2>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Allowed File Types</label>
            <input 
              type="text" 
              defaultValue=".pdf, .png, .jpg, .jpeg, .zip, .ai, .psd"
              className="w-full border border-gray-200 rounded px-3 py-2 text-brand-black focus:outline-none focus:ring-1 focus:ring-brand-blue" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Max File Size (MB)</label>
            <input 
              type="number" 
              defaultValue="50"
              className="w-full border border-gray-200 rounded px-3 py-2 text-brand-black focus:outline-none focus:ring-1 focus:ring-brand-blue" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;