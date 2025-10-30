import { useEffect, useState } from "react";
import AdminLogin from "../admin/AdminLogin";
import toast from "react-hot-toast";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminTable from "../../components/admin/AdminTable";
import MessageModal from "../../components/admin/MessageModal";

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMsg, setSelectedMsg] = useState(null);
  const [filter, setFilter] = useState("");
  const [serviceFilter, setServiceFilter] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "createdAt",
    direction: "desc",
  });

  // 🟢 در زمان mount، تاریخ چاپ رو در body قرار بده و پیام‌ها رو واکشی کن
  useEffect(() => {
    document.body.setAttribute("data-print-date", new Date().toLocaleString());

    const token = localStorage.getItem("adminToken");
    if (token) fetchMessages(token);
  }, []);

  // 📥 دریافت پیام‌ها از سرور
  const fetchMessages = async (token) => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5050/api/contact/admin", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setMessages(data.messages);
        toast.success("🔄 Messages updated!");
      } else {
        localStorage.removeItem("adminToken");
      }
    } catch (err) {
      console.error(err);
      toast.error("⚠️ Fetch failed");
    } finally {
      setLoading(false);
    }
  };

  // 📊 مرتب‌سازی
  const handleSort = (key) => {
    setSortConfig((prev) =>
      prev.key === key
        ? { key, direction: prev.direction === "asc" ? "desc" : "asc" }
        : { key, direction: "asc" }
    );
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
        setMessages((prev) => prev.filter((m) => m._id !== id));
        toast.success("✅ Message deleted!");
      } else {
        toast.error("❌ Failed to delete message");
      }
    } catch (err) {
      toast.error("⚠️ Server error");
    }
  };

  // 🔄 بروزرسانی دستی
  const handleRefresh = () => {
    const token = localStorage.getItem("adminToken");
    if (token) fetchMessages(token);
  };

  // 🚪 خروج از حساب
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.reload();
  };

  // 🔍 فیلتر بر اساس نام، ایمیل و سرویس
  const filteredMessages = messages.filter((m) => {
    const matchesText =
      m.name?.toLowerCase().includes(filter.toLowerCase()) ||
      m.email?.toLowerCase().includes(filter.toLowerCase());
    const matchesService = !serviceFilter || m.service === serviceFilter;
    return matchesText && matchesService;
  });

  // 🔽 مرتب‌سازی پیام‌ها
  const sortedMessages = [...filteredMessages].sort((a, b) => {
    const { key, direction } = sortConfig;
    const order = direction === "asc" ? 1 : -1;

    if (key === "name" || key === "service")
      return a[key]?.localeCompare(b[key] || "") * order;

    if (key === "createdAt")
      return (new Date(a.createdAt) - new Date(b.createdAt)) * order;

    return 0;
  });

  return (
    <div className="min-h-screen bg-[#0d1117] text-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
        Admin Dashboard
      </h1>

      {!localStorage.getItem("adminToken") ? (
        <AdminLogin onLogin={() => window.location.reload()} />
      ) : (
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-end mb-6">
            <button
              onClick={() => (window.location.href = "/admin/products")}
              className="px-5 py-2 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white rounded-lg font-semibold shadow-md transition-all"
            >
              🛍️ Manage Products
            </button>
          </div>

          <AdminHeader
            messagesCount={filteredMessages.length}
            loading={loading}
            onRefresh={handleRefresh}
            onLogout={handleLogout}
            filter={filter}
            setFilter={setFilter}
            serviceFilter={serviceFilter}
            setServiceFilter={setServiceFilter}
          />

          {loading ? (
            <p className="text-center text-gray-400">Loading messages...</p>
          ) : sortedMessages.length === 0 ? (
            <p className="text-center text-gray-400">No messages found.</p>
          ) : (
            <AdminTable
              messages={sortedMessages}
              handleSort={handleSort}
              sortConfig={sortConfig}
              handleDelete={handleDelete}
              setSelectedMsg={setSelectedMsg}
            />
          )}
        </div>
      )}

      <MessageModal
        selectedMsg={selectedMsg}
        onClose={() => setSelectedMsg(null)}
      />
    </div>
  );
}
