import { motion } from "framer-motion";
import { Cog, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Maintenance() {
  return (
    <div className="relative flex flex-col bg-[#0d1117] text-white overflow-hidden min-h-screen">
      {/* 🌌 Background gradient subtle */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#101820] to-[#0d1117]" />

      {/* 🔹 Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center h-[40vh] min-h-[300px] px-6">
        <Cog className="w-16 h-16 text-green-400 mb-4" />
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text"
        >
          Maintenance & Support
        </motion.h1>
        <p className="text-gray-400 max-w-2xl text-center">
          Keep your systems running at peak performance with ongoing technical support.
        </p>
      </section>

      {/* 🔹 Content Section (Text left + Image right) */}
      <main className="relative z-10 flex flex-col md:flex-row-reverse items-center justify-between max-w-6xl mx-auto px-6 py-16 gap-10">
        {/* 🖼️ Image (right side) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full"
        >
          <img
            src="/images/services/support.jpg" // 📷 تصویر مخصوص Maintenance
            alt="System Maintenance"
            className="rounded-2xl shadow-[0_0_30px_rgba(0,255,180,0.1)] object-cover w-full h-[350px] md:h-[420px]"
          />
        </motion.div>

        {/* 📝 Text (left side) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full text-gray-300 leading-relaxed space-y-4"
        >
          <p>
            Preventive maintenance and on-demand support to minimize downtime.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>Hardware diagnostics & upgrades</li>
            <li>Remote troubleshooting and repairs</li>
            <li>Regular performance audits and cleaning</li>
          </ul>

          <div className="pt-6">
            <Link
              to="/services/hardware"
              className="inline-flex items-center gap-2 text-green-400 hover:text-cyan-400 transition-all"
            >
              <ArrowLeft className="w-5 h-5" /> Back to Hardware Solutions
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}



// import { motion } from "framer-motion";
// import { Cog, ArrowLeft } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Maintenance() {
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
//         <Cog className="w-16 h-16 text-green-400 mb-4" />
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]"
//         >
//           Maintenance & Support
//         </motion.h1>
//         <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
//           Keep your systems running at peak performance with ongoing technical support.
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
//           Preventive maintenance and on-demand support to minimize downtime.
//         </p>
//         <ul className="list-disc list-inside space-y-2">
//           <li>Hardware diagnostics & upgrades</li>
//           <li>Remote troubleshooting and repairs</li>
//           <li>Regular performance audits and cleaning</li>
//         </ul>
//       </main>
//     </div>
//   );
// }
