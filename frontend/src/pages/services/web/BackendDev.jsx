import { motion } from "framer-motion";
import { Database, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ اضافه شد

export default function BackendDev() {
  const { t } = useTranslation(); // ✅ فعال‌سازی ترجمه‌ها

  return (
    <div className="relative flex flex-col bg-[#0d1117] text-white overflow-hidden min-h-screen">
      {/* 🖼️ پس‌زمینه مشابه FrontendDev */}
      <div className="absolute inset-0">
        <img
          src="/images/services/backend-bg.jpg"
          alt="Backend Development Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117]/70 via-[#0f1825]/50 to-[#0d1117]/90" />
      </div>

      {/* 🔹 Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center h-[40vh] min-h-[300px] px-6">
        <Database className="w-16 h-16 text-green-400 mb-4" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text"
        >
          {t("web.backend.title")}
        </motion.h1>
        <p className="text-gray-400 max-w-2xl text-center">
          {t("web.backend.subtitle")}
        </p>
      </section>

      {/* 🔹 محتوای اصلی */}
      <main className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 gap-10">
        {/* 📝 متن سمت چپ */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full text-gray-300 leading-relaxed space-y-4"
        >
          <p>{t("web.backend.desc1")}</p>

          <ul className="list-disc list-inside space-y-2">
            <li>{t("web.backend.point1")}</li>
            <li>{t("web.backend.point2")}</li>
            <li>{t("web.backend.point3")}</li>
            <li>{t("web.backend.point4")}</li>
          </ul>

          <div className="pt-6">
            <Link
              to="/services/web"
              className="inline-flex items-center gap-2 text-green-400 hover:text-cyan-400 transition-all"
            >
              <ArrowLeft className="w-5 h-5" /> {t("web.backend.back")}
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
            src="/images/services/backend.jpg"
            alt="Backend architecture workspace"
            className="rounded-2xl shadow-[0_0_30px_rgba(0,255,180,0.1)] object-cover w-full h-[350px] md:h-[420px]"
          />
        </motion.div>
      </main>
    </div>
  );
}







