/* @flow */
import { env } from 'Shared/env';

let initialized: boolean = false;

type FacebookEventParams = {
  source: string,
  location: string,
  url: string,
  country: string,
  language: string,
  referer?: string,
  question?: string,
  cardPosition?: string,
  sequenceId?: string,
  proposalId?: string,
  questionId?: string
};

const isInitialized = (): boolean => {
  if (!initialized) {
    console.warn('Facebook Tracking not initialized before using call FacebookTracking.init with required params');
  }

  return initialized;
};

export default {
  init(pixelId: string): void {
    /* eslint-disable */
    // $FlowFixMe
    !function (f, b, e, v, n, t, s) {
      if (f.fbq) return; n = f.fbq = function () {
        n.callMethod ?
          n.callMethod.apply(n, arguments) : n.queue.push(arguments)
      };
      if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
      n.queue = []; t = b.createElement(e); t.async = !0;
      t.src = v; s = b.getElementsByTagName(e)[0];
      // $FlowFixMe
      s.parentNode.insertBefore(t, s)
    }(window, document, 'script',
      'https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */

    if (pixelId) {
      // $FlowFixMe
      fbq('init', pixelId); // eslint-disable-line no-undef
      initialized = true;
    } else {
      console.error('FacebookTracking.init(convId) missing pixelId.');
    }
  },

  pageView(): void {
    if (!isInitialized()) {
      return;
    }

    if (env.isDev()) {
      return;
    }

    // $FlowFixMe
    fbq('track', 'PageView'); // eslint-disable-line no-undef
  },

  track(eventName: string, eventParameters: FacebookEventParams): void {
    if (!isInitialized()) {
      return;
    }


    if (env.isDev()) {
      console.info(`Tracking Facebook: event ${eventName} params ${JSON.stringify(eventParameters)}`);
      return;
    }

    // $FlowFixMe
    fbq('track', title, eventParameters); // eslint-disable-line no-undef
  },

  trackCustom(eventName: string, eventParameters: FacebookEventParams): void {
    if (!isInitialized()) {
      return;
    }

    if (env.isDev()) {
      console.info(`Tracking Facebook: event ${eventName} params ${JSON.stringify(eventParameters)}`);
      return;
    }

    // $FlowFixMe
    fbq('trackCustom', eventName, eventParameters); // eslint-disable-line no-undef
  }
};
