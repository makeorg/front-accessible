/* @flow */

import { ApiService } from 'Shared/api/ApiService';
import * as trackingConstants from 'Shared/constants/tracking';
import { Logger } from 'Shared/services/Logger';
import { PATH_POST_TRACKING } from 'Shared/constants/paths';
import { env } from 'Shared/env';
import { getTrackingLocation } from 'Shared/api/ApiService/getLocationContext';
import { FacebookTracking } from './Trackers/FacebookTracking';

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

const getEventParameters = (parameters: Object = {}) => {
  return {
    location: `${getTrackingLocation(window.location.pathname)}`,
    source: ApiService.source,
    country: ApiService.country,
    language: ApiService.language,
    referrer: ApiService.referrer,
    questionId: ApiService.questionId,
    url: PARENT_URL,
    ...parameters,
  };
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
    const eventParameters = getEventParameters(parameters);

    if (env.isDev()) {
      // eslint-disable-next-line no-console
      console.info(
        `Tracking: event ${eventName} params ${JSON.stringify(eventParameters)}`
      );
      return Promise.resolve();
    }
    const params = {
      eventName,
      eventParameters,
      eventType: 'trackCustom',
    };

    return ApiService.callApi(PATH_POST_TRACKING, {
      method: 'POST',
      body: JSON.stringify(params),
    }).catch(error =>
      Logger.logError({
        source: 'Tracking api call error',
        error,
        ...params,
      })
    );
  };

  trackFacebookPixel = (eventName: string, parameters: Object = {}) => {
    const eventParameters = getEventParameters(parameters);

    FacebookTracking.trackCustom(eventName, eventParameters);
  };

  /* On Load Consultation Tracking */
  trackDisplayConsultation = () => {
    const eventName = trackingConstants.DISPLAY_PAGE_OPERATION;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  trackClickActionsTab = () => {
    const eventName = trackingConstants.CLICK_ACTIONS_TAB;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  /* LearnMore Tracking */
  trackOpenLearnMore = (actionType: string) => {
    const eventName = trackingConstants.OPEN_BLOCK_LEARN_MORE;
    const parameters = { action: actionType };

    this.track(eventName, parameters);
    this.trackFacebookPixel(eventName, parameters);
  };

  trackClickLearnMore = () => {
    const eventName = trackingConstants.CLICK_BUTTON_LEARN_MORE;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  /* Open Sequence Tracking */

  trackOpenSequence = () => {
    const eventName = trackingConstants.CLICK_SEQUENCE_OPEN;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  /* Partners Block Tracking */

  trackParticipatePartners = () => {
    const eventName = trackingConstants.CLICK_PARTICIPATE_COMMUNITY;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  trackSeeMorePartners = () => {
    const eventName = trackingConstants.CLICK_SEE_MORE_COMMUNITY;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  trackLoadMoreProposals = () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_VIEW_MORE;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  /* On Load Sequence Tracking */
  trackDisplaySequence = () => {
    const eventName = trackingConstants.DISPLAY_SEQUENCE;
    Logger.logInfo({ ...getEventParameters(), trackingEvent: eventName });

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  /* Header Tracking */
  trackClickMakeLogo = () => {
    const eventName = trackingConstants.CLICK_MAKEORG_LOGO;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  /* Moderation Text Tracking */
  trackDisplayModerationText = () => {
    const eventName = trackingConstants.DISPLAY_MODERATION_TEXT;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  trackClickModerationLink = () => {
    const eventName = trackingConstants.CLICK_MODERATION_LINK;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  trackDisplayAuthentificationForm = () => {
    const eventName = trackingConstants.DISPLAY_AUTHENTIFICATION_FORM;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  trackClickPersonnalDataLink = () => {
    const eventName = trackingConstants.CLICK_PERSONNAL_DATA_LINK;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
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
  };

  trackDisplayForgotPasswordForm = () => {
    const eventName = trackingConstants.DISPLAY_FORGOTPASSWORD_FORM;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  trackClickCloseModal = () => {
    const eventName = trackingConstants.CLICK_CLOSE_MODAL;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  /* Sign Up */
  trackDisplaySignupForm = () => {
    const eventName = trackingConstants.DISPLAY_SIGN_UP_FORM;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  trackSignupEmailSuccess = () => {
    const eventName = trackingConstants.SIGN_UP_EMAIL_SUCCESS;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  trackSignupEmailFailure = () => {
    const eventName = trackingConstants.SIGN_UP_EMAIL_FAILURE;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  /* Signin */
  trackDisplaySigninForm = () => {
    const eventName = trackingConstants.DISPLAY_SIGN_IN_FORM;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  trackAuthentificationSocialSuccess = (socialNetwork: string) => {
    const eventName = trackingConstants.AUTHEN_SOCIAL_SUCCESS;
    const parameters = { 'social-network': socialNetwork };

    this.track(eventName, parameters);
    this.trackFacebookPixel(eventName, parameters);
  };

  trackAuthentificationSocialFailure = (socialNetwork: string) => {
    const eventName = trackingConstants.AUTHEN_SOCIAL_FAILURE;
    const parameters = { 'social-network': socialNetwork };

    this.track(eventName, parameters);
    this.trackFacebookPixel(eventName, parameters);
  };

  trackLoginEmailSuccess = () => {
    const eventName = trackingConstants.SIGN_IN_EMAIL_SUCCESS;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  trackLoginEmailFailure = () => {
    const eventName = trackingConstants.SIGN_IN_EMAIL_FAILURE;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  /* Sequence */
  trackClickStartSequence = () => {
    const eventName = trackingConstants.CLICK_START_SEQUENCE;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  trackClickNextCard = () => {
    const eventName = trackingConstants.CLICK_SEQUENCE_NEXT_CARD;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  trackClickProposalPushCardIgnore = () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_PUSH_CARD_IGNORE;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  trackSkipSignUpCard = () => {
    const eventName = trackingConstants.SKIP_SIGNUP_CARD;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  trackClickPreviousCard = () => {
    const eventName = trackingConstants.CLICK_SEQUENCE_PREVIOUS_CARD;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
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
  };

  trackDisplaySignUpCard = () => {
    const eventName = trackingConstants.DISPLAY_SIGN_UP_CARD;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  trackDisplayFinalCard = () => {
    const eventName = trackingConstants.DISPLAY_FINAL_CARD;

    this.track(eventName);
    this.trackFacebookPixel(eventName);
  };

  /* Tags Tracking */
  trackTag = (label: string, action: string) => {
    const eventName = trackingConstants.CLICK_TAG_ACTION;
    const parameters = {
      'tag-name': label,
      nature: action,
    };

    this.track(eventName, parameters);
    this.trackFacebookPixel(eventName, parameters);
  };

  /* Votes */
  trackVote = (proposalId: string, nature: string, position?: number) => {
    const eventName: string = trackingConstants.CLICK_PROPOSAL_VOTE;
    const cardPosition: string = getPosition(position);
    const params = {
      'card-position': cardPosition,
    };

    this.track(eventName, {
      ...params,
      proposalId,
      nature,
    });
    this.trackFacebookPixel(eventName, params);
  };

  trackFirstVote = (proposalId: string, nature: string, position?: number) => {
    const eventName: string = trackingConstants.CLICK_SEQUENCE_FIRST_VOTE;
    const cardPosition = getPosition(position);
    const params = {
      'card-position': cardPosition,
    };

    this.track(eventName, {
      ...params,
      proposalId,
      nature,
    });
    this.trackFacebookPixel(eventName, params);
  };

  trackUnvote = (proposalId: string, nature: string, position?: number) => {
    const eventName: string = trackingConstants.CLICK_PROPOSAL_UNVOTE;
    const cardPosition = getPosition(position);
    const params = {
      'card-position': cardPosition,
    };

    this.track(eventName, {
      ...params,
      proposalId,
      nature,
    });
    this.trackFacebookPixel(eventName, params);
  };

  /* Qualifications */
  trackQualify = (
    proposalId: string,
    type: string,
    nature: string,
    position?: number
  ) => {
    const eventName: string = trackingConstants.CLICK_PROPOSAL_QUALIFY;
    const cardPosition = getPosition(position);
    const params = {
      'card-position': cardPosition,
    };

    this.track(eventName, {
      ...params,
      proposalId,
      type,
      nature,
    });
    this.trackFacebookPixel(eventName, params);
  };

  trackUnqualify = (
    proposalId: string,
    type: string,
    nature: string,
    position?: number
  ) => {
    const eventName: string = trackingConstants.CLICK_PROPOSAL_UNQUALIFY;
    const cardPosition = getPosition(position);
    const params = {
      'card-position': cardPosition,
    };

    this.track(eventName, {
      ...params,
      proposalId,
      type,
      nature,
    });
    this.trackFacebookPixel(eventName, params);
  };

  /* Sharing */
  trackClickShare = (socialNetwork: string) => {
    const params = {
      'social-network': socialNetwork,
    };
    this.track(trackingConstants.CLICK_SHARE, params);
    this.trackFacebookPixel(trackingConstants.CLICK_SHARE, params);
  };

  /* Footer */
  trackClickConsultation = () => {
    this.track(trackingConstants.CLICK_CONSULTATION_LINK);
    this.trackFacebookPixel(trackingConstants.CLICK_CONSULTATION_LINK);
  };

  /* Homepage */
  trackDisplayHomepage = () => {
    this.track(trackingConstants.DISPLAY_HOMEPAGE);
    this.trackFacebookPixel(trackingConstants.DISPLAY_HOMEPAGE);
  };

  trackClickHomepageFeatured = (index: number, title: string) => {
    const eventName = trackingConstants.CLICK_HOMEPAGE_FEATURED;
    const parameters = {
      'block-position': index.toString(),
      'block-title': title,
    };

    this.track(eventName, parameters);
    this.trackFacebookPixel(eventName, parameters);
  };

  trackClickHomepageCorporate = () => {
    this.track(trackingConstants.CLICK_HOMEPAGE_CORPORATE);
    this.trackFacebookPixel(trackingConstants.CLICK_HOMEPAGE_CORPORATE);
  };

  trackClickHomepageConsultations = () => {
    this.track(trackingConstants.CLICK_HOMEPAGE_CONSULTATION);
    this.trackFacebookPixel(trackingConstants.CLICK_HOMEPAGE_CONSULTATION);
  };

  trackClickHomepageSliderArrows = () => {
    this.track(trackingConstants.CLICK_PROPOSAL_VIEW_MORE);
    this.trackFacebookPixel(trackingConstants.CLICK_PROPOSAL_VIEW_MORE);
  };
}

export const Tracking = new TrackingSingleton();
