import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  return (
    <header className="border-b border-gray-800 px-6 py-4 flex justify-between items-center bg-[#0d1117] text-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">AZ</span>
        <span className="text-sm text-gray-400">
          Hardware & Software Solutions
        </span>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-6 text-gray-300">
        <Link to="/" className="hover:text-white">
          Home
        </Link>
        <Link to="/about" className="hover:text-white">
          About
        </Link>
        <Link to="/services" className="hover:text-white">
          Services
        </Link>
        <Link to="/contact" className="hover:text-white">Contact</Link>


        <button
          onClick={() => setLang(lang === "EN" ? "DE" : "EN")}
          className="ml-4 px-3 py-1 border border-gray-600 rounded hover:bg-gray-800 transition"
        >
          {lang}
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-300 hover:text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar (Mobile) */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#161b22] flex flex-col text-gray-300 border-t border-gray-700 md:hidden">
          <a href="#" className="px-6 py-3 hover:bg-gray-800">
            Home
          </a>
          <a href="#" className="px-6 py-3 hover:bg-gray-800">
            Services
          </a>
          <a href="#" className="px-6 py-3 hover:bg-gray-800">
            Support
          </a>
          <a href="#" className="px-6 py-3 hover:bg-gray-800">
            About
          </a>
          <button
            onClick={() => setLang(lang === "EN" ? "DE" : "EN")}
            className="m-3 px-4 py-2 border border-gray-600 rounded hover:bg-gray-800 transition"
          >
            {lang}
          </button>
        </div>
      )}
    </header>
  );
}
