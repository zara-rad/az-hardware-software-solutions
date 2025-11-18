import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export default function About() {
  const { t } = useTranslation();

  useEffect(() => {
    const img = new Image();
    img.src = "/images/about/about.jpg";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="relative min-h-[100dvh] flex flex-col text-white overflow-hidden"
    >
      <Helmet>
        {/* <title>{t("about.title")} — AZ Hardware</title> */}
        <meta name="description" content={t("about.subtitle")} />
      </Helmet>

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0d1117]" />

        {/* <img
          src="/images/about/about.jpg"
          alt="About Background"
          className="absolute inset-0 w-full h-full object-cover opacity-70 scale-105"
          fetchPriority="high"
          loading="eager"
        /> */}

        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/60 via-[#0d1117]/50 to-[#0d1117]/90" />

        <motion.div
          className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 
          bg-[radial-gradient(circle,rgba(0,255,180,0.12)_0%,transparent_70%)] blur-3xl opacity-60"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <section className="relative z-10 text-center py-28 px-6">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4 
          bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent 
          drop-shadow-[0_0_25px_rgba(200,200,200,0.3)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t("about.title")}
        </motion.h1>

        <motion.p
          className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t("about.subtitle")}
        </motion.p>
      </section>

      <section className="relative z-10 flex flex-col items-center gap-10 px-6 pb-24 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.03 }}
          className="bg-[#121a24]/80 backdrop-blur-md border border-gray-800 
          hover:border-transparent hover:bg-[#141c26]/90 rounded-2xl p-8 md:p-10 text-center 
          shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_35px_rgba(180,180,180,0.25)] 
          transition-all duration-300 hover:bg-gradient-to-br hover:from-[#0f1620]/80 hover:to-[#12212f]/80"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-4">
            {t("about.company.title")}
          </h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {t("about.company.desc")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#121a24]/80 backdrop-blur-md border border-gray-800 
            hover:border-transparent hover:bg-[#141c26]/90 rounded-2xl p-8 
            shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(200,200,200,0.25)] 
            transition-all duration-300 hover:bg-gradient-to-br hover:from-[#0f1620]/80 hover:to-[#12212f]/80"
          >
            <h3 className="text-xl font-semibold text-gray-300 mb-3">
              {t("about.vision.title")}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {t("about.vision.desc")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#121a24]/80 backdrop-blur-md border border-gray-800 
            hover:border-transparent hover:bg-[#141c26]/90 rounded-2xl p-8 
            shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(200,200,200,0.25)] 
            transition-all duration-300 hover:bg-gradient-to-br hover:from-[#0f1620]/80 hover:to-[#12212f]/80"
          >
            <h3 className="text-xl font-semibold text-gray-300 mb-3">
              {t("about.mission.title")}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {t("about.mission.desc")}
            </p>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-300">
            {t("about.cta.title")}
          </h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            {t("about.cta.desc")}
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-gray-600 to-gray-400 
  hover:from-gray-500 hover:to-gray-300 text-white px-8 py-3 rounded-lg 
  font-semibold shadow-lg shadow-gray-900/30 hover:shadow-gray-700/40 transition-all duration-300"
          >
            {t("about.cta.button")}
          </a>
        </motion.div>
      </section>
    </motion.div>
  );
}




// import { motion } from "framer-motion";
// import { Helmet } from "react-helmet-async";
// import { useTranslation } from "react-i18next";
// import { useEffect } from "react";

// export default function About() {
//   const { t } = useTranslation();

//   // 🟢 Preload background image once (to avoid first-load delay)
//   useEffect(() => {
//     const img = new Image();
//     img.src = "/images/about/about.jpg";
//   }, []);

//   return (
//     <div className="relative min-h-[100dvh] flex flex-col text-white overflow-hidden">
//       <Helmet>
//         {/* <title>{t("about.title")} — AZ Hardware</title> */}
//         <meta name="description" content={t("about.subtitle")} />
//       </Helmet>

//       {/* 🖼️ ثابت + متحرک (بدون flicker) */}
//       <div className="absolute inset-0 -z-10">
//         {/* لایه ثابت زمینه */}
//         <div className="absolute inset-0 bg-[#0d1117]" />

//         {/* تصویر پس‌زمینه */}
//         {/* <img
//           src="/images/about/about.jpg"
//           alt="About Background"
//           className="absolute inset-0 w-full h-full object-cover opacity-70 scale-105"
//           fetchPriority="high"
//           loading="eager"
//         /> */}

//         {/* گرادیان پوشاننده */}
//         <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/60 via-[#0d1117]/50 to-[#0d1117]/90" />

//         {/* نور نرم متحرک */}
//         <motion.div
//           className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 
//           bg-[radial-gradient(circle,rgba(0,255,180,0.12)_0%,transparent_70%)] blur-3xl opacity-60"
//           animate={{ scale: [1, 1.15, 1] }}
//           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       {/* 🔹 Header */}
//       <section className="relative z-10 text-center py-28 px-6">
//         <motion.h1
//           className="text-4xl md:text-5xl font-extrabold mb-4 
//           bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent 
//           drop-shadow-[0_0_25px_rgba(200,200,200,0.3)]"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {t("about.title")}
//         </motion.h1>

//         <motion.p
//           className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base leading-relaxed"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//         >
//           {t("about.subtitle")}
//         </motion.p>
//       </section>

//       {/* 🔹 Main Content */}
//       <section className="relative z-10 flex flex-col items-center gap-10 px-6 pb-24 max-w-6xl mx-auto">
//         {/* Company Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           whileHover={{ scale: 1.03 }}
//           className="bg-[#121a24]/80 backdrop-blur-md border border-gray-800 
//           hover:border-transparent hover:bg-[#141c26]/90 rounded-2xl p-8 md:p-10 text-center 
//           shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:shadow-[0_0_35px_rgba(180,180,180,0.25)] 
//           transition-all duration-300 hover:bg-gradient-to-br hover:from-[#0f1620]/80 hover:to-[#12212f]/80"
//         >
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-300 mb-4">
//             {t("about.company.title")}
//           </h2>
//           <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
//             {t("about.company.desc")}
//           </p>
//         </motion.div>

//         {/* Vision + Mission */}
//         <div className="grid md:grid-cols-2 gap-8 w-full">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.2, duration: 0.8 }}
//             whileHover={{ scale: 1.05 }}
//             className="bg-[#121a24]/80 backdrop-blur-md border border-gray-800 
//             hover:border-transparent hover:bg-[#141c26]/90 rounded-2xl p-8 
//             shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(200,200,200,0.25)] 
//             transition-all duration-300 hover:bg-gradient-to-br hover:from-[#0f1620]/80 hover:to-[#12212f]/80"
//           >
//             <h3 className="text-xl font-semibold text-gray-300 mb-3">
//               {t("about.vision.title")}
//             </h3>
//             <p className="text-gray-300 leading-relaxed">
//               {t("about.vision.desc")}
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             whileHover={{ scale: 1.05 }}
//             className="bg-[#121a24]/80 backdrop-blur-md border border-gray-800 
//             hover:border-transparent hover:bg-[#141c26]/90 rounded-2xl p-8 
//             shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(200,200,200,0.25)] 
//             transition-all duration-300 hover:bg-gradient-to-br hover:from-[#0f1620]/80 hover:to-[#12212f]/80"
//           >
//             <h3 className="text-xl font-semibold text-gray-300 mb-3">
//               {t("about.mission.title")}
//             </h3>
//             <p className="text-gray-300 leading-relaxed">
//               {t("about.mission.desc")}
//             </p>
//           </motion.div>
//         </div>

//         {/* CTA */}
//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-300">
//             {t("about.cta.title")}
//           </h2>
//           <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
//             {t("about.cta.desc")}
//           </p>
//           <a
//             href="/contact"
//             className="inline-block bg-gradient-to-r from-gray-600 to-gray-400 
//   hover:from-gray-500 hover:to-gray-300 text-white px-8 py-3 rounded-lg 
//   font-semibold shadow-lg shadow-gray-900/30 hover:shadow-gray-700/40 transition-all duration-300"
//           >
//             {t("about.cta.button")}
//           </a>
//         </motion.div>
//       </section>
//     </div>
//   );
// }







