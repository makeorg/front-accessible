// @flow
import { i18n } from 'Shared/i18n';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { VoteColors } from 'Client/app/assets/vars/Colors';

export const VOTE_AGREE_KEY: string = 'agree';
export const VOTE_DISAGREE_KEY: string = 'disagree';
export const VOTE_NEUTRAL_KEY: string = 'neutral';

export const voteStaticParams: Object = {
  [VOTE_AGREE_KEY]: {
    label: i18n.t('vote.agree'),
    color: VoteColors.Agree,
    icon: faThumbsUp,
    rotate: 0,
  },
  [VOTE_DISAGREE_KEY]: {
    label: i18n.t('vote.disagree'),
    color: VoteColors.Disagree,
    icon: faThumbsDown,
    rotate: 0,
  },
  [VOTE_NEUTRAL_KEY]: {
    label: i18n.t('vote.neutral'),
    color: VoteColors.Neutral,
    icon: faThumbsUp,
    rotate: -90,
  },
};
