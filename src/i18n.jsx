import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
const Languages = ["en", "pt"];
i18n
  // load translation using http -> see /public/locales
  // learn more: https://github.com/i18next/i18next-http-backend
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ["queryString", "cookie"],
      cache: ["cookie"],
    },
    whitelist: Languages,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      projectId: "f61b369e-e499-469e-a60f-7e09f1a76c3f",
      apiKey: "957a0e2e-144f-4184-948e-f0d64377b0f5",
      referenceLng: "en",
    },
  });

export default i18n;
