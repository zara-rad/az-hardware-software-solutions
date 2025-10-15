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
    <div className="relative flex flex-col text-white overflow-hidden min-h-screen bg-transparent">
      {/* 🖼️ تصویر بک‌گراند با نور و گرادینت انیمیشنی */}
      <img
        src="/images/services/serverroom.jpg"
        alt="Data Center"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.65] contrast-[1.05] -z-30"
      />

      {/* 🌈 لایه‌های انیمیشنی نور و گرادینت */}
      <div className="absolute inset-0 overflow-hidden -z-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/80 via-[#0f1825]/60 to-[#0d1117]/90"
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.08)_0%,transparent_70%)]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* 🔹 عنوان بخش Services */}
      <section
        className={`relative z-10 flex flex-col items-center justify-center text-center ${
          isStandalone ? 'h-[45vh] min-h-[300px]' : 'py-10'
        } px-6`}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-gray-200 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          Tailored solutions for your IT, web, and hardware needs.
        </motion.p>
      </section>

      {/* 🔹 کارت‌های سرویس‌ها */}
      <main className="relative z-10 flex-grow max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.8 }}
                whileHover={{ scale: 1.03 }}
                className="relative group bg-[#0b121a]/70 backdrop-blur-lg rounded-2xl p-10 border border-gray-800 hover:shadow-[0_0_30px_rgba(0,255,180,0.15)] transition-all duration-500"
              >
                {/* نور پس‌زمینه‌ی کارت هنگام hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-green-400 to-cyan-400 rounded-2xl transition-opacity duration-500" />

                <div className="flex flex-col items-center text-center relative z-10">
                  <Icon className="w-14 h-14 text-green-400 mb-5 transition-transform group-hover:scale-110" />
                  <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <NavLink
                    to={service.link}
                    className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white px-8 py-2 rounded-lg font-medium shadow-md shadow-green-900/30 hover:shadow-green-700/40 transition-all"
                  >
                    Learn More
                  </NavLink>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
}





// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <div className="relative flex flex-col bg-[#0d1117] text-white overflow-hidden">
//       {/* 🔹 Animated Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-[#102030] to-[#0f151c]" />
//         {/* ✅ رنگ انتهایی از #0f151c بجای #0d1117 تا با فوتر blend شه */}

//         <motion.div
//           className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.1)_0%,transparent_70%)]"
//           animate={{ rotate: [0, 360] }}
//           transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//         />

//         <motion.div
//           className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,200,255,0.08)_0%,transparent_70%)]"
//           animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         />

//         {/* ✅ لایه‌ی نرم انتهایی برای اتصال گرادینت به فوتر */}
//         <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-[#0d1117]" />
//       </div>

//       {/* 🔹 Hero Section */}
//       <section className="relative z-10 flex flex-col items-center justify-center text-center h-[45vh] min-h-[300px] px-6">
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]"
//         >
//           About Us
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
//         >
//           Empowering businesses with cutting-edge IT solutions and reliable
//           hardware services — built for the future.
//         </motion.p>
//       </section>

//       {/* 🔹 Main Content */}
//       <main className="relative z-10 flex-grow max-w-6xl mx-auto px-6 pb-8 space-y-10 md:space-y-12">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="bg-[#161b22]/70 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.4)]"
//         >
//           <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-400">
//             About AZ Hardware & Software Solutions
//           </h3>
//           <p className="text-gray-300 leading-relaxed text-[1rem] md:text-[1.05rem]">
//             Based in Berlin, we specialize in IT services, web development, and
//             hardware solutions tailored to small and medium-sized businesses.
//             Our goal is to blend technical expertise with precision and
//             innovation — delivering secure, efficient, and scalable systems for
//             every client.
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-6 pb-4">
//           {[
//             {
//               title: "Our Vision",
//               color: "from-cyan-400 to-blue-500",
//               text: "To become Berlin’s most trusted and forward-thinking provider of IT and hardware solutions — empowering digital transformation across industries.",
//             },
//             {
//               title: "Our Mission",
//               color: "from-green-400 to-emerald-500",
//               text: "To deliver high-quality, efficient, and future-proof technology services and hardware — built with transparency and long-term value for our clients.",
//             },
//           ].map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.2, duration: 0.8 }}
//               className="relative group bg-[#161b22]/70 backdrop-blur-md rounded-2xl p-8 border border-gray-800 hover:shadow-[0_0_25px_rgba(34,197,94,0.2)] transition-all duration-500"
//             >
//               <div
//                 className={`absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r ${item.color} rounded-2xl transition-opacity`}
//               />
//               <h3
//                 className={`text-lg md:text-xl font-semibold mb-3 bg-gradient-to-r ${item.color} text-transparent bg-clip-text`}
//               >
//                 {item.title}
//               </h3>
//               <p className="text-gray-300 leading-relaxed relative z-10 text-sm md:text-base">
//                 {item.text}
//               </p>
//             </motion.div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }
