// @flow
import i18next from 'i18next';
import { VoteColors } from 'Assets/vars/Colors';
import { VOTE_AGREE_KEY, VOTE_DISAGREE_KEY, VOTE_NEUTRAL_KEY } from './vote';


const qualificationStaticParams: Object = {
  [VOTE_AGREE_KEY]: {
    color: VoteColors.Agree,
    labels: {
      doable: i18next.t('proposal_qualification.doable'),
      likeIt: i18next.t('proposal_qualification.likeIt'),
      platitudeAgree: i18next.t('proposal_qualification.platitudeAgree')
    }
  },
  [VOTE_DISAGREE_KEY]: {
    color: VoteColors.Disagree,
    labels: {
      noWay: i18next.t('proposal_qualification.noWay'),
      impossible: i18next.t('proposal_qualification.impossible'),
      platitudeDisagree: i18next.t('proposal_qualification.platitudeDisagree')
    }
  },
  [VOTE_NEUTRAL_KEY]: {
    color: VoteColors.Neutral,
    labels: {
      doNotUnderstand: i18next.t('proposal_qualification.doNotUnderstand'),
      noOpinion: i18next.t('proposal_qualification.noOpinion'),
      doNotCare: i18next.t('proposal_qualification.doNotCare')
    }
  }
};

export default qualificationStaticParams;
