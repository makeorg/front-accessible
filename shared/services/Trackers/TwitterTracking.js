// @flow
import { Logger } from 'Shared/services/Logger';
import * as trackingConstants from 'Shared/constants/tracking';
import { env } from 'Shared/env';
import { twttr } from './twttr';

const TWITTER_UNIVERSAL_MAKE_TAG = 'o2q8v';
const twitterEventMapping = {
  [trackingConstants.CLICK_PROPOSAL_SUBMIT]: 'o2q9h',
  [trackingConstants.CLICK_PROPOSAL_UNVOTE]: 'o2q9n',
  [trackingConstants.CLICK_PROPOSAL_VOTE]: 'o2q9d',
  [trackingConstants.CLICK_SEQUENCE_FIRST_VOTE]: 'o2q9f',
  [trackingConstants.CLICK_START_SEQUENCE]: 'o2q9t', // = click-sequence-launch on twitter
  [trackingConstants.CLICK_SEQUENCE_OPEN]: 'o2q9j',
  [trackingConstants.DISPLAY_PAGE_OPERATION]: 'o2q9i',
  [trackingConstants.DISPLAY_PROPOSAL_SUBMIT_VALIDATION]: 'o2q9g',
  [trackingConstants.DISPLAY_SEQUENCE]: 'o2q9e',
  [trackingConstants.DISPLAY_INTRO_CARD]: 'o2q9l', // = display-sequence-intro-card on twitter
  [trackingConstants.CLICK_PROPOSAL_QUALIFY]: 'o2q9o',
  [trackingConstants.CLICK_PROPOSAL_UNQUALIFY]: 'o2q9p',
  [trackingConstants.CLICK_PROPOSAL_VIEW_MORE]: 'o2q9q', // = click-proposal-viewmore on twitter
};

const isInitialized = (): boolean => {
  if (!twttr.initialized()) {
    Logger.logWarning('Twitter Tracking not initialized');
  }

  return twttr.initialized();
};

export const TwitterTracking = {
  track(action: string): void {
    if (twitterEventMapping[action] === undefined) {
      Logger.logInfo(`twitter action not found: ${action}`);
      return;
    }

    const eventName = twitterEventMapping[action];

    if (env.isDev()) {
      Logger.logInfo(`Tracking Twitter: event ${eventName}`);
      return;
    }

    if (!isInitialized()) {
      return;
    }

    twttr.track(eventName);
  },
};

export const TwitterUniversalTag = {
  /* eslint-disable */
  init() {
    if (env.isTest() || env.isDev()) {
      return;
    }
    // $FlowFixMe
    !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
    // $FlowFixMe
    twq('init',TWITTER_UNIVERSAL_MAKE_TAG);
    
  },
  pageView() {
    if (env.isTest() || env.isDev()) {
      Logger.logInfo(`Tracking Twitter: event pageView`);
      return;
    }
    // $FlowFixMe
    twq('track','PageView');
  },
  /* eslint-enable */
};
