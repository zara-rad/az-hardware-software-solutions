import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <motion.div
      className="flex flex-col justify-center bg-[#161b22]/80 backdrop-blur-md rounded-2xl border border-gray-800 p-8 shadow-[0_0_20px_rgba(0,0,0,0.4)] hover:shadow-[0_0_20px_rgba(0,255,180,0.2)] transition-all duration-300 space-y-6"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div>
        <h2 className="text-2xl font-bold mb-3 text-gray-400">Contact Information</h2>
        <p className="text-gray-400">
          Feel free to reach out via phone, email, or visit us in person.
        </p>
      </div>

      <div className="space-y-4 text-gray-300">
        <div className="flex items-center gap-3">
          <MapPin className="text-green-400" />
          <span>Berlin, Germany</span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="text-green-400" />
          <span>+49 30 1234567</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="text-green-400" />
          <span>info@az-hardware.de</span>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-700 text-sm text-gray-500">
        <p>Available: Mon–Fri · 9:00–18:00 (CET)</p>
      </div>
    </motion.div>
  );
}
