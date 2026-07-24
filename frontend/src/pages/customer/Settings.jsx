import React, { useState } from 'react';

const Settings = () => {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567'
  });

  const [notifications, setNotifications] = useState({
    orderUpdates: true,
    promotions: false,
    newsletter: true
  });

  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = (name) => {
    setNotifications(prev => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-black text-gray-900 tracking-tight">Account Settings</h2>
        <p className="text-gray-500 font-medium mt-2">Manage your personal information and preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Personal Information */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Personal Information
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={personalInfo.firstName}
                    onChange={handleInfoChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-medium text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={personalInfo.lastName}
                    onChange={handleInfoChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-medium text-gray-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={personalInfo.email}
                    onChange={handleInfoChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-medium text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={personalInfo.phone}
                    onChange={handleInfoChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-medium text-gray-900"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button type="button" className="cursor-pointer bg-brand-black hover:bg-gray-900 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-md hover:shadow-lg">
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          {/* Change Password */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Security
            </h3>

            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Current Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full md:w-2/3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-medium text-gray-900"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">New Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full md:w-2/3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all font-medium text-gray-900"
                />
              </div>
              <div className="pt-4">
                <button type="button" className="cursor-pointer bg-white border border-gray-200 hover:border-brand-black hover:bg-gray-50 text-brand-black font-bold py-3 px-8 rounded-xl transition-all shadow-sm">
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar Settings */}
        <div className="space-y-8">

          {/* Notifications */}
          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              Notifications
            </h3>

            <div className="space-y-6">
              {[
                { id: 'orderUpdates', label: 'Order Updates', desc: 'Get notified when your order status changes.' },
                { id: 'promotions', label: 'Promotions', desc: 'Receive exclusive offers and discounts.' },
                { id: 'newsletter', label: 'Newsletter', desc: 'Monthly news and updates from Z.A Graphics.' }
              ].map((item) => (
                <div key={item.id} className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{item.label}</h4>
                    <p className="text-xs text-gray-500 font-medium mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                  <button
                    onClick={() => handleNotificationChange(item.id)}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${notifications[item.id] ? 'bg-brand-blue' : 'bg-gray-200'}`}
                  >
                    <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${notifications[item.id] ? 'translate-x-5' : 'translate-x-0'}`} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Delete Account */}
          <div className="bg-red-50/50 rounded-3xl border border-red-100 p-8">
            <h3 className="text-xl font-bold text-red-700 mb-3 flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Danger Zone
            </h3>
            <p className="text-sm text-red-600/80 font-medium mb-6 leading-relaxed">
              Once you delete your account, there is no going back. Please be certain.
            </p>
            <button className="w-full cursor-pointer bg-white border-2 border-red-200 hover:border-red-500 hover:bg-red-50 text-red-600 font-bold py-3 px-4 rounded-xl transition-all shadow-sm">
              Delete Account
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Settings;
