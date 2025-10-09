import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-6 bg-transparent text-white overflow-hidden">
      {/* 🌟 انیمیشن نور ملایم پشت متن */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,255,180,0.12)_0%,transparent_70%)] blur-3xl opacity-50"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔹 عنوان اصلی */}
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-green-400 to-teal-300 drop-shadow-[0_0_15px_rgba(0,255,180,0.4)]"
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
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded font-semibold shadow-lg shadow-green-900/40 transition-all"
        >
          Get a Quote
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="border border-gray-600 hover:bg-gray-800 px-8 py-3 rounded font-semibold shadow-lg shadow-gray-900/40 transition-all"
        >
          View Services
        </motion.button>
      </motion.div>
    </section>
  );
}
