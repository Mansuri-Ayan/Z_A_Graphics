import React from 'react';
import { Button } from '../../components/ui/Button';
import { Save, Settings as SettingsIcon, DollarSign, HardDrive, FileType } from 'lucide-react';

const Settings = () => {
  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
            <SettingsIcon className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-gray-900">Platform Settings</h1>
            <p className="text-sm font-medium text-gray-500 mt-1">Manage global configurations across your application.</p>
          </div>
        </div>
        <Button variant="primary" className="py-2.5 px-6 font-bold shadow-lg shadow-blue-500/30 flex items-center gap-2">
          <Save className="w-4 h-4" /> Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-8">
        
        {/* Pricing Settings */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-50 flex items-center gap-3">
            <div className="p-2 bg-gray-50 rounded-lg text-gray-500">
              <DollarSign className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Pricing & Taxes</h2>
          </div>
          <div className="p-8">
            <div className="max-w-md">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Global GST Percentage (%)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <span className="text-gray-400 font-bold">%</span>
                </div>
                <input 
                  type="number" 
                  defaultValue="18"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200/60 rounded-xl text-sm font-bold text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" 
                />
              </div>
              <p className="text-xs font-medium text-gray-500 mt-2">Applied globally to all orders at checkout.</p>
            </div>
          </div>
        </div>

        {/* Upload Limits */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-50 flex items-center gap-3">
            <div className="p-2 bg-gray-50 rounded-lg text-gray-500">
              <HardDrive className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Media & Upload Limits</h2>
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Max Product Images (Gallery)</label>
                <input 
                  type="number" 
                  defaultValue="5"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200/60 rounded-xl text-sm font-bold text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Max Product Videos (Gallery)</label>
                <input 
                  type="number" 
                  defaultValue="1"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200/60 rounded-xl text-sm font-bold text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Customer Design Uploads (Images)</label>
                <input 
                  type="number" 
                  defaultValue="4"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200/60 rounded-xl text-sm font-bold text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Customer Design Uploads (Videos)</label>
                <input 
                  type="number" 
                  defaultValue="1"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200/60 rounded-xl text-sm font-bold text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" 
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* File Configuration */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-50 flex items-center gap-3">
            <div className="p-2 bg-gray-50 rounded-lg text-gray-500">
              <FileType className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">File Constraints</h2>
          </div>
          <div className="p-8 space-y-8">
            <div className="max-w-3xl">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Allowed File Types (Customer Designs)</label>
              <input 
                type="text" 
                defaultValue=".pdf, .png, .jpg, .jpeg, .zip, .ai, .psd, .mp4"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200/60 rounded-xl text-sm font-bold text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" 
              />
            </div>
            
            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-sm font-black text-gray-900 mb-6">Admin Product Gallery (Per File Limits)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Max Image Size (MB)</label>
                  <input 
                    type="number" 
                    defaultValue="5"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200/60 rounded-xl text-sm font-bold text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Max Video Size (MB)</label>
                  <input 
                    type="number" 
                    defaultValue="50"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200/60 rounded-xl text-sm font-bold text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" 
                  />
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-sm font-black text-gray-900 mb-6">Customer Design Uploads (Per File Limits)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Max Image Size (MB)</label>
                  <input 
                    type="number" 
                    defaultValue="20"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200/60 rounded-xl text-sm font-bold text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Max Video Size (MB)</label>
                  <input 
                    type="number" 
                    defaultValue="100"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200/60 rounded-xl text-sm font-bold text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none" 
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Settings;