import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto pt-32 pb-16 px-6 lg:px-8">
      <title>Shipping & Delivery Policy | Z.A Graphics</title>
      <meta name="description" content="View the Shipping and Delivery Policy for Z.A Graphics. Find information regarding shipping carriers, delivery times, and rates across India." />
      
      <h1 className="text-4xl font-black text-gray-900 mb-8">Shipping & Delivery Policy</h1>
      
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <p className="text-sm text-gray-500 mb-6">Last Updated: July 2026</p>
          <p>
            Z.A Graphics partners with reliable logistics providers to ensure your custom prints reach you safely and on time across India.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Processing Time</h2>
          <p>
            Since all our products are custom manufactured:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Standard printing and processing time is 2 to 4 business days.</li>
            <li>Bulk orders or highly complex design requirements may require additional processing time, which will be communicated at the time of order confirmation.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Delivery Timelines</h2>
          <p>
            Once dispatched, standard delivery times are as follows:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Mumbai (Local):</strong> 1 - 2 business days.</li>
            <li><strong>Metros (Tier 1):</strong> 3 - 5 business days.</li>
            <li><strong>Rest of India:</strong> 5 - 7 business days.</li>
          </ul>
          <p className="mt-4">
            Please note that these are estimated timelines. Delays may occur due to unforeseen logistical challenges, public holidays, or extreme weather conditions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Shipping Charges</h2>
          <p>
            Shipping costs are calculated at checkout based on the weight, dimensions of your order, and your delivery pin code. We strive to provide the most cost-effective shipping options without compromising on safety.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Order Tracking</h2>
          <p>
            Once your order is handed over to our delivery partner, you will receive an email and SMS containing your tracking number and a link to monitor your shipment's progress in real-time.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicy;
