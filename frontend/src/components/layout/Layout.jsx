import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';
import WhatsAppFAB from '../feature/WhatsAppFAB';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans md:pb-0 pb-16">
      {/* Global Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Floating Elements */}
      <WhatsAppFAB />
      <MobileBottomNav />
    </div>
  );
};

export default Layout;