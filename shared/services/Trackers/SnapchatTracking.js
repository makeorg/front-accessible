/* @flow */
import { env } from 'Shared/env';
import trackingConfiguration from 'Shared/services/trackingConfiguration.yaml';
import { snap } from './snap';

const makePixelId: string = '8ae09c4d-02f5-435a-bbb2-d785a56c9ae4';
const SnapchatEventMapping = {
  [trackingConfiguration.DISPLAY_SEQUENCE.key]: 'PAGE_VIEW',
  [trackingConfiguration.CLICK_SEQUENCE_FIRST_VOTE.key]: 'CUSTOM_EVENT_1',
};

let initialized: boolean = false;

const isInitialized = (): boolean => {
  if (!initialized) {
    // eslint-disable-next-line no-console
    console.warn(
      'Snapchat Tracking not initialized before using call SnapchatTracking.init with required params'
    );
  }

  return initialized;
};

export const SnapchatTracking = {
  init(): void {
    snap.load();
    snap.track('init', makePixelId);
    initialized = true;
  },

  pageView(): void {
    if (!isInitialized()) {
      return;
    }

    if (env.isDev()) {
      return;
    }

    snap.track('track', 'PAGE_VIEW');
  },

  track(action: string): void {
    if (!isInitialized() || SnapchatEventMapping[action] === undefined) {
      return;
    }

    const eventName = SnapchatEventMapping[action];

    if (env.isDev()) {
      // eslint-disable-next-line no-console
      console.info(
        `Tracking Snapchat (${makePixelId})
        event => ${eventName}`
      );

      return;
    }

    snap.track('track', eventName);
  },
};
