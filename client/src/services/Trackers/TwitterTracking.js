// @flow
import * as trackingConstants from 'Src/constants/tracking';
import { env } from 'Shared/env';

let initialized = false;

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
  if (!initialized) {
    console.warn('Twitter Tracking not initialized before using call TwitterTracking.init with required params');
  }

  return initialized;
};

export default {
  init(conversionId: string): void {
    /* eslint-disable */
    !(function (e, t, n, s, u, a) {
      e.twq || (s = e.twq = function () {
        // $FlowFixMe
      s.exe ? s.exe(...arguments) : s.queue.push(arguments);
      }, s.version = '1.1', s.queue = [], u = t.createElement(n), u.async = !0, u.src = '//static.ads-twitter.com/uwt.js',
      // $FlowFixMe
      a = t.getElementsByTagName(n)[0], a.parentNode.insertBefore(u, a));
    }(window, document, 'script'));
    /* eslint-enable */

    if (conversionId) {
      // $FlowFixMe
      twq('init', conversionId); // eslint-disable-line no-undef
      initialized = true;
    } else {
      console.error('TwitterConvTrkr.init(convId) missing conversion id.');
    }
  },

  pageView(): void {
    if (!isInitialized()) {
      return;
    }

    // $FlowFixMe
    twq('track', 'PageView'); // eslint-disable-line no-undef
  },

  track(action: string): void {
    if (!isInitialized()) {
      return;
    }

    if (twitterEventMapping[action] === undefined) {
      return;
    }

    const eventName = twitterEventMapping[action];

    if (env.isDev()) {
      console.info(`Tracking Twitter: event ${eventName}`);
    }

    // $FlowFixMe
    twq('track', eventName); // eslint-disable-line no-undef
  }
};
