// frontend/src/pages/admin/AdminDashboard.jsx
import { useEffect, useState } from "react";
import AdminLogin from "../admin/AdminLogin";

export default function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🟢 بررسی توکن در شروع
  useEffect(() => {
    document.title = "Admin Dashboard — AZ Hardware";
    const token = localStorage.getItem("adminToken");
    if (token) {
      fetchMessages(token);
    }
  }, []);

  // 📩 دریافت پیام‌ها از سرور
  const fetchMessages = async (token) => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5050/api/contact/admin", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();

      if (data.success) {
        setMessages(data.messages);
      } else {
        localStorage.removeItem("adminToken");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // 🔐 وقتی ادمین لاگین کرد
  const handleLogin = (userData) => {
    setUser(userData);
    const token = localStorage.getItem("adminToken");
    fetchMessages(token);
  };
  // 🗑 حذف پیام
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?"))
      return;

    const token = localStorage.getItem("adminToken");
    try {
      const res = await fetch(`http://localhost:5050/api/contact/admin/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();

      if (data.success) {
        setMessages((prev) => prev.filter((msg) => msg._id !== id));
      } else {
        alert("Failed to delete message");
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // 🚪 خروج ادمین
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setUser(null);
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,255,180,0.4)]">
        Admin Dashboard
      </h1>

      {/* اگر لاگین نشده */}
      {!localStorage.getItem("adminToken") && (
        <AdminLogin onLogin={handleLogin} />
      )}

      {/* اگر لاگین کرده */}
      {localStorage.getItem("adminToken") && (
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-semibold text-green-400 flex items-center gap-2">
              📩 Contact Messages
            </h2>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500/80 hover:bg-red-500 rounded-lg text-white font-semibold transition-all duration-200"
            >
              Logout
            </button>
          </div>

          {loading ? (
            <p className="text-center text-gray-400">Loading messages...</p>
          ) : messages.length === 0 ? (
            <p className="text-center text-gray-400">No messages found.</p>
          ) : (
            <div className="overflow-x-auto shadow-[0_0_20px_rgba(0,255,180,0.15)] rounded-xl border border-gray-800 bg-[#11161d]/70 backdrop-blur-sm">
              <table className="w-full text-sm md:text-base">
                <thead className="bg-[#161b22] text-gray-300 uppercase text-xs md:text-sm">
                  <tr>
                    <th className="p-3 text-left">Name</th>
                    <th className="p-3 text-left">Email</th>
                    <th className="p-3 text-left">Service</th>
                    <th className="p-3 text-left">Budget</th>
                    <th className="p-3 text-left">Message</th>
                    <th className="p-3 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((msg, i) => (
                    <tr
                      key={msg._id}
                      className={`${
                        i % 2 === 0 ? "bg-[#0e131a]" : "bg-[#101821]"
                      } border-t border-gray-800 hover:bg-[#1a2430]/80 transition duration-200`}
                    >
                      <td className="p-3 font-medium text-gray-100">
                        {msg.name}
                      </td>
                      <td className="p-3 text-cyan-400">{msg.email}</td>
                      <td className="p-3 text-green-400">
                        {msg.service || "-"}
                      </td>
                      <td className="p-3 text-gray-300">{msg.budget || "-"}</td>
                      <td className="p-3 text-gray-200 whitespace-pre-wrap">
                        {msg.message}
                      </td>
                      <td className="p-3 text-gray-400">
                        {new Date(msg.createdAt).toLocaleString()}
                      </td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => handleDelete(msg._id)}
                          className="px-3 py-1 text-sm bg-red-500/70 hover:bg-red-600 rounded-lg font-semibold text-white transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
