import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center py-28 px-6 bg-transparent text-white overflow-hidden">
      {/* 🌟 انیمیشن نور پس‌زمینه */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,255,180,0.12)_0%,transparent_70%)] blur-3xl opacity-50"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔹 عنوان اصلی */}
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-cyan-400 to-teal-300 drop-shadow-[0_0_18px_rgba(0,255,180,0.35)]"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Your One-Stop IT & Hardware Partner in Berlin
      </motion.h1>

      {/* 🔹 توضیح زیر عنوان */}
      <motion.p
        className="text-gray-300 text-sm md:text-base mb-10 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Freelance IT Services · Web Design · Hardware Sales Support
      </motion.p>

      {/* 🔹 دکمه‌ها */}
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        {/* ✅ لینک به صفحه Contact */}
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 px-8 py-3 rounded font-semibold text-white shadow-lg shadow-green-900/40 hover:shadow-cyan-700/40 transition-all duration-300"
          >
            Get a Quote
          </motion.button>
        </Link>

        {/* ✅ لینک به صفحه Services */}
        <Link to="/services">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="border border-gray-600 hover:bg-gray-800 px-8 py-3 rounded font-semibold text-gray-200 shadow-md shadow-gray-900/40 transition-all duration-300"
          >
            View Services
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
