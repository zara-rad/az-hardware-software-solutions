import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AdminProductModal from "../../components/admin/AdminProductModal";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { API_BASE } from "../../config";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/products`);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error("❌ Fetch error:", err);
      toast.error("Failed to load products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleAdd = () => {
    setSelectedProduct(null);
    setModalOpen(true);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?"))
      return;
    try {
      const token = localStorage.getItem("adminToken");

      const res = await fetch(`${API_BASE}/api/products/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        setProducts((prev) => prev.filter((p) => p._id !== id));
        localStorage.setItem("productsUpdated", Date.now()); // 🔥 EVENT
        toast.success("🗑️ Product deleted");
      } else {
        toast.error("❌ Failed to delete product");
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Server error");
    }
  };

  const handleSave = async (form) => {
    try {
      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) => {
        if (key === "images") {
          value.forEach((file) => formData.append("images", file));
        } else if (key === "deletedImages") {
          formData.append("deletedImages", JSON.stringify(value));
        } else {
          formData.append(key, value);
        }
      });

      const url = selectedProduct
        ? `${API_BASE}/api/products/${selectedProduct._id}`
        : `${API_BASE}/api/products`;

      const method = selectedProduct ? "PUT" : "POST";

      const token = localStorage.getItem("adminToken");

      const res = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (res.ok) {
        toast.success(
          selectedProduct ? "✅ Product updated" : "🆕 Product added"
        );
        setModalOpen(false);

        localStorage.setItem("productsUpdated", Date.now());

        fetchProducts();
      } else {
        toast.error("❌ Failed to save product");
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Error saving product");
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32">
      {/* 🔹 Header Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4 text-center sm:text-left">
        <button
          onClick={() => navigate("/aqbitz-admin-9823")}
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg shadow w-full sm:w-auto"
        >
          ← Back to Dashboard
        </button>

        <motion.h1
          className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🛠️ Manage Products
        </motion.h1>
      </div>

      {/* ✅ Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border border-gray-800 rounded-lg overflow-hidden text-sm md:text-base">
          <thead className="bg-[#121a24] text-gray-300 uppercase text-xs md:text-sm">
            <tr>
              <th className="p-3 border-b border-gray-700 text-left w-[20%]">
                Title
              </th>
              <th className="p-3 border-b border-gray-700 text-left w-[15%]">
                Category
              </th>
              <th className="p-3 border-b border-gray-700 text-left w-[10%]">
                Price
              </th>
              <th className="p-3 border-b border-gray-700 text-left w-[10%]">
                Old Price
              </th>
              <th className="p-3 border-b border-gray-700 text-left w-[15%]">
                Serial
              </th>
              <th className="p-3 border-b border-gray-700 text-center w-[30%]">
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
                  <td className="p-4">
                    <div className="font-semibold text-white">{p.title}</div>
                    <div className="text-gray-400 text-xs mt-1">
                      {p.description || "No description"}
                    </div>
                  </td>
                  <td className="p-4 align-top text-gray-300">{p.category}</td>
                  <td className="p-4 align-top text-green-400 font-semibold">
                    €{p.price}
                  </td>
                  <td className="p-4 align-top text-gray-500 line-through">
                    {p.oldPrice ? `€${p.oldPrice}` : "-"}
                  </td>

                  {/* ✅ Serial Number */}
                  <td className="p-4 align-top text-cyan-400 font-medium">
                    {p.serialNumber || "N/A"}
                  </td>

                  <td className="p-4 text-center flex justify-center items-center gap-2">
                    <button
                      onClick={() => handleEdit(p)}
                      className="bg-yellow-500/80 hover:bg-yellow-400 text-white px-3 py-1 rounded text-xs shadow"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(p._id)}
                      className="bg-red-500/80 hover:bg-red-600 text-white px-3 py-1 rounded text-xs shadow"
                    >
                      Delete
                    </button>
                    <button
                      onClick={handleAdd}
                      className="bg-green-500/80 hover:bg-green-400 text-white px-3 py-1 rounded text-xs shadow"
                    >
                      Add
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-400">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 📱 Mobile Cards */}
      <div className="flex flex-col gap-4 md:hidden">
        {products.length > 0 ? (
          products.map((p) => (
            <div
              key={p._id}
              className="border border-gray-700 rounded-xl bg-[#121a24]/80 p-4 shadow-md"
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="font-semibold text-lg">{p.title}</h2>
                <span className="text-green-400 font-bold text-sm">
                  €{p.price}
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-2">
                {p.category} —{" "}
                <span className="line-through text-gray-500">
                  {p.oldPrice ? `€${p.oldPrice}` : "-"}
                </span>
              </p>
              <p className="text-gray-300 text-sm mb-1">
                {p.description || "No description"}
              </p>

              {/* ✅ Serial in Mobile */}
              <p className="text-cyan-400 text-xs mb-3">
                Serial: {p.serialNumber || "N/A"}
              </p>

              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => handleEdit(p)}
                  className="bg-yellow-500/80 hover:bg-yellow-400 text-white px-3 py-1 rounded text-xs shadow"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p._id)}
                  className="bg-red-500/80 hover:bg-red-600 text-white px-3 py-1 rounded text-xs shadow"
                >
                  Delete
                </button>
                <button
                  onClick={handleAdd}
                  className="bg-green-500/80 hover:bg-green-400 text-white px-3 py-1 rounded text-xs shadow"
                >
                  Add
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center">No products found.</p>
        )}
      </div>

      <AdminProductModal
        show={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        product={selectedProduct}
      />
    </div>
  );
}
