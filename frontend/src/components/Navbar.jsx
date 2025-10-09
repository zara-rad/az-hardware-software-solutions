import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const linkClass = ({ isActive }) =>
    `relative transition-all duration-300 ${
      isActive
        ? "text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]"
        : "text-gray-300 hover:text-white"
    } hover:scale-[1.08]`;

  return (
    <header className="border-b border-gray-800 px-6 py-4 flex justify-between items-center bg-[#0d1117]/95 backdrop-blur-sm text-white fixed w-full z-50 shadow-[0_2px_15px_rgba(0,255,180,0.05)]">
      {/* ✅ Custom Logo */}
      <div className="flex items-center cursor-pointer select-none">
        <span className="text-3xl font-extrabold tracking-tight mr-2 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
          AZ
        </span>
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
          className="ml-4 px-3 py-1 border border-gray-600 rounded hover:bg-[#1a222d] hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
        >
          {lang}
        </button>
      </nav>

      {/* ✅ Mobile Menu Button */}
      <button
        className="md:hidden text-gray-300 hover:text-white transition"
        onClick={toggleMenu}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* ✅ Mobile Dropdown */}
      {menuOpen && (
        <div
          className="absolute top-16 left-0 w-full bg-[#161b22]/95 backdrop-blur-sm border-t border-gray-700 flex flex-col md:hidden z-50 text-gray-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] animate-fadeIn"
        >
          {["/", "/services", "/about", "/contact"].map((path, i) => {
            const labels = ["Home", "Services", "About", "Contact"];
            return (
              <NavLink
                key={path}
                to={path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `px-6 py-3 border-b border-gray-800 last:border-none transition-all duration-200 ${
                    isActive
                      ? "bg-[#1b2532] text-cyan-400"
                      : "hover:bg-[#1b2532]"
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
              setMenuOpen(false);
            }}
            className="m-4 px-4 py-2 border border-gray-600 rounded hover:bg-[#1a222d] hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
          >
            {lang}
          </button>
        </div>
      )}
    </header>
  );
}
