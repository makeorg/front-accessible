// @flow
import { i18n } from 'Shared/i18n';
import { VoteColors } from 'Client/app/assets/vars/Colors';

export const OPINION_AGREE_KEY: string = 'agree';
export const OPINION_DISAGREE_KEY: string = 'disagree';
export const OPINION_OTHER_KEY: string = 'other';
export const OPINION_PRIORITY_KEY: string = 'priority';
export const OPINION_DOABLE_KEY: string = 'doable';
export const OPINION_NOWAY_KEY: string = 'noWay';
export const OPINION_NONPRIORITY_KEY: string = 'nonPriority';
export const OPINION_EXISTS_KEY: string = 'exists';
export const OPINION_TOBEPRECISED_KEY: string = 'toBePrecised';

export const opinionsVoteStaticParams: Object = {
  [OPINION_AGREE_KEY]: {
    label: i18n.t('personality.opinions.vote.agree'),
    color: VoteColors.Agree,
    transform: 'none',
    qualifications: [OPINION_PRIORITY_KEY, OPINION_DOABLE_KEY],
  },
  [OPINION_DISAGREE_KEY]: {
    label: i18n.t('personality.opinions.vote.disagree'),
    color: VoteColors.Disagree,
    transform: 'rotate(180deg) scaleX(-1)',
    qualifications: [OPINION_NOWAY_KEY, OPINION_NONPRIORITY_KEY],
  },
  [OPINION_OTHER_KEY]: {
    label: i18n.t('personality.opinions.vote.other'),
    color: VoteColors.Neutral,
    transform: 'rotate(-90deg)',
    qualifications: [OPINION_EXISTS_KEY, OPINION_TOBEPRECISED_KEY],
  },
};
