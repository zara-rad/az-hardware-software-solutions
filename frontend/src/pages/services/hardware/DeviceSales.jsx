import { motion } from "framer-motion";
import { Truck, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ اضافه شد

export default function DeviceSales() {
  const { t } = useTranslation(); // ✅ فعال‌سازی ترجمه‌ها

  return (
    <div className="relative flex flex-col bg-[#0d1117] text-white overflow-hidden min-h-screen">
      {/* 🌌 Background gradient subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#101820] to-[#0d1117]" />

      {/* 🔹 Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center h-[40vh] min-h-[300px] px-6">
        <Truck className="w-16 h-16 text-green-400 mb-4" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text"
        >
          {t("hardware.deviceSales.title")}
        </motion.h1>
        <p className="text-gray-400 max-w-2xl text-center">
          {t("hardware.deviceSales.subtitle")}
        </p>
      </section>

      {/* 🔹 Content Section */}
      <main className="relative z-10 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-16 gap-10">
        {/* 🖼️ Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full"
        >
          <img
            src="/images/services/bgsale.jpg"
            alt="Device Sales - Hardware Products"
            className="rounded-2xl shadow-[0_0_30px_rgba(0,255,180,0.1)] object-cover w-full h-[350px] md:h-[420px]"
          />
        </motion.div>

        {/* 📝 Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full text-gray-300 leading-relaxed space-y-4"
        >
          <p>{t("hardware.deviceSales.desc1")}</p>

          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>{t("hardware.deviceSales.point1")}</li>
            <li>{t("hardware.deviceSales.point2")}</li>
            <li>{t("hardware.deviceSales.point3")}</li>
          </ul>

          <div className="pt-6">
            <Link
              to="/services/hardware"
              className="inline-flex items-center gap-2 text-green-400 hover:text-cyan-400 transition-all"
            >
              <ArrowLeft className="w-5 h-5" /> {t("hardware.deviceSales.back")}
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}



// import { motion } from "framer-motion";
// import { Truck, ArrowLeft } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function DeviceSales() {
//   return (
//     <div className="relative flex flex-col bg-[#0d1117] text-white overflow-hidden min-h-screen">
//       <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#102030] to-[#0d1117] overflow-hidden">
//         <motion.div
//           className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.1)_0%,transparent_70%)]"
//           animate={{ rotate: [0, 360] }}
//           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//         />
//       </div>

//       <section className="relative z-10 flex flex-col items-center justify-center text-center h-[45vh] min-h-[320px] px-6">
//         <Truck className="w-16 h-16 text-green-400 mb-4" />
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]"
//         >
//           Device Sales
//         </motion.h1>
//         <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
//           High-performance laptops, PCs, and IT components for business and home use.
//         </p>
//       </section>

//       <div className="relative z-10 max-w-6xl mx-auto px-6 mb-8">
//         <Link
//           to="/services/hardware"
//           className="inline-flex items-center gap-2 text-green-400 hover:text-cyan-400 transition-all"
//         >
//           <ArrowLeft className="w-5 h-5" /> Back to Hardware Solutions
//         </Link>
//       </div>

//       <main className="relative z-10 flex-grow max-w-6xl mx-auto px-6 pb-10 text-gray-300 leading-relaxed space-y-4">
//         <p>
//           We source, configure, and deliver reliable hardware suited to your exact needs.
//         </p>
//         <ul className="list-disc list-inside space-y-2">
//           <li>Business laptops & desktops (Lenovo, Dell, HP, etc.)</li>
//           <li>Custom-built PCs for developers and designers</li>
//           <li>Bulk orders and B2B pricing options</li>
//         </ul>
//       </main>
//     </div>
//   );
// }
