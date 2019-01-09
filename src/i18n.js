/* @flow */

import i18next from 'i18next';
import ATde from './i18n/AT_de.json';
import BEfr from './i18n/BE_fr.json';
import BEnl from './i18n/BE_nl.json';
import BGbg from './i18n/BG_bg.json';
import CYel from './i18n/CY_el.json';
import CZcs from './i18n/CZ_cs.json';
import DEde from './i18n/DE_de.json';
import DKda from './i18n/DK_da.json';
import EEet from './i18n/EE_et.json';
import ESes from './i18n/ES_es.json';
import FIfi from './i18n/FI_fi.json';
import FRfr from './i18n/FR_fr.json';
import GBen from './i18n/GB_en.json';
import GRel from './i18n/GR_el.json';
import HRhr from './i18n/HR_hr.json';
import HUhu from './i18n/HU_hu.json';
import IEen from './i18n/IE_en.json';
import ITit from './i18n/IT_it.json';
import LTlt from './i18n/LT_lt.json';
import LUfr from './i18n/LU_fr.json';
import LVlv from './i18n/LV_lv.json';
import MTmt from './i18n/MT_mt.json';
import NLnl from './i18n/NL_nl.json';
import PLpl from './i18n/PL_pl.json';
import PTpt from './i18n/PT_pt.json';
import ROro from './i18n/RO_ro.json';
import SEsv from './i18n/SE_sv.json';
import SIsl from './i18n/SI_sl.json';
import SKsk from './i18n/SK_sk.json';
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
