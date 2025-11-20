import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ContactInfo() {
  const { t } = useTranslation();

  return (
    <motion.div
      className="flex flex-col justify-center bg-[#161b22]/80 backdrop-blur-md rounded-2xl border-gray-800 p-8 shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(200,200,200,0.3)] transition-all duration-300 space-y-6"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div>
        <h2 className="text-2xl font-bold mb-3 text-gray-400">
          {t("contact.info.title")}
        </h2>
        <p className="text-gray-400">{t("contact.info.subtitle")}</p>
      </div>

      <div className="space-y-4 text-gray-300">
        <div className="flex items-center gap-3">
          <MapPin className="text-gray-200" />
          <span>{t("contact.info.address")}</span>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="text-gray-200" />
          <span>{t("contact.info.phone")}</span>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="text-gray-200" />
          <span>{t("contact.info.email")}</span>
        </div>

        {/* 🟩 WhatsApp Contact */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <MessageCircle className="text-gray-300 w-5 h-5 group-hover:text-green-400 transition" />

          <a
            href="https://wa.me/4917636385183"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 group-hover:text-green-400 transition"
          >
            {t("contact.info.whatsapp")}
          </a>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-700 text-sm text-gray-500">
        <p>{t("contact.info.availability")}</p>
      </div>
    </motion.div>
  );
}
