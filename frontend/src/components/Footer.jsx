import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleSmoothNavigation = (path) => {
    if (location.pathname === path) scrollToTop();
    else {
      navigate(path);
      setTimeout(scrollToTop, 400);
    }
  };

  const links = [
    { label: t("footer.home"), path: "/" },
    { label: t("footer.services"), path: "/services" },
    { label: t("footer.shop"), path: "/shop" }, // 🟩 اضافه شد
    { label: t("footer.about"), path: "/about" },
    { label: t("footer.contact"), path: "/contact" },
    { label: t("footer.privacy"), path: "/datenschutz" },
    { label: t("footer.legal"), path: "/impressum" },
  ];

  return (
    <footer className="bg-[#0d1117] border-t border-gray-800 py-6 text-center text-gray-400 shadow-[0_-4px_15px_rgba(0,0,0,0.3)]">
      {/* 🔹 Navigation Links */}
      <nav className="flex flex-wrap justify-center gap-8 mb-4 text-sm md:text-base font-medium">
        {links.map((item) => (
          <span
            key={item.path}
            onClick={() => handleSmoothNavigation(item.path)}
            className="hover:text-white cursor-pointer hover:scale-[1.05] transition-all duration-200 relative after:content-[''] after:absolute after:left-0 after:-bottom-[3px] after:w-0 after:h-[2px] after:bg-gray-400 hover:after:w-full after:transition-all after:duration-300"
          >
            {item.label}
          </span>
        ))}
      </nav>

      {/* 🔹 Copyright */}
      <p className="text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-white font-semibold">
          AZ Hardware & Software Solutions
        </span>{" "}
        — {t("footer.location")}
      </p>
    </footer>
  );
}
