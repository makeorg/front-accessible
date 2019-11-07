// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { matchPath, type Location as TypeLocation } from 'react-router';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { i18n } from 'Shared/i18n';
import { DateHelper } from 'Shared/helpers/date';
import { ExtraTabsInformationsStyle } from 'Client/features/consultation/Styled/Tabs';
import {
  TabNavStyle,
  TabListStyle,
  FullWidthTabStyle,
} from 'Client/ui/Elements/Tabs';
import {
  getConsultationLink,
  getActionLink,
  getResultsLink,
} from 'Shared/helpers/url';
import { trackClickActionsTab } from 'Shared/services/Tracking';
import { ROUTE_CONSULTATION, ROUTE_ACTION, ROUTE_RESULTS } from 'Shared/routes';

type Props = {
  question: TypeQuestion,
  location: TypeLocation,
};
export const NavigationWithTabs = ({ question, location }: Props) => {
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

  const isConsultationPage = !!matchPath(location.pathname, ROUTE_CONSULTATION);
  const isActionsPage = !!matchPath(location.pathname, ROUTE_ACTION);
  const isResultsPage = !!matchPath(location.pathname, ROUTE_RESULTS);

  return (
    <TabNavStyle
      aria-label={i18n.t('common.consultation_nav', {
        name: question.wording.question,
      })}
      id="consultation_nav"
    >
      <TabListStyle>
        {question.displayResults ? (
          <FullWidthTabStyle isSelected={isResultsPage}>
            <Link to={resultsLink} aria-current={isResultsPage}>
              {i18n.t('consultation.tabs.results')}
            </Link>
          </FullWidthTabStyle>
        ) : (
          <FullWidthTabStyle isSelected={isConsultationPage}>
            <Link to={consultationLink} aria-current={isConsultationPage}>
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
        )}
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
    </TabNavStyle>
  );
};