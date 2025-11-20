import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // ✅ اضافه شد

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { i18n, t } = useTranslation(); // ✅ i18n hook
  const [lang, setLang] = useState(i18n.language.toUpperCase() || "EN");
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLangMenu = () => setLangOpen(!langOpen);

  const linkClass = ({ isActive }) =>
    `relative transition-all duration-300 ${
      isActive
        ? "text-white after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-gray-200 drop-shadow-[0_0_25px_rgba(200,200,200,0.15)]"
        : "text-gray-300 hover:text-white"
    } hover:scale-[1.08]`;

  const handleLangChange = (newLang) => {
    setLang(newLang);
    setLangOpen(false);
    i18n.changeLanguage(newLang.toLowerCase());
    document.dir = newLang === "FA" ? "rtl" : "ltr";
  };

  useEffect(() => {
    document.dir = i18n.language === "fa" ? "rtl" : "ltr";
  }, [i18n.language]);

  const displayLang = (code) => {
    if (code === "FA") return "فارسی";
    if (code === "DE") return "Deutsch";
    return "English";
  };

  return (
    <header
      className={`border-b border-gray-800 px-6 py-4 flex justify-between items-center bg-[#0d1117]/95 backdrop-blur-sm text-white fixed w-full z-50 shadow-[0_0_25px_rgba(200,200,200,0.15)] ${
        i18n.language === "fa" ? "flex-row-reverse" : ""
      }`}
    >
      <div
        onClick={() => navigate("/")}
        className="flex items-center cursor-pointer select-none"
      >
        <img
          src="/images/logo/silver.png"
          alt="AZ Hardware & Software Solutions Logo"
          className="w-14 h-auto mr-3 drop-shadow-[0_0_25px_rgba(200,200,200,0.15)]"
        />
        <div className="flex flex-col leading-[0.9]">
          <span className="text-xl font-light tracking-[0.2em]">AQBITZ</span>
          <span className="text-[10px] text-gray-400 uppercase tracking-[0.35em]">
            IT & HARDWARE SOLUTIONS BY AZ
          </span>
        </div>
      </div>

      <nav className="hidden md:flex gap-8 text-gray-300 font-medium items-center">
        <NavLink to="/" className={linkClass}>
          {t("navbar.home")}
        </NavLink>
        <NavLink to="/services" className={linkClass}>
          {t("navbar.services")}
        </NavLink>
        <NavLink to="/shop" className={linkClass}>
          {t("navbar.shop")}
        </NavLink>

        <NavLink to="/about" className={linkClass}>
          {t("navbar.about")}
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          {t("navbar.contact")}
        </NavLink>

        <div className="relative">
          <button
            onClick={toggleLangMenu}
            className="flex items-center gap-1 px-3 py-1 border border-gray-600 rounded hover:bg-[#1a222d] hover:border-gray-400 hover:text-gray-200 transition-all duration-300"
          >
            {displayLang(lang)} <ChevronDown size={16} />
          </button>

          {langOpen && (
            <div className="absolute right-0 mt-2 bg-[#1a1f25] border border-gray-700 rounded-lg shadow-lg w-28 text-sm z-50">
              {["EN", "DE", "FA"].map((l) => (
                <button
                  key={l}
                  onClick={() => handleLangChange(l)}
                  className={`block w-full text-left px-4 py-2 hover:bg-[#1e2935] transition-colors ${
                    lang === l ? "text-gray-400" : "text-gray-300"
                  }`}
                >
                  {displayLang(l)}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      <button
        className="md:hidden text-gray-300 hover:text-white transition"
        onClick={toggleMenu}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#161b22]/95 backdrop-blur-sm border-t border-gray-700 flex flex-col md:hidden z-50 text-gray-300 shadow-[0_0_25px_rgba(200,200,200,0.15)] animate-fadeIn">
          {[
            { path: "/", label: t("navbar.home") },
            { path: "/services", label: t("navbar.services") },
            { path: "/shop", label: t("navbar.shop") },
            { path: "/about", label: t("navbar.about") },
            { path: "/contact", label: t("navbar.contact") },
          ].map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-6 py-3 border-b border-gray-800 last:border-none transition-all duration-200 ${
                  isActive ? "bg-[#1b2532] text-gray-100" : "hover:bg-[#1b2532]"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <div className="m-4 border border-gray-700 rounded-lg overflow-hidden">
            {["EN", "DE", "FA"].map((l) => (
              <button
                key={l}
                onClick={() => {
                  handleLangChange(l);
                  setMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 hover:bg-[#1e2935] transition-colors ${
                  lang === l ? "text-gray-400" : "text-gray-300"
                }`}
              >
                {displayLang(l)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
