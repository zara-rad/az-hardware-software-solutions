export default function AdminHeader({
  messagesCount,
  loading,
  onRefresh,
  onLogout,
  filter,
  setFilter,
  serviceFilter,
  setServiceFilter,
}) {
  return (
    <div className="flex flex-wrap justify-between items-center mb-8 gap-4">
      <div>
        <h2 className="text-2xl font-semibold text-green-400 flex items-center gap-2">
          📩 Contact Messages
        </h2>
        <p className="text-gray-400 text-sm">
          You have{" "}
          <span className="text-green-400 font-semibold">{messagesCount}</span>{" "}
          message{messagesCount !== 1 ? "s" : ""}
        </p>

        {/* 🔍 فیلتر بر اساس نام یا ایمیل */}
        <input
          type="text"
          placeholder="Filter by name or email..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="mt-3 w-full md:w-72 px-3 py-2 rounded-lg bg-[#0d1117] border border-gray-700 text-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
        />

        {/* 🧩 فیلتر سرویس */}
        <select
          value={serviceFilter}
          onChange={(e) => setServiceFilter(e.target.value)}
          className="mt-3 w-full md:w-72 px-3 py-2 rounded-lg bg-[#0d1117] border border-gray-700 text-gray-200 focus:ring-2 focus:ring-cyan-500 outline-none"
        >
          <option value="">All Services</option>
          <option value="IT Services">IT Services</option>
          <option value="Web & Software Development">
            Web & Software Development
          </option>
          <option value="Hardware Solutions">Hardware Solutions</option>
        </select>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => window.print()}
          className="px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-white font-semibold transition-all duration-200"
        >
          🖨 Print
        </button>

        <button
          onClick={onRefresh}
          disabled={loading}
          className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-white font-semibold transition-all duration-200 disabled:opacity-50"
        >
          🔄 Refresh
        </button>
        <button
          onClick={onLogout}
          className="px-4 py-2 bg-red-500/80 hover:bg-red-500 rounded-lg text-white font-semibold transition-all duration-200"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
