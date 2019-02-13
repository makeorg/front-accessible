/* @flow */

import i18next from 'i18next';
import { env } from 'Shared/env';
import deAT from './staticData/i18n/de-AT.json';
import frBE from './staticData/i18n/fr-BE.json';
import nlBE from './staticData/i18n/nl-BE.json';
import bgBG from './staticData/i18n/bg-BG.json';
import elCY from './staticData/i18n/el-CY.json';
import csCZ from './staticData/i18n/cs-CZ.json';
import deDE from './staticData/i18n/de-DE.json';
import daDK from './staticData/i18n/da-DK.json';
import etEE from './staticData/i18n/et-EE.json';
import esES from './staticData/i18n/es-ES.json';
import fiFI from './staticData/i18n/fi-FI.json';
import frFR from './staticData/i18n/fr-FR.json';
import enGB from './staticData/i18n/en-GB.json';
import elGR from './staticData/i18n/el-GR.json';
import hrHR from './staticData/i18n/hr-HR.json';
import huHU from './staticData/i18n/hu-HU.json';
import enIE from './staticData/i18n/en-IE.json';
import itIT from './staticData/i18n/it-IT.json';
import ltLT from './staticData/i18n/lt-LT.json';
import frLU from './staticData/i18n/fr-LU.json';
import lvLV from './staticData/i18n/lv-LV.json';
import mtMT from './staticData/i18n/mt-MT.json';
import nlNL from './staticData/i18n/nl-NL.json';
import plPL from './staticData/i18n/pl-PL.json';
import ptPT from './staticData/i18n/pt-PT.json';
import roRO from './staticData/i18n/ro-RO.json';
import svSE from './staticData/i18n/sv-SE.json';
import slSI from './staticData/i18n/sl-SI.json';
import skSK from './staticData/i18n/sk-SK.json';

i18next
  .init({
    interpolation: {
      escapeValue: false
    },
    lng: 'fr-FR',
    debug: env.isDev(),
    resources: {
      'de-AT': { translation: deAT },
      'fr-BE': { translation: frBE },
      'nl-BE': { translation: nlBE },
      'bg-BG': { translation: bgBG },
      'el-CY': { translation: elCY },
      'cs-CZ': { translation: csCZ },
      'de-DE': { translation: deDE },
      'da-DK': { translation: daDK },
      'et-EE': { translation: etEE },
      'es-ES': { translation: esES },
      'fi-FI': { translation: fiFI },
      'fr-FR': { translation: frFR },
      'en-GB': { translation: enGB },
      'el-GR': { translation: elGR },
      'hr-HR': { translation: hrHR },
      'hu-HU': { translation: huHU },
      'en-IE': { translation: enIE },
      'it-IT': { translation: itIT },
      'lt-LT': { translation: ltLT },
      'fr-LU': { translation: frLU },
      'lv-LV': { translation: lvLV },
      'mt-MT': { translation: mtMT },
      'nl-NL': { translation: nlNL },
      'pl-PL': { translation: plPL },
      'pt-PT': { translation: ptPT },
      'ro-RO': { translation: roRO },
      'sv-SE': { translation: svSE },
      'sl-SI': { translation: slSI },
      'sk-SK': { translation: skSK }
    }
  });
