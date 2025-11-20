import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center text-center
             py-14 md:py-16 lg:py-20 px-6 sm:px-10
             bg-transparent text-white overflow-hidden min-h-[45vh] md:min-h-[42vh] lg:min-h-[40vh]"
    >
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
               w-[400px] h-[400px] md:w-[500px] md:h-[500px] 
               bg-[radial-gradient(circle,rgba(180,185,200,0.12)_0%,transparent_70%)]
               blur-2xl opacity-40 -z-30"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.h1
        className="text-2xl sm:text-3xl lg:text-5xl font-extrabold mb-4 leading-tight 
        text-gray-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {t("hero.title")}
      </motion.h1>

      <motion.p
        className="text-gray-400 text-sm md:text-base mb-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {t("hero.subtitle")}
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Link to="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-[#9CA3AF] hover:bg-[#D1D5DB]
                   px-6 sm:px-8 py-2.5 sm:py-3 rounded font-semibold text-sm sm:text-base
                   text-[#0D1117] shadow-lg shadow-gray-900/40 hover:shadow-gray-700/40 transition-all duration-300"
          >
            {t("hero.quoteButton")}
          </motion.button>
        </Link>

        <Link to="/services">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="border border-gray-600 hover:bg-[#1E1E1E]
                   px-6 sm:px-8 py-2.5 sm:py-3 rounded font-semibold text-sm sm:text-base
                   text-gray-300 shadow-md shadow-gray-900/40 transition-all duration-300"
          >
            {t("hero.servicesButton")}
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
