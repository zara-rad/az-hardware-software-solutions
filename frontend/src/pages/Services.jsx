import { Monitor, Code2, Cog } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next"; // ✅ اضافه شد

export default function Services() {
  const { t } = useTranslation(); // ✅ hook ترجمه
  const location = useLocation();
  const isStandalone = location.pathname === "/services";

  const services = [
    {
      icon: Monitor,
      title: t("services.items.it.title"),
      desc: t("services.items.it.desc"),
      link: "/services/it",
    },
    {
      icon: Code2,
      title: t("services.items.web.title"),
      desc: t("services.items.web.desc"),
      link: "/services/web",
    },
    {
      icon: Cog,
      title: t("services.items.hardware.title"),
      desc: t("services.items.hardware.desc"),
      link: "/services/hardware",
    },
  ];

  useEffect(() => {
    if (isStandalone) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [isStandalone]);

  return (
    <div
      key={location.pathname}
      className={`relative flex flex-col ${isStandalone ? "min-h-screen" : ""} text-white overflow-hidden`}
    >
      {isStandalone && (
        <div className="absolute inset-0">
          <img
            src="/images/services/bgservicess.jpg"
            alt="Modern Data Center"
            className="w-full h-full object-cover opacity-70 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/70 via-[#0d1117]/50 to-[#0d1117]/90" />
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(0,255,180,0.12)_0%,transparent_70%)] blur-3xl opacity-70 animate-pulse" />
        </div>
      )}

      <section
        className={`relative z-10 flex flex-col justify-center ${
          isStandalone ? "py-32 md:py-40" : "py-16"
        } px-6 text-center min-h-[70vh]`}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(0,255,180,0.2)]">
            {t("services.title")}
          </h1>
          <p className="text-gray-200 text-lg font-light">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="relative z-10 grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
                className="group p-10 rounded-2xl bg-[#0f1620]/80 border border-gray-800 hover:border-green-400 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(0,255,180,0.15)] transition-all duration-300 flex flex-col items-center"
              >
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-14 h-14 text-green-400" />
                </div>

                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-green-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {service.desc}
                </p>

                <NavLink
                  to={service.link}
                  className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white px-8 py-2 rounded-lg font-medium shadow-md shadow-green-900/30 hover:shadow-green-700/40 transition-all"
                >
                  {t("services.learnMore")}
                </NavLink>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

