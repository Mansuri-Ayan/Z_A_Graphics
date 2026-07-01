import React from 'react';

const Products = () => {
  const mockProducts = [
    { id: 1, name: 'Premium Business Cards', price: 1250, minQty: 500, category: 'Cards' },
    { id: 2, name: 'Standard Letterheads', price: 800, minQty: 1000, category: 'Stationery' },
    { id: 3, name: 'Custom Coffee Mugs', price: 300, minQty: 50, category: 'Merchandise' },
    { id: 4, name: 'Vinyl Banners', price: 450, minQty: 1, category: 'Signage' },
    { id: 5, name: 'Glossy Flyers', price: 900, minQty: 1000, category: 'Marketing' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Products Management</h1>
          <p className="text-sm font-medium text-gray-500 mt-1">Manage your print catalog and pricing.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Add Product
        </button>
      </div>

      <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
        <div className="p-6 border-b border-gray-100 bg-gray-50/50 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div className="relative w-full max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors"
            />
          </div>
          <select className="w-full sm:w-auto border border-gray-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20 bg-white shadow-sm">
            <option>All Categories</option>
            <option>Cards</option>
            <option>Stationery</option>
            <option>Merchandise</option>
            <option>Signage</option>
            <option>Marketing</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white border-b border-gray-100 text-xs font-black text-gray-500 uppercase tracking-wider">
                <th className="px-8 py-5">Product Name</th>
                <th className="px-8 py-5">Category</th>
                <th className="px-8 py-5">Base Price</th>
                <th className="px-8 py-5">Min. Qty</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {mockProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50/80 transition-colors group">
                  <td className="px-8 py-5 whitespace-nowrap text-sm font-black text-gray-900">{product.name}</td>
                  <td className="px-8 py-5 whitespace-nowrap">
                    <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-bold border border-gray-200">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm font-black text-gray-900">${product.price.toFixed(2)}</td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm font-bold text-gray-500">{product.minQty} units</td>
                  <td className="px-8 py-5 whitespace-nowrap text-sm text-right font-bold space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-blue-600 hover:text-blue-800 transition-colors">Edit</button>
                    <button className="text-red-500 hover:text-red-700 transition-colors">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;