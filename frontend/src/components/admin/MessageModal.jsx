import { motion, AnimatePresence } from "framer-motion";

export default function MessageModal({ selectedMsg, onClose }) {
  return (
    <AnimatePresence>
      {selectedMsg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#161b22] border border-gray-700 rounded-2xl p-6 max-w-lg w-[90%] shadow-[0_0_30px_rgba(0,255,180,0.1)]"
          >
            <h3 className="text-2xl font-semibold text-green-400 mb-4">
              Message Details
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>
                <strong>Name:</strong> {selectedMsg.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedMsg.email}
              </p>
              <p>
                <strong>Service:</strong> {selectedMsg.service || "-"}
              </p>
              <p>
                <strong>Serial Number:</strong>{" "}
                {selectedMsg.serialNumber || "N/A"}
              </p>

              <p>
                <strong>Budget:</strong> {selectedMsg.budget || "-"}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(selectedMsg.createdAt).toLocaleString()}
              </p>
              <p className="pt-2 border-t border-gray-700">
                <strong>Message:</strong>
                <br />
                {selectedMsg.message}
              </p>
            </div>
            <div className="text-right mt-6">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 rounded-lg font-semibold text-white"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
