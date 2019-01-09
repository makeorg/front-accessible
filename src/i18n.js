/* @flow */

import i18next from 'i18next';
import fr from './i18n/fr.json';
import en from './i18n/en.json';
import { env } from '../shared/env';

i18next
  .init({
    interpolation: {
      escapeValue: false
    },
    fallbackLng: 'fr',
    debug: env.isDev(),
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
