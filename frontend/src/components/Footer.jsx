export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-500 bg-[#0d1117]">
      <div className="flex flex-wrap justify-center gap-6">
        <a href="#" className="hover:text-white">Contact</a>
        <a href="#" className="hover:text-white">Impressum</a>
        <a href="#" className="hover:text-white">Datenschutz</a>
      </div>
      <p className="mt-3 text-xs text-gray-600">
        © {new Date().getFullYear()} AZ Hardware & Software Solutions — Berlin
      </p>
    </footer>
  );
}
