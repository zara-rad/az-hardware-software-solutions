import { Monitor, Code2, Cog } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";

export default function Services() {
  const location = useLocation();
  const isStandalone = location.pathname === "/services";

  const services = [
    {
      icon: Monitor,
      title: "IT Services",
      desc: "System administration, network setup, and managed IT support.",
      link: "/services/it",
    },
    {
      icon: Code2,
      title: "Web & Software Development",
      desc: "Modern websites, ERP systems, and custom software solutions.",
      link: "/services/web",
    },
    {
      icon: Cog,
      title: "Hardware Solutions",
      desc: "Device sales, installation, and ongoing maintenance.",
      link: "/services/hardware",
    },
  ];

  return (
    <div
      className={`relative flex flex-col ${
        isStandalone ? "min-h-screen" : ""
      } bg-gradient-to-b from-[#0d1117] via-[#101a25] to-[#0f151c] text-white overflow-hidden`}
    >
      {/* 🌌 Light Glow Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.05)_0%,transparent_70%)] blur-3xl animate-pulse opacity-60"></div>

      <section
        className={`relative z-10 ${
          isStandalone ? "py-20" : "py-10"
        } px-6 text-center border-t border-gray-800`}
      >
        {/* 🔹 Section Title */}
        <div
          className="relative z-10 mb-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,180,0.25)]">
            Our Services
          </h1>
          <p className="text-gray-400 text-lg">
            Tailored solutions for your IT, web, and hardware needs
          </p>
        </div>

        {/* 🔹 Service Cards */}
        <div className="relative z-10 grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
                className="group p-10 rounded-2xl bg-[#161b22]/80 border border-gray-800 hover:border-green-400 backdrop-blur-md hover:shadow-[0_0_25px_rgba(0,255,180,0.2)] transition-all duration-300 flex flex-col items-center"
              >
                <div className="mb-4 transform transition-transform duration-300 group-hover:rotate-6">
                  <Icon className="w-14 h-14 text-green-400" />
                </div>

                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-green-400 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
                  {service.desc}
                </p>

                <NavLink
                  to={service.link}
                  className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white px-8 py-2 rounded-lg font-medium shadow-md shadow-green-900/30 hover:shadow-green-700/40 transition-all"
                >
                  Learn More
                </NavLink>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
