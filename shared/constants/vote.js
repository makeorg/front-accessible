// @flow
import { i18n } from 'Shared/i18n';
import { VoteColors } from 'Client/app/assets/vars/Colors';
import { VoteAgreeIcon, VoteDisagreeIcon, VoteNeutralIcon } from './icons';

export const VOTE_AGREE_KEY: string = 'agree';
export const VOTE_DISAGREE_KEY: string = 'disagree';
export const VOTE_NEUTRAL_KEY: string = 'neutral';

export const voteStaticParams: Object = {
  [VOTE_AGREE_KEY]: {
    label: i18n.t('vote.agree'),
    color: VoteColors.Agree,
    icon: VoteAgreeIcon,
  },
  [VOTE_DISAGREE_KEY]: {
    label: i18n.t('vote.disagree'),
    color: VoteColors.Disagree,
    icon: VoteDisagreeIcon,
  },
  [VOTE_NEUTRAL_KEY]: {
    label: i18n.t('vote.neutral'),
    color: VoteColors.Neutral,
    icon: VoteNeutralIcon,
  },
};
