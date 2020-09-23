// @flow
import { i18n } from 'Shared/i18n';
import { VoteColors } from 'Client/app/assets/vars/Colors';

export const VOTE_AGREE_KEY: string = 'agree';
export const VOTE_DISAGREE_KEY: string = 'disagree';
export const VOTE_NEUTRAL_KEY: string = 'neutral';

export const voteStaticParams: Object = {
  [VOTE_AGREE_KEY]: {
    label: i18n.t('vote.agree'),
    color: VoteColors.Agree,
    transform: 'none',
  },
  [VOTE_DISAGREE_KEY]: {
    label: i18n.t('vote.disagree'),
    color: VoteColors.Disagree,
    transform: 'rotate(180deg) scaleX(-1)',
  },
  [VOTE_NEUTRAL_KEY]: {
    label: i18n.t('vote.neutral'),
    color: VoteColors.Neutral,
    transform: 'rotate(-90deg)',
  },
};

export const voteStaticParamsKeys: Array<string> = Object.keys(
  voteStaticParams
);
