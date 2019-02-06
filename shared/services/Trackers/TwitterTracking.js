// @flow
import Logger from 'Shared/services/Logger';
import * as trackingConstants from 'Shared/constants/tracking';
import { env } from 'Shared/env';
import { twttr } from './twttr';


const twitterEventMapping = {
  [trackingConstants.DISPLAY_SEQUENCE]: 'o173q',
  [trackingConstants.CLICK_START_SEQUENCE]: 'o16w5',
  [trackingConstants.DISPLAY_PROPOSAL_SUBMIT_VALIDATION]: 'o16wc',
  [trackingConstants.CLICK_PROPOSAL_VOTE]: 'o173p',
  [trackingConstants.CLICK_SEQUENCE_FIRST_VOTE]: 'o16w8',
  [trackingConstants.DISPLAY_PROPOSAL_PUSH_CARD]: 'o16wa',
  [trackingConstants.DISPLAY_SIGN_UP_CARD]: 'o16wb'
};

const isInitialized = (): boolean => {
  if (!twttr.initialized()) {
    Logger.logWarning('Twitter Tracking not initialized');
  }

  return twttr.initialized();
};

export default {
  track(action: string): void {
    if (!isInitialized()) {
      return;
    }

    if (twitterEventMapping[action] === undefined) {
      Logger.logError(`twitter action not found: ${action}`);
      return;
    }

    const eventName = twitterEventMapping[action];

    if (env.isDev()) {
      Logger.logInfo(`Tracking Twitter: event ${eventName}`);
      return;
    }

    twttr.track(eventName);
  }
};
