import { Monitor, Code2, Cog } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";

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

  useEffect(() => {
    // وقتی وارد صفحه‌ی Services میشی، صفحه بره بالا
    if (isStandalone) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isStandalone]);

  return (
    <div
      key={location.pathname} // ✅ باعث remount کامل هنگام بازگشت می‌شود
      className={`relative flex flex-col ${
        isStandalone ? "min-h-screen" : ""
      } text-white overflow-hidden`}
    >
      {/* 🖼️ Background فقط در حالت standalone */}
      {isStandalone && (
        <div className="absolute inset-0">
          <img
            src="/images/services/bgservicess.jpg"
            alt="Modern Data Center"
            className="w-full h-full object-cover opacity-70 scale-105"
          />
          {/* 🌈 Dark overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/70 via-[#0d1117]/50 to-[#0d1117]/90" />
          {/* ✨ Soft light center glow */}
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(0,255,180,0.12)_0%,transparent_70%)] blur-3xl opacity-70 animate-pulse" />
        </div>
      )}

      {/* 🔹 Main Section */}
      <section
        className={`relative z-10 flex flex-col justify-center ${
          isStandalone ? "py-32 md:py-40" : "py-16"
        } px-6 text-center min-h-[70vh]`}
      >
        {/* 🔹 Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(0,255,180,0.2)]">
            Our Services
          </h1>
          <p className="text-gray-200 text-lg font-light">
            Tailored solutions for your IT, web, and hardware needs
          </p>
        </motion.div>

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
                whileHover={{ scale: 1.03 }}
                className="group p-10 rounded-2xl bg-[#0f1620]/80 border border-gray-800 hover:border-green-400 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(0,255,180,0.15)] transition-all duration-300 flex flex-col items-center"
              >
                <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
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

// import { Monitor, Code2, Cog } from "lucide-react";
// import { motion } from "framer-motion";
// import { NavLink, useLocation } from "react-router-dom";

// export default function Services() {
//   const location = useLocation();
//   const isStandalone = location.pathname === "/services";

//   const services = [
//     {
//       icon: Monitor,
//       title: "IT Services",
//       desc: "System administration, network setup, and managed IT support.",
//       link: "/services/it",
//     },
//     {
//       icon: Code2,
//       title: "Web & Software Development",
//       desc: "Modern websites, ERP systems, and custom software solutions.",
//       link: "/services/web",
//     },
//     {
//       icon: Cog,
//       title: "Hardware Solutions",
//       desc: "Device sales, installation, and ongoing maintenance.",
//       link: "/services/hardware",
//     },
//   ];

//   return (
//     <div
//       className={`relative flex flex-col ${
//         isStandalone ? "min-h-screen" : ""
//       } bg-gradient-to-b from-[#0d1117] via-[#101a25] to-[#0f151c] text-white overflow-hidden`}
//     >
//       {/* 🌌 Light Glow Layer */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.05)_0%,transparent_70%)] blur-3xl animate-pulse opacity-60"></div>

//       <section
//         className={`relative z-10 ${
//           isStandalone ? "py-20" : "py-10"
//         } px-6 text-center border-t border-gray-800`}
//       >
//         {/* 🔹 Section Title */}
//         <div
//           className="relative z-10 mb-16"
//           data-aos="fade-up"
//           data-aos-duration="800"
//         >
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,180,0.25)]">
//             Our Services
//           </h1>
//           <p className="text-gray-400 text-lg">
//             Tailored solutions for your IT, web, and hardware needs
//           </p>
//         </div>

//         {/* 🔹 Service Cards */}
//         <div className="relative z-10 grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
//           {services.map((service, i) => {
//             const Icon = service.icon;
//             return (
//               <motion.div
//                 key={service.title}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.15, duration: 0.6 }}
//                 whileHover={{ scale: 1.02 }}
//                 className="group p-10 rounded-2xl bg-[#161b22]/80 border border-gray-800 hover:border-green-400 backdrop-blur-md hover:shadow-[0_0_25px_rgba(0,255,180,0.2)] transition-all duration-300 flex flex-col items-center"
//               >
//                 <div className="mb-4 transform transition-transform duration-300 group-hover:rotate-6">
//                   <Icon className="w-14 h-14 text-green-400" />
//                 </div>

//                 <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-green-400 transition-colors duration-300">
//                   {service.title}
//                 </h3>

//                 <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
//                   {service.desc}
//                 </p>

//                 <NavLink
//                   to={service.link}
//                   className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white px-8 py-2 rounded-lg font-medium shadow-md shadow-green-900/30 hover:shadow-green-700/40 transition-all"
//                 >
//                   Learn More
//                 </NavLink>
//               </motion.div>
//             );
//           })}
//         </div>
//       </section>
//     </div>
//   );
// }
