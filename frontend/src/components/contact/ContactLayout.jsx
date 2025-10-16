import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ContactLayout() {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col min-h-screen min-h-[100dvh] overflow-hidden bg-gradient-to-b from-[#0d1117] via-[#101a25] to-[#0d1117] text-white pt-24 px-4 sm:px-6 md:px-8 lg:px-10 pb-20">
      {/* 🌌 پس‌زمینه متحرک */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.07)_0%,transparent_70%)] blur-3xl"
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <main className="relative max-w-6xl mx-auto w-full z-10 flex-grow space-y-10">
        {/* ===== Title ===== */}
        <motion.div
          className="text-center mb-10 px-2 sm:px-0"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(0,255,180,0.3)]">
            {t("contact.layout.title")}
          </h1>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            {t("contact.layout.subtitle")}
          </p>
        </motion.div>

        {/* ===== Grid Layout ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-stretch">
          <ContactForm />
          <ContactInfo />
        </div>
      </main>
    </div>
  );
}


// import ContactForm from "./ContactForm";
// import ContactInfo from "./ContactInfo";
// import { motion } from "framer-motion";

// export default function ContactLayout() {
//   return (
//     <div className="relative flex flex-col min-h-screen min-h-[100dvh] overflow-hidden bg-gradient-to-b from-[#0d1117] via-[#101a25] to-[#0d1117] text-white pt-24 px-4 sm:px-6 md:px-8 lg:px-10 pb-20">
//       {/* 🌌 پس‌زمینه متحرک */}
//       <motion.div
//         className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.07)_0%,transparent_70%)] blur-3xl"
//         animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <main className="relative max-w-6xl mx-auto w-full z-10 flex-grow space-y-10">
//         {/* ===== Title ===== */}
//         <motion.div
//           className="text-center mb-10 px-2 sm:px-0"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(0,255,180,0.3)]">
//             Request a Quote
//           </h1>
//           <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
//             Tell us what you need — we’ll get back to you with a custom offer.
//           </p>
//         </motion.div>

//         {/* ===== Grid Layout ===== */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-stretch">
//           <ContactForm />
//           <ContactInfo />
//         </div>
//       </main>
//     </div>
//   );
// }
