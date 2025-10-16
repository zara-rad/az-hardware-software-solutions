import { motion } from "framer-motion";
import { ArrowLeft, Network } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ اضافه شد

export default function NetworkSetup() {
  const { t } = useTranslation(); // ✅ فعال‌سازی ترجمه‌ها

  return (
    <div className="relative flex flex-col bg-[#0d1117] text-white overflow-hidden min-h-screen">
      {/* 🌌 Background gradient subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#101820] to-[#0d1117]" />

      {/* 🔹 Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center h-[40vh] min-h-[300px] px-6">
        <Network className="w-16 h-16 text-green-400 mb-4" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text"
        >
          {t("it.networkSetup.title")}
        </motion.h1>
        <p className="text-gray-400 max-w-2xl text-center">
          {t("it.networkSetup.subtitle")}
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
          className="md:w-1/2 w-full order-1 md:order-none"
        >
          <img
            src="/images/services/network.jpg"
            alt="Network Equipment"
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
          <p>{t("it.networkSetup.desc1")}</p>

          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>{t("it.networkSetup.point1")}</li>
            <li>{t("it.networkSetup.point2")}</li>
            <li>{t("it.networkSetup.point3")}</li>
          </ul>

          <div className="pt-6">
            <Link
              to="/services/it"
              className="inline-flex items-center gap-2 text-green-400 hover:text-cyan-400 transition-all"
            >
              <ArrowLeft className="w-5 h-5" /> {t("it.networkSetup.back")}
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}



// import { motion } from "framer-motion";
// import { ArrowLeft, Network } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function NetworkSetup() {
//   return (
//     <div className="relative flex flex-col bg-[#0d1117] text-white overflow-hidden min-h-screen">
//       {/* 🌌 Background gradient subtle */}
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#101820] to-[#0d1117]" />

//       {/* 🔹 Hero Section */}
//       <section className="relative z-10 flex flex-col items-center justify-center text-center h-[40vh] min-h-[300px] px-6">
//         <Network className="w-16 h-16 text-green-400 mb-4" />
//         <motion.h1
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text"
//         >
//           Network Setup & Security
//         </motion.h1>
//         <p className="text-gray-400 max-w-2xl">
//           Secure, reliable network design, VPN setup, and firewall management.
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
//           className="md:w-1/2 w-full order-1 md:order-none"
//         >
//           <img
//             src="/images/services/network.jpg"
//             alt="Network Equipment"
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
//             We design and maintain high-performance network infrastructures — from small offices 
//             to large-scale distributed systems — with security and stability as top priorities.
//           </p>

//           <ul className="list-disc list-inside space-y-2 text-gray-400">
//             <li>LAN/WAN setup and optimization</li>
//             <li>VPN, VLAN, and Wi-Fi configuration</li>
//             <li>Firewall & endpoint security management</li>
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



