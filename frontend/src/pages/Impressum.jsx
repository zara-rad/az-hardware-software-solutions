import Navbar from "../components/Navbar";

export default function Impressum() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d1117] text-white">
      <Navbar />

      <main className="flex-grow py-20 px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Legal Notice (Impressum)
        </h1>

        {/* Company Information */}
        <div className="space-y-4 mb-10">
          <h2 className="text-xl font-semibold">AZ Hardware & Software Solutions</h2>
          <p>
            <strong>Owner:</strong> Zahra Rafieirad <br />
            <strong>Address:</strong> Musterstraße 12, 10115 Berlin, Germany <br />
            <strong>Phone:</strong> +49 30 1234567 <br />
            <strong>Email:</strong>{" "}
            <a
              href="mailto:info@az-hardware.de"
              className="text-green-400 hover:underline"
            >
              info@az-hardware.de
            </a>{" "}
            <br />
            <strong>VAT ID (USt-IdNr):</strong> DE123456789 <br />
            <strong>Responsible for content (§ 55 Abs. 2 RStV):</strong> Zahra
            Rafieirad
          </p>
        </div>

        {/* Legal Section */}
        <section className="space-y-8 text-gray-300 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold mb-2">Legal Notice</h3>
            <p>
              AZ Hardware & Software Solutions provides professional IT, web, and
              hardware services. All content on this website has been created with
              the greatest possible care. However, we cannot guarantee the
              completeness, accuracy, or timeliness of the content provided. We are
              responsible for our own content on these pages according to general
              laws but are not obligated to monitor transmitted or stored third-party
              information.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Copyright</h3>
            <p>
              All texts, images, logos, and other content on this website are subject
              to copyright. Any reproduction, processing, distribution, or
              commercialization of such material beyond the scope of copyright law
              requires prior written consent from the author or creator.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">External Links</h3>
            <p>
              Our website may contain links to external third-party websites. We have
              no influence on the content of those websites and therefore cannot
              assume any liability for such external content. The respective provider
              or operator of the linked pages is always responsible for their
              content.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Dispute Resolution</h3>
            <p>
              The European Commission provides a platform for online dispute
              resolution (ODR):{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                className="text-green-400 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .<br />
              We are not obligated or willing to participate in dispute resolution
              proceedings before a consumer arbitration board.
            </p>
          </div>
        </section>
      </main>

   
    </div>
  );
}
