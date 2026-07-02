import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto pt-32 pb-16 px-6 lg:px-8">
      <title>Privacy Policy | Z.A Graphics</title>
      <meta name="description" content="Review the Privacy Policy of Z.A Graphics to understand how we collect, use, and protect your data according to Indian regulations." />
      
      <h1 className="text-4xl font-black text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <p className="text-sm text-gray-500 mb-6">Last Updated: July 2026</p>
          <p>
            At Z.A Graphics, we are committed to protecting your personal data and respecting your privacy. This Privacy Policy outlines how we collect, use, process, and protect your information when you use our platform, in strict compliance with the Digital Personal Data Protection (DPDP) Act, 2023, and the Information Technology Act, 2000.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Data Collection & Consent</h2>
          <p>
            We collect personal data (such as your name, contact details, shipping address, and payment information) strictly for the purpose of fulfilling your printing orders and improving your experience. Under the DPDP Act, we ensure that:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Data is collected only with your explicit, clear, and informed consent.</li>
            <li>You have the right to withdraw your consent at any time.</li>
            <li>We only collect data that is strictly necessary for the transaction.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Data</h2>
          <p>
            Your information is used exclusively for:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Processing and fulfilling your orders.</li>
            <li>Communicating with you regarding order updates, delivery, and support.</li>
            <li>Complying with legal and regulatory obligations, including tax and accounting regulations.</li>
          </ul>
          <p className="mt-4">
            We do not sell, rent, or trade your personal data to third parties for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security & Retention</h2>
          <p>
            We implement robust security practices and standards to protect your personal data from unauthorized access, alteration, disclosure, or destruction. Data is retained only for as long as necessary to fulfill the purposes for which it was collected or as required by Indian law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Your Rights as a Data Principal</h2>
          <p>
            Under the DPDP Act, you have the right to:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Access information about the personal data we hold about you.</li>
            <li>Request the correction, completion, or updating of your data.</li>
            <li>Request the erasure of your personal data (subject to legal retention requirements).</li>
            <li>Nominate another individual to exercise these rights in the event of death or incapacity.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Our Data Protection Officer</h2>
          <p>
            For any queries, requests to exercise your rights, or privacy-related concerns, please contact our designated Data Protection Officer:
          </p>
          <p className="mt-2 font-bold">Email: privacy@zagraphics.com</p>
          <p>Address: [Full Address], Mumbai, MH, India</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
