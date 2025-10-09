import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

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

import { ScrollProvider } from "./ScrollContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScrollProvider>
          <HelmetProvider>

      <BrowserRouter>
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
            <Route
              path="services/hardware/maintenance"
              element={<Maintenance />}
            />
            <Route path="contact" element={<Contact />} />
            <Route path="impressum" element={<Impressum />} />
            <Route path="datenschutz" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
          </HelmetProvider>

    </ScrollProvider>
  </React.StrictMode>
);
