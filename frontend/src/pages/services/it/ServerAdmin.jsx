import { motion } from "framer-motion";
import { ArrowLeft, Server } from "lucide-react";
import { Link } from "react-router-dom";

export default function ServerAdmin() {
  return (
    <div className="relative flex flex-col bg-[#0d1117] text-white overflow-hidden min-h-screen">
      {/* 🌌 Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#102030] to-[#0d1117]" />

      {/* 🔹 Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center h-[40vh] min-h-[300px] px-6">
        <Server className="w-16 h-16 text-green-400 mb-4" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text"
        >
          Server & System Administration
        </motion.h1>
        <p className="text-gray-400 max-w-2xl">
          Setup, optimization, and monitoring of secure, high-performance servers.
        </p>
      </section>

      {/* 🔹 Content */}
      <main className="relative z-10 flex-grow max-w-4xl mx-auto px-6 pb-10 space-y-6 text-gray-300 leading-relaxed">
        <p>
          We provide expert configuration and maintenance for Linux and Windows
          servers — ensuring stability, performance, and security for your
          business systems.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-400">
          <li>Server setup & virtualization (VMware, Hyper-V, Proxmox)</li>
          <li>Active Directory, DNS, DHCP configuration</li>
          <li>Backup, monitoring, and maintenance plans</li>
        </ul>

        {/* 🔙 Back to IT Services */}
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
