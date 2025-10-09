import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

import { ScrollProvider } from "./ScrollContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScrollProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="services/it" element={<ITServices />} />
            <Route path="services/web" element={<WebDevelopment />} />
            <Route path="services/hardware" element={<HardwareSolutions />} />

            <Route path="contact" element={<Contact />} />
            <Route path="impressum" element={<Impressum />} />
            <Route path="datenschutz" element={<PrivacyPolicy />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ScrollProvider>
  </React.StrictMode>
);
