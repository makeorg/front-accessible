// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { matchPath, useLocation } from 'react-router';
import { type QuestionType } from 'Shared/types/question';
import { i18n } from 'Shared/i18n';
import { DateHelper } from 'Shared/helpers/date';
import {
  ExtraTabsInformationsStyle,
  ConsultationNavStyle,
} from 'Client/features/consultation/Styled/Tabs';
import { TabListStyle, FullWidthTabStyle } from 'Client/ui/Elements/Tabs';
import {
  getConsultationLink,
  getActionLink,
  getResultsLink,
} from 'Shared/helpers/url';
import { trackClickActionsTab } from 'Shared/services/Tracking';
import {
  ROUTE_CONSULTATION,
  ROUTE_ACTION,
  ROUTE_RESULTS,
  ROUTE_TOP_IDEA_DETAILS,
  ROUTE_TOP_IDEAS,
} from 'Shared/routes';

type Props = {
  question: QuestionType,
};
export const NavigationWithTabs = ({ question }: Props) => {
  const consultationLink = getConsultationLink(
    question.country,
    question.language,
    question.slug
  );
  const actionsLink = getActionLink(
    question.country,
    question.language,
    question.slug
  );
  const resultsLink = getResultsLink(
    question.country,
    question.language,
    question.slug
  );

  const location = useLocation();
  const isConsultationPage = !!matchPath(location.pathname, ROUTE_CONSULTATION);
  const isActionsPage = !!matchPath(location.pathname, ROUTE_ACTION);
  const isResultsPage = !!matchPath(location.pathname, ROUTE_RESULTS);
  const isTopIdeasPage = !!matchPath(location.pathname, ROUTE_TOP_IDEAS);
  const isTopIdeaDetailsPage = !!matchPath(
    location.pathname,
    ROUTE_TOP_IDEA_DETAILS
  );

  if (isTopIdeasPage || isTopIdeaDetailsPage) {
    return null;
  }

  return (
    <ConsultationNavStyle
      aria-label={i18n.t('common.consultation_nav', {
        name: question.wording.question,
      })}
      id="consultation_nav"
    >
      <TabListStyle>
        <FullWidthTabStyle
          isSelected={
            question.displayResults ? isResultsPage : isConsultationPage
          }
        >
          <Link
            to={question.displayResults ? resultsLink : consultationLink}
            aria-current={
              question.displayResults ? isResultsPage : isConsultationPage
            }
          >
            {i18n.t('consultation.tabs.consultation')}
            <ExtraTabsInformationsStyle>
              {i18n.t('consultation.tabs.from')}
              <time dateTime={question.startDate}>
                {DateHelper.creationDateFormat(question.startDate)}
              </time>
              {i18n.t('consultation.tabs.to')}
              <time dateTime={question.endDate}>
                {DateHelper.creationDateFormat(question.endDate)}
              </time>
            </ExtraTabsInformationsStyle>
          </Link>
        </FullWidthTabStyle>
        <FullWidthTabStyle isSelected={isActionsPage}>
          <Link
            to={actionsLink}
            aria-current={isActionsPage}
            onClick={trackClickActionsTab}
          >
            {i18n.t('consultation.tabs.action')}
          </Link>
        </FullWidthTabStyle>
      </TabListStyle>
    </ConsultationNavStyle>
  );
};
