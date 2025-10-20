import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Impressum() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-[#0d1117] via-[#101a25] to-[#0d1117] text-white overflow-hidden">
      {/* 🌌 Animated Glow Background */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.07)_0%,transparent_70%)] blur-3xl"
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <Navbar />

      <main className="relative flex-grow py-24 px-6 max-w-4xl mx-auto z-10">
        {/* ===== Title ===== */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-12 pb-2 md:pb-3 text-center bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(0,255,180,0.3)] leading-snug md:leading-normal"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {t("impressum.title")}
        </motion.h1>

        {/* ===== Company Info ===== */}
        <motion.div
          className="bg-[#161b22]/70 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-[0_0_25px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(0,255,180,0.15)] mb-12 transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <h2 className="text-xl font-semibold text-green-400 mb-4">
            AZ Hardware & Software Solutions
          </h2>
          <p className="text-gray-300 leading-relaxed">
            <strong>{t("impressum.owner")}</strong> Zahra Rafieirad <br />
            <strong>{t("impressum.address")}</strong> Musterstraße 12, 10115
            Berlin, Germany <br />
            <strong>{t("impressum.phone")}</strong> +49 30 1234567 <br />
            <strong>{t("impressum.email")}</strong>{" "}
            <a
              href="mailto:info@az-hardware.de"
              className="text-green-400 hover:underline"
            >
              info@az-hardware.de
            </a>{" "}
            <br />
            <strong>{t("impressum.vat")}</strong> DE123456789 <br />
            <strong>{t("impressum.responsible")}</strong> Zahra Rafieirad
          </p>
        </motion.div>

        {/* ===== Legal Sections ===== */}
        <motion.section
          className="space-y-10 text-gray-300 leading-relaxed bg-[#161b22]/70 backdrop-blur-md border border-gray-800 rounded-2xl p-8 shadow-[0_0_25px_rgba(0,0,0,0.4)] hover:shadow-[0_0_25px_rgba(0,255,180,0.15)] transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          <div>
            <h3 className="text-xl font-semibold mb-2 text-green-400">
              {t("impressum.legalTitle")}
            </h3>
            <p>{t("impressum.legalText")}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-green-400">
              {t("impressum.copyrightTitle")}
            </h3>
            <p>{t("impressum.copyrightText")}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-green-400">
              {t("impressum.linksTitle")}
            </h3>
            <p>{t("impressum.linksText")}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-green-400">
              {t("impressum.disputeTitle")}
            </h3>
            <p>
              {t("impressum.disputeText")}{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                className="text-green-400 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
