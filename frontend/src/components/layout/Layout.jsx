import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileBottomNav from './MobileBottomNav';
import WhatsAppFAB from '../feature/WhatsAppFAB';
import SmoothScrollProvider from './SmoothScrollProvider';
import ScrollToTop from './ScrollToTop';
import BackToTop from '../ui/BackToTop';

const Layout = () => {
  return (
    <SmoothScrollProvider>
      <ScrollToTop />
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
        <BackToTop />
        <MobileBottomNav />
      </div>
    </SmoothScrollProvider>
  );
};

export default Layout;