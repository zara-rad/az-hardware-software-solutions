import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Impressum from "./pages/Impressum";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "./index.css";
import Services from "./pages/Services";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Layout اصلی */}
        <Route path="/" element={<App />}>
          {/* صفحه خانه */}
          <Route index element={<Home />} />
          {/* صفحات دیگر */}
          <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} /> {/* ✅ اضافه شد */}

          <Route path="contact" element={<Contact />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="datenschutz" element={<PrivacyPolicy />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
