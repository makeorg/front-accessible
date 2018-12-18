/* @flow */

import ApiService from 'Api/ApiService';
import { PATH_POST_TRACKING } from 'Constants/paths';
import * as trackingConstants from 'Constants/tracking';
import Tracking from './Tracking';

describe('Tracking Service', () => {
  let sandbox;
  beforeEach(function () {
    sandbox = sinon.createSandbox();
  });

  afterEach(function () {
      sandbox.restore();
  });

  it('merge default event params with passed params', () => {
    const eventName = 'fooEvent';
    const eventParams = { barParam: 'bar', bazParam: 'baz' };

    const expectedBody = JSON.stringify({
      eventName,
      eventParameters: {
        location: 'front-accessible',
        source: 'foo',
        country: 'foo',
        language: 'foo',
        ...eventParams
      },
      eventType: 'trackCustom'
    });

    sandbox.spy(ApiService, 'callApi');

    Tracking.track(eventName, eventParams);

    expect(ApiService.callApi.calledOnce).to.equal(true);
    expect(ApiService.callApi.getCall(0).args[0]).to.equal(PATH_POST_TRACKING);
    expect(ApiService.callApi.getCall(0).args[1]).to.deep.equal({ method: 'POST', body: expectedBody });
  });

  it('track DisplaySequence', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackDisplaySequence();
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.DISPLAY_SEQUENCE);
  });

  it('track ClickMakeLogo', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackClickMakeLogo();
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.CLICK_MAKEORG_LOGO);
  });

  it('track Display Moderation Text', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackDisplayModerationText();
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.DISPLAY_MODERATION_TEXT);
  });

  it('track Click Moderation Text', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackClickModerationLink();
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.CLICK_MODERATION_LINK);
  });

  it('track Display Authentification Form', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackDisplayAuthentificationForm();
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.DISPLAY_AUTHENTIFICATION_FORM);
  });

  it('track Click Personnal DataLink', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackClickPersonnalDataLink();
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.CLICK_PERSONNAL_DATA_LINK);
  });

  it('track Click Proposal Submit', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackClickProposalSubmit();
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.CLICK_PROPOSAL_SUBMIT);
  });

  it('track Display Proposal Submit Validation', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackDisplayProposalSubmitValidation();
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.DISPLAY_PROPOSAL_SUBMIT_VALIDATION);
  });

  it('track Display Forgot Password Form', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackDisplayForgotPasswordForm();
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.DISPLAY_FORGOTPASSWORD_FORM);
  });

  it('track Click Close Pannel', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackClickClosePannel();
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.CLICK_CLOSE_PANNEL);
  });

  it('track Display Signup Form', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackDisplaySignupForm();
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.DISPLAY_SIGN_UP_FORM);
  });

  it('track Signup Email Success', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackSignupEmailSuccess();
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.SIGN_UP_EMAIL_SUCCESS);
  });

  it('track Signup Email Failure', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackSignupEmailFailure();
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.SIGN_UP_EMAIL_FAILURE);
  });

  it('track Display Signin Form', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackDisplaySigninForm();
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.DISPLAY_SIGN_IN_FORM);
  });

  it('track Authentification Social Success', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackAuthentificationSocialSuccess('foo');
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.AUTHEN_SOCIAL_SUCCESS);
    expect(Tracking.track.getCall(0).args[1]).to.deep.equal({ 'social-network': 'foo'});
  });

  it('track Authentification Social Failure', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackAuthentificationSocialFailure('foo');
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.AUTHEN_SOCIAL_FAILURE);
    expect(Tracking.track.getCall(0).args[1]).to.deep.equal({ 'social-network': 'foo'});
  });

  it('track Login Email Success', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackLoginEmailSuccess();
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.SIGN_IN_EMAIL_SUCCESS);
  });

  it('track Login Email Failure', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackLoginEmailFailure();
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.SIGN_IN_EMAIL_FAILURE);
  });

  it('track Click Start Sequence', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackClickStartSequence();
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.CLICK_START_SEQUENCE);
  });

  it('track Click Next Card', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackClickNextCard();
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.CLICK_SEQUENCE_NEXT_CARD);
  });

  it('track Click Previous Card', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackClickPreviousCard();
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.CLICK_SEQUENCE_PREVIOUS_CARD);
  });

  it('track Display Final Card', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackDisplayFinalCard();
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.DISPLAY_FINAL_CARD);
  });

  it('track Vote', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackVote('foo', 'bar', 999);
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.CLICK_PROPOSAL_VOTE);
    expect(Tracking.track.getCall(0).args[1]).to.deep.equal({
      'proposalId': 'foo',
      'nature': 'bar',
      'card-position': '999'
    });
  });

  it('track Unvote', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackUnvote('foo', 'bar', 999);
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.CLICK_PROPOSAL_UNVOTE);
    expect(Tracking.track.getCall(0).args[1]).to.deep.equal({
      'proposalId': 'foo',
      'nature': 'bar',
      'card-position': '999'
    });
  });

  it('track Qualify', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackQualify('foo', 'baz', 'bar', 999);
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.CLICK_PROPOSAL_QUALIFY);
    expect(Tracking.track.getCall(0).args[1]).to.deep.equal({
      'proposalId': 'foo',
      'type': 'baz',
      'nature': 'bar',
      'card-position': '999'
    });
  });

  it('track Unqualify', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackUnqualify('foo', 'baz', 'bar', 999);
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.CLICK_PROPOSAL_UNQUALIFY);
    expect(Tracking.track.getCall(0).args[1]).to.deep.equal({
      'proposalId': 'foo',
      'type': 'baz',
      'nature': 'bar',
      'card-position': '999'
    });
  });

  it('track Click Consultation', () => {
    sandbox.spy(Tracking, 'track');

    Tracking.trackClickConsultation();
    expect(Tracking.track.calledOnce).to.equal(true);
    expect(Tracking.track.getCall(0).args[0]).to.equal(trackingConstants.CLICK_CONSULTATION_LINK);
  });
});
