import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLangMenu = () => setLangOpen(!langOpen);

  const linkClass = ({ isActive }) =>
    `relative transition-all duration-300 ${
      isActive
        ? "text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]"
        : "text-gray-300 hover:text-white"
    } hover:scale-[1.08]`;

  const handleLangChange = (newLang) => {
    setLang(newLang);
    setLangOpen(false);
  };

  return (
    <header className="border-b border-gray-800 px-6 py-4 flex justify-between items-center bg-[#0d1117]/95 backdrop-blur-sm text-white fixed w-full z-50 shadow-[0_2px_15px_rgba(0,255,180,0.05)]">
      {/* ✅ لوگو */}
      <div
        onClick={() => navigate("/")}
        className="flex items-center cursor-pointer select-none"
      >
        <img
          src="/images/logo/logo.png"
          alt="AZ Hardware & Software Solutions Logo"
          className="w-12 h-auto mr-3 drop-shadow-[0_0_8px_rgba(0,255,180,0.25)]"
        />
        <div className="flex flex-col leading-[0.9]">
          <span className="text-xl font-light tracking-[0.2em]">
            AZ HARDWARE
          </span>
          <span className="text-[10px] text-gray-400 uppercase tracking-[0.35em]">
            FORYX ENGINE COMPONENTS
          </span>
        </div>
      </div>

      {/* ✅ منوی دسکتاپ */}
      <nav className="hidden md:flex gap-8 text-gray-300 font-medium items-center">
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

        {/* 🌐 زیرمنوی زبان */}
        <div className="relative">
          <button
            onClick={toggleLangMenu}
            className="flex items-center gap-1 px-3 py-1 border border-gray-600 rounded hover:bg-[#1a222d] hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
          >
            {lang} <ChevronDown size={16} />
          </button>

          {langOpen && (
            <div className="absolute right-0 mt-2 bg-[#1a1f25] border border-gray-700 rounded-lg shadow-lg w-28 text-sm z-50">
              {["EN", "DE", "FA"].map((l) => (
                <button
                  key={l}
                  onClick={() => handleLangChange(l)}
                  className={`block w-full text-left px-4 py-2 hover:bg-[#1e2935] transition-colors ${
                    lang === l ? "text-cyan-400" : "text-gray-300"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ✅ منوی موبایل */}
      <button
        className="md:hidden text-gray-300 hover:text-white transition"
        onClick={toggleMenu}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* ✅ Dropdown موبایل */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#161b22]/95 backdrop-blur-sm border-t border-gray-700 flex flex-col md:hidden z-50 text-gray-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)] animate-fadeIn">
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

          {/* 🌐 منوی زبان در موبایل */}
          <div className="m-4 border border-gray-700 rounded-lg overflow-hidden">
            {["EN", "DE", "FA"].map((l) => (
              <button
                key={l}
                onClick={() => {
                  handleLangChange(l);
                  setMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 hover:bg-[#1e2935] transition-colors ${
                  lang === l ? "text-cyan-400" : "text-gray-300"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
