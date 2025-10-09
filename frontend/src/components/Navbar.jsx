import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const linkClass = ({ isActive }) =>
    `relative hover:text-white transition duration-200 ${
      isActive
        ? "text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-cyan-400"
        : "text-gray-300"
    } hover:scale-[1.08]`;

  return (
    <header className="border-b border-gray-800 px-6 py-4 flex justify-between items-center bg-[#0d1117] text-white fixed w-full z-50 shadow-lg">
      {/* ✅ Custom Logo */}
      <div className="flex items-center">
        <span className="text-3xl font-extrabold tracking-tight mr-2">AZ</span>
        <div className="flex flex-col leading-[0.9]">
          <span className="text-xl font-light tracking-[0.2em]">
            HARDWARE
          </span>
          <span className="text-[10px] text-gray-400 uppercase tracking-[0.35em]">
            FORYX ENGINE COMPONENTS
          </span>
        </div>
      </div>

      {/* ✅ Desktop Menu */}
      <nav className="hidden md:flex gap-8 text-gray-300 font-medium">
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/services" className={linkClass}>
          Services
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          Contact
        </NavLink>

        <button
          onClick={() => setLang(lang === "EN" ? "DE" : "EN")}
          className="ml-4 px-3 py-1 border border-gray-600 rounded hover:bg-gray-800 transition"
        >
          {lang}
        </button>
      </nav>

      {/* ✅ Mobile Menu Button */}
      <button
        className="md:hidden text-gray-300 hover:text-white"
        onClick={toggleMenu}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* ✅ Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#161b22] border-t border-gray-700 flex flex-col md:hidden z-50 text-gray-300">
          {["/", "/services", "/about", "/contact"].map((path, i) => {
            const labels = ["Home", "Services", "About", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `px-6 py-3 hover:bg-gray-800 transition ${
                    isActive ? "bg-gray-800 text-white" : ""
                  }`
                }
              >
                {labels[i]}
              </NavLink>
            );
          })}

          <button
            onClick={() => {
              setLang(lang === "EN" ? "DE" : "EN");
              toggleMenu();
            }}
            className="m-3 px-4 py-2 border border-gray-600 rounded hover:bg-gray-800 transition"
          >
            {lang}
          </button>
        </div>
      )}
    </header>
  );
}
