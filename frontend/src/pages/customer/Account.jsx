import React from 'react';

const Account = () => {
  return (
    <div className="space-y-4 md:space-y-10">

      {/* Profile Details */}
      <div className="bg-white rounded-2xl md:rounded-[2rem] border border-gray-100 p-4 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-100 blur-2xl"></div>

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 md:mb-8 relative z-10">
          <h2 className="text-lg sm:text-xl md:text-2xl font-black text-brand-black tracking-tight">Profile Details</h2>
          <button className="cursor-pointer bg-brand-black hover:bg-gray-900 text-white text-[10px] md:text-sm font-bold px-4 py-2 md:px-5 md:py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md self-start sm:self-auto">Edit Profile</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 relative z-10">
          <div className="border border-gray-200 bg-gray-50/50 rounded-xl md:rounded-2xl p-4 md:p-5 transition-colors hover:bg-white hover:border-gray-300 shadow-sm hover:shadow">
            <p className="text-[10px] md:text-xs text-gray-500 mb-1.5 font-bold uppercase tracking-widest">Full Name</p>
            <p className="font-black text-brand-black text-sm md:text-base">John Doe</p>
          </div>
          <div className="border border-gray-200 bg-gray-50/50 rounded-xl md:rounded-2xl p-4 md:p-5 transition-colors hover:bg-white hover:border-gray-300 shadow-sm hover:shadow">
            <p className="text-[10px] md:text-xs text-gray-500 mb-1.5 font-bold uppercase tracking-widest">Email Address</p>
            <p className="font-black text-brand-black text-sm md:text-base break-all">john.doe@example.com</p>
          </div>
          <div className="border border-gray-200 bg-gray-50/50 rounded-xl md:rounded-2xl p-4 md:p-5 transition-colors hover:bg-white hover:border-gray-300 shadow-sm hover:shadow">
            <p className="text-[10px] md:text-xs text-gray-500 mb-1.5 font-bold uppercase tracking-widest">Phone Number</p>
            <p className="font-black text-brand-black text-sm md:text-base">+91 98765 43210</p>
          </div>
        </div>
      </div>

      {/* Saved Addresses */}
      <div className="bg-white rounded-2xl md:rounded-[2rem] border border-gray-100 p-4 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 md:gap-4 mb-4 md:mb-8">
          <h2 className="text-base sm:text-xl md:text-2xl font-black text-brand-black tracking-tight">Saved Addresses</h2>
          <button className="cursor-pointer bg-brand-black hover:bg-gray-800 text-white text-[10px] md:text-sm font-bold px-3 py-1.5 md:px-5 md:py-2.5 rounded-xl transition-all shadow-sm hover:shadow self-start sm:self-auto">
            + Add New
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">

          {/* Primary Address */}
          <div className="border-2 border-brand-black rounded-xl md:rounded-[1.5rem] p-3 md:p-6 bg-gray-50/30 relative shadow-sm transition-all hover:shadow-md">
            <span className="absolute top-3 right-3 md:top-6 md:right-6 bg-brand-black text-white text-[9px] md:text-[10px] font-black uppercase tracking-widest px-2 py-0.5 md:px-3 md:py-1.5 rounded-full shadow-sm">Primary</span>
            <h3 className="font-black text-brand-black text-sm md:text-lg mb-1 md:mb-2 pr-16 md:pr-20">Office Headquarters</h3>
            <p className="text-[11px] md:text-sm text-gray-500 leading-relaxed mb-3 md:mb-6 font-bold">
              123 Corporate Blvd, Suite 400<br />
              Mumbai, MH 400001
            </p>
            <div className="flex flex-wrap gap-2 md:gap-4 text-[10px] md:text-sm font-black uppercase tracking-widest">
              <button className="text-brand-black hover:text-gray-600 transition-colors">Edit</button>
              <button className="text-gray-400 hover:text-red-500 transition-colors">Delete</button>
            </div>
          </div>

          {/* Secondary Address */}
          <div className="border border-gray-200 rounded-xl md:rounded-[1.5rem] p-3 md:p-6 bg-gray-50/50 hover:bg-white hover:border-gray-300 hover:shadow-md transition-all">
            <h3 className="font-black text-brand-black text-sm md:text-lg mb-1 md:mb-2">Branch Office</h3>
            <p className="text-[11px] md:text-sm text-gray-500 leading-relaxed mb-3 md:mb-6 font-bold">
              456 Tech Park, Building B<br />
              Pune, MH 411057
            </p>
            <div className="flex flex-wrap gap-4 text-xs md:text-sm font-black uppercase tracking-widest">
              <button className="text-brand-black hover:text-gray-600 transition-colors">Edit</button>
              <button className="text-brand-black hover:text-gray-600 transition-colors">Set Primary</button>
              <button className="text-gray-400 hover:text-red-500 transition-colors">Delete</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Account;