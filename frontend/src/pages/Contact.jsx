import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d1117] text-white pt-28 px-6">
      <main className="flex-grow max-w-6xl mx-auto w-full">
        {/* ===== Title ===== */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-lg">
            We’d love to hear from you — let’s build something great together.
          </p>
        </div>

        {/* ===== Grid Layout ===== */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* ===== Contact Form ===== */}
          <form className="bg-[#161b22] rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.3)] p-8 border border-gray-800 hover:shadow-[0_0_25px_rgba(34,197,94,0.15)] transition-all duration-300 space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full p-3 rounded-lg bg-[#0d1117] border border-gray-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 resize-none transition"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white shadow-lg shadow-green-900/30 hover:shadow-green-700/40 transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* ===== Contact Info ===== */}
          <div className="flex flex-col justify-center bg-[#161b22] rounded-2xl border border-gray-800 p-8 shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_25px_rgba(34,197,94,0.15)] transition-all duration-300 space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-green-400">
                Contact Information
              </h2>
              <p className="text-gray-400">
                Feel free to reach out via phone, email, or visit us in person.
              </p>
            </div>

            <div className="space-y-5 text-gray-300">
              <div className="flex items-center gap-3">
                <MapPin className="text-green-400" />
                <span>Berlin, Germany</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-green-400" />
                <span>+49 30 1234567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-green-400" />
                <span>info@az-hardware.de</span>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-700 text-sm text-gray-500">
              <p>Available: Mon–Fri · 9:00–18:00 (CET)</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
