import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import englishTranslaton from './locales/en.json';
import polishTranslation from './locales/pl.json';

const resources = {
  en: {
    translation: englishTranslaton,
  },
  pl: {
    translation: polishTranslation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
