import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import { useEffect } from "react";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSmoothNavigation = (path) => {
    if (location.pathname === path) {
      scrollToTop();
    } else {
      navigate(path);
      // بعد از رفتن به صفحه‌ی جدید، نرم بالا بره
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 400);
    }
  };

  return (
    <footer className="bg-[#0d1117] border-t border-gray-800 py-6 text-center text-gray-400">
      <nav className="flex justify-center gap-6 mb-4">
        <span
          onClick={() => handleSmoothNavigation("/")}
          className="hover:text-white cursor-pointer"
        >
          Home
        </span>
        <span
          onClick={() => handleSmoothNavigation("/about")}
          className="hover:text-white cursor-pointer"
        >
          About
        </span>
        <span
          onClick={() => handleSmoothNavigation("/contact")}
          className="hover:text-white cursor-pointer"
        >
          Contact
        </span>
        <span
          onClick={() => handleSmoothNavigation("/datenschutz")}
          className="hover:text-white cursor-pointer"
        >
          Privacy Policy
        </span>
        <span
          onClick={() => handleSmoothNavigation("/impressum")}
          className="hover:text-white cursor-pointer"
        >
          Legal Notice
        </span>
      </nav>
      <p className="text-sm text-gray-500">
        © 2025 AZ Hardware & Software Solutions — Berlin
      </p>
    </footer>
  );
}
