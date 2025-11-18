import { motion } from "framer-motion";
import { CloudCog, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CloudBackup() {
  const { t } = useTranslation();

  return (
    <motion.div
      key="it-cloud-backup"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="relative flex flex-col bg-[#0d1117] text-white overflow-hidden min-h-screen"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#101820] to-[#0d1117]" />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center h-[40vh] min-h-[300px] px-6">
        <CloudCog className="w-16 h-16 text-gray-400 mb-4" />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text"
        >
          {t("it.cloudBackup.title")}
        </motion.h1>

        <p className="text-gray-400 max-w-2xl text-center">
          {t("it.cloudBackup.subtitle")}
        </p>
      </section>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 gap-10">

       

        {/* Text left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full text-gray-300 leading-relaxed space-y-4"
        >
          <p>{t("it.cloudBackup.desc1")}</p>

          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>{t("it.cloudBackup.point1")}</li>
            <li>{t("it.cloudBackup.point2")}</li>
            <li>{t("it.cloudBackup.point3")}</li>
          </ul>

          <div className="pt-6">
            <Link
              to="/services/it"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-400 transition-all"
            >
              <ArrowLeft className="w-5 h-5" /> {t("it.cloudBackup.back")}
            </Link>
          </div>
          
        </motion.div>
 {/* Image right*/}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full order-1 md:order-none"
        >
          <img
            src="/images/services/cloud.jpg"
            alt="Cloud & Backup"
            className="rounded-2xl shadow-[0_0_25px_rgba(200,200,200,0.15)] object-cover w-full h-[350px] md:h-[420px]"
          />
        </motion.div>
      </main>
        {/* CTA */}
      <motion.div
        className="relative z-10 text-center pb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-400">
          {t("it.cloudBackup.ctaTitle")}
        </h2>
        <p className="text-gray-400 mb-6">{t("it.cloudBackup.ctaDesc")}</p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-gray-500 to-gray-500 hover:from-gray-400 hover:to-gray-400 text-white px-8 py-3 rounded-lg font-semibold shadow-lg shadow-gray-900/30 hover:shadow-gray-700/40 transition-all"
        >
          {t("it.cloudBackup.ctaButton")}
        </a>
      </motion.div>
    </motion.div>
  );
}





// import { motion } from "framer-motion";
// import { CloudCog, ArrowLeft } from "lucide-react";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// export default function CloudBackup() {
//   const { t } = useTranslation();

//   return (
//     <div className="relative flex flex-col bg-[#0d1117] text-white overflow-hidden min-h-screen">
      
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#101820] to-[#0d1117]" />

//       {/* Hero Section */}
//       <section className="relative z-10 flex flex-col items-center justify-center text-center h-[40vh] min-h-[300px] px-6">
//         <CloudCog className="w-16 h-16 text-gray-400 mb-4" />

//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-gray-200 to-gray-400 text-transparent bg-clip-text"
//         >
//           {t("it.cloudBackup.title")}
//         </motion.h1>

//         <p className="text-gray-400 max-w-2xl text-center">
//           {t("it.cloudBackup.subtitle")}
//         </p>
//       </section>

//       {/* Main Content */}
//       <main className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 gap-10">

//         {/* Image Left */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="md:w-1/2 w-full order-1 md:order-none"
//         >
//           <img
//             src="/images/services/cloud.jpg"
//             alt="Cloud & Backup"
//             className="rounded-2xl shadow-[0_0_25px_rgba(200,200,200,0.15)] object-cover w-full h-[350px] md:h-[420px]"
//           />
//         </motion.div>

//         {/* Text Right */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="md:w-1/2 w-full text-gray-300 leading-relaxed space-y-4"
//         >
//           <p>{t("it.cloudBackup.desc1")}</p>

//           <ul className="list-disc list-inside space-y-2 text-gray-400">
//             <li>{t("it.cloudBackup.point1")}</li>
//             <li>{t("it.cloudBackup.point2")}</li>
//             <li>{t("it.cloudBackup.point3")}</li>
//           </ul>

//           <div className="pt-6">
//             <Link
//               to="/services/it"
//               className="inline-flex items-center gap-2 text-gray-400 hover:text-gray-400 transition-all"
//             >
//               <ArrowLeft className="w-5 h-5" /> {t("it.cloudBackup.back")}
//             </Link>
//           </div>
//         </motion.div>

//       </main>
//     </div>
//   );
// }
