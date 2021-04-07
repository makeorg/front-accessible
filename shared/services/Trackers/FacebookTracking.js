// @flow
import { env } from 'Shared/env';
import { fbq } from './fbq';

const makePixelId: string = '260470104426586';
const weEuropeansPixelId: string = '387088288517542';

const weeuropeansquestionRegex = new RegExp(
  /(weeuropeans|weuropeanround)-[a-z]+/
);

let initialized: boolean = false;

type FacebookEventParams = {
  source: string,
  location: string,
  url: string,
  country: string,
  language: string,
  referer?: string,
  question: string,
  cardPosition?: string,
  sequenceId?: string,
  proposalId?: string,
  questionId?: string,
  questionSlug?: string,
};

const isInitialized = (): boolean => {
  if (!initialized) {
    // eslint-disable-next-line no-console
    console.warn(
      'Facebook Tracking not initialized before using call FacebookTracking.init with required params'
    );
  }

  return initialized;
};

export const FacebookTracking = {
  init(): void {
    fbq.load();
    fbq.track('init', makePixelId);
    fbq.track('init', weEuropeansPixelId);
    initialized = true;
  },

  pageView(): void {
    if (!isInitialized()) {
      return;
    }

    if (env.isDev()) {
      return;
    }

    fbq.track('track', 'PageView');
  },

  trackCustom(eventName: string, eventParameters: FacebookEventParams): void {
    if (!isInitialized()) {
      return;
    }

    const isWeeuropeans =
      eventParameters.question &&
      weeuropeansquestionRegex.test(eventParameters.question);
    if (env.isDev()) {
      // eslint-disable-next-line no-console
      console.info(
        `Tracking Custom Facebook (${makePixelId})
        event => ${eventName}
        params => ${JSON.stringify(eventParameters)}`
      );
      if (isWeeuropeans) {
        // eslint-disable-next-line no-console
        console.info(
          `Tracking Custom Facebook (${weEuropeansPixelId})
          event => ${eventName}
          params => ${JSON.stringify(eventParameters)}`
        );
      }
      return;
    }

    fbq.track('trackSingleCustom', makePixelId, eventName, eventParameters);
    if (isWeeuropeans) {
      fbq.track(
        'trackSingleCustom',
        weEuropeansPixelId,
        eventName,
        eventParameters
      );
    }
  },
};
