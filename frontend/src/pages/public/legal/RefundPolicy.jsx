import React from 'react';

const RefundPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto pt-32 pb-16 px-6 lg:px-8">
      <title>Cancellation & Refund Policy | Z.A Graphics</title>
      <meta name="description" content="Z.A Graphics Cancellation & Refund Policy. Understand our terms regarding order modifications, cancellations, and refunds for custom print orders." />
      
      <h1 className="text-4xl font-black text-gray-900 mb-8">Cancellation & Refund Policy</h1>
      
      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <p className="text-sm text-gray-500 mb-6">Last Updated: July 2026</p>
          <p>
            At Z.A Graphics, we strive for 100% customer satisfaction. This policy is aligned with the Consumer Protection (E-Commerce) Rules, 2020, to ensure transparency and fairness in all transactions.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Order Cancellations</h2>
          <p>
            Because our services involve custom printing based on your specific designs, cancellation windows are strictly limited:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li><strong>Before Production:</strong> You may cancel your order for a full refund at any time before the order enters the "In Production" phase.</li>
            <li><strong>During/After Production:</strong> Once your custom order has entered the printing process, cancellations are not permitted, as the materials are uniquely customized for you.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Returns & Replacements</h2>
          <p>
            Since our products are custom-made, we do not accept general returns. However, replacements or refunds will be issued under the following circumstances:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>The product received is defective, damaged during transit, or substantially different from the proof approved.</li>
            <li>The print quality deviates significantly from industry standards (subject to the quality of the original file provided by you).</li>
          </ul>
          <p className="mt-4">
            To raise a claim, you must notify us within <strong>7 days</strong> of delivery by emailing support@zagraphics.com with clear photographs of the defect and your order number.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Refund Processing</h2>
          <p>
            If a refund is approved:
          </p>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Refunds will be processed back to the original payment method.</li>
            <li>It may take between 5 to 7 business days for the credited amount to reflect in your bank account, depending on your financial institution.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
