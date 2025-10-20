
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // تغییر جهت و زبان کل صفحه بدون آسیب به ساختار
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "fa" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className="bg-transparent text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* فقط جای صفحات */}
      </main>
      <Footer />
    </div>
  );
}


