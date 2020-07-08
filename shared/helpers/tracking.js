// @flow
import { type PerformanceTimingType } from 'Shared/types/tracking';
import { APP_NAME } from 'Shared/constants/config';
import { trackPerformance } from 'Shared/services/Tracking';

export const postPerfomanceTiming = async (
  performanceTiming: PerformanceTimingType,
  appName?: string = APP_NAME
): Promise<?{}> => {
  const {
    connectStart,
    connectEnd,
    domComplete,
    domContentLoadedEventEnd,
    domContentLoadedEventStart,
    domInteractive,
    domLoading,
    domainLookupEnd,
    domainLookupStart,
    fetchStart,
    loadEventEnd,
    loadEventStart,
    navigationStart,
    redirectEnd,
    redirectStart,
    requestStart,
    responseEnd,
    responseStart,
    secureConnectionStart,
    unloadEventEnd,
    unloadEventStart,
  } = performanceTiming;

  const response = await trackPerformance(appName, {
    connectStart,
    connectEnd,
    domComplete,
    domContentLoadedEventEnd,
    domContentLoadedEventStart,
    domInteractive,
    domLoading,
    domainLookupEnd,
    domainLookupStart,
    fetchStart,
    loadEventEnd,
    loadEventStart,
    navigationStart,
    redirectEnd,
    redirectStart,
    requestStart,
    responseEnd,
    responseStart,
    secureConnectionStart,
    unloadEventEnd,
    unloadEventStart,
  });

  return response;
};
