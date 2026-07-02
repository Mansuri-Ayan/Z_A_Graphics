import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto pt-32 pb-16 px-6 lg:px-8">
      <h1 className="text-4xl font-black text-gray-900 mb-8">Terms of Service</h1>
      
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <p className="text-sm text-gray-500 mb-6">Last Updated: July 2026</p>
          <p>
            Welcome to Z.A Graphics. These Terms of Service ("Terms") govern your access to and use of our website, products, and services. By accessing or using our platform, you agree to be bound by these Terms and our Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
          <p>
            By using this website, you confirm that you are at least 18 years of age or are accessing the site under the supervision of a parent or legal guardian. The services provided by Z.A Graphics are subject to the laws of India.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Custom Design Uploads & Intellectual Property</h2>
          <p>
            When you upload custom designs, images, or assets for printing, you retain all intellectual property rights to your original content. However, by uploading, you grant Z.A Graphics a non-exclusive, worldwide, royalty-free license to use, reproduce, and process these materials solely for the purpose of fulfilling your order. 
          </p>
          <p className="mt-4">
            You represent and warrant that you own or have the necessary licenses, rights, and permissions to use and authorize Z.A Graphics to use all intellectual property related to your uploaded designs. We reserve the right to refuse orders that contain offensive, illegal, or copyrighted material belonging to a third party without authorization.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Pricing & Payments</h2>
          <p>
            All prices listed on the website are in Indian Rupees (INR). Prices are subject to change without notice. We make every effort to ensure accurate pricing, but in the event of a pricing error, we reserve the right to cancel any orders placed at the incorrect price.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Grievance Redressal</h2>
          <p>
            In accordance with the Consumer Protection (E-Commerce) Rules, 2020, if you have any grievances or complaints regarding our services, you may contact our Grievance Officer:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Name:</strong> [Grievance Officer Name]</li>
            <li><strong>Email:</strong> grievances@zagraphics.com</li>
            <li><strong>Address:</strong> [Full Address], Mumbai, MH, India</li>
          </ul>
          <p className="mt-2">We endeavor to acknowledge all complaints within 48 hours and resolve them within 30 days of receipt.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Governing Law & Jurisdiction</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising in connection with these Terms, including disputes regarding the validity or enforceability thereof, shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
