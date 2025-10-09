import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import Services from "./components/Services";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d1117] text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
         <Services/>
      </main>
      <Footer />
    </div>
  );
}
