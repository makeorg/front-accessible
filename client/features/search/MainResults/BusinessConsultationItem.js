// @flow
import React from 'react';
import { color } from 'athena-design-tokens';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { type StateRoot } from 'Shared/store/types';
import { type QuestionType } from 'Shared/types/question';
import { isInProgress } from 'Shared/helpers/date';
import { getConsultationLink } from 'Shared/helpers/url';
import { trackClickHomepageConsultations } from 'Shared/services/Tracking';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { i18n } from 'Shared/i18n';
import {
  SearchResultsConsultationListStyle,
  BusinessConsultationsItemStyle,
  BusinessConsultationsItemLinkStyle,
  BusinessConsultationsItemBorderStyle,
  BusinessConsultationStyle,
  BusinessConsultationsItemStatusStyle,
  BusinessConsultationsItemArrowStyle,
} from '../Styled';

type Props = {
  questions: QuestionType[],
};

const businessConsultation = (question, country, language) => (
  <BusinessConsultationsItemStyle
    key={question.slug}
    backgroundColor={color.white}
  >
    <BusinessConsultationsItemLinkStyle
      to={
        isInProgress(question)
          ? getConsultationLink(country, language, question.slug)
          : undefined
      }
      as={isInProgress(question) ? Link : 'a'}
      href={isInProgress(question) ? undefined : question.aboutUrl || '#'}
      onClick={() => trackClickHomepageConsultations()}
    >
      <BusinessConsultationsItemBorderStyle
        colorStart={question.theme.gradientStart}
        colorEnd={question.theme.gradientEnd}
      />
      <BusinessConsultationStyle>
        <BusinessConsultationsItemStatusStyle>
          <ScreenReaderItemStyle>
            {i18n.t('search.main_results.status')}
          </ScreenReaderItemStyle>
          {isInProgress(question)
            ? i18n.t('search.main_results.open_consultation')
            : i18n.t('search.main_results.finished_consultation')}
        </BusinessConsultationsItemStatusStyle>
        {question.question}
      </BusinessConsultationStyle>
      <BusinessConsultationsItemArrowStyle aria-hidden />
    </BusinessConsultationsItemLinkStyle>
  </BusinessConsultationsItemStyle>
);
export const BusinessConsultationsList = ({ questions }: Props) => {
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );

  return (
    <SearchResultsConsultationListStyle>
      {questions.map(question =>
        businessConsultation(question, country, language)
      )}
    </SearchResultsConsultationListStyle>
  );
};
