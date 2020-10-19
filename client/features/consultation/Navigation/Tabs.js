// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { type StateRoot } from 'Shared/store/types';
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
  isConsultationPage as getIsConsultationPage,
  isActionsPage as getIsActionsPage,
  isResultsPage as getIsResultsPage,
  isTopIdeaDetailsPage as getIsTopIdeaDetailsPage,
  isTopIdeasPage as getIsTopIdeasPage,
} from 'Shared/routes';
import { useSelector } from 'react-redux';

type Props = {
  question: QuestionType,
};
export const NavigationWithTabs = ({ question }: Props) => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const consultationLink = getConsultationLink(country, question.slug);
  const actionsLink = getActionLink(country, question.slug);
  const resultsLink = getResultsLink(country, question.slug);

  const location = useLocation();

  const isConsultationPage = getIsConsultationPage(location.pathname);
  const isActionsPage = getIsActionsPage(location.pathname);
  const isResultsPage = getIsResultsPage(location.pathname);
  const isTopIdeasPage = getIsTopIdeasPage(location.pathname);
  const isTopIdeaDetailsPage = getIsTopIdeaDetailsPage(location.pathname);

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
        <FullWidthTabStyle isSelected={isResultsPage || isConsultationPage}>
          <Link
            to={isResultsPage ? resultsLink : consultationLink}
            aria-current={isResultsPage || isConsultationPage}
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
