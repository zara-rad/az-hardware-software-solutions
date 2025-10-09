import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d1117] text-white">
      <Navbar />

      <main className="flex-grow py-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Privacy Policy
        </h1>

        <section className="space-y-8 text-gray-300 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-2">
              1. General Information
            </h3>
            <p>
              We take the protection of your personal data very seriously. This
              privacy policy explains what data we collect, how we use it, and
              your rights regarding your personal data when visiting our website.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              2. Data Controller
            </h3>
            <p>
              <strong>AZ Hardware & Software Solutions</strong> <br />
              Owner: Zahra Rafieirad <br />
              Address: Musterstraße 12, 10115 Berlin, Germany <br />
              Email:{" "}
              <a
                href="mailto:info@az-hardware.de"
                className="text-green-400 hover:underline"
              >
                info@az-hardware.de
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              3. Collection and Use of Personal Data
            </h3>
            <p>
              We only collect personal data that you voluntarily provide to us,
              for example, through the contact form or by email. The data will be
              used exclusively for the purpose of processing your request and will
              not be shared with third parties without your consent.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              4. Server Log Files
            </h3>
            <p>
              When visiting our website, your browser automatically transmits
              certain information (such as IP address, browser type, date, and
              time of access). This data is stored for technical reasons only and
              is not linked to any personal identity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              5. Cookies
            </h3>
            <p>
              Our website may use cookies to improve user experience and
              functionality. You can configure your browser to block cookies or
              notify you when cookies are used. However, some parts of the website
              may not function properly without cookies.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              6. Data Retention
            </h3>
            <p>
              We retain personal data only for as long as necessary to fulfill the
              purposes described in this policy or as required by law.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              7. Your Rights
            </h3>
            <p>
              You have the right to access, correct, or delete your personal data.
              You may also object to data processing or request the restriction of
              processing. To exercise these rights, please contact us at{" "}
              <a
                href="mailto:info@az-hardware.de"
                className="text-green-400 hover:underline"
              >
                info@az-hardware.de
              </a>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">
              8. Changes to This Policy
            </h3>
            <p>
              We may update this privacy policy from time to time to reflect
              changes in legal requirements or improvements to our services. The
              latest version will always be available on this website.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
