import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [activeImageIndex, setActiveImageIndex] = useState({});

  useEffect(() => {
    fetch("http://localhost:5050/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        const initial = {};
        data.forEach((p) => (initial[p._id] = 0));
        setActiveImageIndex(initial);
      })
      .catch((err) => console.error("❌ Fetch error:", err));
  }, []);

  const handleNext = (id, length) => {
    setActiveImageIndex((prev) => ({
      ...prev,
      [id]: (prev[id] + 1) % length,
    }));
  };

  const handlePrev = (id, length) => {
    setActiveImageIndex((prev) => ({
      ...prev,
      [id]: (prev[id] - 1 + length) % length,
    }));
  };

  const handleThumbnailClick = (id, index) => {
    setActiveImageIndex((prev) => ({ ...prev, [id]: index }));
  };

  return (
    <div className="relative min-h-screen bg-[#0d1117] text-white py-20 px-6">
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Products
      </motion.h1>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.map((p, i) => {
          const currentIndex = activeImageIndex[p._id] || 0;
          const hasImages = p.images?.length > 0;

          return (
            <motion.div
              key={p._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-[#121a24]/80 border border-gray-800 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:border-green-400 transition-all duration-300"
            >
              {/* 🏷️ Category در بالای کارت */}
              <div className="px-4 pt-4 pb-2 text-center border-b border-gray-800">
                <p className="text-sm text-cyan-400 font-medium tracking-wide uppercase">
                  {p.category}
                </p>
              </div>

              {/* 🖼️ Image Slider */}
              <div className="relative w-full h-56 overflow-hidden bg-[#1b2330]">
                {hasImages ? (
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentIndex}
                      src={`http://localhost:5050${p.images[currentIndex]}`}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover rounded transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  </AnimatePresence>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    No Image
                  </div>
                )}

                {/* ⬅️➡️ Buttons */}
                {hasImages && p.images.length > 1 && (
                  <>
                    <button
                      onClick={() => handlePrev(p._id, p.images.length)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => handleNext(p._id, p.images.length)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white rounded-full p-2 transition"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
              </div>

              {/* 🔹 Thumbnails + Image Count */}
              {hasImages && (
                <div className="flex justify-center items-center gap-2 mt-3">
                  {p.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => handleThumbnailClick(p._id, index)}
                      className={`w-3 h-3 rounded-full border border-gray-500 transition ${
                        index === currentIndex
                          ? "bg-green-400 border-green-400 scale-110"
                          : "bg-gray-600 hover:bg-gray-500"
                      }`}
                      title={`Image ${index + 1}`}
                    />
                  ))}
                  <span className="ml-2 text-gray-400 text-xs">
                    ({p.images.length})
                  </span>
                </div>
              )}

              {/* 🧾 Info: Title + Description + Price */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors">
                  {p.title}
                </h3>
                {/* 📋 Description as bullet list (fixed) */}
                {p.description ? (
                  <ul className="text-gray-300 text-sm mb-4 list-disc list-inside space-y-1 text-left inline-block">
                    {p.description
                      .split(/[,;\n]+/) // جداکننده‌ها: کاما، سمی‌کالن، یا خط جدید
                      .map((line) => line.trim()) // فاصله‌ها رو حذف می‌کنه
                      .filter((line) => line.length > 0) // فقط خطوط غیرخالی
                      .map((line, i) => (
                        <li key={i}>{line}</li>
                      ))}
                  </ul>
                ) : (
                  <p className="text-gray-500 text-sm mb-4">
                    No details provided
                  </p>
                )}

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
          );
        })}
      </div>
    </div>
  );
}
