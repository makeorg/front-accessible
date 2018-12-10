/* @flow */

import ApiService from 'Api/ApiService';
import * as trackingConstants from 'Constants/tracking';
import Logger from 'Services/Logger';

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
  }).catch(error => Logger.logError(error));
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

  trackDisplayAuthentificationForm = () => {
    track(trackingConstants.DISPLAY_AUTHENTIFICATION_FORM);
  }

  trackClickPersonnalDataLink = () => {
    track(trackingConstants.CLICK_PERSONNAL_DATA_LINK);
  }

  /* Proposal Submit */
  trackClickProposalSubmit = () => {
    track(trackingConstants.CLICK_PROPOSAL_SUBMIT);
  }

  trackDisplayProposalSubmitValidation = () => {
    track(trackingConstants.DISPLAY_PROPOSAL_SUBMIT_VALIDATION);
  }


  trackDisplayForgotPasswordForm = () => {
    track(trackingConstants.DISPLAY_FORGOTPASSWORD_FORM);
  }

  trackClickClosePannel = () => {
    track(trackingConstants.CLICK_CLOSE_PANNEL);
  }

  /* Sign Up Pannel */
  trackDisplaySignupForm = () => {
    track(trackingConstants.DISPLAY_SIGN_UP_FORM);
  }

  trackSignupEmailSuccess = () => {
    track(trackingConstants.SIGN_UP_EMAIL_SUCCESS);
  }

  trackSignupEmailFailure = () => {
    track(trackingConstants.SIGN_UP_EMAIL_FAILURE);
  }

  /* Signin */
  trackDisplaySigninForm = () => {
    track(trackingConstants.DISPLAY_SIGN_IN_FORM);
  }

  trackAuthentificationSocialSuccess = (socialNetwork: string) => {
    track(trackingConstants.AUTHEN_SOCIAL_SUCCESS, { 'social-network': socialNetwork });
  }

  trackAuthentificationSocialFailure = (socialNetwork: string) => {
    track(trackingConstants.AUTHEN_SOCIAL_FAILURE, { 'social-network': socialNetwork });
  }

  trackLoginEmailSuccess = () => {
    track(trackingConstants.SIGN_IN_EMAIL_SUCCESS);
  }

  trackLoginEmailFailure = () => {
    track(trackingConstants.SIGN_IN_EMAIL_FAILURE);
  }


  /* Sequence */
  trackClickStartSequence = () => {
    track(trackingConstants.CLICK_START_SEQUENCE);
  }

  trackClickNextCard = () => {
    track(trackingConstants.CLICK_SEQUENCE_NEXT_CARD);
  }

  trackClickPreviousCard = () => {
    track(trackingConstants.CLICK_SEQUENCE_PREVIOUS_CARD);
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


  /* Footer */
  trackClickConsultation = () => {
    track(trackingConstants.CLICK_CONSULTATION_LINK);
  }
}

export default new Tracking();
