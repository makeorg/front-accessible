/* @flow */
import { Logger } from 'Shared/services/Logger';
import * as trackingConstants from 'Shared/constants/tracking';
import { env } from 'Shared/env';
import { twttr } from './twttr';
import { TwitterTracking } from './TwitterTracking';

jest.unmock('./TwitterTracking');
jest.mock('./twttr');
jest.mock('Shared/env');
jest.mock('Shared/services/Logger');

describe('Twitter Tracking Service', () => {
  beforeEach(() => {
    env.isDev.mockReturnValue(false);
    jest.spyOn(Logger, 'logInfo');
    jest.spyOn(Logger, 'logWarning');
    jest.spyOn(Logger, 'logError');
    jest.spyOn(twttr, 'track');
  });
  afterEach(() => {
    twttr.track.mockReset();
    twttr.initialized.mockReset();
    env.isDev.mockReset();
    Logger.logError.mockReset();
    Logger.logInfo.mockReset();
    Logger.logWarning.mockReset();
  });

  it('track Twitter event on prod env', () => {
    env.isDev.mockReturnValue(false);
    twttr.initialized.mockReturnValue(true);

    TwitterTracking.track(trackingConstants.DISPLAY_SEQUENCE);
    expect(twttr.track).toHaveBeenCalledWith('o173q');
  });

  it('not track Twitter event on dev env', () => {
    env.isDev.mockReturnValue(true);
    twttr.initialized.mockReturnValue(true);

    TwitterTracking.track(trackingConstants.DISPLAY_SEQUENCE);
    expect(twttr.track).not.toHaveBeenCalled();
    expect(Logger.logInfo).toHaveBeenCalledWith('Tracking Twitter: event o173q');
  });

  it('not track Twitter event if not initialized', () => {
    env.isDev.mockReturnValue(false);
    twttr.initialized.mockReturnValue(false);

    TwitterTracking.track(trackingConstants.DISPLAY_SEQUENCE);
    expect(twttr.track).not.toHaveBeenCalled();
    expect(Logger.logWarning).toHaveBeenCalledWith('Twitter Tracking not initialized');
  });

  it('not track Twitter event if action not exist', () => {
    env.isDev.mockReturnValue(true);
    twttr.initialized.mockReturnValue(true);

    TwitterTracking.track('badevent');
    expect(twttr.track).not.toHaveBeenCalled();
    expect(Logger.logError).toHaveBeenCalledWith('twitter action not found: badevent');
  });
});
