/* @flow */

import ApiService from 'Api/ApiService';
import * as trackingConstants from 'Constants/tracking';
import Logger from 'Services/Logger';
import { PATH_POST_TRACKING } from 'Constants/paths';

const
  PARENT_URL = typeof window
  !== 'undefined' && window && window.parent && document
  && document.location && (window.location !== window.parent.location)
    ? document.referrer : document.location.href;

let instance = null;

class Tracking {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  track = (eventName: string, parameters: Object = {}) => {
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
    }).catch(error => Logger.logError({ ...{ source: 'Tracking api call error' }, ...error }));
  };

  /* On Load Tracking */
  trackDisplaySequence = () => {
    this.track(trackingConstants.DISPLAY_SEQUENCE);
  }

  /* Header Tracking */
  trackClickMakeLogo = () => {
    this.track(trackingConstants.CLICK_MAKEORG_LOGO);
  }

  /* Moderation Text Tracking */
  trackDisplayModerationText = () => {
    this.track(trackingConstants.DISPLAY_MODERATION_TEXT);
  }

  trackClickModerationLink = () => {
    this.track(trackingConstants.CLICK_MODERATION_LINK);
  }

  trackDisplayAuthentificationForm = () => {
    this.track(trackingConstants.DISPLAY_AUTHENTIFICATION_FORM);
  }

  trackClickPersonnalDataLink = () => {
    this.track(trackingConstants.CLICK_PERSONNAL_DATA_LINK);
  }

  /* Proposal Submit */
  trackClickProposalSubmit = () => {
    this.track(trackingConstants.CLICK_PROPOSAL_SUBMIT);
  }

  trackDisplayProposalSubmitValidation = () => {
    this.track(trackingConstants.DISPLAY_PROPOSAL_SUBMIT_VALIDATION);
  }


  trackDisplayForgotPasswordForm = () => {
    this.track(trackingConstants.DISPLAY_FORGOTPASSWORD_FORM);
  }

  trackClickClosePannel = () => {
    this.track(trackingConstants.CLICK_CLOSE_PANNEL);
  }

  /* Sign Up Pannel */
  trackDisplaySignupForm = () => {
    this.track(trackingConstants.DISPLAY_SIGN_UP_FORM);
  }

  trackSignupEmailSuccess = () => {
    this.track(trackingConstants.SIGN_UP_EMAIL_SUCCESS);
  }

  trackSignupEmailFailure = () => {
    this.track(trackingConstants.SIGN_UP_EMAIL_FAILURE);
  }

  /* Signin */
  trackDisplaySigninForm = () => {
    this.track(trackingConstants.DISPLAY_SIGN_IN_FORM);
  }

  trackAuthentificationSocialSuccess = (socialNetwork: string) => {
    this.track(trackingConstants.AUTHEN_SOCIAL_SUCCESS, { 'social-network': socialNetwork });
  }

  trackAuthentificationSocialFailure = (socialNetwork: string) => {
    this.track(trackingConstants.AUTHEN_SOCIAL_FAILURE, { 'social-network': socialNetwork });
  }

  trackLoginEmailSuccess = () => {
    this.track(trackingConstants.SIGN_IN_EMAIL_SUCCESS);
  }

  trackLoginEmailFailure = () => {
    this.track(trackingConstants.SIGN_IN_EMAIL_FAILURE);
  }

  /* Sequence */
  trackClickStartSequence = () => {
    this.track(trackingConstants.CLICK_START_SEQUENCE);
  }

  trackClickNextCard = () => {
    this.track(trackingConstants.CLICK_SEQUENCE_NEXT_CARD);
  }

  trackClickProposalPushCardIgnore = () => {
    this.track(trackingConstants.CLICK_PROPOSAL_PUSH_CARD_IGNORE);
  }

  trackSkipSignUpCard = () => {
    this.track(trackingConstants.SKIP_SIGNUP_CARD);
  }

  trackClickPreviousCard = () => {
    this.track(trackingConstants.CLICK_SEQUENCE_PREVIOUS_CARD);
  }

  trackDisplayFinalCard = () => {
    this.track(trackingConstants.DISPLAY_FINAL_CARD);
  }

  /* Votes */
  trackVote = (proposalId: string, nature: string, cardPosition: number) => {
    this.track(trackingConstants.CLICK_PROPOSAL_VOTE, {
      proposalId,
      nature,
      'card-position': cardPosition.toString()
    });
  }

  trackUnvote = (proposalId: string, nature: string, cardPosition: number) => {
    this.track(trackingConstants.CLICK_PROPOSAL_UNVOTE, {
      proposalId,
      nature,
      'card-position': cardPosition.toString()
    });
  }

  /* Qualifications */
  trackQualify = (proposalId: string, type: string, nature: string, cardPosition: number) => {
    this.track(trackingConstants.CLICK_PROPOSAL_QUALIFY, {
      proposalId,
      type,
      nature,
      'card-position': cardPosition.toString()
    });
  }

  trackUnqualify = (proposalId: string, type: string, nature: string, cardPosition: number) => {
    this.track(trackingConstants.CLICK_PROPOSAL_UNQUALIFY, {
      proposalId,
      type,
      nature,
      'card-position': cardPosition.toString()
    });
  }

  /* Footer */
  trackClickConsultation = () => {
    this.track(trackingConstants.CLICK_CONSULTATION_LINK);
  }
}

export default new Tracking();
