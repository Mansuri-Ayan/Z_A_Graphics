import React from 'react';

const Account = () => {
  return (
    <div className="space-y-8 md:space-y-10">

      {/* Profile Details */}
      <div className="bg-white rounded-[2rem] border border-gray-100 p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-blue-50/50 blur-2xl"></div>
        
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8 relative z-10">
          <h2 className="text-xl md:text-2xl font-black text-brand-black tracking-tight">Profile Details</h2>
          <button className="text-brand-blue text-sm font-bold hover:underline self-start sm:self-auto">Edit Profile</button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
          <div>
            <p className="text-xs md:text-sm text-gray-400 mb-1 font-bold uppercase tracking-widest">Full Name</p>
            <p className="font-black text-brand-black text-base md:text-lg">John Doe</p>
          </div>
          <div>
            <p className="text-xs md:text-sm text-gray-400 mb-1 font-bold uppercase tracking-widest">Email Address</p>
            <p className="font-black text-brand-black text-base md:text-lg break-all">john.doe@example.com</p>
          </div>
          <div>
            <p className="text-xs md:text-sm text-gray-400 mb-1 font-bold uppercase tracking-widest">Phone Number</p>
            <p className="font-black text-brand-black text-base md:text-lg">+91 98765 43210</p>
          </div>
        </div>
      </div>

      {/* Saved Addresses */}
      <div className="bg-white rounded-[2rem] border border-gray-100 p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)]">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-black text-brand-black tracking-tight">Saved Addresses</h2>
          <button className="bg-brand-black hover:bg-gray-800 text-white text-xs md:text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow self-start sm:self-auto">
            + Add New
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Primary Address */}
          <div className="border-2 border-brand-blue rounded-[1.5rem] p-5 md:p-6 bg-blue-50/20 relative shadow-sm transition-all hover:shadow-md">
            <span className="absolute top-5 right-5 md:top-6 md:right-6 bg-brand-blue text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">Primary</span>
            <h3 className="font-black text-brand-black text-lg mb-2 pr-20">Office Headquarters</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 font-bold">
              123 Corporate Blvd, Suite 400<br/>
              Mumbai, MH 400001
            </p>
            <div className="flex flex-wrap gap-4 text-xs md:text-sm font-black uppercase tracking-widest">
              <button className="text-brand-blue hover:text-blue-800 transition-colors">Edit</button>
              <button className="text-red-500 hover:text-red-700 transition-colors">Delete</button>
            </div>
          </div>

          {/* Secondary Address */}
          <div className="border border-gray-200 rounded-[1.5rem] p-5 md:p-6 bg-gray-50/50 hover:bg-white hover:border-gray-300 hover:shadow-md transition-all">
            <h3 className="font-black text-brand-black text-lg mb-2">Branch Office</h3>
            <p className="text-sm text-gray-500 leading-relaxed mb-6 font-bold">
              456 Tech Park, Building B<br/>
              Pune, MH 411057
            </p>
            <div className="flex flex-wrap gap-4 text-xs md:text-sm font-black uppercase tracking-widest">
              <button className="text-brand-blue hover:text-blue-800 transition-colors">Edit</button>
              <button className="text-brand-blue hover:text-blue-800 transition-colors">Set Primary</button>
              <button className="text-red-500 hover:text-red-700 transition-colors">Delete</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Account;