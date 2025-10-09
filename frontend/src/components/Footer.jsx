import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-gray-800 py-8 px-6 text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* بخش لینک‌ها */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
         
          <Link to="/impressum" className="hover:text-white">
            Impressum
          </Link>
          <Link to="/about" className="hover:text-white">
            About
          </Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>

        </div>

        {/* بخش متن کپی‌رایت */}
        <p className="text-xs text-center md:text-right text-gray-500">
          © {new Date().getFullYear()} AZ Hardware & Software Solutions — Berlin
        </p>
      </div>
    </footer>
  );
}
