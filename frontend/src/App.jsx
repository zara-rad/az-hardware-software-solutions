import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0d1117] text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* فقط جای صفحات */}
      </main>
      <Footer />
    </div>
  );
}
