import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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
    <div className="relative min-h-screen flex flex-col text-white bg-[#0d1117] overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0d1117] via-[#0f1620] to-[#0d1117]" />

      <Navbar />

      <a
        href="https://wa.me/4917636385183"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white 
          w-14 h-14 rounded-full flex items-center justify-center shadow-lg z-50"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>

      {/* 🔹 content */}
      <main className="flex-grow">
        <AnimatePresence mode="wait" initial={false}>
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
