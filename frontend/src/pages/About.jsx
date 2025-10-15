import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <div className="relative min-h-screen flex flex-col text-white bg-[#0d1117] overflow-hidden">
      <Helmet>
        <title>
          Empowering businesses with innovative IT solutions and reliable
          hardware services — built for the future.
        </title>
        <meta
          name="description"
          content="Empowering businesses with cutting-edge IT solutions and reliable hardware services — built for the future."
        />
      </Helmet>

      {/* 🖼️ Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/about/about.jpg"
          alt="About Background"
          className="w-full h-full object-cover opacity-70 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/60 via-[#0d1117]/50 to-[#0d1117]/90" />
      </div>

      {/* 🌟 Soft Glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(0,255,180,0.12)_0%,transparent_70%)] blur-3xl opacity-60"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🔹 Header */}
      <section className="relative z-10 text-center py-28 px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(0,255,180,0.3)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Empowering businesses with cutting-edge IT solutions and reliable
          hardware services — built for the future.
        </motion.p>
      </section>

      {/* 🔹 Main Content Cards */}
      <section className="relative z-10 flex flex-col items-center gap-10 px-6 pb-24 max-w-6xl mx-auto">
        {/* About Company Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
          className="bg-[#121a24]/80 backdrop-blur-md border border-gray-800 hover:border-transparent hover:bg-[#141c26]/90 rounded-2xl p-8 md:p-10 text-center shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_35px_rgba(0,255,180,0.2)] transition-all duration-300 hover:bg-gradient-to-br hover:from-[#0f1620]/80 hover:to-[#12212f]/80"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-green-400 mb-4">
            About AZ Hardware & Software Solutions
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Based in Berlin, AZ Hardware & Software Solutions provides complete
            IT, web, and hardware services designed to help small and
            medium-sized businesses thrive in the digital era. We combine
            technology, creativity, and precision to deliver reliable systems
            that are efficient, secure, and built to last. Our focus is on
            creating seamless digital ecosystems — from IT infrastructure and
            networks to web platforms and hardware integration.
          </p>
        </motion.div>

        {/* Mission + Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 w-full">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#121a24]/80 backdrop-blur-md border border-gray-800 hover:border-transparent hover:bg-[#141c26]/90 rounded-2xl p-8 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(0,255,180,0.2)] transition-all duration-300 hover:bg-gradient-to-br hover:from-[#0f1620]/80 hover:to-[#12212f]/80"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To become one of Berlin’s most trusted and forward-thinking IT and
              hardware solution providers — empowering digital transformation
              and enabling businesses to operate smarter, faster, and more
              sustainably.
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#121a24]/80 backdrop-blur-md border border-gray-800 hover:border-transparent hover:bg-[#141c26]/90 rounded-2xl p-8 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(0,255,180,0.2)] transition-all duration-300 hover:bg-gradient-to-br hover:from-[#0f1620]/80 hover:to-[#12212f]/80"
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-300 leading-relaxed">
              To deliver high-quality, efficient, and future-ready technology
              services and hardware — combining transparency, innovation, and
              long-term value for every client. We aim to make technology
              simpler, more accessible, and truly supportive of business growth.
            </p>
          </motion.div>
        </div>

        {/* 🤝 Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-green-400">
            Let’s Build Something Great Together
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Whether you need IT support, web development, or complete hardware
            integration — AZ Hardware & Software Solutions is ready to help you
            turn your ideas into reliable, modern, and scalable results.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-green-900/30 hover:shadow-green-700/40 transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </section>
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
