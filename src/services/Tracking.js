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

  /* Header Tracking */
  trackClickMakeLogo = () => {
    track(trackingConstants.CLICK_MAKEORG_LOGO);
    return this;
  }

  /* Moderation Text Tracking */
  trackDisplayModerationText = () => {
    track(trackingConstants.DISPLAY_MODERATION_TEXT);
    return this;
  }

  trackClickModerationLink = () => {
    track(trackingConstants.CLICK_MODERATION_LINK);
    return this;
  }

  /* Proposal Submit */
  trackClickProposalSubmit = () => {
    track(trackingConstants.CLICK_PROPOSAL_SUBMIT_BUTTON);
    return this;
  }

  trackDisplayProposalSubmitAuthentification = () => {
    track(trackingConstants.DISPLAY_PROPOSAL_SUBMIT_AUTHENTIFICATION);
    return this;
  }

  /* Pannel */
  trackDisplayLoginPannel = () => {
    track(trackingConstants.DISPLAY_LOGIN_PANNEL);
    return this;
  }

  trackDisplayForgotPasswordPannel = () => {
    track(trackingConstants.DISPLAY_FORGOTPASSWORD_PANNEL);
    return this;
  }

  trackClickClosePannel = () => {
    track(trackingConstants.CLICK_CLOSE_PANNEL);
    return this;
  }

  /* Sign Up Pannel */
  trackDisplaySignupPannel = () => {
    track(trackingConstants.DISPLAY_SIGNUP_PANNEL);
    return this;
  }

  trackFacebookSignUpButton = () => {
    track(trackingConstants.CLICK_FACEBOOK_SIGNUP_BUTTON);
    return this;
  }

  trackGoogleSignUpButton = () => {
    track(trackingConstants.CLICK_GOOGLE_SIGNUP_BUTTON);
    return this;
  }

  trackFacebookSignUpLink = () => {
    track(trackingConstants.CLICK_FACEBOOK_SIGNUP_LINK);
    return this;
  }

  trackGoogleSignUpLink = () => {
    track(trackingConstants.CLICK_GOOGLE_SIGNUP_LINK);
    return this;
  }

  trackEmailSignUp = () => {
    track(trackingConstants.CLICK_EMAIL_SIGNUP_BUTTON);
    return this;
  }

  trackClickPersonnalDataLink = () => {
    track(trackingConstants.CLICK_PERSONNAL_DATA_LINK);
    return this;
  }

  trackClickFormRegister = () => {
    track(trackingConstants.CLICK_FORM_REGISTER_SUBMIT_BUTTON);
    return this;
  }

  trackSignupEmailSuccess = () => {
    track(trackingConstants.SIGN_UP_EMAIL_SUCCESS);
    return this;
  }

  trackSignupEmailFailure = () => {
    track(trackingConstants.SIGN_UP_EMAIL_FAILURE);
    return this;
  }

  /* Login */
  trackFacebookLogin = () => {
    track(trackingConstants.CLICK_FACEBOOK_LOGIN_BUTTON);
    return this;
  }

  trackGoogleLogin = () => {
    track(trackingConstants.CLICK_GOOGLE_LOGIN_BUTTON);
    return this;
  }

  trackClickFormLogin = () => {
    track(trackingConstants.CLICK_FORM_LOGIN_SUBMIT_BUTTON);
    return this;
  }

  trackAuthentificationSocialSuccess = (socialNetwork: string) => {
    track(trackingConstants.AUTHENTIFICATION_SOCIAL_SUCCESS, { 'social-network': socialNetwork });
    return this;
  }

  trackAuthentificationSocialFailure = (socialNetwork: string) => {
    track(trackingConstants.AUTHENTIFICATION_SOCIAL_FAILURE, { 'social-network': socialNetwork });
    return this;
  }

  trackLoginEmailSuccess = () => {
    track(trackingConstants.LOGIN_EMAIL_SUCCESS);
    return this;
  }

  trackLoginEmailFailure = () => {
    track(trackingConstants.LOGIN_EMAIL_FAILURE);
    return this;
  }

  /* Form */
  trackDisplayPassword = () => {
    track(trackingConstants.CLICK_DISPLAY_PASSWORD);
    return this;
  }

  trackHidePassword = () => {
    track(trackingConstants.CLICK_HIDE_PASSWORD);
    return this;
  }

  /* Sequence */
  trackExpandSequence = () => {
    track(trackingConstants.CLICK_EXPAND_SEQUENCE);
    return this;
  }

  trackClickStartSequence = () => {
    track(trackingConstants.CLICK_START_SEQUENCE);
    return this;
  }

  trackClickEndSequence = () => {
    track(trackingConstants.CLICK_END_SEQUENCE);
    return this;
  }

  trackClickNextCard = () => {
    track(trackingConstants.CLICK_NEXT_CARD);
    return this;
  }

  trackClickPreviousCard = () => {
    track(trackingConstants.CLICK_PREVIOUS_CARD);
    return this;
  }

  trackDisplayFinalCard = () => {
    track(trackingConstants.DISPLAY_FINAL_CARD);
    return this;
  }

  /* Votes */
  trackVote = (proposalId: string, nature: string, cardPosition: number) => {
    track(trackingConstants.CLICK_PROPOSAL_VOTE, {
      proposalId,
      nature,
      'card-position': cardPosition.toString()
    });
    return this;
  }

  trackUnvote = (proposalId: string, nature: string, cardPosition: number) => {
    track(trackingConstants.CLICK_PROPOSAL_UNVOTE, {
      proposalId,
      nature,
      'card-position': cardPosition.toString()
    });
    return this;
  }

  /* Qualifications */
  trackQualify = (proposalId: string, type: string, nature: string, cardPosition: number) => {
    track(trackingConstants.CLICK_PROPOSAL_QUALIFY, {
      proposalId,
      type,
      nature,
      'card-position': cardPosition.toString()
    });
    return this;
  }

  trackUnqualify = (proposalId: string, type: string, nature: string, cardPosition: number) => {
    track(trackingConstants.CLICK_PROPOSAL_UNQUALIFY, {
      proposalId,
      type,
      nature,
      'card-position': cardPosition.toString()
    });
    return this;
  }

  /* Results */
  trackDisplayResults = (proposalId: string, nature: string, cardPosition: number) => {
    track(trackingConstants.DISPLAY_RESULTS, {
      proposalId,
      nature,
      'card-position': cardPosition.toString()
    });
    return this;
  }

  trackHideResults = (proposalId: string, nature: string, cardPosition: number) => {
    track(trackingConstants.HIDE_RESULTS, {
      proposalId,
      nature,
      'card-position': cardPosition.toString()
    });
    return this;
  }

  /* Footer */
  trackClickConsultation = () => {
    track(trackingConstants.CLICK_CONSULTATION_LINK);
    return this;
  }
}

export default new Tracking();
