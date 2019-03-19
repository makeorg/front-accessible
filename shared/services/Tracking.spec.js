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
    jest.spyOn(Tracking, 'track');

    Tracking.trackDisplaySequence();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.DISPLAY_SEQUENCE);
  });

  it('track Display Page Operation', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackDisplayConsultation();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.DISPLAY_PAGE_OPERATION);
  });


  it('track trackFacebookPixel', () => {
    const eventParams = {
      location: 'foo',
      source: 'bar',
      country: 'baz',
      language: 'qux',
      referrer: 'quux',
      url: 'http://localhost/',
    }
    
    Tracking.trackFacebookPixel('eventName',eventParams);
    expect(FacebookTracking.trackCustom).toHaveBeenNthCalledWith(1, 'eventName', eventParams);
  });

  it('track trackTwitter', () => {
    Tracking.trackTwitter('eventName');
    expect(TwitterTracking.track).toHaveBeenNthCalledWith(1, 'eventName');
  });

  it('track ClickMakeLogo', () => {
    Tracking.track.mockRestore();
    jest.spyOn(Tracking, 'track');

    Tracking.trackClickMakeLogo();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_MAKEORG_LOGO);
  });

  it('track Display Moderation Text', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackDisplayModerationText();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.DISPLAY_MODERATION_TEXT);
  });

  it('track Click Moderation Text', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackClickModerationLink();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_MODERATION_LINK);
  });

  it('track Display Authentification Form', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackDisplayAuthentificationForm();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.DISPLAY_AUTHENTIFICATION_FORM);
  });

  it('track Click Personnal DataLink', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackClickPersonnalDataLink();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PERSONNAL_DATA_LINK);
  });

  it('track Click Proposal Submit', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackClickProposalSubmit();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PROPOSAL_SUBMIT);
  });

  it('track Display Proposal Submit Validation', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackDisplayProposalSubmitValidation();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.DISPLAY_PROPOSAL_SUBMIT_VALIDATION);
  });

  it('track Display Forgot Password Form', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackDisplayForgotPasswordForm();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.DISPLAY_FORGOTPASSWORD_FORM);
  });

  it('track Click Close Modal', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackClickCloseModal();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_CLOSE_MODAL);
  });

  it('track Display Signup Form', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackDisplaySignupForm();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.DISPLAY_SIGN_UP_FORM);
  });

  it('track Signup Email Success', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackSignupEmailSuccess();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.SIGN_UP_EMAIL_SUCCESS);
  });

  it('track Signup Email Failure', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackSignupEmailFailure();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.SIGN_UP_EMAIL_FAILURE);
  });

  it('track Display Signin Form', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackDisplaySigninForm();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.DISPLAY_SIGN_IN_FORM);
  });

  it('track Authentification Social Success', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackAuthentificationSocialSuccess('foo');
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.AUTHEN_SOCIAL_SUCCESS, { 'social-network': 'foo' });
  });

  it('track Authentification Social Failure', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackAuthentificationSocialFailure('foo');
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.AUTHEN_SOCIAL_FAILURE, { 'social-network': 'foo' });
  });

  it('track Login Email Success', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackLoginEmailSuccess();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.SIGN_IN_EMAIL_SUCCESS);
  });

  it('track Login Email Failure', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackLoginEmailFailure();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.SIGN_IN_EMAIL_FAILURE);
  });

  it('track Click Start Sequence', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackClickStartSequence();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_START_SEQUENCE);
  });

  it('track Click Next Card', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackClickNextCard();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_SEQUENCE_NEXT_CARD);
  });

  it('track Click Previous Card', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackClickPreviousCard();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_SEQUENCE_PREVIOUS_CARD);
  });

  it('track Display Final Card', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackDisplayFinalCard();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.DISPLAY_FINAL_CARD);
  });

  it('track First Vote', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackFirstVote('foo', 'bar', 999);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_SEQUENCE_FIRST_VOTE, {
      proposalId: 'foo',
      nature: 'bar',
      cardPosition: '999'
    });
  });

  it('track Vote', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackVote('foo', 'bar', 999);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PROPOSAL_VOTE, {
      proposalId: 'foo',
      nature: 'bar',
      cardPosition: '999'
    });
  });

  it('track Unvote', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackUnvote('foo', 'bar', 999);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PROPOSAL_UNVOTE, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': '999'
    });
  });

  it('track Vote on Single Proposal Card', () => {
    jest.spyOn(Tracking, 'track');


    Tracking.trackVote('foo', 'bar', undefined);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PROPOSAL_VOTE, {
      proposalId: 'foo',
      nature: 'bar',
      cardPosition: 'single-proposal'
    });
  });

  it('track Unvote on Single Proposal Card', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackUnvote('foo', 'bar', undefined);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PROPOSAL_UNVOTE, {
      proposalId: 'foo',
      nature: 'bar',
      'card-position': 'single-proposal'
    });
  });

  it('track Qualify', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackQualify('foo', 'baz', 'bar', 999);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PROPOSAL_QUALIFY, {
      proposalId: 'foo',
      type: 'baz',
      nature: 'bar',
      'card-position': '999'
    });
  });

  it('track Unqualify', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackUnqualify('foo', 'baz', 'bar', 999);
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_PROPOSAL_UNQUALIFY, {
      proposalId: 'foo',
      type: 'baz',
      nature: 'bar',
      'card-position': '999'
    });
  });

  it('track Click Consultation', () => {
    jest.spyOn(Tracking, 'track');

    Tracking.trackClickConsultation();
    expect(Tracking.track).toHaveBeenNthCalledWith(1, trackingConstants.CLICK_CONSULTATION_LINK);
  });
});
