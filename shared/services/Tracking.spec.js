/* @flow */

import { ApiService } from 'Shared/api/ApiService';
import { PATH_POST_TRACKING } from 'Shared/constants/paths';
import * as trackingConstants from 'Shared/constants/tracking';
import { Tracking } from './Tracking';
import { FacebookTracking } from './Trackers/FacebookTracking';
import { TwitterTracking } from './Trackers/TwitterTracking';

describe('Tracking Service', () => {
  beforeEach(() => {
    jest.spyOn(Tracking, 'track');
    jest.spyOn(Tracking, 'trackFrontAPIAndFacebook');
    jest.spyOn(FacebookTracking, 'trackCustom');
    jest.spyOn(TwitterTracking, 'track');
  });

  afterEach(() => {
    Tracking.track.mockRestore();
    Tracking.trackFrontAPIAndFacebook.mockRestore();
    FacebookTracking.trackCustom.mockRestore();
    TwitterTracking.track.mockRestore();
  });

  it('merge default event params with passed params', () => {
    const eventName = 'fooEvent';
    const eventParams = { barParam: 'bar', bazParam: 'baz' };

    const expectedBody = JSON.stringify({
      eventName,
      eventParameters: {
        location: 'unknown',
        source: 'foo',
        country: 'foo',
        language: 'foo',
        questionId:'foo',
        url: 'http://localhost/',
        ...eventParams
      },
      eventType: 'trackCustom'
    });

    jest.spyOn(ApiService, 'callApi');

    Tracking.track(eventName, eventParams);
    expect(ApiService.callApi).toHaveBeenNthCalledWith(1, PATH_POST_TRACKING, { body: expectedBody, method: 'POST' });
  });

  it('track DisplaySequence', () => {
    Tracking.trackDisplaySequence();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.DISPLAY_SEQUENCE);
  });

  it('track Display Page Operation', () => {
    Tracking.trackDisplayConsultation();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.DISPLAY_PAGE_OPERATION);
  });


  it('track trackFacebookPixel', () => {
    const eventParameters = {
      location: 'unknown',
      source: 'foo',
      country: 'foo',
      language: 'foo',
      questionId:'foo',
      url: 'http://localhost/',
    }
    

    Tracking.trackFacebookPixel('eventName',eventParameters);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, 'eventName', eventParameters);
  });

  it('track trackTwitter', () => {
    Tracking.trackTwitter('eventName');
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, 'eventName');
  });

  it('track ClickMakeLogo', () => {
    Tracking.trackClickMakeLogo();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_MAKEORG_LOGO);
  });

  it('track Display Moderation Text', () => {
    Tracking.trackDisplayModerationText();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.DISPLAY_MODERATION_TEXT);
  });

  it('track Click Moderation Text', () => {
    Tracking.trackClickModerationLink();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_MODERATION_LINK);
  });

  it('track Display Authentification Form', () => {
    Tracking.trackDisplayAuthentificationForm();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.DISPLAY_AUTHENTIFICATION_FORM);
  });

  it('track Click Personnal DataLink', () => {
    Tracking.trackClickPersonnalDataLink();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PERSONNAL_DATA_LINK);
  });

  it('track Click Proposal Submit', () => {
    Tracking.trackClickProposalSubmit();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PROPOSAL_SUBMIT);
  });

  it('track Display Proposal Submit Validation', () => {
    Tracking.trackDisplayProposalSubmitValidation();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.DISPLAY_PROPOSAL_SUBMIT_VALIDATION);
  });

  it('track Display Forgot Password Form', () => {
    Tracking.trackDisplayForgotPasswordForm();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.DISPLAY_FORGOTPASSWORD_FORM);
  });

  it('track Click Close Modal', () => {
    Tracking.trackClickCloseModal();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_CLOSE_MODAL);
  });

  it('track Display Signup Form', () => {
    Tracking.trackDisplaySignupForm();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.DISPLAY_SIGN_UP_FORM);
  });

  it('track Signup Email Success', () => {
    Tracking.trackSignupEmailSuccess();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.SIGN_UP_EMAIL_SUCCESS);
  });

  it('track Signup Email Failure', () => {
    Tracking.trackSignupEmailFailure();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.SIGN_UP_EMAIL_FAILURE);
  });

  it('track Display Signin Form', () => {
    Tracking.trackDisplaySigninForm();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.DISPLAY_SIGN_IN_FORM);
  });

  it('track Authentification Social Success', () => {
    Tracking.trackAuthentificationSocialSuccess('foo');
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.AUTHEN_SOCIAL_SUCCESS, { 'social-network': 'foo' });
  });

  it('track Authentification Social Failure', () => {
    Tracking.trackAuthentificationSocialFailure('foo');
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.AUTHEN_SOCIAL_FAILURE, { 'social-network': 'foo' });
  });

  it('track Login Email Success', () => {
    Tracking.trackLoginEmailSuccess();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.SIGN_IN_EMAIL_SUCCESS);
  });

  it('track Login Email Failure', () => {
    Tracking.trackLoginEmailFailure();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.SIGN_IN_EMAIL_FAILURE);
  });

  it('track Click Start Sequence', () => {
    Tracking.trackClickStartSequence();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_START_SEQUENCE);
  });

  it('track Click Next Card', () => {
    Tracking.trackClickNextCard();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_SEQUENCE_NEXT_CARD);
  });

  it('track Click Previous Card', () => {
    Tracking.trackClickPreviousCard();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_SEQUENCE_PREVIOUS_CARD);
  });

  it('track Display Final Card', () => {
    Tracking.trackDisplayFinalCard();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.DISPLAY_FINAL_CARD);
  });

  it('track First Vote', () => {
    const fbEventParameters = {
      location: 'unknown',
      source: 'foo',
      country: 'foo',
      language: 'foo',
      questionId:'foo',
      url: 'http://localhost/',
      'card-position': '999'
    }

    Tracking.trackFirstVote('foo', 'bar', 999);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_SEQUENCE_FIRST_VOTE, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': '999'
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_SEQUENCE_FIRST_VOTE, fbEventParameters);
  });

  it('track Vote', () => {
    const fbEventParameters = {
      location: 'unknown',
      source: 'foo',
      country: 'foo',
      language: 'foo',
      questionId:'foo',
      url: 'http://localhost/',
      'card-position': '999'
    }

    Tracking.trackVote('foo', 'bar', 999);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PROPOSAL_VOTE, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': '999'
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PROPOSAL_VOTE, fbEventParameters);
  });

  it('track Unvote', () => {
    const fbEventParameters = {
      location: 'unknown',
      source: 'foo',
      country: 'foo',
      language: 'foo',
      questionId:'foo',
      url: 'http://localhost/',
      'card-position': '999'
    }

    Tracking.trackUnvote('foo', 'bar', 999);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PROPOSAL_UNVOTE, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': '999'
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PROPOSAL_UNVOTE, fbEventParameters);
  });

  it('track Vote on Single Proposal Card', () => {
    const fbEventParameters = {
      location: 'unknown',
      source: 'foo',
      country: 'foo',
      language: 'foo',
      questionId:'foo',
      url: 'http://localhost/',
      'card-position': 'single-proposal'
    }

    Tracking.trackVote('foo', 'bar', undefined);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PROPOSAL_VOTE, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': 'single-proposal'
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PROPOSAL_VOTE, fbEventParameters);
  });

  it('track Unvote on Single Proposal Card', () => {
    const fbEventParameters = {
      location: 'unknown',
      source: 'foo',
      country: 'foo',
      language: 'foo',
      questionId:'foo',
      url: 'http://localhost/',
      'card-position': 'single-proposal'
    }

    Tracking.trackUnvote('foo', 'bar', undefined);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PROPOSAL_UNVOTE, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': 'single-proposal'
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PROPOSAL_UNVOTE, fbEventParameters);
  });

  it('track Qualify', () => {
    const fbEventParameters = {
      location: 'unknown',
      source: 'foo',
      country: 'foo',
      language: 'foo',
      questionId:'foo',
      url: 'http://localhost/',
      'card-position': '999'
    }
    Tracking.trackQualify('foo', 'baz', 'bar', 999);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PROPOSAL_QUALIFY, {
      proposalId: 'foo',
      type: 'baz',
      nature: 'bar',
      'card-position': '999'
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PROPOSAL_QUALIFY, fbEventParameters);
  });

  it('track Unqualify', () => {
    const fbEventParameters = {
      location: 'unknown',
      source: 'foo',
      country: 'foo',
      language: 'foo',
      questionId:'foo',
      url: 'http://localhost/',
      'card-position': '999'
    }

    Tracking.trackUnqualify('foo', 'baz', 'bar', 999);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PROPOSAL_UNQUALIFY, {
      proposalId: 'foo',
      type: 'baz',
      nature: 'bar',
      'card-position': '999'
    });
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PROPOSAL_UNQUALIFY, fbEventParameters);
  });

  it('track Click Consultation', () => {
    Tracking.trackClickConsultation();
    expect(Tracking.trackFrontAPIAndFacebook).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_CONSULTATION_LINK);
  });
});
