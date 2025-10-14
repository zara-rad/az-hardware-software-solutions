// AdminTable.jsx
export default function AdminTable({ messages, handleSort, sortConfig, handleDelete, setSelectedMsg }) {
  return (
    <div className="overflow-x-auto shadow-[0_0_20px_rgba(0,255,180,0.15)] rounded-xl border border-gray-800 bg-[#11161d]/70 backdrop-blur-sm">
      <table className="w-full text-sm md:text-base">
        <thead className="bg-[#161b22] text-gray-300 uppercase text-xs md:text-sm select-none">
          <tr>
            <th
              className="p-3 text-left cursor-pointer hover:text-green-400"
              onClick={() => handleSort("name")}
            >
              Name{" "}
              {sortConfig.key === "name"
                ? sortConfig.direction === "asc"
                  ? "▲"
                  : "▼"
                : ""}
            </th>
            <th className="p-3 text-left">Email</th>
            <th
              className="p-3 text-left cursor-pointer hover:text-green-400"
              onClick={() => handleSort("service")}
            >
              Service{" "}
              {sortConfig.key === "service"
                ? sortConfig.direction === "asc"
                  ? "▲"
                  : "▼"
                : ""}
            </th>
            <th className="p-3 text-left">Budget</th>
            <th className="p-3 text-left">Message</th>
            <th
              className="p-3 text-left cursor-pointer hover:text-green-400"
              onClick={() => handleSort("createdAt")}
            >
              Date{" "}
              {sortConfig.key === "createdAt"
                ? sortConfig.direction === "asc"
                  ? "▲"
                  : "▼"
                : ""}
            </th>
            <th className="p-3 text-right">Actions</th>
          </tr>
        </thead>

        <tbody>
          {messages.map((msg, i) => (
            <tr
              key={msg._id}
              onClick={() => setSelectedMsg(msg)}
              className={`cursor-pointer ${
                i % 2 === 0 ? "bg-[#0e131a]" : "bg-[#101821]"
              } border-t border-gray-800 hover:bg-[#1a2430]/80 transition duration-200`}
            >
              <td className="p-3 font-medium text-gray-100">{msg.name}</td>
              <td className="p-3 text-cyan-400">{msg.email}</td>
              <td className="p-3 text-green-400">{msg.service || "-"}</td>
              <td className="p-3 text-gray-300">{msg.budget || "-"}</td>
              <td className="p-3 text-gray-200 whitespace-pre-wrap truncate max-w-[200px]">
                {msg.message}
              </td>
              <td className="p-3 text-gray-400">
                {new Date(msg.createdAt).toLocaleString()}
              </td>
              <td className="p-3 text-right">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(msg._id);
                  }}
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
  );
}
