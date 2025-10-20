import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // ✅ اضافه شد
import en from "./en.json";
import de from "./de.json";
import fa from "./fa.json";

// ✅ پیکربندی کامل با ذخیره زبان کاربر در localStorage
i18n
  .use(LanguageDetector) // تشخیص خودکار زبان از localStorage، cookie یا مرورگر
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      de: { translation: de },
      fa: { translation: fa },
    },

    fallbackLng: "en", // زبان پیش‌فرض اگر چیزی پیدا نشد
    detection: {
      // ✅ ترتیب بررسی برای تشخیص زبان
      order: ["localStorage", "cookie", "navigator", "htmlTag"],

      // ✅ ذخیره زبان کاربر
      caches: ["localStorage"],

      // ✅ کلید ذخیره در localStorage
      lookupLocalStorage: "i18nextLng",
    },

    interpolation: {
      escapeValue: false, // برای React نیازی به escape نیست
    },
  });

export default i18n;




// import i18n from "i18next"; // ✅ درست
// import { initReactI18next } from "react-i18next";
// import en from "./en.json";
// import de from "./de.json";
// import fa from "./fa.json";

// i18n.use(initReactI18next).init({
//   resources: {
//     en: { translation: en },
//     de: { translation: de },
//     fa: { translation: fa },
//   },
//   lng: "en",
//   fallbackLng: "en",
//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;
