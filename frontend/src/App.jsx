import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "fa" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    // 🟩 لایه اصلی با رنگ ثابت در پس‌زمینه (جلوگیری از سفید شدن)
    <div className="relative min-h-screen flex flex-col text-white bg-[#0d1117] overflow-hidden">
      {/* 🔹 بک‌گراند ثابت گرادیانی (نرم و یکدست) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0d1117] via-[#0f1620] to-[#0d1117]" />

      <Navbar />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="min-h-[calc(100vh-180px)]"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}




// import { useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import { Outlet } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// export default function App() {
//   const { i18n } = useTranslation();

//   useEffect(() => {
//     // تغییر جهت و زبان کل صفحه بدون آسیب به ساختار
//     document.documentElement.lang = i18n.language;
//     document.documentElement.dir = i18n.language === "fa" ? "rtl" : "ltr";
//   }, [i18n.language]);

//   return (
//     <div className="bg-transparent text-white min-h-screen flex flex-col">
//       <Navbar />
//       <main className="flex-grow">
//         <Outlet /> {/* فقط جای صفحات */}
//       </main>
//       <Footer />
//     </div>
//   );
// }


