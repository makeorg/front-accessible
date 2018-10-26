import i18next from 'i18next';
import fr from './i18n/fr.json';
import en from './i18n/en.json';

i18next
  .init({
    interpolation: {
      escapeValue: false
    },
    fallbackLng: 'fr',
    debug: process.env.NODE_ENV === 'development',
    resources: {
      fr: {
        translation: fr
      },
      en: {
        translation: en
      }
    }
  });

export default i18next;
