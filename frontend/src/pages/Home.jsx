import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";

// 🔹 Lazy imports — فقط وقتی لازم شد لود می‌شن
const Services = lazy(() => import("./Services"));
const OverviewLinks = lazy(() => import("../components/OverviewLinks"));

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ تشخیص موبایل برای غیرفعال‌سازی انیمیشن‌های سنگین
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#0d1117] text-white overflow-hidden">
      <Helmet>
        <title>AZ Hardware — IT & Web Solutions in Berlin</title>
        <meta
          name="description"
          content="Professional IT services, web and software development, and hardware solutions in Berlin. Reliable, fast, and tailored to your business needs."
        />
        <meta
          name="keywords"
          content="IT services, web development, hardware solutions, Berlin, system administration, AZ Hardware"
        />
        <meta name="author" content="AZ Hardware" />
        <link rel="canonical" href="https://www.az-hardware.de/" />

        {/* ⚡ Prefetch برای بهبود LCP */}
        <link rel="prefetch" href="/src/pages/Services.jsx" as="script" />
        <link rel="prefetch" href="/src/components/OverviewLinks.jsx" as="script" />
      </Helmet>

      {/* 🔹 Animated Background (غیرفعال در موبایل برای عملکرد بهتر) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#102030] to-[#0d1117] overflow-hidden">
        {!isMobile && (
          <>
            <motion.div
              className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.1)_0%,transparent_70%)]"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,200,255,0.08)_0%,transparent_70%)]"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
      </div>

      {/* 🔹 Main Content */}
      <main className="relative z-10 flex-grow">
        <Hero />

        {/* ✅ Lazy Load Sections */}
        <Suspense
          fallback={
            <div className="text-center text-gray-400 py-10 animate-pulse">
              Loading services...
            </div>
          }
        >
          <Services />
          <OverviewLinks />
        </Suspense>
      </main>
    </div>
  );
}
