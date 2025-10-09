import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-[#0d1117] via-[#101a25] to-[#0d1117] text-white overflow-hidden">
      {/* 🔹 Background Light Animation */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.07)_0%,transparent_70%)] blur-3xl"
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <Navbar />

      <main className="relative flex-grow py-24 px-6 max-w-4xl mx-auto z-10">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(0,255,180,0.3)]"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Privacy Policy
        </motion.h1>

        <motion.section
          className="space-y-10 text-gray-300 leading-relaxed backdrop-blur-sm bg-[#161b22]/60 border border-gray-800 rounded-2xl p-8 shadow-[0_0_25px_rgba(0,0,0,0.4)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          {[
            {
              title: "1. General Information",
              text: `We take the protection of your personal data very seriously. This privacy policy explains what data we collect, how we use it, and your rights regarding your personal data when visiting our website.`,
            },
            {
              title: "2. Data Controller",
              text: `AZ Hardware & Software Solutions  
Owner: Zahra Rafieirad  
Address: Musterstraße 12, 10115 Berlin, Germany  
Email: info@az-hardware.de`,
            },
            {
              title: "3. Collection and Use of Personal Data",
              text: `We only collect personal data that you voluntarily provide to us, for example, through the contact form or by email. The data will be used exclusively for the purpose of processing your request and will not be shared with third parties without your consent.`,
            },
            {
              title: "4. Server Log Files",
              text: `When visiting our website, your browser automatically transmits certain information (such as IP address, browser type, date, and time of access). This data is stored for technical reasons only and is not linked to any personal identity.`,
            },
            {
              title: "5. Cookies",
              text: `Our website may use cookies to improve user experience and functionality. You can configure your browser to block cookies or notify you when cookies are used. However, some parts of the website may not function properly without cookies.`,
            },
            {
              title: "6. Data Retention",
              text: `We retain personal data only for as long as necessary to fulfill the purposes described in this policy or as required by law.`,
            },
            {
              title: "7. Your Rights",
              text: `You have the right to access, correct, or delete your personal data. You may also object to data processing or request the restriction of processing. To exercise these rights, please contact us at info@az-hardware.de.`,
            },
            {
              title: "8. Changes to This Policy",
              text: `We may update this privacy policy from time to time to reflect changes in legal requirements or improvements to our services. The latest version will always be available on this website.`,
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2 text-green-400">
                {item.title}
              </h3>
              <p className="whitespace-pre-line text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </motion.section>
      </main>

      
    </div>
  );
}
