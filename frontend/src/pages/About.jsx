import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d1117] text-white">
      <Navbar />

      <main className="flex-grow py-20 px-6 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">About Us</h1>
        <h2 className="text-gray-400 mb-10 text-lg">Über uns</h2>

        <div className="text-left space-y-10">
          <div>
            <h3 className="text-2xl font-semibold mb-2">
              About AZ Hardware & Software Solutions
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We are a Berlin-based company providing comprehensive IT services
              and hardware solutions for businesses of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-2">Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                Our vision is to be the leading provider of innovative IT
                services and hardware solutions in Berlin.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                Our mission is to deliver high-quality and efficient solutions
                tailored to our clients’ needs.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
