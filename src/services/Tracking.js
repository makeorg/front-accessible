/* @flow */

import ApiService from 'Api/ApiService';
import * as trackingConstants from 'Constants/tracking';
import Logger from 'Services/Logger';
import { PATH_POST_TRACKING } from 'Constants/paths';
import FacebookTracking from './Trackers/FacebookTracking';
import TwitterTracking from './Trackers/TwitterTracking';

const
  PARENT_URL = typeof window
    !== 'undefined' && window && window.parent && document
    && document.location && (window.location !== window.parent.location)
    ? document.referrer : document.location.href;


const getPosition = (cardPosition?: number) => {
  if (cardPosition !== undefined) {
    return cardPosition.toString();
  }
  return 'single-proposal';
};

let instance = null;

class Tracking {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  track = (eventName: string, parameters: Object = {}) => {
    const eventParameters = {
      ...{
        location: 'front-accessible',
        source: ApiService.source,
        country: ApiService.country,
        language: ApiService.language,
        url: PARENT_URL
      },
      ...parameters
    };

    return ApiService.callApi(PATH_POST_TRACKING, {
      method: 'POST',
      body: JSON.stringify({
        eventName,
        eventParameters,
        eventType: 'trackCustom'
      })
    }).catch(error => Logger.logError({ ...{ source: 'Tracking api call error' }, ...error }));
  };

  trackFacebookPixel = (eventName: string, parameters: Object = {}) => {
    const eventParameters = {
      ...{
        source: ApiService.source,
        country: ApiService.country,
        language: ApiService.language,
        url: PARENT_URL,
        location: trackingConstants.LOCATION_SEQUENCE
      },
      ...parameters
    };

    FacebookTracking.trackCustom(eventName, eventParameters);
  };

  trackTwitter = (eventName: string) => {
    TwitterTracking.track(eventName);
  };

  /* On Load Tracking */
  trackDisplaySequence = (questionSlug: string) => {
    const eventName = trackingConstants.DISPLAY_SEQUENCE;

    this.track(eventName);
    this.trackFacebookPixel(eventName, { question: questionSlug });
    this.trackTwitter(eventName);
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
  trackClickProposalSubmit = (questionSlug: string) => {
    const eventName = trackingConstants.CLICK_PROPOSAL_SUBMIT;

    this.track(eventName);
    this.trackFacebookPixel(eventName, { question: questionSlug });
  }

  trackDisplayProposalSubmitValidation = (questionSlug: string) => {
    const eventName = trackingConstants.DISPLAY_PROPOSAL_SUBMIT_VALIDATION;

    this.track(eventName);
    this.trackFacebookPixel(eventName, { question: questionSlug });
    this.trackTwitter(eventName);
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
  trackClickStartSequence = (questionSlug: string) => {
    const eventName = trackingConstants.CLICK_START_SEQUENCE;

    this.track(eventName);
    this.trackFacebookPixel(eventName, { question: questionSlug });
    this.trackTwitter(eventName);
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

  trackDisplayIntroCard = (questionSlug: string) => {
    const eventName = trackingConstants.DISPLAY_INTRO_CARD;

    this.track(eventName);
    this.trackFacebookPixel(eventName, { question: questionSlug });
  }

  trackDisplayProposalPushCard = (questionSlug: string) => {
    const eventName = trackingConstants.DISPLAY_PROPOSAL_PUSH_CARD;

    this.track(eventName);
    this.trackFacebookPixel(eventName, { question: questionSlug });
    this.trackTwitter(eventName);
  }

  trackDisplaySignUpCard = (questionSlug: string) => {
    const eventName = trackingConstants.DISPLAY_SIGN_UP_CARD;

    this.track(eventName);
    this.trackFacebookPixel(eventName, { question: questionSlug });
    this.trackTwitter(eventName);
  }

  trackDisplayFinalCard = (questionSlug: string) => {
    const eventName = trackingConstants.DISPLAY_FINAL_CARD;

    this.track(eventName);
    this.trackFacebookPixel(eventName, { question: questionSlug });
  }

  /* Votes */
  trackVote = (
    questionSlug: string,
    proposalId: string,
    nature: string,
    position?: number
  ) => {
    const eventName: string = trackingConstants.CLICK_PROPOSAL_VOTE;
    const cardPosition: string = getPosition(position);
    const params = {
      proposalId,
      cardPosition,
      question: questionSlug
    };

    this.track(eventName, {
      ...params,
      ...{ nature }
    });
    this.trackFacebookPixel(eventName, params);
    this.trackTwitter(eventName);
  }

  trackFirstVote = (
    questionSlug: string,
    proposalId: string,
    nature: string,
    position?: number
  ) => {
    const eventName: string = trackingConstants.CLICK_SEQUENCE_FIRST_VOTE;
    const cardPosition = getPosition(position);
    const params = {
      proposalId,
      cardPosition,
      question: questionSlug
    };

    this.track(eventName, {
      ...params,
      ...{ nature }
    });
    this.trackFacebookPixel(eventName, params);
    this.trackTwitter(eventName);
  }

  trackUnvote = (proposalId: string, nature: string, cardPosition?: number) => {
    this.track(trackingConstants.CLICK_PROPOSAL_UNVOTE, {
      proposalId,
      nature,
      'card-position': getPosition(cardPosition)
    });
  }

  /* Qualifications */
  trackQualify = (proposalId: string, type: string, nature: string, cardPosition?: number) => {
    this.track(trackingConstants.CLICK_PROPOSAL_QUALIFY, {
      proposalId,
      type,
      nature,
      'card-position': getPosition(cardPosition)
    });
  }

  trackUnqualify = (proposalId: string, type: string, nature: string, cardPosition?: number) => {
    this.track(trackingConstants.CLICK_PROPOSAL_UNQUALIFY, {
      proposalId,
      type,
      nature,
      'card-position': getPosition(cardPosition)
    });
  }

  /* Footer */
  trackClickConsultation = () => {
    this.track(trackingConstants.CLICK_CONSULTATION_LINK);
  }
}

export default new Tracking();
