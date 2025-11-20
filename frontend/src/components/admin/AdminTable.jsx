export default function AdminTable({
  messages,
  handleSort,
  sortConfig,
  handleDelete,
  setSelectedMsg,
}) {
  return (
    <div className="print:block overflow-x-auto md:overflow-visible shadow-[0_0_20px_rgba(0,255,180,0.15)] rounded-xl border border-gray-800 bg-[#11161d]/70 backdrop-blur-sm">
      <table className="w-full text-sm md:text-base">
        <thead className="bg-[#161b22] text-gray-100 uppercase text-xs md:text-sm select-none">
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
              onClick={() => handleSort("serial")}
            >
              Serial{" "}
              {sortConfig.key === "serial"
                ? sortConfig.direction === "asc"
                  ? "▲"
                  : "▼"
                : ""}
            </th>

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

            <th className="p-3 text-right no-print">Actions</th>
          </tr>
        </thead>

        <tbody>
          {messages.map((msg, i) => (
            <tr
              key={msg._id}
              onClick={() => setSelectedMsg(msg)}
              className={`cursor-pointer ${
                i % 2 === 0 ? "bg-[#0f1724]" : "bg-[#131b29]"
              } border-t border-gray-800 hover:bg-[#1a2432]/80 transition duration-200`}
            >
              <td className="p-3 font-semibold text-white">{msg.name}</td>

              <td className="p-3 text-cyan-300 hover:text-cyan-200 transition">
                {msg.email}
              </td>

              <td className="p-3 text-white font-semibold">
                {msg.serialNumber || msg.serial || "N/A"}
              </td>

              <td className="p-3 text-green-400 font-medium">
                {msg.service || "-"}
              </td>

              <td className="p-3 text-white font-semibold">
                {msg.budget || "-"}
              </td>

              <td
                className="p-3 text-gray-100 text-sm leading-snug whitespace-pre-wrap max-w-[300px]"
                style={{ lineHeight: "1.5", wordBreak: "break-word" }}
              >
                {msg.message || "-"}
              </td>

              <td className="p-3 text-gray-200 text-sm">
                {new Date(msg.createdAt).toLocaleString()}
              </td>

              <td className="p-3 text-right no-print">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(msg._id);
                  }}
                  className="px-3 py-1 text-sm bg-red-500/80 hover:bg-red-600 rounded-lg font-semibold text-white transition"
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
