import i18n from "i18next"; // ✅ درست
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import de from "./de.json";
import fa from "./fa.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    de: { translation: de },
    fa: { translation: fa },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
