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

  // 🚪 خروج ادمین
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setUser(null);
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
        Admin Dashboard
      </h1>

      {/* اگر لاگین نشده */}
      {!localStorage.getItem("adminToken") && <AdminLogin onLogin={handleLogin} />}

      {/* اگر لاگین کرده */}
      {localStorage.getItem("adminToken") && (
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-green-400">
              Contact Messages
            </h2>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500/80 hover:bg-red-500 rounded-lg text-white font-semibold"
            >
              Logout
            </button>
          </div>

          {loading ? (
            <p className="text-center text-gray-400">Loading messages...</p>
          ) : messages.length === 0 ? (
            <p className="text-center text-gray-400">
              No messages found.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-700 rounded-lg overflow-hidden">
                <thead className="bg-[#161b22] text-gray-300">
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
                  {messages.map((msg) => (
                    <tr
                      key={msg._id}
                      className="border-t border-gray-700 hover:bg-[#1c242e] transition"
                    >
                      <td className="p-3">{msg.name}</td>
                      <td className="p-3">{msg.email}</td>
                      <td className="p-3">{msg.service}</td>
                      <td className="p-3">{msg.budget}</td>
                      <td className="p-3">{msg.message}</td>
                      <td className="p-3 text-gray-400">
                        {new Date(msg.createdAt).toLocaleString()}
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
