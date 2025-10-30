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

      {/* ✅ جدول حرفه‌ای‌تر با چینش دو‌سطری و ستون‌های واضح */}
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-800 rounded-lg overflow-hidden text-sm md:text-base">
          <thead className="bg-[#121a24] text-gray-300 uppercase text-xs md:text-sm">
            <tr>
              <th className="p-3 border-b border-gray-700 text-left w-[25%]">
                Title
              </th>
              <th className="p-3 border-b border-gray-700 text-left w-[20%]">
                Category
              </th>
              <th className="p-3 border-b border-gray-700 text-left w-[15%]">
                Price
              </th>
              <th className="p-3 border-b border-gray-700 text-left w-[15%]">
                Old Price
              </th>
              <th className="p-3 border-b border-gray-700 text-center w-[25%]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((p) => (
                <tr
                  key={p._id}
                  className="border-t border-gray-800 hover:bg-[#1a2432]/70 transition-all"
                >
                  {/* 🟢 عنوان و توضیح */}
                  <td className="p-4">
                    <div className="font-semibold text-white">{p.title}</div>
                    <div className="text-gray-400 text-xs mt-1">
                      {p.description || "No description"}
                    </div>
                  </td>

                  {/* 🟣 دسته‌بندی */}
                  <td className="p-4 align-top text-gray-300">{p.category}</td>

                  {/* 💸 قیمت */}
                  <td className="p-4 align-top text-green-400 font-semibold">
                    €{p.price}
                  </td>

                  {/* ⚙️ قیمت قدیمی */}
                  <td className="p-4 align-top text-gray-500 line-through">
                    {p.oldPrice ? `€${p.oldPrice}` : "-"}
                  </td>

                  {/* 🧰 دکمه‌ها */}
                  <td className="p-4 text-center flex justify-center items-center gap-2">
                    <button className="bg-yellow-500/80 hover:bg-yellow-400 text-white px-3 py-1 rounded text-xs shadow">
                      Edit
                    </button>
                    <button className="bg-red-500/80 hover:bg-red-600 text-white px-3 py-1 rounded text-xs shadow">
                      Delete
                    </button>
                    <button className="bg-green-500/80 hover:bg-green-400 text-white px-3 py-1 rounded text-xs shadow">
                      Add
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
