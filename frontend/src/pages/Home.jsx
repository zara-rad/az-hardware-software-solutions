import { lazy, Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";

const Services = lazy(() => import("./Services"));
const OverviewLinks = lazy(() => import("../components/OverviewLinks"));

export default function Home() {
  useEffect(() => {
    // ✅ پیش‌لود سرویس‌ها برای جلوگیری از تاخیر یا عدم لود
    import("./Services");
    import("../components/OverviewLinks");
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-[#0d1117] text-white overflow-hidden">
      <Helmet>
        <title>AZ Hardware — IT & Web Solutions in Berlin</title>
        <meta
          name="description"
          content="Professional IT services, web and software development, and hardware solutions in Berlin. Reliable, fast, and tailored to your business needs."
        />
      </Helmet>

      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#102030] to-[#0d1117] overflow-hidden">
        <motion.div
          className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(0,255,180,0.1)_0%,transparent_70%)]"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <main className="relative z-10 flex-grow">
        <Hero />
        <Suspense
          fallback={
            <div className="py-24 text-center text-gray-500 animate-pulse">
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
