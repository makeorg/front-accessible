/* @flow */
import { i18n } from 'Shared/i18n';
import { env } from 'Shared/env';
import { DEFAULT_LANGUAGE } from 'Shared/constants/config';

import english from './staticData/i18n/en.json';
import french from './staticData/i18n/fr.json';

const resources = {
  en: { translation: english },
  fr: { translation: french },
};

export const serverInitI18n = () => {
  i18n.init({
    interpolation: {
      escapeValue: false,
    },
    lng: DEFAULT_LANGUAGE,
    debug: env.isDev(),
    resources,
  });
};
