import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';

const CustomerLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/account' },
    { name: 'My Orders', path: '/account/orders' },
    { name: 'My Questions', path: '/account/questions' },
    { name: 'Settings', path: '/account/settings' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      
      {/* E-commerce Premium Top Banner */}
      <div className="bg-white border-b border-gray-100 pt-32 md:pt-40 pb-8 md:pb-16 relative overflow-hidden">
        {/* Dynamic Abstract Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-brand-blue/10 via-blue-100/20 to-transparent rounded-full blur-[80px] transform translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            
            {/* User Greeting & Avatar Badge */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-brand-blue to-blue-300 p-1 shadow-xl">
                  <div className="w-full h-full bg-white rounded-full flex items-center justify-center border-4 border-white">
                    <span className="text-2xl md:text-3xl font-black text-brand-blue tracking-tighter">JD</span>
                  </div>
                </div>
                {/* VIP / Pro Badge */}
                <div className="absolute -bottom-2 -right-2 bg-brand-black text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border-2 border-white shadow-sm flex items-center gap-1">
                  <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  Pro
                </div>
              </div>
              
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-black tracking-tight mb-2">
                  Welcome back, John!
                </h1>
                <p className="text-gray-500 font-bold flex items-center gap-2 text-sm md:text-base">
                  <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  john.doe@example.com
                </p>
              </div>
            </div>
            
            {/* E-commerce Quick Stats */}
            <div className="flex flex-wrap gap-4 shrink-0">
               {/* Total Orders Widget */}
               <div className="bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-4 md:p-5 flex items-center gap-4 md:gap-5 min-w-[180px] md:min-w-[200px] transition-transform hover:-translate-y-1">
                 <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue shrink-0">
                   <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>
                 </div>
                 <div>
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-0.5">Total Orders</span>
                   <span className="text-xl md:text-2xl font-black text-brand-black leading-none">12</span>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Dashboard Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-12 relative z-20">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
          
          {/* Streamlined Sidebar */}
          <aside className="w-full lg:w-1/4">
            <div className="bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.03)] overflow-hidden sticky top-32">
              <nav className="flex flex-col p-3 gap-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path || (item.path !== '/account' && location.pathname.startsWith(item.path));
                  return (
                    <Link 
                      key={item.name}
                      to={item.path}
                      className={`px-5 py-4 rounded-2xl text-sm font-bold transition-all flex items-center gap-3 ${
                        isActive 
                        ? 'bg-brand-black text-white shadow-md' 
                        : 'text-gray-500 hover:bg-gray-50 hover:text-brand-black'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <div className="mx-4 my-3 border-t border-gray-100"></div>
                <button 
                  onClick={handleLogout}
                  className="px-5 py-4 rounded-2xl text-sm font-bold text-left text-red-500 hover:bg-red-50 hover:text-red-600 transition-all flex items-center gap-3"
                >
                  Logout
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="w-full lg:w-3/4 pt-4 lg:pt-0">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default CustomerLayout;