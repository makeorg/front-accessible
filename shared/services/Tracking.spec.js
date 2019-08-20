/* @flow */

import { ApiService } from 'Shared/api/ApiService';
import { PATH_POST_TRACKING } from 'Shared/constants/paths';
import * as trackingConstants from 'Shared/constants/tracking';
import { Tracking } from './Tracking';
import { FacebookTracking } from './Trackers/FacebookTracking';
import { TwitterTracking } from './Trackers/TwitterTracking';

export const eventParameters = {
  location: 'homepage',
  source: 'foo',
  country: 'foo',
  language: 'foo',
  questionId: 'foo',
  referrer: undefined,
  url: 'http://localhost/',
};

describe('Tracking Service', () => {
  beforeEach(() => {
    jest.spyOn(Tracking, 'track');
    jest.spyOn(FacebookTracking, 'trackCustom');
    jest.spyOn(TwitterTracking, 'track');
  });

  afterEach(() => {
    Tracking.track.mockRestore();
    FacebookTracking.trackCustom.mockRestore();
    TwitterTracking.track.mockRestore();
  });

  it('merge default event params with passed params', () => {
    const eventName = 'fooEvent';
    const expectedBody = JSON.stringify({
      eventName,
      eventParameters,
      eventType: 'trackCustom',
    });

    jest.spyOn(ApiService, 'callApi');

    Tracking.track(eventName, eventParameters);
    expect(ApiService.callApi).toHaveBeenNthCalledWith(1, PATH_POST_TRACKING, {
      body: expectedBody,
      method: 'POST',
    });
  });

  it('track trackFacebookPixel', () => {
    Tracking.trackFacebookPixel('eventName', eventParameters);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      'eventName',
      eventParameters
    );
  });

  it('track DisplaySequence', () => {
    const eventName = trackingConstants.DISPLAY_SEQUENCE;

    Tracking.trackDisplaySequence();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Display Page Operation', () => {
    const eventName = trackingConstants.DISPLAY_PAGE_OPERATION;

    Tracking.trackDisplayConsultation();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Click Actions Tab', () => {
    const eventName = trackingConstants.CLICK_ACTIONS_TAB;

    Tracking.trackClickActionsTab();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track ClickMakeLogo', () => {
    const eventName = trackingConstants.CLICK_MAKEORG_LOGO;

    Tracking.trackClickMakeLogo();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Display Moderation Text', () => {
    const eventName = trackingConstants.DISPLAY_MODERATION_TEXT;

    Tracking.trackDisplayModerationText();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Click Moderation Text', () => {
    const eventName = trackingConstants.CLICK_MODERATION_LINK;

    Tracking.trackClickModerationLink();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Display Authentification Form', () => {
    const eventName = trackingConstants.DISPLAY_AUTHENTIFICATION_FORM;

    Tracking.trackDisplayAuthentificationForm();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Click Personnal DataLink', () => {
    const eventName = trackingConstants.CLICK_PERSONNAL_DATA_LINK;
    Tracking.trackClickPersonnalDataLink();

    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Click Proposal Submit', () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_SUBMIT;

    Tracking.trackClickProposalSubmit();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Display Proposal Submit Validation', () => {
    const eventName = trackingConstants.DISPLAY_PROPOSAL_SUBMIT_VALIDATION;

    Tracking.trackDisplayProposalSubmitValidation();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Display Forgot Password Form', () => {
    const eventName = trackingConstants.DISPLAY_FORGOTPASSWORD_FORM;

    Tracking.trackDisplayForgotPasswordForm();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Click Close Modal', () => {
    const eventName = trackingConstants.CLICK_CLOSE_MODAL;

    Tracking.trackClickCloseModal();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Display Signup Form', () => {
    const eventName = trackingConstants.DISPLAY_SIGN_UP_FORM;

    Tracking.trackDisplaySignupForm();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Signup Email Success', () => {
    const eventName = trackingConstants.SIGN_UP_EMAIL_SUCCESS;

    Tracking.trackSignupEmailSuccess();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Signup Email Failure', () => {
    const eventName = trackingConstants.SIGN_UP_EMAIL_FAILURE;

    Tracking.trackSignupEmailFailure();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Display Signin Form', () => {
    const eventName = trackingConstants.DISPLAY_SIGN_IN_FORM;

    Tracking.trackDisplaySigninForm();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Authentification Social Success', () => {
    const eventName = trackingConstants.AUTHEN_SOCIAL_SUCCESS;
    const trackParams = { 'social-network': 'foo' };
    const fbParams = { ...eventParameters, ...trackParams };

    Tracking.trackAuthentificationSocialSuccess('foo');
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName, trackParams);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      fbParams
    );
  });

  it('track Authentification Social Failure', () => {
    const eventName = trackingConstants.AUTHEN_SOCIAL_FAILURE;
    const trackParams = { 'social-network': 'foo' };
    const fbParams = { ...eventParameters, ...trackParams };

    Tracking.trackAuthentificationSocialFailure('foo');
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName, trackParams);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      fbParams
    );
  });

  it('track Login Email Success', () => {
    const eventName = trackingConstants.SIGN_IN_EMAIL_SUCCESS;

    Tracking.trackLoginEmailSuccess();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Login Email Failure', () => {
    const eventName = trackingConstants.SIGN_IN_EMAIL_FAILURE;

    Tracking.trackLoginEmailFailure();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Click Start Sequence', () => {
    const eventName = trackingConstants.CLICK_START_SEQUENCE;

    Tracking.trackClickStartSequence();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Click Next Card', () => {
    const eventName = trackingConstants.CLICK_SEQUENCE_NEXT_CARD;

    Tracking.trackClickNextCard();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Click Previous Card', () => {
    const eventName = trackingConstants.CLICK_SEQUENCE_PREVIOUS_CARD;

    Tracking.trackClickPreviousCard();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Display Final Card', () => {
    const eventName = trackingConstants.DISPLAY_FINAL_CARD;

    Tracking.trackDisplayFinalCard();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track First Vote', () => {
    const eventName = trackingConstants.CLICK_SEQUENCE_FIRST_VOTE;

    Tracking.trackFirstVote('foo', 'bar', 999);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': '999',
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      'card-position': '999',
    });
  });

  it('track Vote', () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_VOTE;

    Tracking.trackVote('foo', 'bar', 999);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': '999',
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      'card-position': '999',
    });
  });

  it('track Unvote', () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_UNVOTE;

    Tracking.trackUnvote('foo', 'bar', 999);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': '999',
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      'card-position': '999',
    });
  });

  it('track Vote on Single Proposal Card', () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_VOTE;

    Tracking.trackVote('foo', 'bar', undefined);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': 'single-proposal',
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      'card-position': 'single-proposal',
    });
  });

  it('track Unvote on Single Proposal Card', () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_UNVOTE;

    Tracking.trackUnvote('foo', 'bar', undefined);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': 'single-proposal',
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      'card-position': 'single-proposal',
    });
  });

  it('track Qualify', () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_QUALIFY;

    Tracking.trackQualify('foo', 'baz', 'bar', 999);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName, {
      proposalId: 'foo',
      type: 'baz',
      nature: 'bar',
      'card-position': '999',
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      'card-position': '999',
    });
  });

  it('track Unqualify', () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_UNQUALIFY;

    Tracking.trackUnqualify('foo', 'baz', 'bar', 999);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName, {
      proposalId: 'foo',
      type: 'baz',
      nature: 'bar',
      'card-position': '999',
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      'card-position': '999',
    });
  });

  it('track Load More Proposals without page number', () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_VIEW_MORE;

    Tracking.trackLoadMoreProposals();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName, {
      page: undefined,
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      page: undefined,
    });
  });

  it('track Load More Proposals with page number', () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_VIEW_MORE;

    Tracking.trackLoadMoreProposals(9);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName, {
      page: 9,
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      page: 9,
    });
  });

  it('track Click Consultation', () => {
    const eventName = trackingConstants.CLICK_CONSULTATION_LINK;

    Tracking.trackClickConsultation();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Display Homepage', () => {
    const eventName = trackingConstants.DISPLAY_HOMEPAGE;

    Tracking.trackDisplayHomepage();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Click Homepage Featured', () => {
    const eventName = trackingConstants.CLICK_HOMEPAGE_FEATURED;

    Tracking.trackClickHomepageFeatured(999, 'foo');
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName, {
      'block-position': '999',
      'block-title': 'foo',
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, eventName, {
      ...eventParameters,
      'block-position': '999',
      'block-title': 'foo',
    });
  });

  it('track Click Homepage Corporate', () => {
    const eventName = trackingConstants.CLICK_HOMEPAGE_CORPORATE;

    Tracking.trackClickHomepageCorporate();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Click Homepage Consultations', () => {
    const eventName = trackingConstants.CLICK_HOMEPAGE_CONSULTATION;

    Tracking.trackClickHomepageConsultations();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });

  it('track Click Homepage Arrow Slider', () => {
    const eventName = trackingConstants.CLICK_PROPOSAL_VIEW_MORE;

    Tracking.trackClickHomepageSliderArrows();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, eventName);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(
      1,
      eventName,
      eventParameters
    );
  });
});
