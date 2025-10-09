import { motion } from "framer-motion";
import { Code2, Globe, Layers } from "lucide-react";

export default function WebDevelopment() {
  return (
    <div className="relative flex flex-col bg-[#0d1117] text-white overflow-hidden min-h-screen">
      {/* 🌌 Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#102030] to-[#0d1117] overflow-hidden">
        <motion.div
          className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,200,255,0.12)_0%,transparent_70%)]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* 🔹 Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center h-[45vh] min-h-[320px] px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(34,197,255,0.4)]"
        >
          Web & Software Development
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          Custom-built web solutions, ERP systems, and digital products designed
          to help your business thrive online.
        </motion.p>
      </section>

      {/* 🔹 Main Content */}
      <main className="relative z-10 flex-grow max-w-6xl mx-auto px-6 pb-10 space-y-12">
        {/* Service Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Globe className="w-14 h-14 text-cyan-400 mb-3" />,
              title: "Modern Web Design",
              text: "Responsive, SEO-optimized, and user-centered websites built with the latest technologies.",
            },
            {
              icon: <Code2 className="w-14 h-14 text-cyan-400 mb-3" />,
              title: "Custom Software Development",
              text: "Tailored web apps, ERP, or CRM systems — scalable and secure, made for your business.",
            },
            {
              icon: <Layers className="w-14 h-14 text-cyan-400 mb-3" />,
              title: "API & Integration",
              text: "We connect your software with third-party tools for seamless automation and efficiency.",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-[#161b22]/80 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(0,200,255,0.2)] transition-all duration-300"
            >
              {s.icon}
              <h3 className="text-xl font-semibold mb-2 text-white">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>

        {/* 🔹 CTA Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Ready to build your digital presence?
          </h2>
          <p className="text-gray-400 mb-6">
            Let’s bring your vision to life — from web design to full-scale
            software systems.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-cyan-900/30 hover:shadow-cyan-700/40 transition-all"
          >
            Get a Quote
          </a>
        </motion.div>
      </main>
    </div>
  );
}
