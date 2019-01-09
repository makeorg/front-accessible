/* @flow */

import i18next from 'i18next';
import FRfr from './i18n/FR_fr.json';
import GBen from './i18n/GB_en.json';
import { env } from '../shared/env';

i18next
  .init({
    interpolation: {
      escapeValue: false
    },
    lng: 'FR_fr',
    debug: env.isDev(),
    resources: {
      FR_fr: {
        translation: FRfr
      },
      GB_en: {
        translation: GBen
      }
    }
  });

export default i18next;
