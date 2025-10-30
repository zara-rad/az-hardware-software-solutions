import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/api/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch((err) => console.error("❌ Fetch error:", err));
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0d1117] text-white py-20 px-6">
      {/* 🔹 Header */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Products
      </motion.h1>

      {/* 🔹 Product Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.map((p, i) => (
          <motion.div
            key={p._id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="group bg-[#121a24]/80 border border-gray-800 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:border-green-400 transition-all duration-300"
          >
            {/* 🖼️ Product Image */}
            {p.images?.length > 0 ? (
              <img
                src={`http://localhost:5050${p.images[0]}`}
                alt={p.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-56 bg-gray-800 flex items-center justify-center text-gray-400">
                No Image
              </div>
            )}

            {/* 🧾 Product Info */}
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400">
                {p.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{p.category}</p>
              <p className="text-gray-300 text-sm mb-4">{p.description}</p>

              {/* 💰 Prices */}
              <div className="flex justify-center items-center gap-3">
                {p.oldPrice && (
                  <span className="text-gray-400 line-through">
                    €{p.oldPrice}
                  </span>
                )}
                <span className="text-green-400 font-bold text-lg">
                  €{p.price}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
