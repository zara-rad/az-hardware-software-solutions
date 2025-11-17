import { motion } from "framer-motion";
import { Code2, Layout, Database, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function WebDevelopment() {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Layout className="w-14 h-14 text-gray-400 mb-3" />,
      title: t("web.overview.frontendTitle"),
      text: t("web.overview.frontendText"),
      link: "/services/web/frontend",
    },
    {
      icon: <Database className="w-14 h-14 text-gray-400 mb-3" />,
      title: t("web.overview.backendTitle"),
      text: t("web.overview.backendText"),
      link: "/services/web/backend",
    },
    {
      icon: <Code2 className="w-14 h-14 text-gray-400 mb-3" />,
      title: t("web.overview.fullstackTitle"),
      text: t("web.overview.fullstackText"),
      link: "/services/web/fullstack",
    },
  ];

  return (
    <motion.div
      key="web-development"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="relative flex flex-col text-white overflow-hidden min-h-screen bg-transparent"
    >
      {/* Background */}
      <img
        src="/images/services/bgdevelopment1.jpg"
        alt="Web Development Background"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.65] contrast-[1.05] -z-30"
      />

      {/* Gradient Layers */}
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

      {/* Hero */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center h-[45vh] min-h-[320px] px-6">
        <Code2 className="w-16 h-16 text-gray-400 mb-4" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold 
          pb-2 mb-3
          bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(200,200,200,0.15)]"
        >
          {t("web.overview.title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-200 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
        >
          {t("web.overview.subtitle")}
        </motion.p>
      </section>

      {/* Back Button */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 mb-8">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-all"
        >
          <ArrowLeft className="w-5 h-5" /> {t("web.overview.back")}
        </Link>
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-grow max-w-6xl mx-auto px-6 pb-20 space-y-12">
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="bg-[#0b121a]/70 backdrop-blur-lg p-8 rounded-2xl 
              border-2 border-gray-800 hover:border-gray-400 
              hover:shadow-[0_0_25px_rgba(200,200,200,0.15)]
              transition-all duration-300 flex flex-col h-full"
            >
              {s.icon}

              <h3 className="text-xl font-semibold mb-2 text-white">{s.title}</h3>

              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {s.text}
              </p>

              <Link
                to={s.link}
                className="mt-auto inline-block bg-gradient-to-r from-gray-300 to-gray-500 
                hover:from-gray-400 hover:to-gray-400 text-black px-6 py-2 
                rounded-md text-sm font-medium shadow-md shadow-gray-900/30 
                hover:shadow-gray-700/40 transition-all"
              >
                {t("web.overview.learnMore")}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-400">
            {t("web.overview.ctaTitle")}
          </h2>

          <p className="text-gray-300 mb-6">{t("web.overview.ctaDesc")}</p>

          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-gray-300 to-gray-500 
            hover:from-gray-400 hover:to-gray-400 text-black px-8 py-3 
            rounded-lg font-semibold shadow-lg shadow-gray-900/30 
            hover:shadow-gray-700/40 transition-all"
          >
            {t("web.overview.ctaButton")}
          </a>
        </motion.div>
      </main>
    </motion.div>
  );
}






// import { motion } from "framer-motion";
// import { Code2, Layout, Database, ArrowLeft } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// export default function WebDevelopment() {
//   const { t } = useTranslation();

//   const services = [
//     {
//       icon: <Layout className="w-14 h-14 text-gray-400 mb-3" />,
//       title: t("web.overview.frontendTitle"),
//       text: t("web.overview.frontendText"),
//       link: "/services/web/frontend",
//     },
//     {
//       icon: <Database className="w-14 h-14 text-gray-400 mb-3" />,
//       title: t("web.overview.backendTitle"),
//       text: t("web.overview.backendText"),
//       link: "/services/web/backend",
//     },
//     {
//       icon: <Code2 className="w-14 h-14 text-gray-400 mb-3" />,
//       title: t("web.overview.fullstackTitle"),
//       text: t("web.overview.fullstackText"),
//       link: "/services/web/fullstack",
//     },
//   ];

//   return (
//     <div className="relative flex flex-col text-white overflow-hidden min-h-screen bg-transparent">
//       {/* Background */}
//       <img
//         src="/images/services/bgdevelopment1.jpg"
//         alt="Web Development Background"
//         className="absolute inset-0 w-full h-full object-cover brightness-[0.65] contrast-[1.05] -z-30"
//       />

//       {/* Gradient Layers */}
//       <div className="absolute inset-0 overflow-hidden -z-20">
//         <motion.div
//           className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/85 via-[#0f1825]/60 to-[#0d1117]/90"
//           animate={{ opacity: [0.9, 1, 0.9] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         />
//         <motion.div
//           className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.08)_0%,transparent_70%)]"
//           animate={{ rotate: [0, 360] }}
//           transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
//         />
//       </div>

//       {/* Hero */}
//       <section className="relative z-10 flex flex-col items-center justify-center text-center h-[45vh] min-h-[320px] px-6">
//         <Code2 className="w-16 h-16 text-gray-400 mb-4" />

//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl md:text-5xl lg:text-6xl font-extrabold 
//           pb-2 mb-3
//           bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(200,200,200,0.15)]"
//         >
//           {t("web.overview.title")}
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5, duration: 1 }}
//           className="text-gray-200 max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
//         >
//           {t("web.overview.subtitle")}
//         </motion.p>
//       </section>

//       {/* Back Button */}
//       <div className="relative z-10 max-w-6xl mx-auto px-6 mb-8">
//         <Link
//           to="/services"
//           className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-300 transition-all"
//         >
//           <ArrowLeft className="w-5 h-5" /> {t("web.overview.back")}
//         </Link>
//       </div>

//       {/* Main Content */}
//       <main className="relative z-10 flex-grow max-w-6xl mx-auto px-6 pb-20 space-y-12">
        
//         <div className="grid md:grid-cols-3 gap-8">
//           {services.map((s, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: i * 0.2, duration: 0.8 }}
//               className="bg-[#0b121a]/70 backdrop-blur-lg p-8 rounded-2xl 
//               border-2 border-gray-800 hover:border-gray-400 
//               hover:shadow-[0_0_25px_rgba(200,200,200,0.15)]
//               transition-all duration-300 flex flex-col h-full"
//             >
//               {s.icon}

//               <h3 className="text-xl font-semibold mb-2 text-white">{s.title}</h3>

//               <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
//                 {s.text}
//               </p>

//               <Link
//                 to={s.link}
//                 className="mt-auto inline-block bg-gradient-to-r from-gray-300 to-gray-500 
//                 hover:from-gray-400 hover:to-gray-400 text-black px-6 py-2 
//                 rounded-md text-sm font-medium shadow-md shadow-gray-900/30 
//                 hover:shadow-gray-700/40 transition-all"
//               >
//                 {t("web.overview.learnMore")}
//               </Link>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h2 className="text-2xl font-bold mb-4 text-gray-400">
//             {t("web.overview.ctaTitle")}
//           </h2>

//           <p className="text-gray-300 mb-6">{t("web.overview.ctaDesc")}</p>

//           <a
//             href="/contact"
//             className="inline-block bg-gradient-to-r from-gray-300 to-gray-500 
//             hover:from-gray-400 hover:to-gray-400 text-black px-8 py-3 
//             rounded-lg font-semibold shadow-lg shadow-gray-900/30 
//             hover:shadow-gray-700/40 transition-all"
//           >
//             {t("web.overview.ctaButton")}
//           </a>
//         </motion.div>
//       </main>
//     </div>
//   );
// }




