import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  const sections = [
    { title: t("privacy.section1.title"), text: t("privacy.section1.text") },
    { title: t("privacy.section2.title"), text: t("privacy.section2.text") },
    { title: t("privacy.section3.title"), text: t("privacy.section3.text") },
    { title: t("privacy.section4.title"), text: t("privacy.section4.text") },
    { title: t("privacy.section5.title"), text: t("privacy.section5.text") },
    { title: t("privacy.section6.title"), text: t("privacy.section6.text") },
    { title: t("privacy.section7.title"), text: t("privacy.section7.text") },
    { title: t("privacy.section8.title"), text: t("privacy.section8.text") },
  ];

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-[#0d1117] via-[#101a25] to-[#0d1117] text-white overflow-hidden">
      {/* 🔹 Background Light Animation */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.07)_0%,transparent_70%)] blur-3xl"
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <Navbar />

      <main className="relative flex-grow py-24 px-6 max-w-4xl mx-auto z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-12 pb-2 md:pb-3 text-center bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(0,255,180,0.3)] leading-snug md:leading-normal"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("privacy.title")}
        </motion.h1>

        <motion.section
          className="space-y-10 text-gray-300 leading-relaxed backdrop-blur-sm bg-[#161b22]/60 border border-gray-800 rounded-2xl p-8 shadow-[0_0_25px_rgba(0,0,0,0.4)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          {sections.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                {item.title}
              </h3>
              <p className="whitespace-pre-line text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </motion.section>
      </main>
    </div>
  );
}
