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
    { name: 'Settings', path: '/account/settings' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Top Banner */}
      <div className="bg-gray-900 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-900/40 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">My Account</h1>
          <p className="text-gray-300 mt-4 text-lg font-medium max-w-2xl">Manage your orders, update your profile, and keep track of your designs.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-1/4">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden sticky top-28">
              <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-black text-2xl mb-4">
                  JD
                </div>
                <h3 className="font-black text-gray-900 text-lg">John Doe</h3>
                <p className="text-gray-500 text-sm font-medium">john.doe@example.com</p>
              </div>
              <nav className="flex flex-col p-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path || (item.path !== '/account' && location.pathname.startsWith(item.path));
                  return (
                    <Link 
                      key={item.name}
                      to={item.path}
                      className={`px-4 py-3 mx-2 my-1 rounded-xl text-sm font-bold transition-all ${
                        isActive 
                        ? 'bg-blue-600 text-white shadow-md' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                <div className="mx-4 my-2 border-t border-gray-100"></div>
                <button 
                  onClick={handleLogout}
                  className="px-4 py-3 mx-2 my-1 rounded-xl text-sm font-bold text-left text-red-600 hover:bg-red-50 transition-all"
                >
                  Logout
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="w-full lg:w-3/4 pt-8 lg:pt-0">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default CustomerLayout;