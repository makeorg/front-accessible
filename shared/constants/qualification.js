// @flow
import i18n from 'Shared/i18n';
import { VoteColors } from 'Client/app/assets/vars/Colors';
import { VOTE_AGREE_KEY, VOTE_DISAGREE_KEY, VOTE_NEUTRAL_KEY } from './vote';


const qualificationStaticParams: Object = {
  [VOTE_AGREE_KEY]: {
    color: VoteColors.Agree,
    labels: {
      doable: i18n.t('proposal_qualification.doable'),
      likeIt: i18n.t('proposal_qualification.likeIt'),
      platitudeAgree: i18n.t('proposal_qualification.platitudeAgree')
    }
  },
  [VOTE_DISAGREE_KEY]: {
    color: VoteColors.Disagree,
    labels: {
      noWay: i18n.t('proposal_qualification.noWay'),
      impossible: i18n.t('proposal_qualification.impossible'),
      platitudeDisagree: i18n.t('proposal_qualification.platitudeDisagree')
    }
  },
  [VOTE_NEUTRAL_KEY]: {
    color: VoteColors.Neutral,
    labels: {
      doNotUnderstand: i18n.t('proposal_qualification.doNotUnderstand'),
      noOpinion: i18n.t('proposal_qualification.noOpinion'),
      doNotCare: i18n.t('proposal_qualification.doNotCare')
    }
  }
};

export default qualificationStaticParams;
