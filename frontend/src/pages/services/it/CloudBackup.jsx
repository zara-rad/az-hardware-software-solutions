import { CloudCog, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CloudBackup() {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col text-white overflow-hidden min-h-screen bg-transparent">
      
      {/* Background */}
      <img
        src="/images/services/serverroom.jpg"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.65]"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/85 via-[#0f1825]/60 to-[#0d1117]/90"></div>

      {/* HERO */}
      <section className="relative z-10 flex flex-col items-center text-center h-[45vh] justify-center px-6">
        <CloudCog className="w-16 h-16 text-gray-300 mb-4" />
        <h1 className="text-4xl font-extrabold text-gray-200 mb-3">
          {t("it.cloudBackup.title")}
        </h1>
        <p className="text-gray-300 max-w-2xl text-lg">
          {t("it.cloudBackup.subtitle")}
        </p>
      </section>

      {/* MAIN CONTENT */}
      <main className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {t("it.cloudBackup.desc1")}
            </p>

            <ul className="space-y-3 text-gray-300 text-base mb-8">
              <li>• {t("it.cloudBackup.point1")}</li>
              <li>• {t("it.cloudBackup.point2")}</li>
              <li>• {t("it.cloudBackup.point3")}</li>
            </ul>

            {/* Back to IT Services  → moved to bottom */}
            <Link
              to="/services/it"
              className="flex items-center text-gray-400 gap-2 mt-6"
            >
              <ArrowLeft className="w-5 h-5" /> {t("it.itSupport.back")}
            </Link>
          </div>

          {/* Image */}
          <div>
            <img
              src="/images/services/cloud.jpg"
              alt="Cloud & Backup"
              className="rounded-2xl shadow-lg shadow-black/40"
            />
          </div>

        </div>
      </main>

    </div>
  );
}
