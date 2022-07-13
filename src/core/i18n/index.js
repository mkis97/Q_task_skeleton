import Vue from "vue";
import VueI18n from "vue-i18n";
import translationsEn from "./en.json";
import translationsHr from "./hr.json";

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: localStorage.getItem("locale") || "en",
  fallbackLocale: "en",
  messages: {
    en: translationsEn,
    hr: translationsHr,
  },
});

const loadedLocales = ["en", "hr"];

function setI18nLocale(locale) {
  i18n.locale = locale;
  document.querySelector("html").setAttribute("locale", locale);
  return locale;
}

function setLocalStorageLocale(locale) {
  const currentLocale = localStorage.getItem("locale");
  if (currentLocale !== locale) {
    try {
      localStorage.setItem("locale", locale);
    } catch (e) {
      return e;
    }
  }
}

export async function loadLocaleAsync(locale) {
  setLocalStorageLocale(locale);
  if (i18n.locale !== locale) {
    if (!loadedLocales.includes(locale)) {
      const msgs = await import(
        /* webpackChunkName: "locale-[request]" */ `./${locale}.json`
      );
      i18n.setLocaleMessage(locale, msgs.default);
      loadedLocales.push(locale);
      return setI18nLocale(locale);
    }
    return Promise.resolve(setI18nLocale(locale));
  }
  return Promise.resolve(locale);
}
