// @flow

import i18next from 'i18next';

export const MIN_PROPOSAL_LENGTH: number = 12;
export const MAX_PROPOSAL_LENGTH: number = 140;
export const getBaitText = () => i18next.t('proposal_submit.bait');
