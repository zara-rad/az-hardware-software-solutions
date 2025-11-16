import { motion } from "framer-motion";
import { Layout, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ اضافه شد

export default function FrontendDev() {
  const { t } = useTranslation(); // ✅ فعال‌سازی ترجمه‌ها

  return (
    <div className="relative flex flex-col bg-[#0d1117] text-white overflow-hidden min-h-screen">
      {/* 🌌 پس‌زمینه مثل ServerAdmin */}
      <div className="absolute inset-0">
        <img
          src="/images/services/webdev-bg.jpg"
          alt="Frontend Development Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117]/70 via-[#0f1825]/50 to-[#0d1117]/90" />
      </div>

      {/* 🔹 Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center h-[40vh] min-h-[300px] px-6">
        <Layout className="w-16 h-16 text-gray-400 mb-4" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text"
        >
          {t("web.frontend.title")}
        </motion.h1>
        <p className="text-gray-400 max-w-2xl text-center">
          {t("web.frontend.subtitle")}
        </p>
      </section>

      {/* 🔹 محتوای اصلی با تصویر سمت راست */}
      <main className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 gap-10">
        {/* 📝 متن سمت چپ */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full text-gray-300 leading-relaxed space-y-4"
        >
          <p>{t("web.frontend.desc1")}</p>

          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>{t("web.frontend.point1")}</li>
            <li>{t("web.frontend.point2")}</li>
            <li>{t("web.frontend.point3")}</li>
            <li>{t("web.frontend.point4")}</li>
          </ul>

          <div className="pt-6">
            <Link
              to="/services/web"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-400 transition-all"
            >
              <ArrowLeft className="w-5 h-5" /> {t("web.frontend.back")}
            </Link>
          </div>
        </motion.div>

        {/* 🖼️ تصویر سمت راست */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full"
        >
          <img
            src="/images/services/frontend.jpg"
            alt="Frontend workspace"
            className="rounded-2xl shadow-[0_0_25px_rgba(200,200,200,0.15)] object-cover w-full h-[350px] md:h-[420px]"
          />
        </motion.div>
      </main>

      {/* CTA پایین */}
      <motion.div
        className="relative z-10 text-center pb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-400">
          {t("web.frontend.ctaTitle")}
        </h2>
        <p className="text-gray-400 mb-6">{t("web.frontend.ctaDesc")}</p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-gray-500 to-gray-500 hover:from-gray-400 hover:to-gray-400 text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-gray-900/30 hover:shadow-gray-700/40 transition-all"
        >
          {t("web.frontend.ctaButton")}
        </a>
      </motion.div>
    </div>
  );
}







