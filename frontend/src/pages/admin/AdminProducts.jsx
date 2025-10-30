import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);

  // واکشی محصولات از بک‌اند
  useEffect(() => {
    fetch("http://localhost:5050/api/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => console.error("❌ Fetch error:", err));
  }, []);

  return (
    <div className="min-h-screen bg-[#0d1117] text-white p-8">
      <motion.h1
        className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🛠️ Manage Products
      </motion.h1>

      {/* جدول محصولات */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-800 rounded-lg overflow-hidden">
          <thead className="bg-[#121a24] text-gray-300 text-sm">
            <tr>
              <th className="p-3 border-b border-gray-700">Title</th>
              <th className="p-3 border-b border-gray-700">Category</th>
              <th className="p-3 border-b border-gray-700">Price</th>
              <th className="p-3 border-b border-gray-700">Old Price</th>
              <th className="p-3 border-b border-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((p) => (
                <tr
                  key={p._id}
                  className="text-sm text-gray-300 hover:bg-[#18222f] transition-colors"
                >
                  <td className="p-3 border-b border-gray-800">{p.title}</td>
                  <td className="p-3 border-b border-gray-800">{p.category}</td>
                  <td className="p-3 border-b border-gray-800 text-green-400">
                    €{p.price}
                  </td>
                  <td className="p-3 border-b border-gray-800 text-gray-500 line-through">
                    {p.oldPrice ? `€${p.oldPrice}` : "-"}
                  </td>
                  <td className="p-3 border-b border-gray-800">
                    <button className="bg-red-500/80 hover:bg-red-600 text-white px-3 py-1 rounded text-xs">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-400">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
