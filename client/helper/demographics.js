// @flow
import { AGE_RANGES, GENDER, REGION } from 'Shared/constants/demographics';
import { i18n } from 'Shared/i18n';

export const DEMOGRAPHIC_TYPES = ['region', 'gender', 'age'];

export const setTitleByType = (type: string) => {
  switch (type) {
    case 'gender':
      return i18n.t('demographics_card.gender.title');
    case 'region':
      return i18n.t('demographics_card.region.title');
    default:
      return i18n.t('demographics_card.age.title');
  }
};

export const buildDemographicsByType = (type: string) => {
  switch (type) {
    case 'gender':
      return {
        ui: 'radio',
        data: GENDER,
      };
    case 'region':
      return {
        ui: 'select',
        data: [
          {
            label: i18n.t('demographics_card.region.select'),
            value: '',
          },
          ...REGION.sort((a, b) => a.label.localeCompare(b.label)),
        ],
      };
    default:
      return {
        ui: 'radio',
        data: AGE_RANGES,
      };
  }
};
