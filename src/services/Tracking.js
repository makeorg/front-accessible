/* @flow */

import ApiService from '../api/ApiService';
import * as trackingConstants from '../constants/tracking';

const
  PARENT_URL = typeof window
  !== 'undefined' && window && window.parent && document
  && document.location && (window.location !== window.parent.location)
    ? document.referrer : document.location.href;

const PATH_POST_TRACKING = '/tracking/front';

let instance = null;

const track = (eventName: string, parameters: Object = {}) => {
  const eventParameters = Object.assign({}, {
    location: 'front-accessible',
    source: ApiService.source,
    country: ApiService.country,
    language: ApiService.language,
    url: PARENT_URL
  }, parameters || {});

  return ApiService.callApi(PATH_POST_TRACKING, {
    method: 'POST',
    body: JSON.stringify({
      eventName,
      eventParameters,
      eventType: 'trackCustom'
    })
  });
};

class Tracking {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  /* On Load Tracking */
  trackDisplaySequence = () => {
    track(trackingConstants.DISPLAY_SEQUENCE);
  }

  /* Header Tracking */
  trackClickMakeLogo = () => {
    track(trackingConstants.CLICK_MAKEORG_LOGO);
  }

  /* Moderation Text Tracking */
  trackDisplayModerationText = () => {
    track(trackingConstants.DISPLAY_MODERATION_TEXT);
  }

  trackClickModerationLink = () => {
    track(trackingConstants.CLICK_MODERATION_LINK);
  }

  /* Proposal Submit */
  trackClickProposalSubmit = () => {
    track(trackingConstants.CLICK_PROPOSAL_SUBMIT_BUTTON);
  }

  trackDisplayProposalSubmitAuthentification = () => {
    track(trackingConstants.DISPLAY_PROPOSAL_SUBMIT_AUTHENTIFICATION);
  }

  /* Pannel */
  trackDisplayLoginPannel = () => {
    track(trackingConstants.DISPLAY_LOGIN_PANNEL);
  }

  trackDisplayForgotPasswordPannel = () => {
    track(trackingConstants.DISPLAY_FORGOTPASSWORD_PANNEL);
  }

  trackClickClosePannel = () => {
    track(trackingConstants.CLICK_CLOSE_PANNEL);
  }

  /* Sign Up Pannel */
  trackDisplaySignupPannel = () => {
    track(trackingConstants.DISPLAY_SIGNUP_PANNEL);
  }

  trackFacebookSignUpButton = () => {
    track(trackingConstants.CLICK_FACEBOOK_SIGNUP_BUTTON);
  }

  trackGoogleSignUpButton = () => {
    track(trackingConstants.CLICK_GOOGLE_SIGNUP_BUTTON);
  }

  trackFacebookSignUpLink = () => {
    track(trackingConstants.CLICK_FACEBOOK_SIGNUP_LINK);
  }

  trackGoogleSignUpLink = () => {
    track(trackingConstants.CLICK_GOOGLE_SIGNUP_LINK);
  }

  trackEmailSignUp = () => {
    track(trackingConstants.CLICK_EMAIL_SIGNUP_BUTTON);
  }

  trackClickPersonnalDataLink = () => {
    track(trackingConstants.CLICK_PERSONNAL_DATA_LINK);
  }

  trackClickFormRegister = () => {
    track(trackingConstants.CLICK_FORM_REGISTER_SUBMIT_BUTTON);
  }

  trackSignupEmailSuccess = () => {
    track(trackingConstants.SIGN_UP_EMAIL_SUCCESS);
  }

  trackSignupEmailFailure = () => {
    track(trackingConstants.SIGN_UP_EMAIL_FAILURE);
  }

  /* Login */
  trackFacebookLogin = () => {
    track(trackingConstants.CLICK_FACEBOOK_LOGIN_BUTTON);
  }

  trackGoogleLogin = () => {
    track(trackingConstants.CLICK_GOOGLE_LOGIN_BUTTON);
  }

  trackClickFormLogin = () => {
    track(trackingConstants.CLICK_FORM_LOGIN_SUBMIT_BUTTON);
  }

  trackAuthentificationSocialSuccess = (socialNetwork: string) => {
    track(trackingConstants.AUTHENTIFICATION_SOCIAL_SUCCESS, { 'social-network': socialNetwork });
  }

  trackAuthentificationSocialFailure = (socialNetwork: string) => {
    track(trackingConstants.AUTHENTIFICATION_SOCIAL_FAILURE, { 'social-network': socialNetwork });
  }

  trackLoginEmailSuccess = () => {
    track(trackingConstants.LOGIN_EMAIL_SUCCESS);
  }

  trackLoginEmailFailure = () => {
    track(trackingConstants.LOGIN_EMAIL_FAILURE);
  }

  /* Form */
  trackDisplayPassword = () => {
    track(trackingConstants.CLICK_DISPLAY_PASSWORD);
  }

  trackHidePassword = () => {
    track(trackingConstants.CLICK_HIDE_PASSWORD);
  }

  /* Sequence */
  trackExpandSequence = () => {
    track(trackingConstants.CLICK_EXPAND_SEQUENCE);
  }

  trackClickStartSequence = () => {
    track(trackingConstants.CLICK_START_SEQUENCE);
  }

  trackClickEndSequence = () => {
    track(trackingConstants.CLICK_END_SEQUENCE);
  }

  trackClickNextCard = () => {
    track(trackingConstants.CLICK_NEXT_CARD);
  }

  trackClickPreviousCard = () => {
    track(trackingConstants.CLICK_PREVIOUS_CARD);
  }

  trackDisplayFinalCard = () => {
    track(trackingConstants.DISPLAY_FINAL_CARD);
  }

  /* Votes */
  trackVote = (proposalId: string, nature: string, cardPosition: number) => {
    track(trackingConstants.CLICK_PROPOSAL_VOTE, {
      proposalId,
      nature,
      'card-position': cardPosition.toString()
    });
  }

  trackUnvote = (proposalId: string, nature: string, cardPosition: number) => {
    track(trackingConstants.CLICK_PROPOSAL_UNVOTE, {
      proposalId,
      nature,
      'card-position': cardPosition.toString()
    });
  }

  /* Qualifications */
  trackQualify = (proposalId: string, type: string, nature: string, cardPosition: number) => {
    track(trackingConstants.CLICK_PROPOSAL_QUALIFY, {
      proposalId,
      type,
      nature,
      'card-position': cardPosition.toString()
    });
  }

  trackUnqualify = (proposalId: string, type: string, nature: string, cardPosition: number) => {
    track(trackingConstants.CLICK_PROPOSAL_UNQUALIFY, {
      proposalId,
      type,
      nature,
      'card-position': cardPosition.toString()
    });
  }

  /* Results */
  trackDisplayResults = (proposalId: string, nature: string, cardPosition: number) => {
    track(trackingConstants.DISPLAY_RESULTS, {
      proposalId,
      nature,
      'card-position': cardPosition.toString()
    });
  }

  trackHideResults = (proposalId: string, nature: string, cardPosition: number) => {
    track(trackingConstants.HIDE_RESULTS, {
      proposalId,
      nature,
      'card-position': cardPosition.toString()
    });
  }

  /* Footer */
  trackClickConsultation = () => {
    track(trackingConstants.CLICK_CONSULTATION_LINK);
  }
}

export default new Tracking();
