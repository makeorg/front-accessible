/* @flow */

import { ApiService } from 'Shared/api/ApiService';
import * as trackingConstants from 'Shared/constants/tracking';
import { Logger } from 'Shared/services/Logger';
import { PATH_POST_TRACKING } from 'Shared/constants/paths';
import { env } from 'Shared/env';
import { getTrackingLocation } from 'Shared/api/ApiService/getLocationContext';
import { FacebookTracking } from './Trackers/FacebookTracking';

const parentUrl = () => {
  return typeof window !== 'undefined' && window && window.location
    ? window.location.href
    : undefined;
};

const getPosition = (cardPosition?: number): string => {
  if (cardPosition !== undefined) {
    return cardPosition.toString();
  }

  return 'single-proposal';
};

const getEventParameters = (parameters: Object = {}) => {
  return {
    location: getTrackingLocation(window.location.pathname),
    source: ApiService.source,
    country: ApiService.country,
    language: ApiService.language,
    referrer: ApiService.referrer,
    questionId: ApiService.questionId,
    url: parentUrl(),
    ...parameters,
  };
};

export const track = (eventName: string, parameters: Object = {}) => {
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

export const trackFacebookPixel = (
  eventName: string,
  parameters: Object = {}
) => {
  const eventParameters = getEventParameters(parameters);

  FacebookTracking.trackCustom(eventName, eventParameters);
};

export const TrackingService = {
  track,
  trackFacebookPixel,
};

/* On Load Consultation Tracking */
export const trackDisplayConsultation = (pageType: string) => {
  const eventName = trackingConstants.DISPLAY_PAGE_OPERATION;
  const parameters = { type: pageType };

  TrackingService.track(eventName, parameters);
  TrackingService.trackFacebookPixel(eventName, parameters);
};

export const trackClickActionsTab = () => {
  const eventName = trackingConstants.CLICK_ACTIONS_TAB;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

/* LearnMore Tracking */
export const trackOpenLearnMore = (actionType: string) => {
  const eventName = trackingConstants.OPEN_BLOCK_LEARN_MORE;
  const parameters = { action: actionType };

  TrackingService.track(eventName, parameters);
  TrackingService.trackFacebookPixel(eventName, parameters);
};

export const trackClickLearnMore = () => {
  const eventName = trackingConstants.CLICK_BUTTON_LEARN_MORE;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

/* Open Sequence Tracking */

export const trackOpenSequence = () => {
  const eventName = trackingConstants.CLICK_SEQUENCE_OPEN;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

/* Partners Block Tracking */

export const trackParticipatePartners = () => {
  const eventName = trackingConstants.CLICK_PARTICIPATE_COMMUNITY;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

export const trackSeeMorePartners = () => {
  const eventName = trackingConstants.CLICK_SEE_MORE_COMMUNITY;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

export const trackLoadMoreProposals = (pageCount?: number) => {
  let pageNumber;
  if (pageCount) {
    pageNumber = pageCount.toString();
  }
  const eventName = trackingConstants.CLICK_PROPOSAL_VIEW_MORE;
  const parameters = { page: pageNumber };

  TrackingService.track(eventName, parameters);
  TrackingService.trackFacebookPixel(eventName, parameters);
};

/* On Load Sequence Tracking */
export const trackDisplaySequence = () => {
  const eventName = trackingConstants.DISPLAY_SEQUENCE;
  Logger.logInfo({ ...getEventParameters(), trackingEvent: eventName });

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

/* Header Tracking */
export const trackClickMakeLogo = () => {
  const eventName = trackingConstants.CLICK_MAKEORG_LOGO;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

/* Moderation Text Tracking */
export const trackDisplayModerationText = () => {
  const eventName = trackingConstants.DISPLAY_MODERATION_TEXT;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

export const trackClickModerationLink = () => {
  const eventName = trackingConstants.CLICK_MODERATION_LINK;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

export const trackDisplayAuthentificationForm = () => {
  const eventName = trackingConstants.DISPLAY_AUTHENTIFICATION_FORM;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

export const trackClickPersonnalDataLink = () => {
  const eventName = trackingConstants.CLICK_PERSONNAL_DATA_LINK;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

/* Proposal Submit */
export const trackClickProposalSubmit = () => {
  const eventName = trackingConstants.CLICK_PROPOSAL_SUBMIT;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

export const trackDisplayProposalSubmitValidation = () => {
  const eventName = trackingConstants.DISPLAY_PROPOSAL_SUBMIT_VALIDATION;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

export const trackDisplayForgotPasswordForm = () => {
  const eventName = trackingConstants.DISPLAY_FORGOTPASSWORD_FORM;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

export const trackClickCloseModal = (modalContext: string) => {
  const eventName = trackingConstants.CLICK_CLOSE_MODAL;
  const parameters = { context: modalContext };

  TrackingService.track(eventName, parameters);
  TrackingService.trackFacebookPixel(eventName, parameters);
};

/* Sign Up */
export const trackDisplaySignupForm = () => {
  const eventName = trackingConstants.DISPLAY_SIGN_UP_FORM;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

export const trackSignupEmailSuccess = () => {
  const eventName = trackingConstants.SIGN_UP_EMAIL_SUCCESS;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

export const trackSignupEmailFailure = () => {
  const eventName = trackingConstants.SIGN_UP_EMAIL_FAILURE;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

/* Signin */
export const trackDisplaySigninForm = () => {
  const eventName = trackingConstants.DISPLAY_SIGN_IN_FORM;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

export const trackAuthentificationSocialSuccess = (socialNetwork: string) => {
  const eventName = trackingConstants.AUTHEN_SOCIAL_SUCCESS;
  const parameters = { 'social-network': socialNetwork };

  TrackingService.track(eventName, parameters);
  TrackingService.trackFacebookPixel(eventName, parameters);
};

export const trackAuthentificationSocialFailure = (socialNetwork: string) => {
  const eventName = trackingConstants.AUTHEN_SOCIAL_FAILURE;
  const parameters = { 'social-network': socialNetwork };

  TrackingService.track(eventName, parameters);
  TrackingService.trackFacebookPixel(eventName, parameters);
};

export const trackLoginEmailSuccess = () => {
  const eventName = trackingConstants.SIGN_IN_EMAIL_SUCCESS;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

export const trackLoginEmailFailure = () => {
  const eventName = trackingConstants.SIGN_IN_EMAIL_FAILURE;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

/* Sequence */
export const trackClickStartSequence = () => {
  const eventName = trackingConstants.CLICK_START_SEQUENCE;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

export const trackClickNextCard = () => {
  const eventName = trackingConstants.CLICK_SEQUENCE_NEXT_CARD;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

export const trackClickProposalPushCardIgnore = () => {
  const eventName = trackingConstants.CLICK_PROPOSAL_PUSH_CARD_IGNORE;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

export const trackSkipSignUpCard = () => {
  const eventName = trackingConstants.SKIP_SIGNUP_CARD;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

export const trackClickPreviousCard = () => {
  const eventName = trackingConstants.CLICK_SEQUENCE_PREVIOUS_CARD;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

export const trackDisplayIntroCard = () => {
  const eventName = trackingConstants.DISPLAY_INTRO_CARD;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

export const trackDisplayProposalPushCard = () => {
  const eventName = trackingConstants.DISPLAY_PROPOSAL_PUSH_CARD;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

export const trackDisplaySignUpCard = () => {
  const eventName = trackingConstants.DISPLAY_SIGN_UP_CARD;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

export const trackDisplayFinalCard = () => {
  const eventName = trackingConstants.DISPLAY_FINAL_CARD;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

/* Tags Tracking */
export const trackTag = (label: string, action: string) => {
  const eventName = trackingConstants.CLICK_TAG_ACTION;
  const parameters = {
    'tag-name': label,
    nature: action,
  };

  TrackingService.track(eventName, parameters);
  TrackingService.trackFacebookPixel(eventName, parameters);
};

/* Votes */
export const trackVote = (
  proposalId: string,
  nature: string,
  position?: number
) => {
  const eventName: string = trackingConstants.CLICK_PROPOSAL_VOTE;
  const cardPosition: string = getPosition(position);
  const params = {
    'card-position': cardPosition,
  };

  TrackingService.track(eventName, {
    ...params,
    proposalId,
    nature,
  });
  TrackingService.trackFacebookPixel(eventName, params);
};

export const trackFirstVote = (
  proposalId: string,
  nature: string,
  position?: number
) => {
  const eventName: string = trackingConstants.CLICK_SEQUENCE_FIRST_VOTE;
  const cardPosition = getPosition(position);
  const params = {
    'card-position': cardPosition,
  };

  TrackingService.track(eventName, {
    ...params,
    proposalId,
    nature,
  });
  TrackingService.trackFacebookPixel(eventName, params);
};

export const trackUnvote = (
  proposalId: string,
  nature: string,
  position?: number
) => {
  const eventName: string = trackingConstants.CLICK_PROPOSAL_UNVOTE;
  const cardPosition = getPosition(position);
  const params = {
    'card-position': cardPosition,
  };

  TrackingService.track(eventName, {
    ...params,
    proposalId,
    nature,
  });
  TrackingService.trackFacebookPixel(eventName, params);
};

/* Qualifications */
export const trackQualify = (
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

  TrackingService.track(eventName, {
    ...params,
    proposalId,
    type,
    nature,
  });
  TrackingService.trackFacebookPixel(eventName, params);
};

export const trackUnqualify = (
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

  TrackingService.track(eventName, {
    ...params,
    proposalId,
    type,
    nature,
  });
  TrackingService.trackFacebookPixel(eventName, params);
};

/* Sharing */
export const trackClickShare = (socialNetwork: string) => {
  const params = {
    'social-network': socialNetwork,
  };
  TrackingService.track(trackingConstants.CLICK_SHARE, params);
  TrackingService.trackFacebookPixel(trackingConstants.CLICK_SHARE, params);
};

/* Footer */
export const trackClickConsultation = () => {
  TrackingService.track(trackingConstants.CLICK_CONSULTATION_LINK);
  TrackingService.trackFacebookPixel(trackingConstants.CLICK_CONSULTATION_LINK);
};

/* Homepage */
export const trackDisplayHomepage = () => {
  TrackingService.track(trackingConstants.DISPLAY_HOMEPAGE);
  TrackingService.trackFacebookPixel(trackingConstants.DISPLAY_HOMEPAGE);
};

export const trackClickHomepageFeatured = (index: number, title: string) => {
  const eventName = trackingConstants.CLICK_HOMEPAGE_FEATURED;
  const parameters = {
    'block-position': index.toString(),
    'block-title': title,
  };

  TrackingService.track(eventName, parameters);
  TrackingService.trackFacebookPixel(eventName, parameters);
};

export const trackClickHomepageCorporate = () => {
  TrackingService.track(trackingConstants.CLICK_HOMEPAGE_CORPORATE);
  TrackingService.trackFacebookPixel(
    trackingConstants.CLICK_HOMEPAGE_CORPORATE
  );
};

export const trackClickHomepageConsultations = () => {
  TrackingService.track(trackingConstants.CLICK_HOMEPAGE_CONSULTATION);
  TrackingService.trackFacebookPixel(
    trackingConstants.CLICK_HOMEPAGE_CONSULTATION
  );
};

export const trackClickHomepageSliderArrows = () => {
  TrackingService.track(trackingConstants.CLICK_PROPOSAL_VIEW_MORE);
  TrackingService.trackFacebookPixel(
    trackingConstants.CLICK_PROPOSAL_VIEW_MORE
  );
};

/** Search */
export const trackClickSubmitSearch = () => {
  TrackingService.track(trackingConstants.CLICK_NAVBAR_SEARCH);
  TrackingService.trackFacebookPixel(trackingConstants.CLICK_NAVBAR_SEARCH);
};

export const trackDisplaySearchMainResult = () => {
  TrackingService.track(trackingConstants.DISPLAY_SEARCH_MAIN_RESULTS);
  TrackingService.trackFacebookPixel(
    trackingConstants.DISPLAY_SEARCH_MAIN_RESULTS
  );
};

export const trackDisplaySearchProposalsResult = () => {
  TrackingService.track(trackingConstants.DISPLAY_SEARCH_PROPOSALS);
  TrackingService.trackFacebookPixel(
    trackingConstants.DISPLAY_SEARCH_PROPOSALS
  );
};

export const trackDisplaySearchOragnisationsResult = () => {
  TrackingService.track(trackingConstants.DISPLAY_SEARCH_ORGANISATIONS);
  TrackingService.trackFacebookPixel(
    trackingConstants.DISPLAY_SEARCH_ORGANISATIONS
  );
};

export const trackDisplaySearchConsultationsResult = () => {
  TrackingService.track(trackingConstants.DISPLAY_SEARCH_CONSULTATIONS);
  TrackingService.trackFacebookPixel(
    trackingConstants.DISPLAY_SEARCH_CONSULTATIONS
  );
};

export const trackClickSearchReturn = () => {
  TrackingService.track(trackingConstants.CLICK_SEARCH_RETURN);
  TrackingService.trackFacebookPixel(trackingConstants.CLICK_SEARCH_RETURN);
};

/* eslint-disable import/no-default-export */
export default TrackingService;
