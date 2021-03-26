// flow
import { isParticipatePage, isResultsPage } from 'Shared/routes';
import {
  RESULTS_TOP_IDEAS,
  RESULTS_CONTROVERSIALS,
  RESULTS_CARTOGRAPHY,
  RESULTS_PARTICIPATION,
} from 'Shared/constants/ids';

import { i18n } from 'Shared/i18n';

/**
 * Renders current page Breadcrumb depending on location
 * @param  {string} location
 * @param  {Object} question
 * @return {string || null}
 */

export const getCurrentLabel = (location, question) => {
  if (isParticipatePage(location)) {
    return i18n.t('consultation.navigation.participate_breadcrumb', {
      title: question.wording.title,
    });
  }
  if (isResultsPage(location)) {
    return i18n.t('consultation.results.breadcrumb', {
      title: question.wording.title,
    });
  }
  return i18n.t('consultation.navigation.explore_breadcrumb', {
    title: question.wording.title,
  });
};

export const getCurrentContainer = id => {
  switch (id) {
    case RESULTS_TOP_IDEAS:
      return 'top-ideas';
    case RESULTS_CONTROVERSIALS:
      return 'proposals-controversials';
    case RESULTS_CARTOGRAPHY:
      return 'cartography';
    case RESULTS_PARTICIPATION:
      return 'participants-chart';
    default:
      return null;
  }
};
