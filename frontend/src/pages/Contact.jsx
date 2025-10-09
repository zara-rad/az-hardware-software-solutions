
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d1117] text-white">


      <main className="flex-grow py-20 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-center md:text-left">
          Contact Us
        </h1>
     

        <div className="grid md:grid-cols-2 gap-12">
          {/* فرم تماس */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded bg-[#161b22] border border-gray-700 text-gray-200 focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                placeholder="E-Mail-Adress"
                className="w-full p-3 rounded bg-[#161b22] border border-gray-700 text-gray-200 focus:outline-none focus:border-green-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Message"
                className="w-full p-3 rounded bg-[#161b22] border border-gray-700 text-gray-200 focus:outline-none focus:border-green-500 resize-none"
              ></textarea>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded font-medium transition"
              >
                Submit
              </button>
             
            </div>
          </form>

          {/* اطلاعات تماس */}
          <div className="flex flex-col justify-center space-y-6 text-gray-300">
            <div className="flex items-center gap-3">
              <MapPin className="text-green-500" />
              <span>Berlin, Germany</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-green-500" />
              <span>+49 30 1234567</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-green-500" />
              <span>info@az-hardware.de</span>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}
