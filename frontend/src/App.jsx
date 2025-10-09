import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d1117] text-white">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-4xl font-bold text-center text-white">
          Welcome to AZ Hardware & Software Solutions
        </h1>
      </main>
      <Footer />
    </div>
  );
}
