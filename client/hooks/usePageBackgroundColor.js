// @flow
import { useEffect } from 'react';
import {
  isHomepage,
  isBrowseConsultationsPage,
  isBrowseResultsPage,
  isHomepageWithLocale,
} from 'Shared/routes';
import { Logger } from 'Shared/services/Logger';

export const usePageBackgoundColor = (locationPath: string) => {
  useEffect(() => {
    const pageWrapper = document.getElementById('page_wrapper');
    const whiteBackgroundPage =
      isHomepageWithLocale(locationPath) ||
      isHomepage(locationPath) ||
      isBrowseConsultationsPage(locationPath) ||
      isBrowseResultsPage(locationPath);

    if (!pageWrapper) {
      return Logger.logError({
        message:
          'Error in usePageBackgroundColor hook, page_wrapper is was not found',
        name: 'hooks',
      });
    }

    if (whiteBackgroundPage) {
      return pageWrapper.classList.add('white');
    }

    return pageWrapper.classList.remove('white');
  }, [locationPath]);
};
