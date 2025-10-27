import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ اضافه شد

export default function Hero() {
  const { t } = useTranslation(); // ✅ hook ترجمه

  return (
    <section className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-6 sm:px-10 bg-transparent text-white overflow-hidden">
      {/* 🌟 نور پس‌زمینه با لایه پایین‌تر */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(0,255,180,0.12)_0%,transparent_70%)] blur-2xl opacity-40 -z-30"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔹 عنوان اصلی */}
      <motion.h1
        className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-cyan-400 to-teal-300 drop-shadow-[0_0_18px_rgba(0,255,180,0.35)]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t("hero.title")}
      </motion.h1>

      {/* 🔹 توضیح زیر عنوان */}
      <motion.p
        className="text-gray-300 text-sm md:text-base mb-10 max-w-2xl"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {t("hero.subtitle")}
      </motion.p>

   {/* 🔹 دکمه‌ها */}
<motion.div
  className="flex flex-wrap justify-center gap-4 mb-2"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6, duration: 0.6 }}
>
  <Link to="/contact">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 px-6 sm:px-8 py-2.5 sm:py-3 rounded font-semibold text-sm sm:text-base text-white shadow-lg shadow-green-900/40 hover:shadow-cyan-700/40 transition-all duration-300"
    >
      {t("hero.quoteButton")}
    </motion.button>
  </Link>

  <Link to="/services">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="border border-gray-600 hover:bg-gray-800 px-6 sm:px-8 py-2.5 sm:py-3 rounded font-semibold text-sm sm:text-base text-gray-200 shadow-md shadow-gray-900/40 transition-all duration-300"
    >
      {t("hero.servicesButton")}
    </motion.button>
  </Link>
</motion.div>

    </section>
  );
}
