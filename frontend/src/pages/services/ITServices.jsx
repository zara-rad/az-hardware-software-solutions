import { motion } from "framer-motion";
import { Server, Network, ShieldCheck, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ITServices() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Server className="w-14 h-14 text-green-400 mb-3" />,
      title: t("it.serverAdmin.title"),
      text: t("it.serverAdmin.subtitle"),
      link: "/services/it/server",
    },
    {
      icon: <Network className="w-14 h-14 text-green-400 mb-3" />,
      title: t("it.networkSetup.title"),
      text: t("it.networkSetup.subtitle"),
      link: "/services/it/network",
    },
    {
      icon: <ShieldCheck className="w-14 h-14 text-green-400 mb-3" />,
      title: t("it.itSupport.title"),
      text: t("it.itSupport.subtitle"),
      link: "/services/it/support",
    },
  ];

  return (
    <div className="relative flex flex-col text-white overflow-hidden min-h-screen bg-transparent">
      {/* 🖼️ تصویر بک‌گراند */}
      <img
        src="/images/services/serverroom.jpg"
        alt="IT Services background"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.65] contrast-[1.05] -z-30"
      />

      {/* 🌈 لایه گرادینت */}
      <div className="absolute inset-0 overflow-hidden -z-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/85 via-[#0f1825]/60 to-[#0d1117]/90"
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.08)_0%,transparent_70%)]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* 🔹 Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center h-[45vh] min-h-[320px] px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]"
        >
          {t("services.items.it.title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-200 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          {t("services.items.it.desc")}
        </motion.p>
      </section>

      {/* 🔙 Back to Services */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mb-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-green-400 hover:text-cyan-400 transition-all"
        >
          <ArrowLeft className="w-5 h-5" /> {t("hardware.overview.back")}
        </Link>
      </div>

      {/* 🔹 Main Content */}
      <main className="relative z-10 flex-grow max-w-6xl mx-auto px-6 pb-20 space-y-12">
        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-[#0b121a]/70 backdrop-blur-lg p-8 rounded-2xl border border-gray-800 hover:border-green-400 hover:shadow-[0_0_25px_rgba(0,255,180,0.2)] transition-all duration-300"
            >
              {s.icon}
              <h3 className="text-xl font-semibold mb-2 text-white">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{s.text}</p>

              <Link
                to={s.link}
                className="inline-block bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white px-8 py-2 rounded-lg font-medium shadow-md shadow-green-900/30 hover:shadow-green-700/40 transition-all"
              >
                {t("hardware.overview.learnMore")}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ✅ CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            {t("it.overview.ctaTitle", "Need reliable IT support?")}
          </h2>
          <p className="text-gray-300 mb-6">
            {t(
              "it.overview.ctaDesc",
              "Let’s discuss how we can optimize your systems and network for maximum performance and security."
            )}
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-green-900/30 hover:shadow-green-700/40 transition-all"
          >
            {t("hardware.overview.ctaButton")}
          </a>
        </motion.div>
      </main>
    </div>
  );
}



