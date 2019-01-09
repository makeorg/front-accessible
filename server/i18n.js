/* @flow */

import i18next from 'i18next';
import ATde from './staticData/i18n/AT_de.json';
import BEfr from './staticData/i18n/BE_fr.json';
import BEnl from './staticData/i18n/BE_nl.json';
import BGbg from './staticData/i18n/BG_bg.json';
import CYel from './staticData/i18n/CY_el.json';
import CZcs from './staticData/i18n/CZ_cs.json';
import DEde from './staticData/i18n/DE_de.json';
import DKda from './staticData/i18n/DK_da.json';
import EEet from './staticData/i18n/EE_et.json';
import ESes from './staticData/i18n/ES_es.json';
import FIfi from './staticData/i18n/FI_fi.json';
import FRfr from './staticData/i18n/FR_fr.json';
import GBen from './staticData/i18n/GB_en.json';
import GRel from './staticData/i18n/GR_el.json';
import HRhr from './staticData/i18n/HR_hr.json';
import HUhu from './staticData/i18n/HU_hu.json';
import IEen from './staticData/i18n/IE_en.json';
import ITit from './staticData/i18n/IT_it.json';
import LTlt from './staticData/i18n/LT_lt.json';
import LUfr from './staticData/i18n/LU_fr.json';
import LVlv from './staticData/i18n/LV_lv.json';
import MTmt from './staticData/i18n/MT_mt.json';
import NLnl from './staticData/i18n/NL_nl.json';
import PLpl from './staticData/i18n/PL_pl.json';
import PTpt from './staticData/i18n/PT_pt.json';
import ROro from './staticData/i18n/RO_ro.json';
import SEsv from './staticData/i18n/SE_sv.json';
import SIsl from './staticData/i18n/SI_sl.json';
import SKsk from './staticData/i18n/SK_sk.json';
import { env } from '../shared/env';

i18next
  .init({
    interpolation: {
      escapeValue: false
    },
    lng: 'FR_fr',
    debug: env.isDev(),
    resources: {
      AT_de: { translation: ATde },
      BE_fr: { translation: BEfr },
      BE_nl: { translation: BEnl },
      BG_bg: { translation: BGbg },
      CY_el: { translation: CYel },
      CZ_cs: { translation: CZcs },
      DE_de: { translation: DEde },
      DK_da: { translation: DKda },
      EE_et: { translation: EEet },
      ES_es: { translation: ESes },
      FI_fi: { translation: FIfi },
      FR_fr: { translation: FRfr },
      GB_en: { translation: GBen },
      GR_el: { translation: GRel },
      HR_hr: { translation: HRhr },
      HU_hu: { translation: HUhu },
      IE_en: { translation: IEen },
      IT_it: { translation: ITit },
      LT_lt: { translation: LTlt },
      LU_fr: { translation: LUfr },
      LV_lv: { translation: LVlv },
      MT_mt: { translation: MTmt },
      NL_nl: { translation: NLnl },
      PL_pl: { translation: PLpl },
      PT_pt: { translation: PTpt },
      RO_ro: { translation: ROro },
      SE_sv: { translation: SEsv },
      SI_sl: { translation: SIsl },
      SK_sk: { translation: SKsk }
    }
  });

export default i18next;
