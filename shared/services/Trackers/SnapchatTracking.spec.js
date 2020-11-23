/* @flow */
import { env } from 'Shared/env';
import trackingConfiguration from 'Shared/services/trackingConfiguration';
import { snap } from './snap';
import { SnapchatTracking } from './SnapchatTracking';

jest.unmock('./SnapchatTracking');
jest.mock('./snap');
jest.mock('Shared/env');

describe('Snapchat Tracking Service', () => {
  beforeEach(() => {
    env.isDev.mockReturnValue(false);
  });

  afterEach(() => {
    snap.track.mockReset();
    env.isDev.mockReset();
  });

  it('load snap when init Snapchat Tracking Service', () => {
    jest.spyOn(snap, 'load');
    jest.spyOn(snap, 'track');

    SnapchatTracking.init();
    expect(snap.load).toHaveBeenCalled();
    expect(snap.track.mock.calls).toEqual([
      ['init', '8ae09c4d-02f5-435a-bbb2-d785a56c9ae4'],
    ]);
  });

  it('dont send event in dev environnemnt', () => {
    jest.spyOn(snap, 'track');
    const eventName = 'FooEvent';

    env.isDev.mockReturnValue(true);

    SnapchatTracking.track(eventName);

    expect(snap.track).not.toHaveBeenCalled();
  });

  it('track Snapchat DISPLAY_SEQUENCE event on prod env', () => {
    env.isDev.mockReturnValue(false);

    SnapchatTracking.track(trackingConfiguration.DISPLAY_SEQUENCE.key);
    expect(snap.track).toHaveBeenCalledWith('track', 'PAGE_VIEW');
  });

  it('track Snapchat CLICK_SEQUENCE_FIRST_VOTE event on prod env', () => {
    env.isDev.mockReturnValue(false);

    SnapchatTracking.track(trackingConfiguration.CLICK_SEQUENCE_FIRST_VOTE.key);
    expect(snap.track).toHaveBeenCalledWith('track', 'CUSTOM_EVENT_1');
  });
});
