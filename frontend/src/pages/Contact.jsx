import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="relative flex flex-col bg-gradient-to-b from-[#0d1117] via-[#101a25] to-[#0d1117] text-white overflow-hidden pt-24 px-6 pb-6">
      {/* 🌌 پس‌زمینه‌ی نور متحرک */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.07)_0%,transparent_70%)] blur-3xl"
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <main className="relative max-w-6xl mx-auto w-full z-10 flex-grow">
        {/* ===== Title ===== */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(0,255,180,0.3)]">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-lg">
            We’d love to hear from you — let’s build something great together.
          </p>
        </motion.div>

        {/* ===== Grid Layout ===== */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* ===== Contact Form ===== */}
          <motion.form
            className="bg-[#161b22]/80 backdrop-blur-md rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.4)] p-8 border border-gray-800 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)] transition-all duration-300 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 resize-none transition"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white shadow-lg shadow-green-900/30 hover:shadow-green-700/40 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* ===== Contact Info ===== */}
          <motion.div
            className="flex flex-col justify-center bg-[#161b22]/80 backdrop-blur-md rounded-2xl border border-gray-800 p-8 shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(0,255,180,0.2)] transition-all duration-300 space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h2 className="text-2xl font-bold mb-3 text-green-400">
                Contact Information
              </h2>
              <p className="text-gray-400">
                Feel free to reach out via phone, email, or visit us in person.
              </p>
            </div>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-3">
                <MapPin className="text-green-400" />
                <span>Berlin, Germany</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-green-400" />
                <span>+49 30 1234567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-green-400" />
                <span>info@az-hardware.de</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-700 text-sm text-gray-500">
              <p>Available: Mon–Fri · 9:00–18:00 (CET)</p>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
