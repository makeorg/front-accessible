import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { VoteColors } from '../assets/vars/Colors';

const voteStaticParams = {
  Agree: {
    label: "d'accord",
    color: VoteColors.Agree,
    icon: faThumbsUp,
    rotate: 0
  },
  Disagree: {
    label: "pas d'accord",
    color: VoteColors.Disagree,
    icon: faThumbsDown,
    rotate: 0
  },
  Neutral: {
    label: 'neutre',
    color: VoteColors.Neutral,
    icon: faThumbsUp,
    rotate: -90
  }
};

export default voteStaticParams;
