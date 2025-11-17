
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const { i18n } = useTranslation();
  const location = useLocation();

  // 🔧 آپدیت زبان و جهت صفحه
  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "fa" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="relative min-h-screen flex flex-col text-white bg-[#0d1117] overflow-hidden">

      {/* 🔹 گرادیان ثابت پس‌زمینه سایت */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0d1117] via-[#0f1620] to-[#0d1117]" />

      {/* 🔹 ناوبار ثابت */}
      <Navbar />

      {/* 🔹 محتوای صفحات */}
      <main className="flex-grow">
        <AnimatePresence mode="wait" initial={false}>
          {/* فقط Outlet باید انیمیشن صفحه بخورد */}
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>

      {/* 🔹 فوتر ثابت */}
      <Footer />
    </div>
  );
}



//moshkele load shodan bala

// import { useEffect } from "react";
// import { useTranslation } from "react-i18next";
// import { Outlet, useLocation } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// export default function App() {
//   const { i18n } = useTranslation();
//   const location = useLocation();

//   useEffect(() => {
//     document.documentElement.lang = i18n.language;
//     document.documentElement.dir = i18n.language === "fa" ? "rtl" : "ltr";
//   }, [i18n.language]);

//   return (
//     // 🟩 لایه اصلی با رنگ ثابت در پس‌زمینه (جلوگیری از سفید شدن)
//     <div className="relative min-h-screen flex flex-col text-white bg-[#0d1117] overflow-hidden">
//       {/* 🔹 بک‌گراند ثابت گرادیانی (نرم و یکدست) */}
//       <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0d1117] via-[#0f1620] to-[#0d1117]" />

//       <Navbar />

//       <main className="flex-grow">
        
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={location.pathname}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.35, ease: "easeInOut" }}
//             className="min-h-[calc(100vh-180px)]"
//           >
//             <Outlet />
//           </motion.div>
//         </AnimatePresence>
//       </main>

//       <Footer />
//     </div>
//   );
// }




