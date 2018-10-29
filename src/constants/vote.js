import i18next from 'i18next';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { VoteColors } from '../assets/vars/Colors';

const VOTE_AGREE_KEY = 'agree';
const VOTE_DISAGREE_KEY = 'disagree';
const VOTE_NEUTRAL_KEY = 'neutral';

const voteStaticParams = {
  [VOTE_AGREE_KEY]: {
    label: i18next.t('vote.agree'),
    color: VoteColors.Agree,
    icon: faThumbsUp,
    rotate: 0
  },
  [VOTE_DISAGREE_KEY]: {
    label: i18next.t('vote.disagree'),
    color: VoteColors.Disagree,
    icon: faThumbsDown,
    rotate: 0
  },
  [VOTE_NEUTRAL_KEY]: {
    label: i18next.t('vote.neutral'),
    color: VoteColors.Neutral,
    icon: faThumbsUp,
    rotate: -90
  }
};

export default voteStaticParams;
