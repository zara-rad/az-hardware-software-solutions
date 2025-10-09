import { motion } from "framer-motion";
import { ArrowLeft, Network } from "lucide-react";
import { Link } from "react-router-dom";

export default function NetworkSetup() {
  return (
    <div className="relative flex flex-col bg-[#0d1117] text-white overflow-hidden min-h-screen">
      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#102030] to-[#0d1117]" />

      {/* 🔹 Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center h-[40vh] min-h-[300px] px-6">
        <Network className="w-16 h-16 text-green-400 mb-4" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text"
        >
          Network Setup & Security
        </motion.h1>
        <p className="text-gray-400 max-w-2xl">
          Secure, reliable network design, VPN setup, and firewall management.
        </p>
      </section>

      {/* 🔹 Content */}
      <main className="relative z-10 flex-grow max-w-4xl mx-auto px-6 pb-10 space-y-6 text-gray-300 leading-relaxed">
        <p>
          We design and maintain high-performance network infrastructures — from small offices to 
          large-scale distributed systems — with security and stability as top priorities.
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-400">
          <li>LAN/WAN setup and optimization</li>
          <li>VPN, VLAN, and Wi-Fi configuration</li>
          <li>Firewall & endpoint security management</li>
        </ul>

        {/* 🔙 Back Button */}
        <div className="pt-8">
          <Link
            to="/services/it"
            className="inline-flex items-center gap-2 text-green-400 hover:text-cyan-400 transition-all"
          >
            <ArrowLeft className="w-5 h-5" /> Back to IT Services
          </Link>
        </div>
      </main>
    </div>
  );
}
