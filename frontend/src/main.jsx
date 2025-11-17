import React, { Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";

import "./i18n/i18n.js";
import i18n from "./i18n/i18n.js";

import App from "./App";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Impressum from "./pages/Impressum";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Services from "./pages/Services";

// IT
import ITServices from "./pages/services/ITServices";
import ServerAdmin from "./pages/services/it/ServerAdmin";
import NetworkSetup from "./pages/services/it/NetworkSetup";
import ITSupport from "./pages/services/it/ITSupport";
import CloudBackup from "./pages/services/it/CloudBackup";
import WorkstationSetup from "./pages/services/it/WorkstationSetup";
import ITConsulting from "./pages/services/it/ITConsulting";

// Web
import WebDevelopment from "./pages/services/WebDevelopment";
import FrontendDev from "./pages/services/web/FrontendDev";
import BackendDev from "./pages/services/web/BackendDev";
import FullstackSolutions from "./pages/services/web/FullstackSolutions";

// Hardware
import HardwareSolutions from "./pages/services/HardwareSolutions";
import DeviceSales from "./pages/services/hardware/DeviceSales";
import Installation from "./pages/services/hardware/Installation";
import Maintenance from "./pages/services/hardware/Maintenance";

// Admin
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminProducts from "./pages/admin/AdminProducts.jsx";

// Shop
import Shop from "./pages/Shop";

import ScrollToTop from "./components/ScrollToTop";
import { ScrollProvider } from "./ScrollContext";
import "./index.css";

function RootApp() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // 🔧 Wait for i18n before mounting app
    if (i18n.isInitialized) {
      setReady(true);
    } else {
      i18n.on("initialized", () => setReady(true));
    }

    // 🔧 Initial direction + language
    document.documentElement.lang = i18n.language || "en";
    document.documentElement.dir =
      i18n.language === "fa" ? "rtl" : "ltr";

    // 🔧 Update direction on language change
    i18n.on("languageChanged", (lng) => {
      document.documentElement.lang = lng;
      document.documentElement.dir =
        lng === "fa" ? "rtl" : "ltr";
    });
  }, []);

  if (!ready) {
    return (
      <div className="text-center text-gray-400 mt-20">
        Loading translations...
      </div>
    );
  }

  return (
    <Suspense
      fallback={
        <div className="text-center text-gray-400 mt-20">
          Loading...
        </div>
      }
    >
      <ScrollProvider>
        <HelmetProvider>
          <BrowserRouter>
            <ScrollToTop />

            <Routes>
              <Route path="/" element={<App />}>
                <Route index element={<Home />} />

                <Route path="about" element={<About />} />

                {/* Services */}
                <Route path="services" element={<Services />} />

                {/* IT */}
                <Route path="services/it" element={<ITServices />} />
                <Route path="services/it/server" element={<ServerAdmin />} />
                <Route path="services/it/network" element={<NetworkSetup />} />
                <Route path="services/it/support" element={<ITSupport />} />
                <Route path="services/it/cloud" element={<CloudBackup />} />
                <Route
                  path="services/it/workstation"
                  element={<WorkstationSetup />}
                />
                <Route
                  path="services/it/consulting"
                  element={<ITConsulting />}
                />

                {/* Web */}
                <Route path="services/web" element={<WebDevelopment />} />
                <Route path="services/web/frontend" element={<FrontendDev />} />
                <Route path="services/web/backend" element={<BackendDev />} />
                <Route
                  path="services/web/fullstack"
                  element={<FullstackSolutions />}
                />

                {/* Hardware */}
                <Route
                  path="services/hardware"
                  element={<HardwareSolutions />}
                />
                <Route
                  path="services/hardware/sales"
                  element={<DeviceSales />}
                />
                <Route
                  path="services/hardware/installation"
                  element={<Installation />}
                />
                <Route
                  path="services/hardware/maintenance"
                  element={<Maintenance />}
                />

                {/* Shop + Admin */}
                <Route path="/shop" element={<Shop />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/products" element={<AdminProducts />} />

                {/* Legal */}
                <Route path="impressum" element={<Impressum />} />
                <Route path="datenschutz" element={<PrivacyPolicy />} />

                {/* Contact */}
                <Route path="contact" element={<Contact />} />
              </Route>
            </Routes>

            {/* Toast Styling */}
            <Toaster
              position="top-right"
              toastOptions={{
                success: {
                  style: {
                    background: "#0d1117",
                    color: "#00ffb4",
                    border: "1px solid #00ffb4",
                  },
                },
                error: {
                  style: {
                    background: "#0d1117",
                    color: "#ff5555",
                    border: "1px solid #ff5555",
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
    </Suspense>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <RootApp />
);







// import React, { Suspense, useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
// import { Toaster } from "react-hot-toast";
// import "./i18n/i18n.js";
// import i18n from "./i18n/i18n.js";

// import App from "./App";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Impressum from "./pages/Impressum";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import Services from "./pages/Services";
// import ITServices from "./pages/services/ITServices";
// import WebDevelopment from "./pages/services/WebDevelopment";
// import HardwareSolutions from "./pages/services/HardwareSolutions";
// import ServerAdmin from "./pages/services/it/ServerAdmin";
// import NetworkSetup from "./pages/services/it/NetworkSetup";
// import ITSupport from "./pages/services/it/ITSupport";

// import FrontendDev from "./pages/services/web/FrontendDev";
// import BackendDev from "./pages/services/web/BackendDev";
// import FullstackSolutions from "./pages/services/web/FullstackSolutions";
// import DeviceSales from "./pages/services/hardware/DeviceSales";
// import Installation from "./pages/services/hardware/Installation";
// import Maintenance from "./pages/services/hardware/Maintenance";
// import AdminDashboard from "./pages/admin/AdminDashboard";
// import Shop from "./pages/Shop";
// import AdminProducts from "./pages/admin/AdminProducts.jsx";

// import ScrollToTop from "./components/ScrollToTop";
// import { ScrollProvider } from "./ScrollContext";
// import "./index.css";
// import WorkstationSetup from "./pages/services/it/WorkstationSetup.jsx";
// import ITConsulting from "./pages/services/it/ITConsulting.jsx";
// import CloudBackup from "./pages/services/it/CloudBackup.jsx";

// function RootApp() {
//   const [ready, setReady] = useState(false);

//   useEffect(() => {
//     if (i18n.isInitialized) {
//       setReady(true);
//     } else {
//       i18n.on("initialized", () => setReady(true));
//     }

//     document.documentElement.lang = i18n.language || "en";
//     document.documentElement.dir = i18n.language === "fa" ? "rtl" : "ltr";

//     i18n.on("languageChanged", (lng) => {
//       document.documentElement.lang = lng;
//       document.documentElement.dir = lng === "fa" ? "rtl" : "ltr";
//     });
//   }, []);

//   if (!ready) {
//     return (
//       <div className="text-center text-gray-400 mt-20">
//         Loading translations...
//       </div>
//     );
//   }

//   return (
//     <Suspense
//       fallback={
//         <div className="text-center text-gray-400 mt-20">
//           Loading translations...
//         </div>
//       }
//     >
//       <ScrollProvider>
//         <HelmetProvider>
//           <BrowserRouter>
//             <ScrollToTop />

//             <Routes>
//               <Route path="/" element={<App />}>
//                 <Route index element={<Home />} />
//                 <Route path="about" element={<About />} />
//                 <Route path="services" element={<Services />} />
//                 <Route path="services/it" element={<ITServices />} />
//                 <Route path="services/it/server" element={<ServerAdmin />} />
//                 <Route path="services/it/network" element={<NetworkSetup />} />
//                 <Route path="services/it/support" element={<ITSupport />} />
//                 <Route path="/services/it/cloud" element={<CloudBackup />} />
//                 <Route
//                   path="/services/it/workstation"
//                   element={<WorkstationSetup />}
//                 />
//                 <Route
//                   path="/services/it/consulting"
//                   element={<ITConsulting />}
//                 />

//                 <Route path="services/web" element={<WebDevelopment />} />
//                 <Route path="services/web/frontend" element={<FrontendDev />} />
//                 <Route path="services/web/backend" element={<BackendDev />} />
//                 <Route path="/shop" element={<Shop />} />
//                 <Route path="/admin/products" element={<AdminProducts />} />
//                 <Route
//                   path="services/web/fullstack"
//                   element={<FullstackSolutions />}
//                 />
//                 <Route
//                   path="services/hardware"
//                   element={<HardwareSolutions />}
//                 />
//                 <Route
//                   path="services/hardware/sales"
//                   element={<DeviceSales />}
//                 />
//                 <Route
//                   path="services/hardware/installation"
//                   element={<Installation />}
//                 />
//                 <Route
//                   path="services/hardware/maintenance"
//                   element={<Maintenance />}
//                 />
//                 <Route path="/admin" element={<AdminDashboard />} />
//                 <Route path="contact" element={<Contact />} />
//                 <Route path="impressum" element={<Impressum />} />
//                 <Route path="datenschutz" element={<PrivacyPolicy />} />
//               </Route>
//             </Routes>

//             <Toaster
//               position="top-right"
//               reverseOrder={false}
//               toastOptions={{
//                 success: {
//                   style: {
//                     background: "#0d1117",
//                     color: "#00ffb4",
//                     border: "1px solid #00ffb4",
//                   },
//                   iconTheme: { primary: "#00ffb4", secondary: "#0d1117" },
//                 },
//                 error: {
//                   style: {
//                     background: "#0d1117",
//                     color: "#ff5555",
//                     border: "1px solid #ff5555",
//                   },
//                   iconTheme: { primary: "#ff5555", secondary: "#0d1117" },
//                 },
//                 loading: {
//                   style: {
//                     background: "#0d1117",
//                     color: "#cccccc",
//                     border: "1px solid #444",
//                   },
//                 },
//               }}
//             />
//           </BrowserRouter>
//         </HelmetProvider>
//       </ScrollProvider>
//     </Suspense>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(
//   // <React.StrictMode>
//     <RootApp />
//   //</React.StrictMode> 
// );

