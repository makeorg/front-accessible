/* @flow */

import { ApiService } from 'Shared/api/ApiService';
import * as trackingConstants from 'Shared/constants/tracking';
import { Logger } from 'Shared/services/Logger';
import { PATH_POST_TRACKING } from 'Shared/constants/paths';
import { env } from 'Shared/env';
import { getTrackingLocation } from 'Shared/api/ApiService/getLocationContext';
import { FacebookTracking } from './Trackers/FacebookTracking';
import { TwitterTracking } from './Trackers/TwitterTracking';

const PARENT_URL =
  typeof window !== 'undefined' && window && window.location
    ? window.location.href
    : undefined;

const getPosition = (cardPosition?: number): string => {
  if (cardPosition !== undefined) {
    return cardPosition.toString();
  }
  return 'single-proposal';
};

let instance = null;

class TrackingSingleton {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  track = (eventName: string, parameters: Object = {}) => {
    const eventParameters = {
      location: `${getTrackingLocation(window.location.pathname)}`,
      source: ApiService.source,
      country: ApiService.country,
      language: ApiService.language,
      referrer: ApiService.referrer,
      questionId: ApiService.questionId,
      url: PARENT_URL,
      ...parameters,
    };

    if (env.isDev()) {
      // eslint-disable-next-line no-console
      console.info(
        `Tracking: event ${eventName} params ${JSON.stringify(eventParameters)}`
      );
      return Promise.resolve();
    }

    return ApiService.callApi(PATH_POST_TRACKING, {
      method: 'POST',
      body: JSON.stringify({
        eventName,
        eventParameters,
        eventType: 'trackCustom',
      }),
    }).catch(error =>
      Logger.logError({
        ...{ source: 'Tracking api call error' },
        ...{ error },
      })
    );
  };

  trackFacebookPixel = (eventName: string, parameters: Object = {}) => {
    const fbEventParameters = {
      location: `${getTrackingLocation(window.location.pathname)}`,
      source: ApiService.source,
      country: ApiService.country,
      language: ApiService.language,
      referrer: ApiService.referrer,
      url: PARENT_URL,
      ...parameters,
    };

    FacebookTracking.trackCustom(eventName, fbEventParameters);
  };

  trackTwitter = (eventName: string) => {
    TwitterTracking.track(eventName);
  };

  /* On Load Consultation Tracking */
  trackDisplayConsultation = () => {
    const eventName = trackingConstants.DISPLAY_PAGE_OPERATION;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
    this.trackTwitter(eventName);
  };

  /* LearnMore Tracking */
  trackOpenLearnMore = (actionType: string) => {
    const eventName = trackingConstants.OPEN_BLOCK_LEARN_MORE;

    this.track(eventName, { action: actionType });
  };

  trackClickLearnMore = () => {
    const eventName = trackingConstants.CLICK_BUTTON_LEARN_MORE;

    this.track(eventName);
  };

  /* Open Sequence Tracking */

  trackOpenSequence = () => {
    const eventName = trackingConstants.CLICK_SEQUENCE_OPEN;

    this.track(eventName);
  };

  /* Partners Block Tracking */

  trackParticipatePartners = () => {
    const eventName = trackingConstants.CLICK_PARTICIPATE_COMMUNITY;

    this.track(eventName);
  };

  trackSeeMorePartners = () => {
    const eventName = trackingConstants.CLICK_SEE_MORE_COMMUNITY;

    this.track(eventName);
  };

  /* On Load Sequence Tracking */
  trackDisplaySequence = () => {
    const eventName = trackingConstants.DISPLAY_SEQUENCE;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
    this.trackTwitter(eventName);
  };

  /* Header Tracking */
  trackClickMakeLogo = () => {
    this.track(trackingConstants.CLICK_MAKEORG_LOGO);
  };

  /* Moderation Text Tracking */
  trackDisplayModerationText = () => {
    this.track(trackingConstants.DISPLAY_MODERATION_TEXT);
  };

  trackClickModerationLink = () => {
    this.track(trackingConstants.CLICK_MODERATION_LINK);
  };

  trackDisplayAuthentificationForm = () => {
    this.track(trackingConstants.DISPLAY_AUTHENTIFICATION_FORM);
  };

  trackClickPersonnalDataLink = () => {
    this.track(trackingConstants.CLICK_PERSONNAL_DATA_LINK);
  };

  /* Proposal Submit */
  trackClickProposalSubmit = () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_SUBMIT;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  trackDisplayProposalSubmitValidation = () => {
    const eventName = trackingConstants.DISPLAY_PROPOSAL_SUBMIT_VALIDATION;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
    this.trackTwitter(eventName);
  };

  trackDisplayForgotPasswordForm = () => {
    this.track(trackingConstants.DISPLAY_FORGOTPASSWORD_FORM);
  };

  trackClickCloseModal = () => {
    this.track(trackingConstants.CLICK_CLOSE_MODAL);
  };

  /* Sign Up */
  trackDisplaySignupForm = () => {
    this.track(trackingConstants.DISPLAY_SIGN_UP_FORM);
  };

  trackSignupEmailSuccess = () => {
    this.track(trackingConstants.SIGN_UP_EMAIL_SUCCESS);
  };

  trackSignupEmailFailure = () => {
    this.track(trackingConstants.SIGN_UP_EMAIL_FAILURE);
  };

  /* Signin */
  trackDisplaySigninForm = () => {
    this.track(trackingConstants.DISPLAY_SIGN_IN_FORM);
  };

  trackAuthentificationSocialSuccess = (socialNetwork: string) => {
    this.track(trackingConstants.AUTHEN_SOCIAL_SUCCESS, {
      'social-network': socialNetwork,
    });
  };

  trackAuthentificationSocialFailure = (socialNetwork: string) => {
    this.track(trackingConstants.AUTHEN_SOCIAL_FAILURE, {
      'social-network': socialNetwork,
    });
  };

  trackLoginEmailSuccess = () => {
    this.track(trackingConstants.SIGN_IN_EMAIL_SUCCESS);
  };

  trackLoginEmailFailure = () => {
    this.track(trackingConstants.SIGN_IN_EMAIL_FAILURE);
  };

  /* Sequence */
  trackClickStartSequence = () => {
    const eventName = trackingConstants.CLICK_START_SEQUENCE;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
    this.trackTwitter(eventName);
  };

  trackClickNextCard = () => {
    this.track(trackingConstants.CLICK_SEQUENCE_NEXT_CARD);
  };

  trackClickProposalPushCardIgnore = () => {
    this.track(trackingConstants.CLICK_PROPOSAL_PUSH_CARD_IGNORE);
  };

  trackSkipSignUpCard = () => {
    this.track(trackingConstants.SKIP_SIGNUP_CARD);
  };

  trackClickPreviousCard = () => {
    this.track(trackingConstants.CLICK_SEQUENCE_PREVIOUS_CARD);
  };

  trackDisplayIntroCard = () => {
    const eventName = trackingConstants.DISPLAY_INTRO_CARD;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  trackDisplayProposalPushCard = () => {
    const eventName = trackingConstants.DISPLAY_PROPOSAL_PUSH_CARD;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
    this.trackTwitter(eventName);
  };

  trackDisplaySignUpCard = () => {
    const eventName = trackingConstants.DISPLAY_SIGN_UP_CARD;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
    this.trackTwitter(eventName);
  };

  trackDisplayFinalCard = () => {
    const eventName = trackingConstants.DISPLAY_FINAL_CARD;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  /* Tags Tracking */
  trackTag = (label: string, action: string) => {
    const eventName = trackingConstants.CLICK_TAG_ACTION;

    this.track(eventName, { 'tag-name': label, nature: action });
  };

  /* Votes */
  trackVote = (proposalId: string, nature: string, position?: number) => {
    const eventName: string = trackingConstants.CLICK_PROPOSAL_VOTE;
    const cardPosition: string = getPosition(position);
    const params = {
      proposalId,
      cardPosition,
    };

    this.track(eventName, {
      ...params,
      nature,
    });
    this.trackFacebookPixel(eventName, params);
    this.trackTwitter(eventName);
  };

  trackFirstVote = (proposalId: string, nature: string, position?: number) => {
    const eventName: string = trackingConstants.CLICK_SEQUENCE_FIRST_VOTE;
    const cardPosition = getPosition(position);
    const params = {
      proposalId,
      cardPosition,
    };

    this.track(eventName, {
      ...params,
      nature,
    });
    this.trackFacebookPixel(eventName, params);
    this.trackTwitter(eventName);
  };

  trackUnvote = (proposalId: string, nature: string, cardPosition?: number) => {
    this.track(trackingConstants.CLICK_PROPOSAL_UNVOTE, {
      proposalId,
      nature,
      'card-position': getPosition(cardPosition),
    });
  };

  /* Qualifications */
  trackQualify = (
    proposalId: string,
    type: string,
    nature: string,
    cardPosition?: number
  ) => {
    this.track(trackingConstants.CLICK_PROPOSAL_QUALIFY, {
      proposalId,
      type,
      nature,
      'card-position': getPosition(cardPosition),
    });
  };

  trackUnqualify = (
    proposalId: string,
    type: string,
    nature: string,
    cardPosition?: number
  ) => {
    this.track(trackingConstants.CLICK_PROPOSAL_UNQUALIFY, {
      proposalId,
      type,
      nature,
      'card-position': getPosition(cardPosition),
    });
  };

  /* Footer */
  trackClickConsultation = () => {
    this.track(trackingConstants.CLICK_CONSULTATION_LINK);
  };
}

export const Tracking = new TrackingSingleton();
