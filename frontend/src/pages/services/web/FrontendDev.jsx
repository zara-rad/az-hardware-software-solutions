import { motion } from "framer-motion";
import { Layout, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function FrontendDev() {
  return (
    <div className="relative flex flex-col bg-[#0d1117] text-white overflow-hidden min-h-screen">
      {/* 🌌 پس‌زمینه مثل ServerAdmin */}
      <div className="absolute inset-0">
        <img
          src="/images/services/webdev-bg.jpg"
          alt="Frontend Development Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117]/70 via-[#0f1825]/50 to-[#0d1117]/90" />
      </div>

      {/* 🔹 Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center h-[40vh] min-h-[300px] px-6">
        <Layout className="w-16 h-16 text-green-400 mb-4" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text"
        >
          Frontend Development
        </motion.h1>
        <p className="text-gray-400 max-w-2xl text-center">
          Modern, responsive, and engaging user interfaces built with React, Vite, and TailwindCSS.
        </p>
      </section>

      {/* 🔹 محتوای اصلی با تصویر سمت راست */}
      <main className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 gap-10">
        {/* 📝 متن سمت چپ */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full text-gray-300 leading-relaxed space-y-4"
        >
          <p>
            Our frontend development process focuses on building visually stunning,
            fast, and accessible web experiences — ensuring pixel-perfect interfaces
            that perform beautifully on all devices.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>React + Vite architecture for high performance</li>
            <li>TailwindCSS for modern responsive design</li>
            <li>Optimized SEO & Core Web Vitals</li>
            <li>Reusable component-based UI for scalability</li>
          </ul>

          <div className="pt-6">
            <Link
              to="/services/web"
              className="inline-flex items-center gap-2 text-green-400 hover:text-cyan-400 transition-all"
            >
              <ArrowLeft className="w-5 h-5" /> Back to Web Development
            </Link>
          </div>
        </motion.div>

        {/* 🖼️ تصویر سمت راست */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full"
        >
          <img
            src="/images/services/frontend.jpg"
            alt="Frontend workspace"
            className="rounded-2xl shadow-[0_0_30px_rgba(0,255,180,0.1)] object-cover w-full h-[350px] md:h-[420px]"
          />
        </motion.div>
      </main>

      {/* CTA پایین */}
      <motion.div
        className="relative z-10 text-center pb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-green-400">
          Need a stunning and fast web interface?
        </h2>
        <p className="text-gray-400 mb-6">
          Let’s create a seamless and beautiful user experience for your website or app — powered by modern frontend technologies.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-green-900/30 hover:shadow-green-700/40 transition-all"
        >
          Get a Quote
        </a>
      </motion.div>
    </div>
  );
}




// import { motion } from "framer-motion";
// import { Layout, ArrowLeft } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function FrontendDev() {
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
//         <Layout className="w-16 h-16 text-green-400 mb-4" />
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]"
//         >
//           Frontend Development
//         </motion.h1>
//         <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
//           Responsive and modern interfaces built with React, Vite, and TailwindCSS.
//         </p>
//       </section>

//       {/* 🔙 Back to Web Development */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 mb-8">
//         <Link
//           to="/services/web"
//           className="inline-flex items-center gap-2 text-green-400 hover:text-cyan-400 transition-all"
//         >
//           <ArrowLeft className="w-5 h-5" /> Back to Web Development
//         </Link>
//       </div>

//       {/* 🔹 Main Content */}
//       <main className="relative z-10 flex-grow max-w-6xl mx-auto px-6 pb-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="space-y-6 text-gray-300 leading-relaxed"
//         >
//           <p>
//             Our frontend solutions focus on creating elegant, fast, and accessible interfaces
//             that deliver the best user experience across all devices.
//           </p>
//           <ul className="list-disc list-inside space-y-2">
//             <li>React, Vite & TailwindCSS-based architecture</li>
//             <li>Responsive design and SEO optimization</li>
//             <li>UI/UX improvements for business applications</li>
//             <li>Component-driven development for scalability</li>
//           </ul>
//         </motion.div>
//       </main>
//     </div>
//   );
// }
