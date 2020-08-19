// @flow
import { color } from 'athena-design-tokens';
import { i18n } from 'Shared/i18n';

export const VOTE_AGREE_KEY: string = 'agree';
export const VOTE_DISAGREE_KEY: string = 'disagree';
export const VOTE_NEUTRAL_KEY: string = 'neutral';

export const voteStaticParams: Object = {
  [VOTE_AGREE_KEY]: {
    label: i18n.t('vote.agree'),
    color: color.agree,
    transform: 'none',
  },
  [VOTE_DISAGREE_KEY]: {
    label: i18n.t('vote.disagree'),
    color: color.disagree,
    transform: 'rotate(180deg) scaleX(-1)',
  },
  [VOTE_NEUTRAL_KEY]: {
    label: i18n.t('vote.neutral'),
    color: color.neutral,
    transform: 'rotate(-90deg)',
  },
};

export const voteStaticParamsKeys: Array<string> = Object.keys(
  voteStaticParams
);
