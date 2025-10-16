import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ اضافه شد

export default function ITSupport() {
  const { t } = useTranslation(); // ✅ برای ترجمه‌ها

  return (
    <div className="relative flex flex-col bg-[#0d1117] text-white overflow-hidden min-h-screen">
      {/* 🌌 Background gradient subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#101820] to-[#0d1117]" />

      {/* 🔹 Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center h-[40vh] min-h-[300px] px-6">
        <ShieldCheck className="w-16 h-16 text-green-400 mb-4" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text"
        >
          {t("it.itSupport.title")}
        </motion.h1>
        <p className="text-gray-400 max-w-2xl">
          {t("it.itSupport.subtitle")}
        </p>
      </section>

      {/* 🔹 Content Section */}
      <main className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 gap-10">
        {/* 🖼️ Image (left side) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full"
        >
          <img
            src="/images/services/itsupport.jpg"
            alt="IT Support Team"
            className="rounded-2xl shadow-[0_0_30px_rgba(0,255,180,0.1)] object-cover w-full h-[350px] md:h-[420px]"
          />
        </motion.div>

        {/* 📝 Text (right side) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full text-gray-300 leading-relaxed space-y-4"
        >
          <p>{t("it.itSupport.desc1")}</p>

          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>{t("it.itSupport.point1")}</li>
            <li>{t("it.itSupport.point2")}</li>
            <li>{t("it.itSupport.point3")}</li>
          </ul>

          <div className="pt-6">
            <Link
              to="/services/it"
              className="inline-flex items-center gap-2 text-green-400 hover:text-cyan-400 transition-all"
            >
              <ArrowLeft className="w-5 h-5" /> {t("it.itSupport.back")}
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}



// import { motion } from "framer-motion";
// import { ArrowLeft, ShieldCheck } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function ITSupport() {
//   return (
//     <div className="relative flex flex-col bg-[#0d1117] text-white overflow-hidden min-h-screen">
//       {/* 🌌 Background gradient subtle */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#101820] to-[#0d1117]" />

//       {/* 🔹 Hero Section */}
//       <section className="relative z-10 flex flex-col items-center justify-center text-center h-[40vh] min-h-[300px] px-6">
//         <ShieldCheck className="w-16 h-16 text-green-400 mb-4" />
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text"
//         >
//           IT Support & Maintenance
//         </motion.h1>
//         <p className="text-gray-400 max-w-2xl">
//           Professional on-site or remote IT support for your daily operations.
//         </p>
//       </section>

//       {/* 🔹 Content Section with Image + Text (image left) */}
//       <main className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 gap-10">
//         {/* 🖼️ Image (left side) */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="md:w-1/2 w-full"
//         >
//           <img
//             src="/images/services/itsupport.jpg"
//             alt="IT Support Team"
//             className="rounded-2xl shadow-[0_0_30px_rgba(0,255,180,0.1)] object-cover w-full h-[350px] md:h-[420px]"
//           />
//         </motion.div>

//         {/* 📝 Text (right side) */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="md:w-1/2 w-full text-gray-300 leading-relaxed space-y-4"
//         >
//           <p>
//             We offer flexible, efficient IT support plans — both remote and on-site — 
//             to keep your systems running smoothly and prevent costly downtime.
//           </p>

//           <ul className="list-disc list-inside space-y-2 text-gray-400">
//             <li>Remote troubleshooting and helpdesk</li>
//             <li>On-site maintenance and repairs</li>
//             <li>Monitoring and proactive performance tuning</li>
//           </ul>

//           <div className="pt-6">
//             <Link
//               to="/services/it"
//               className="inline-flex items-center gap-2 text-green-400 hover:text-cyan-400 transition-all"
//             >
//               <ArrowLeft className="w-5 h-5" /> Back to IT Services
//             </Link>
//           </div>
//         </motion.div>
//       </main>
//     </div>
//   );
// }




