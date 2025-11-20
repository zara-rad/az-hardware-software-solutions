import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ContactLayout() {
  const { t, i18n } = useTranslation();

  return (
    <motion.div
      key="contact-page"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="relative flex flex-col min-h-[100dvh] overflow-hidden text-white pt-24 px-4 sm:px-6 md:px-8 lg:px-10 pb-20"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-[#101a25] to-[#0d1117]" />

        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.07)_0%,transparent_70%)] blur-3xl"
          animate={{
            opacity: [0.35, 0.75, 0.35],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <main className="relative max-w-6xl mx-auto w-full z-10 flex-grow space-y-10">
        <motion.div
          className="text-center mb-10 px-2 sm:px-0"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <h1
            className={`
    mt-8 
    ${i18n.language === "de" ? "text-3xl md:text-4xl" : "text-4xl md:text-5xl"}
    font-extrabold text-center mb-12 
    bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text
  `}
          >
            {t("contact.layout.title")}
          </h1>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            {t("contact.layout.subtitle")}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-stretch">
          <ContactForm />
          <ContactInfo />
        </div>
      </main>
    </motion.div>
  );
}
