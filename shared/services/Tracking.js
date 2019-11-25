/* @flow */

import { ApiService } from 'Shared/api/ApiService';
import * as trackingConstants from 'Shared/constants/tracking';
import { Logger } from 'Shared/services/Logger';
import { PATH_POST_TRACKING } from 'Shared/constants/paths';
import { env } from 'Shared/env';
import { getTrackingLocation } from 'Shared/api/ApiService/getLocationContext';
import { FacebookTracking } from './Trackers/FacebookTracking';
import { TwitterTracking } from './Trackers/TwitterTracking';

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

export const trackTwitterPixel = (eventName: string) => {
  TwitterTracking.track(eventName);
};

export const TrackingService = {
  track,
  trackFacebookPixel,
  trackTwitterPixel,
  sendAllTrackers: (eventName: string, parameters?: Object = {}) => {
    TrackingService.track(eventName, parameters);
    TrackingService.trackFacebookPixel(eventName, parameters);
    TrackingService.trackTwitterPixel(eventName);
  },
};

/* On Load Consultation Tracking */
export const trackDisplayConsultation = (pageType: string) => {
  TrackingService.sendAllTrackers(trackingConstants.DISPLAY_PAGE_OPERATION, {
    type: pageType,
  });
};

export const trackClickActionsTab = () => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_ACTIONS_TAB);
};

/* LearnMore Tracking */
export const trackOpenLearnMore = (actionType: string) => {
  TrackingService.sendAllTrackers(trackingConstants.OPEN_BLOCK_LEARN_MORE, {
    action: actionType,
  });
};

export const trackClickLearnMore = () => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_BUTTON_LEARN_MORE);
};

/* Open Sequence Tracking */

export const trackOpenSequence = () => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_SEQUENCE_OPEN);
};

/* Partners Block Tracking */

export const trackParticipatePartners = () => {
  TrackingService.sendAllTrackers(
    trackingConstants.CLICK_PARTICIPATE_COMMUNITY
  );
};

export const trackSeeMorePartners = () => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_SEE_MORE_COMMUNITY);
};

export const trackLoadMoreProposals = (pageCount?: number) => {
  const pageNumber = pageCount !== undefined ? pageCount.toString() : undefined;

  TrackingService.sendAllTrackers(trackingConstants.CLICK_PROPOSAL_VIEW_MORE, {
    page: pageNumber,
  });
};

/* On Load Sequence Tracking */
export const trackDisplaySequence = () => {
  TrackingService.sendAllTrackers(trackingConstants.DISPLAY_SEQUENCE);
};

/* Header Tracking */
export const trackClickMakeLogo = () => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_MAKEORG_LOGO);
};

export const trackClickProfile = () => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_PROFILE);
};

export const trackClickPublicProfile = () => {
  const eventName = trackingConstants.CLICK_PUBLIC_PROFILE;

  TrackingService.track(eventName);
  TrackingService.trackFacebookPixel(eventName);
};

/* Moderation Text Tracking */
export const trackDisplayModerationText = () => {
  TrackingService.sendAllTrackers(trackingConstants.DISPLAY_MODERATION_TEXT);
};

export const trackClickModerationLink = () => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_MODERATION_LINK);
};

export const trackDisplayAuthentificationForm = () => {
  TrackingService.sendAllTrackers(
    trackingConstants.DISPLAY_AUTHENTIFICATION_FORM
  );
};

export const trackClickPersonnalDataLink = () => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_PERSONNAL_DATA_LINK);
};

/* Proposal Submit */
export const trackClickProposalSubmit = () => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_PROPOSAL_SUBMIT);
};

export const trackDisplayProposalSubmitValidation = () => {
  TrackingService.sendAllTrackers(
    trackingConstants.DISPLAY_PROPOSAL_SUBMIT_VALIDATION
  );
};

export const trackDisplayForgotPasswordForm = () => {
  TrackingService.sendAllTrackers(
    trackingConstants.DISPLAY_FORGOTPASSWORD_FORM
  );
};

export const trackClickCloseModal = (modalContext: string) => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_CLOSE_MODAL, {
    context: modalContext,
  });
};

/* Sign Up */
export const trackDisplaySignupForm = () => {
  TrackingService.sendAllTrackers(trackingConstants.DISPLAY_SIGN_UP_FORM);
};

export const trackSignupEmailSuccess = () => {
  TrackingService.sendAllTrackers(trackingConstants.SIGN_UP_EMAIL_SUCCESS);
};

export const trackSignupEmailFailure = () => {
  TrackingService.sendAllTrackers(trackingConstants.SIGN_UP_EMAIL_FAILURE);
};

/* Signin */
export const trackDisplaySigninForm = () => {
  TrackingService.sendAllTrackers(trackingConstants.DISPLAY_SIGN_IN_FORM);
};

export const trackAuthentificationSocialSuccess = (socialNetwork: string) => {
  TrackingService.sendAllTrackers(trackingConstants.AUTHEN_SOCIAL_SUCCESS, {
    'social-network': socialNetwork,
  });
};

export const trackAuthentificationSocialFailure = (socialNetwork: string) => {
  TrackingService.sendAllTrackers(trackingConstants.AUTHEN_SOCIAL_FAILURE, {
    'social-network': socialNetwork,
  });
};

export const trackLoginEmailSuccess = () => {
  TrackingService.sendAllTrackers(trackingConstants.SIGN_IN_EMAIL_SUCCESS);
};

export const trackLoginEmailFailure = () => {
  TrackingService.sendAllTrackers(trackingConstants.SIGN_IN_EMAIL_FAILURE);
};

/* Sequence */
export const trackClickStartSequence = () => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_START_SEQUENCE);
};

export const trackClickNextCard = () => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_SEQUENCE_NEXT_CARD);
};

export const trackClickProposalPushCardIgnore = () => {
  TrackingService.sendAllTrackers(
    trackingConstants.CLICK_PROPOSAL_PUSH_CARD_IGNORE
  );
};

export const trackSkipSignUpCard = () => {
  TrackingService.sendAllTrackers(trackingConstants.SKIP_SIGNUP_CARD);
};

export const trackClickPreviousCard = () => {
  TrackingService.sendAllTrackers(
    trackingConstants.CLICK_SEQUENCE_PREVIOUS_CARD
  );
};

export const trackDisplayIntroCard = () => {
  TrackingService.sendAllTrackers(trackingConstants.DISPLAY_INTRO_CARD);
};

export const trackDisplayProposalPushCard = () => {
  TrackingService.sendAllTrackers(trackingConstants.DISPLAY_PROPOSAL_PUSH_CARD);
};

export const trackDisplaySignUpCard = () => {
  TrackingService.sendAllTrackers(trackingConstants.DISPLAY_SIGN_UP_CARD);
};

export const trackDisplayFinalCard = () => {
  TrackingService.sendAllTrackers(trackingConstants.DISPLAY_FINAL_CARD);
};

/* Tags Tracking */
export const trackTag = (label: string, action: string) => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_TAG_ACTION, {
    'tag-name': label,
    nature: action,
  });
};

/* Votes */
export const trackVote = (
  proposalId: string,
  nature: string,
  position?: number
) => {
  const eventName: string = trackingConstants.CLICK_PROPOSAL_VOTE;
  const cardPosition: string = getPosition(position);
  const params = { 'card-position': cardPosition };
  const internalParams = { proposalId, nature };

  TrackingService.track(eventName, {
    ...params,
    ...internalParams,
  });
  TrackingService.trackFacebookPixel(eventName, params);
  TrackingService.trackTwitterPixel(eventName);
};

export const trackFirstVote = (
  proposalId: string,
  nature: string,
  position?: number
) => {
  const eventName: string = trackingConstants.CLICK_SEQUENCE_FIRST_VOTE;
  const cardPosition = getPosition(position);
  const params = { 'card-position': cardPosition };
  const internalParams = { proposalId, nature };
  TrackingService.track(eventName, {
    ...params,
    ...internalParams,
  });
  TrackingService.trackFacebookPixel(eventName, params);
  TrackingService.trackTwitterPixel(eventName);
};

export const trackUnvote = (
  proposalId: string,
  nature: string,
  position?: number
) => {
  const eventName: string = trackingConstants.CLICK_PROPOSAL_UNVOTE;
  const cardPosition = getPosition(position);
  const params = { 'card-position': cardPosition };
  const internalParams = { proposalId, nature };

  TrackingService.track(eventName, {
    ...params,
    ...internalParams,
  });
  TrackingService.trackFacebookPixel(eventName, params);
  TrackingService.trackTwitterPixel(eventName);
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
  const params = { 'card-position': cardPosition };
  const internalParams = { proposalId, type, nature };

  TrackingService.track(eventName, {
    ...params,
    ...internalParams,
  });
  TrackingService.trackFacebookPixel(eventName, params);
  TrackingService.trackTwitterPixel(eventName);
};

export const trackUnqualify = (
  proposalId: string,
  type: string,
  nature: string,
  position?: number
) => {
  const eventName: string = trackingConstants.CLICK_PROPOSAL_UNQUALIFY;
  const cardPosition = getPosition(position);
  const params = { 'card-position': cardPosition };
  const internalParams = { proposalId, type, nature };

  TrackingService.track(eventName, {
    ...params,
    ...internalParams,
  });
  TrackingService.trackFacebookPixel(eventName, params);
  TrackingService.trackTwitterPixel(eventName);
};

/* Sharing */
export const trackClickShare = (socialNetwork: string) => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_SHARE, {
    'social-network': socialNetwork,
  });
};

/* Footer */
export const trackClickConsultation = () => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_CONSULTATION_LINK);
};

/* Homepage */
export const trackDisplayHomepage = () => {
  TrackingService.sendAllTrackers(trackingConstants.DISPLAY_HOMEPAGE);
};

export const trackClickHomepageFeatured = (index: number, title: string) => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_HOMEPAGE_FEATURED, {
    'block-position': index.toString(),
    'block-title': title,
  });
};

export const trackClickHomepageCorporate = () => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_HOMEPAGE_CORPORATE);
};

export const trackClickHomepageConsultations = () => {
  TrackingService.sendAllTrackers(
    trackingConstants.CLICK_HOMEPAGE_CONSULTATION
  );
};

export const trackClickHomepageSliderArrows = () => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_PROPOSAL_VIEW_MORE);
};

/** Search */
export const trackClickSubmitSearch = () => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_NAVBAR_SEARCH);
};

export const trackDisplaySearchMainResult = () => {
  TrackingService.sendAllTrackers(
    trackingConstants.DISPLAY_SEARCH_MAIN_RESULTS
  );
};

export const trackDisplaySearchProposalsResult = () => {
  TrackingService.sendAllTrackers(trackingConstants.DISPLAY_SEARCH_PROPOSALS);
};

export const trackDisplaySearchOragnisationsResult = () => {
  TrackingService.sendAllTrackers(
    trackingConstants.DISPLAY_SEARCH_ORGANISATIONS
  );
};

export const trackDisplaySearchConsultationsResult = () => {
  TrackingService.sendAllTrackers(
    trackingConstants.DISPLAY_SEARCH_CONSULTATIONS
  );
};

export const trackClickSearchReturn = () => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_SEARCH_RETURN);
};

/** proposal card */
export const trackClickProposalProfile = () => {
  TrackingService.sendAllTrackers(trackingConstants.CLICK_PUBLIC_PROFILE);
};

/* eslint-disable import/no-default-export */
export default TrackingService;
