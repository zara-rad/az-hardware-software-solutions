import { Monitor, Code2, Cog } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: <Monitor className="w-14 h-14 text-green-400 mb-4" />,
      title: "IT Services",
      desc: "System administration, network setup, and managed IT support.",
    },
    {
      icon: <Code2 className="w-14 h-14 text-green-400 mb-4" />,
      title: "Web & Software Development",
      desc: "Modern websites, ERP systems, and custom software solutions.",
    },
    {
      icon: <Cog className="w-14 h-14 text-green-400 mb-4" />,
      title: "Hardware Solutions",
      desc: "Device sales, installation, and ongoing maintenance.",
    },
  ];

  return (
    <section className="relative py-24 px-6 text-center border-t border-gray-800">
      {/* 🔹 عنوان بخش */}
      <motion.div
        className="relative z-10 mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,180,0.25)]">
          Our Services
        </h1>
        <p className="text-gray-400 text-lg">
          Tailored solutions for your IT, web, and hardware needs
        </p>
      </motion.div>

      {/* 🔹 کارت‌ها */}
      <div className="relative z-10 grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            className="group p-10 rounded-2xl bg-[#161b22]/80 border border-gray-800 hover:border-green-400 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(34,197,94,0.2)] transition-all duration-300 flex flex-col items-center"
          >
            <motion.div
              className="mb-4"
              whileHover={{ rotate: 10 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              {service.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-green-400 transition-colors duration-300">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
              {service.desc}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white px-8 py-2 rounded-lg font-medium shadow-md shadow-green-900/30 hover:shadow-green-700/40 transition-all"
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
