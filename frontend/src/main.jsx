import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast"; // ✅ برای toast زیبا
import "./i18n/i18n.js";
import i18n from "./i18n/i18n.js"; // ✅ اضافه کن برای کنترل زبان
// 🔹 این بخش جدید برای جهت‌دهی زبان‌ها
document.documentElement.lang = i18n.language;
document.documentElement.dir = i18n.language === "fa" ? "rtl" : "ltr";
i18n.on("languageChanged", (lng) => {
  document.documentElement.lang = lng;
  document.documentElement.dir = lng === "fa" ? "rtl" : "ltr";
});
// 📂 Pages & Layouts
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Impressum from "./pages/Impressum";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Services from "./pages/Services";
import ITServices from "./pages/services/ITServices";
import WebDevelopment from "./pages/services/WebDevelopment";
import HardwareSolutions from "./pages/services/HardwareSolutions";
import ServerAdmin from "./pages/services/it/ServerAdmin";
import NetworkSetup from "./pages/services/it/NetworkSetup";
import ITSupport from "./pages/services/it/ITSupport";
import FrontendDev from "./pages/services/web/FrontendDev";
import BackendDev from "./pages/services/web/BackendDev";
import FullstackSolutions from "./pages/services/web/FullstackSolutions";
import DeviceSales from "./pages/services/hardware/DeviceSales";
import Installation from "./pages/services/hardware/Installation";
import Maintenance from "./pages/services/hardware/Maintenance";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Shop from "./pages/Shop";


// 📂 Components & Context
import ScrollToTop from "./components/ScrollToTop";
import { ScrollProvider } from "./ScrollContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScrollProvider>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="services" element={<Services />} />
              <Route path="services/it" element={<ITServices />} />
              <Route path="services/it/server" element={<ServerAdmin />} />
              <Route path="services/it/network" element={<NetworkSetup />} />
              <Route path="services/it/support" element={<ITSupport />} />
              <Route path="services/web" element={<WebDevelopment />} />
              <Route path="services/web/frontend" element={<FrontendDev />} />
              <Route path="services/web/backend" element={<BackendDev />} />
              <Route path="/shop" element={<Shop />} />

              <Route
                path="services/web/fullstack"
                element={<FullstackSolutions />}
              />
              <Route path="services/hardware" element={<HardwareSolutions />} />
              <Route path="services/hardware/sales" element={<DeviceSales />} />
              <Route
                path="services/hardware/installation"
                element={<Installation />}
              />
              <Route path="/admin" element={<AdminDashboard />} />

              <Route
                path="services/hardware/maintenance"
                element={<Maintenance />}
              />
              <Route path="contact" element={<Contact />} />
              <Route path="impressum" element={<Impressum />} />
              <Route path="datenschutz" element={<PrivacyPolicy />} />
            </Route>
          </Routes>

          {/* 🌟 Toast notification global setup */}
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              success: {
                style: {
                  background: "#0d1117",
                  color: "#00ffb4",
                  border: "1px solid #00ffb4",
                },
                iconTheme: {
                  primary: "#00ffb4",
                  secondary: "#0d1117",
                },
              },
              error: {
                style: {
                  background: "#0d1117",
                  color: "#ff5555",
                  border: "1px solid #ff5555",
                },
                iconTheme: {
                  primary: "#ff5555",
                  secondary: "#0d1117",
                },
              },
              loading: {
                style: {
                  background: "#0d1117",
                  color: "#cccccc",
                  border: "1px solid #444",
                },
              },
            }}
          />
        </BrowserRouter>
      </HelmetProvider>
    </ScrollProvider>
  </React.StrictMode>
);





