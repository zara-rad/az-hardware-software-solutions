import { motion } from "framer-motion";
import { Database, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function BackendDev() {
  return (
    <div className="relative flex flex-col bg-[#0d1117] text-white overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#102030] to-[#0d1117] overflow-hidden">
        <motion.div
          className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.1)_0%,transparent_70%)]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <section className="relative z-10 flex flex-col items-center justify-center text-center h-[45vh] min-h-[320px] px-6">
        <Database className="w-16 h-16 text-green-400 mb-4" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]"
        >
          Backend Development
        </motion.h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Secure and scalable backend systems built with Node.js, Express, and MongoDB.
        </p>
      </section>

      {/* 🔙 Back to Web Development */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mb-8">
        <Link
          to="/services/web"
          className="inline-flex items-center gap-2 text-green-400 hover:text-cyan-400 transition-all"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Web Development
        </Link>
      </div>

      <main className="relative z-10 flex-grow max-w-6xl mx-auto px-6 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-gray-300 leading-relaxed"
        >
          <p>
            We design backend architectures that prioritize performance, data integrity, 
            and security for your applications.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>RESTful API & authentication systems</li>
            <li>Database design and optimization (MongoDB, PostgreSQL)</li>
            <li>Secure session & token-based authentication (JWT)</li>
            <li>Integration with third-party services and APIs</li>
          </ul>
        </motion.div>
      </main>
    </div>
  );
}
