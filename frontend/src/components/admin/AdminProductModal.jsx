import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AdminProductModal({ show, onClose, onSave, product }) {
  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    oldPrice: "",
    images: [],
  });
  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    if (product) {
      setForm({
        title: product.title || "",
        category: product.category || "",
        description: product.description || "",
        price: product.price || "",
        oldPrice: product.oldPrice || "",
        images: [],
      });
      setPreviews(product.images || []);
    } else {
      setForm({
        title: "",
        category: "",
        description: "",
        price: "",
        oldPrice: "",
        images: [],
      });
      setPreviews([]);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setForm((prev) => ({ ...prev, images: files }));

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews(newPreviews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#161b22] border border-gray-700 rounded-2xl p-6 max-w-xl w-[90%] shadow-[0_0_25px_rgba(0,255,180,0.1)]"
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-4 text-center">
            {product ? "✏️ Edit Product" : "➕ Add New Product"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={handleChange}
                className="p-2 bg-[#0d1117] border border-gray-700 rounded text-gray-200"
                required
              />
              <input
                name="category"
                placeholder="Category"
                value={form.category}
                onChange={handleChange}
                className="p-2 bg-[#0d1117] border border-gray-700 rounded text-gray-200"
                required
              />
            </div>

            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
              className="w-full p-2 bg-[#0d1117] border border-gray-700 rounded text-gray-200 min-h-[80px]"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                type="number"
                name="price"
                placeholder="Price (€)"
                value={form.price}
                onChange={handleChange}
                className="p-2 bg-[#0d1117] border border-gray-700 rounded text-gray-200"
                required
              />
              <input
                type="number"
                name="oldPrice"
                placeholder="Old Price (€)"
                value={form.oldPrice}
                onChange={handleChange}
                className="p-2 bg-[#0d1117] border border-gray-700 rounded text-gray-200"
              />
            </div>

            {/* 🖼️ Image Upload */}
            <div>
              <label className="block text-gray-300 mb-1">Upload Images</label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-gray-300 border border-gray-700 rounded p-2 cursor-pointer bg-[#0d1117]"
              />

              {previews.length > 0 && (
                <div className="flex gap-3 mt-3 flex-wrap">
                  {previews.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="preview"
                      className="w-20 h-20 object-cover rounded border border-gray-700"
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 mt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-500 rounded text-white"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 rounded text-white font-semibold"
              >
                {product ? "Save Changes" : "Add Product"}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
