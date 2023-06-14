import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {resources} from './locales/translations';

enum languages {
  en = 'en',
  ru = 'ru',
}
i18n.use(initReactI18next).init({
  resources,
  lng: languages.en,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
