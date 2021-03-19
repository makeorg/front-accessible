// flow
import { isParticipatePage, isBetaResultsPage } from 'Shared/routes';
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
  if (isBetaResultsPage(location)) {
    return i18n.t('consultation.results.breadcrumb', {
      title: question.wording.title,
    });
  }
  return i18n.t('consultation.navigation.explore_breadcrumb', {
    title: question.wording.title,
  });
};
