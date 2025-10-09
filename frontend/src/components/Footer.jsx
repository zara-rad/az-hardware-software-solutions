import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-gray-800 py-8 px-6 text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-4">
        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm">
             <Link to="/" className="hover:text-white transition">
           Home
          </Link>
          <Link to="/about" className="hover:text-white transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-white transition">
            Contact
          </Link>
          <Link to="/datenschutz" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link to="/impressum" className="hover:text-white transition">
            Legal Notice
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-2">
          © {new Date().getFullYear()} AZ Hardware & Software Solutions — Berlin
        </p>
      </div>
    </footer>
  );
}
