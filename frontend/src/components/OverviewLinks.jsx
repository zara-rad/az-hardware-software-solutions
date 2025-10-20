import { Link } from "react-router-dom";
import { User, Wrench, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // ✅ اضافه شد

export default function OverviewLinks() {
  const { t } = useTranslation(); // ✅ استفاده از ترجمه‌ها

  const links = [
    {
      icon: <User className="w-10 h-10 text-green-400 mb-3" />,
      title: t("overview.about.title"),
      desc: t("overview.about.desc"),
      to: "/about",
    },
    {
      icon: <Wrench className="w-10 h-10 text-green-400 mb-3" />,
      title: t("overview.services.title"),
      desc: t("overview.services.desc"),
      to: "/services",
    },
    {
      icon: <Mail className="w-10 h-10 text-green-400 mb-3" />,
      title: t("overview.contact.title"),
      desc: t("overview.contact.desc"),
      to: "/contact",
    },
  ];

  return (
    <section className="relative py-20 px-6 border-t border-gray-800 overflow-hidden bg-transparent">
      {/* ✨ Light background animation for depth */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.07)_0%,transparent_70%)] blur-3xl pointer-events-none"
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔹 Header */}
      <div className="relative z-10 max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-300 to-green-500 drop-shadow-[0_0_15px_rgba(0,255,180,0.3)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("overview.title")}
        </motion.h2>

        <motion.p
          className="text-gray-400 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {t("overview.subtitle")}
        </motion.p>
      </div>

      {/* 🔹 Link Cards */}
      <div className="relative z-10 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {links.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link
              to={item.to}
              className="group block p-10 rounded-2xl border border-gray-800 bg-[#121a24]/80 backdrop-blur-sm hover:border-green-400 hover:shadow-[0_0_20px_rgba(0,255,180,0.2)] transition-all duration-300 text-center"
            >
              <motion.div
                className="transition-transform duration-300 group-hover:scale-110"
                whileHover={{ rotate: 5 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-2xl font-semibold mb-3 mt-4 text-white group-hover:text-green-400 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                {item.desc}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}




