import { motion } from "framer-motion";
import { Code2, Layout, Database, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function WebDevelopment() {
  return (
    <div className="relative flex flex-col text-white overflow-hidden min-h-screen bg-transparent">
      {/* 🖼️ تصویر بک‌گراند با افکت نور و گرادینت */}
      <img
        src="/images/services/bgdevelopment1.jpg" // 📷 مسیر عکس بک‌گراند (می‌تونی از همون serverroom.jpg هم استفاده کنی)
        alt="Web Development Background"
        className="absolute inset-0 w-full h-full object-cover -z-30"
      />

      {/* 🌈 لایه‌های نور و گرادینت متحرک */}
      <div className="absolute inset-0 overflow-hidden -z-20">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/85 via-[#0f1825]/60 to-[#0d1117]/90"
          animate={{ opacity: [0.9, 1, 0.9] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.08)_0%,transparent_70%)]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* 🔹 Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center h-[45vh] min-h-[320px] px-6">
        <Code2 className="w-16 h-16 text-green-400 mb-4" />
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]"
        >
          Web & Software Development
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-200 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          Modern, secure, and scalable web applications — tailored for your
          business growth.
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
      <main className="relative z-10 flex-grow max-w-6xl mx-auto px-6 pb-20 space-y-12">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Layout className="w-14 h-14 text-green-400 mb-3" />,
              title: "Frontend Development",
              text: "Stunning, responsive, and performance-driven user interfaces built with React, Vite, and TailwindCSS.",
              link: "/services/web/frontend",
            },
            {
              icon: <Database className="w-14 h-14 text-green-400 mb-3" />,
              title: "Backend Development",
              text: "Powerful, secure, and scalable APIs designed with Node.js, Express, and modern backend architecture for maximum efficiency.",
              link: "/services/web/backend",
            },
            {
              icon: <Code2 className="w-14 h-14 text-green-400 mb-3" />,
              title: "Fullstack Solutions",
              text: "Complete fullstack development — seamless integration from frontend to backend, concept to deployment.",
              link: "/services/web/fullstack",
            },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-[#0b121a]/70 backdrop-blur-lg p-8 rounded-2xl border border-gray-800 hover:border-green-400 hover:shadow-[0_0_25px_rgba(0,255,180,0.2)] transition-all duration-300"
            >
              {s.icon}
              <h3 className="text-xl font-semibold mb-2 text-white">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {s.text}
              </p>
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
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            Need a custom website or software?
          </h2>
          <p className="text-gray-300 mb-6">
            Let’s build your next digital product — fast, reliable, and
            optimized for success.{" "}
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

// import { motion } from "framer-motion";
// import { Code2, Layout, Database, ArrowLeft } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function WebDevelopment() {
//   return (
//     <div className="relative flex flex-col bg-[#0d1117] text-white overflow-hidden min-h-screen">
//       {/* 🌌 Animated Background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#102030] to-[#0d1117] overflow-hidden">
//         <motion.div
//           className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.1)_0%,transparent_70%)]"
//           animate={{ rotate: [0, 360] }}
//           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//         />
//       </div>

//       {/* 🔹 Hero Section */}
//       <section className="relative z-10 flex flex-col items-center justify-center text-center h-[45vh] min-h-[320px] px-6">
//         <Code2 className="w-16 h-16 text-green-400 mb-4" />
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]"
//         >
//           Web & Software Development
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
//         >
//           We build modern, secure, and scalable web applications — from responsive
//           business websites to custom enterprise solutions.
//         </motion.p>
//       </section>

//       {/* 🔙 Back to Services */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 mb-8">
//         <Link
//           to="/services"
//           className="inline-flex items-center gap-2 text-green-400 hover:text-cyan-400 transition-all"
//         >
//           <ArrowLeft className="w-5 h-5" /> Back to Services
//         </Link>
//       </div>

//       {/* 🔹 Main Content */}
//       <main className="relative z-10 flex-grow max-w-6xl mx-auto px-6 pb-10 space-y-12">
//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             {
//               icon: <Layout className="w-14 h-14 text-green-400 mb-3" />,
//               title: "Frontend Development",
//               text: "Modern, responsive interfaces with React, Vite, and TailwindCSS.",
//               link: "/services/web/frontend",
//             },
//             {
//               icon: <Database className="w-14 h-14 text-green-400 mb-3" />,
//               title: "Backend Development",
//               text: "Robust and scalable APIs built with Node.js and Express.",
//               link: "/services/web/backend",
//             },
//             {
//               icon: <Code2 className="w-14 h-14 text-green-400 mb-3" />,
//               title: "Fullstack Solutions",
//               text: "End-to-end web applications — from concept to deployment.",
//               link: "/services/web/fullstack",
//             },
//           ].map((s, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.2, duration: 0.8 }}
//               className="bg-[#161b22]/80 backdrop-blur-md p-8 rounded-2xl border border-gray-800 hover:border-green-400 hover:shadow-[0_0_25px_rgba(0,255,180,0.2)] transition-all duration-300"
//             >
//               {s.icon}
//               <h3 className="text-xl font-semibold mb-2 text-white">{s.title}</h3>
//               <p className="text-gray-400 text-sm leading-relaxed mb-6">{s.text}</p>
//               <Link
//                 to={s.link}
//                 className="inline-block bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white px-6 py-2 rounded-lg font-medium shadow-md shadow-green-900/30 hover:shadow-green-700/40 transition-all"
//               >
//                 Learn More
//               </Link>
//             </motion.div>
//           ))}
//         </div>

//         {/* ✅ CTA Section */}
//         <motion.div
//           className="text-center mt-12"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h2 className="text-2xl font-bold mb-4 text-green-400">
//             Need a custom website or software?
//           </h2>
//           <p className="text-gray-400 mb-6">
//             Let’s talk about how we can bring your digital vision to life — fast, modern,
//             and fully optimized.
//           </p>
//           <a
//             href="/contact"
//             className="inline-block bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-green-900/30 hover:shadow-green-700/40 transition-all"
//           >
//             Get a Quote
//           </a>
//         </motion.div>
//       </main>
//     </div>
//   );
// }
