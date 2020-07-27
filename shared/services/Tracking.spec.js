/* @flow */

import { ApiService } from 'Shared/api/ApiService';
import * as trackingConstants from 'Shared/constants/tracking';
import { TrackingApiService } from 'Shared/api/TrackingApiService';
import TrackingService, {
  trackClickMakeLogo,
  trackDisplaySequence,
  trackClickActionsTab,
  trackDisplayConsultation,
  trackClickHomepageSliderArrows,
  trackClickHomepageConsultations,
  trackDisplaySignupForm,
  trackDisplayModerationText,
  trackDisplayAuthenticationForm,
  trackClickPersonnalDataLink,
  trackClickProposalSubmit,
  trackDisplayForgotPasswordForm,
  trackClickCloseModal,
  trackClickModerationLink,
  trackClickHomepageCorporate,
  trackClickHomepageFeatured,
  trackDisplayHomepage,
  trackClickConsultation,
  trackLoadMoreProposals,
  trackUnqualify,
  trackQualify,
  trackUnvote,
  trackVote,
  trackFirstVote,
  trackDisplayFinalCard,
  trackClickPreviousCard,
  trackClickNextCard,
  trackLoginEmailFailure,
  trackLoginEmailSuccess,
  trackAuthenticationSocialFailure,
  trackAuthenticationSocialSuccess,
  trackDisplaySigninForm,
  trackSignupEmailFailure,
  trackSignupEmailSuccess,
  trackDisplayProposalSubmitValidation,
  trackClickStartSequence,
  trackPerformance,
  trackDisplayBrowseConsultations,
  trackDisplayBrowseResults,
  trackClickHomepageParticipate,
  trackClickHomepageDiscover,
  trackClickBrowseConsultations,
  trackClickBrowseResults,
  trackClickBlog,
  trackClickParticipate,
  trackClickPageNumber,
  trackClickResults,
  trackClickSubscribe,
} from './Tracking';
import { FacebookTracking } from './Trackers/FacebookTracking';
import { TwitterTracking } from './Trackers/TwitterTracking';
import { trackingParamsService } from './TrackingParamsService';

const eventParameters = {
  location: 'homepage',
  source: 'foo',
  language: 'foo',
  country: 'foo',
  questionId: 'foo',
  questionSlug: 'fooSlug',
  referrer: undefined,
  url: 'http://localhost/',
};

trackingParamsService.location = eventParameters.location;
trackingParamsService.source = eventParameters.source;
trackingParamsService.country = eventParameters.country;
trackingParamsService.language = eventParameters.language;
trackingParamsService.questionId = eventParameters.questionId;
trackingParamsService.questionSlug = eventParameters.questionSlug;
trackingParamsService.referrer = eventParameters.referrer;
trackingParamsService.url = eventParameters.url;

describe('Tracking Service', () => {
  const { location } = window;

  beforeAll(() => {
    delete window.location;
    window.location = { href: eventParameters.url, pathname: '/' };
  });

  afterAll(() => {
    window.location = location;
  });

  beforeEach(() => {
    jest.spyOn(TrackingService, 'sendAllTrackers');
    jest.spyOn(TrackingService, 'track');
    jest.spyOn(FacebookTracking, 'trackCustom');
    jest.spyOn(TwitterTracking, 'track');
  });

  afterEach(() => {
    TrackingService.track.mockRestore();
    FacebookTracking.trackCustom.mockRestore();
    TwitterTracking.track.mockRestore();
  });

  it('track performance', async () => {
    jest.spyOn(TrackingApiService, 'trackPerformance');
    const performanceTiming = {
      connectStart: 1,
      connectEnd: 2,
      domComplete: 3,
      domContentLoadedEventEnd: 4,
      domContentLoadedEventStart: 5,
      domInteractive: 6,
      domLoading: 7,
      domainLookupEnd: 8,
      domainLookupStart: 9,
      fetchStart: 10,
      loadEventEnd: 11,
      loadEventStart: 12,
      navigationStart: 13,
      redirectEnd: 14,
      redirectStart: 15,
      requestStart: 16,
      responseEnd: 17,
      responseStart: 18,
      secureConnectionStart: 19,
      unloadEventEnd: 20,
      unloadEventStart: 21,
    };
    const response = {
      status: 204,
    };

    TrackingApiService.trackPerformance.mockResolvedValue(response);

    const performance = await trackPerformance('foo', performanceTiming);

    expect(performance).toEqual(undefined);
  });

  it('merge default event params with passed params', () => {
    const eventName = 'fooEvent';
    const expectedBody = JSON.stringify({
      eventName,
      eventParameters,
      eventType: 'trackCustom',
    });

    jest.spyOn(ApiService, 'callApi');

    TrackingService.track(eventName, eventParameters);
    expect(ApiService.callApi).toHaveBeenNthCalledWith(1, '/tracking/front', {
      body: expectedBody,
      method: 'POST',
    });
  });

  it('track trackFacebookPixel', () => {
    TrackingService.trackFacebookPixel('eventName', eventParameters);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      'eventName',
      eventParameters
    );
  });

  it('track trackTwitterPixel', () => {
    TrackingService.trackTwitterPixel('eventName', eventParameters);
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, 'eventName');
  });

  it('track DisplaySequence', () => {
    const eventName = trackingConstants.DISPLAY_SEQUENCE;

    trackDisplaySequence();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Display Page Operation with consultation type', () => {
    const eventName = trackingConstants.DISPLAY_PAGE_OPERATION;

    trackDisplayConsultation('consultation');
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      type: 'consultation',
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      type: 'consultation',
    });
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Display Page Operation with restults type', () => {
    const eventName = trackingConstants.DISPLAY_PAGE_OPERATION;

    trackDisplayConsultation('results');
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      type: 'results',
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      type: 'results',
    });
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click Actions Tab', () => {
    const eventName = trackingConstants.CLICK_ACTIONS_TAB;

    trackClickActionsTab();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track ClickMakeLogo', () => {
    const eventName = trackingConstants.CLICK_MAKEORG_LOGO;

    trackClickMakeLogo();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Display Moderation Text', () => {
    const eventName = trackingConstants.DISPLAY_MODERATION_TEXT;

    trackDisplayModerationText();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click Moderation Text', () => {
    const eventName = trackingConstants.CLICK_MODERATION_LINK;

    trackClickModerationLink();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Display Authentication Form', () => {
    const eventName = trackingConstants.DISPLAY_AUTHENTICATION_FORM;

    trackDisplayAuthenticationForm();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click Personnal DataLink', () => {
    const eventName = trackingConstants.CLICK_PERSONNAL_DATA_LINK;

    trackClickPersonnalDataLink();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click Proposal Submit', () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_SUBMIT;

    trackClickProposalSubmit();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Display Proposal Submit Validation', () => {
    const eventName = trackingConstants.DISPLAY_PROPOSAL_SUBMIT_VALIDATION;

    trackDisplayProposalSubmitValidation();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Display Forgot Password Form', () => {
    const eventName = trackingConstants.DISPLAY_FORGOTPASSWORD_FORM;

    trackDisplayForgotPasswordForm();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click Close Modal', () => {
    const eventName = trackingConstants.CLICK_CLOSE_MODAL;
    const contextName = 'foo';
    const trackParams = { context: contextName };
    const fbParams = { ...eventParameters, ...trackParams };

    trackClickCloseModal(contextName);
    expect(TrackingService.track).toHaveBeenNthCalledWith(
      1,
      eventName,
      trackParams
    );
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      fbParams
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Display Signup Form', () => {
    const eventName = trackingConstants.DISPLAY_SIGN_UP_FORM;

    trackDisplaySignupForm();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Signup Email Success', () => {
    const eventName = trackingConstants.SIGN_UP_EMAIL_SUCCESS;

    trackSignupEmailSuccess();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Signup Email Failure', () => {
    const eventName = trackingConstants.SIGN_UP_EMAIL_FAILURE;

    trackSignupEmailFailure();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Display Signin Form', () => {
    const eventName = trackingConstants.DISPLAY_SIGN_IN_FORM;

    trackDisplaySigninForm();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Authentication Social Success', () => {
    const eventName = trackingConstants.AUTHEN_SOCIAL_SUCCESS;
    const trackParams = {
      'social-network': 'foo',
      'account-creation': 'false',
    };
    const fbParams = { ...eventParameters, ...trackParams };

    trackAuthenticationSocialSuccess('foo', 'false');
    expect(TrackingService.track).toHaveBeenNthCalledWith(
      1,
      eventName,
      trackParams
    );
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      fbParams
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Authentication Social Failure', () => {
    const eventName = trackingConstants.AUTHEN_SOCIAL_FAILURE;
    const trackParams = { 'social-network': 'foo' };
    const fbParams = { ...eventParameters, ...trackParams };

    trackAuthenticationSocialFailure('foo');
    expect(TrackingService.track).toHaveBeenNthCalledWith(
      1,
      eventName,
      trackParams
    );
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      fbParams
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Login Email Success', () => {
    const eventName = trackingConstants.SIGN_IN_EMAIL_SUCCESS;

    trackLoginEmailSuccess();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Login Email Failure', () => {
    const eventName = trackingConstants.SIGN_IN_EMAIL_FAILURE;

    trackLoginEmailFailure();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click Start Sequence', () => {
    const eventName = trackingConstants.CLICK_START_SEQUENCE;

    trackClickStartSequence();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click Next Card', () => {
    const eventName = trackingConstants.CLICK_SEQUENCE_NEXT_CARD;

    trackClickNextCard();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click Previous Card', () => {
    const eventName = trackingConstants.CLICK_SEQUENCE_PREVIOUS_CARD;

    trackClickPreviousCard();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Display Final Card', () => {
    const eventName = trackingConstants.DISPLAY_FINAL_CARD;

    trackDisplayFinalCard();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track First Vote', () => {
    const eventName = trackingConstants.CLICK_SEQUENCE_FIRST_VOTE;

    trackFirstVote('foo', 'bar', 999);
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': '999',
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      'card-position': '999',
    });
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Vote', () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_VOTE;

    trackVote('foo', 'bar', 999, 'my-component');
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': '999',
      component: 'my-component',
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      'card-position': '999',
      component: 'my-component',
    });
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Unvote', () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_UNVOTE;

    trackUnvote('foo', 'bar', 999);
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': '999',
      component: '',
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      'card-position': '999',
      component: '',
    });
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Vote on Single Proposal Card', () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_VOTE;

    trackVote('foo', 'bar', undefined);
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': 'single-proposal',
      component: '',
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      'card-position': 'single-proposal',
      component: '',
    });
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Unvote on Single Proposal Card', () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_UNVOTE;

    trackUnvote('foo', 'bar', undefined);
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': 'single-proposal',
      component: '',
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      'card-position': 'single-proposal',
      component: '',
    });
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Qualify', () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_QUALIFY;

    trackQualify('foo', 'baz', 'bar', 999);
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      proposalId: 'foo',
      type: 'baz',
      nature: 'bar',
      'card-position': '999',
      component: '',
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      'card-position': '999',
      component: '',
    });
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Unqualify', () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_UNQUALIFY;

    trackUnqualify('foo', 'baz', 'bar', 999);
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      proposalId: 'foo',
      type: 'baz',
      nature: 'bar',
      'card-position': '999',
      component: '',
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      'card-position': '999',
      component: '',
    });
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Load More Proposals without page number', () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_VIEW_MORE;

    trackLoadMoreProposals();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      page: undefined,
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      page: undefined,
    });
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Load More Proposals with page number', () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_VIEW_MORE;
    const componentName = trackingConstants.COMPONENT_PARAM_PROPOSALS;

    trackLoadMoreProposals(componentName, 9);
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      page: '9',
      component: componentName,
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      page: '9',
      component: componentName,
    });
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click Consultation', () => {
    const eventName = trackingConstants.CLICK_CONSULTATION_LINK;

    trackClickConsultation();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Display Homepage', () => {
    const eventName = trackingConstants.DISPLAY_HOMEPAGE;

    trackDisplayHomepage();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click Homepage Featured', () => {
    const eventName = trackingConstants.CLICK_HOMEPAGE_FEATURED;

    trackClickHomepageFeatured(999, 'foo');
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      'block-position': '999',
      'block-title': 'foo',
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      'block-position': '999',
      'block-title': 'foo',
    });
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click Homepage Corporate', () => {
    const eventName = trackingConstants.CLICK_HOMEPAGE_CORPORATE;

    trackClickHomepageCorporate();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click Homepage Consultations', () => {
    const eventName = trackingConstants.CLICK_HOMEPAGE_CONSULTATION;

    trackClickHomepageConsultations();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click Homepage Arrow Slider', () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_VIEW_MORE;

    trackClickHomepageSliderArrows();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      component: trackingConstants.COMPONENT_PARAM_CURRENT_OPERATIONS,
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      component: trackingConstants.COMPONENT_PARAM_CURRENT_OPERATIONS,
    });
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Display Browse Consultations', () => {
    const eventName = trackingConstants.DISPLAY_BROWSE_CONSULTATIONS;
    trackDisplayBrowseConsultations();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Display Browse Results', () => {
    const eventName = trackingConstants.DISPLAY_BROWSE_RESULTS;
    trackDisplayBrowseResults();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click Homepage Participate consultations', () => {
    const eventName = trackingConstants.CLICK_HOMEPAGE_PARTICIPATE;
    trackClickHomepageParticipate();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click Homepage Discover great causes', () => {
    const eventName = trackingConstants.CLICK_HOMEPAGE_GREAT_CAUSES;
    trackClickHomepageDiscover();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click Homepage Browse Consultations', () => {
    const eventName = trackingConstants.CLICK_HOMEPAGE_BROWSE_CONSULTATIONS;
    trackClickBrowseConsultations();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click Homepage Browse Results', () => {
    const eventName = trackingConstants.CLICK_HOMEPAGE_BROWSE_RESULTS;
    trackClickBrowseResults();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click Homepage Blog', () => {
    const eventName = trackingConstants.CLICK_HOMEPAGE_BLOG;
    trackClickBlog();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click participate consultations', () => {
    const eventName = trackingConstants.CLICK_BROWSE_PARTICIPATE;

    trackClickParticipate(999);
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      'question-Id': '999',
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      'question-Id': '999',
    });
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click page number', () => {
    const eventName = trackingConstants.CLICK_PAGINATION;

    trackClickPageNumber(9);
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      'page-number': '9',
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      'page-number': '9',
    });
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click see results', () => {
    const eventName = trackingConstants.CLICK_RESULTS;
    trackClickResults();
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {});
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });

  it('track Click susbscribe', () => {
    const eventName = trackingConstants.CLICK_SUBSCRIBE;
    trackClickSubscribe('foo');
    expect(TrackingService.track).toHaveBeenNthCalledWith(1, eventName, {
      component: 'foo',
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      component: 'foo',
    });
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, eventName);
  });
});
