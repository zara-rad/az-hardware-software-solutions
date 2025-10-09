import Hero from "../components/Hero";
import Services from "./Services";
import OverviewLinks from "../components/OverviewLinks";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#0d1117] text-white overflow-hidden">
      {/* 🔹 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1117] via-[#102030] to-[#0d1117] overflow-hidden">
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
      </div>

      {/* 🔹 Content */}
      <main className="relative z-10 flex-grow">
        <Hero />
        <Services />
        <OverviewLinks />
      </main>
    </div>
  );
}
