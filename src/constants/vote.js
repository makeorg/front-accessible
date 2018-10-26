import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { VoteColors } from '../assets/vars/Colors';

const VOTE_AGREE_KEY = 'agree';
const VOTE_DISAGREE_KEY = 'disagree';
const VOTE_NEUTRAL_KEY = 'neutral';

const voteStaticParams = {
  [VOTE_AGREE_KEY]: {
    label: "d'accord",
    color: VoteColors.Agree,
    icon: faThumbsUp,
    rotate: 0
  },
  [VOTE_DISAGREE_KEY]: {
    label: "pas d'accord",
    color: VoteColors.Disagree,
    icon: faThumbsDown,
    rotate: 0
  },
  [VOTE_NEUTRAL_KEY]: {
    label: 'neutre',
    color: VoteColors.Neutral,
    icon: faThumbsUp,
    rotate: -90
  }
};

export default voteStaticParams;
