import { motion } from "framer-motion";
import { Cog, Wrench, Truck, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function HardwareSolutions() {
  return (
    <div className="relative flex flex-col bg-[#0d1117] text-white overflow-hidden min-h-screen">
      {/* 🌌 Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#102030] to-[#0d1117] overflow-hidden">
        <motion.div
          className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.1)_0%,transparent_70%)]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* 🔹 Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center h-[45vh] min-h-[320px] px-6">
        <Cog className="w-16 h-16 text-green-400 mb-4" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]"
        >
          Hardware Solutions
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          Reliable hardware sales, professional installation, and ongoing support
          for all your IT devices and components.
        </motion.p>
      </section>

      {/* 🔙 Back to Services */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mb-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-green-400 hover:text-cyan-400 transition-all"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Services
        </Link>
      </div>

      {/* 🔹 Main Content */}
      <main className="relative z-10 flex-grow max-w-6xl mx-auto px-6 pb-10 space-y-12">
        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Truck className="w-14 h-14 text-green-400 mb-3" />,
              title: "Device Sales",
              text: "Supplying high-quality laptops, PCs, and IT components at competitive prices.",
              link: "/services/hardware/sales",
            },
            {
              icon: <Wrench className="w-14 h-14 text-green-400 mb-3" />,
              title: "Installation & Setup",
              text: "Professional configuration and on-site installation for your hardware.",
              link: "/services/hardware/installation",
            },
            {
              icon: <Cog className="w-14 h-14 text-green-400 mb-3" />,
              title: "Maintenance & Support",
              text: "Regular updates, diagnostics, and technical assistance for all devices.",
              link: "/services/hardware/maintenance",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-[#161b22]/80 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:border-green-400 hover:shadow-[0_0_25px_rgba(0,255,180,0.2)] transition-all duration-300"
            >
              {s.icon}
              <h3 className="text-xl font-semibold mb-2 text-white">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{s.text}</p>
              <Link
                to={s.link}
                className="inline-block bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white px-6 py-2 rounded-lg font-medium shadow-md shadow-green-900/30 hover:shadow-green-700/40 transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ✅ CTA Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            Need professional hardware solutions?
          </h2>
          <p className="text-gray-400 mb-6">
            Contact us today for the best deals on hardware sales, installation, and long-term maintenance.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-green-900/30 hover:shadow-green-700/40 transition-all"
          >
            Get a Quote
          </a>
        </motion.div>
      </main>
    </div>
  );
}



