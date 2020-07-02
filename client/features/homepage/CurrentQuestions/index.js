// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import { type HomeQuestionType } from 'Shared/types/question';
import {
  getBrowseResultsLink,
  getBrowseConsultationsLink,
} from 'Shared/helpers/url';
import { useSelector } from 'react-redux';
import { scrollToTop } from 'Shared/helpers/styled';
import {
  HomepageSectionTitleStyle,
  HomepageSectionStyle,
} from 'Client/pages/Home/style';
import { BrowseConsultationsList } from 'Client/features/consultation/Browse/List';
import { CurrentQuestionsButtonStyle } from './style';

type Props = {
  questions: HomeQuestionType[] | [],
};

export const CurrentQuestions = ({ questions }: Props) => {
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const numberOfQuestions = questions.length;
  const hasQuestions = numberOfQuestions > 0;

  let buttonLink = getBrowseResultsLink(country, language);
  let buttonText = i18n.t('browse.see_closed_consultations');

  if (hasQuestions) {
    buttonLink = getBrowseConsultationsLink(country, language);
    buttonText = i18n.t('browse.browse');
  }

  return (
    <HomepageSectionStyle
      as="section"
      aria-labelledby="current_consultations_title"
    >
      <HomepageSectionTitleStyle
        id="current_consultations_title"
        data-cy-container="current_consultations_title"
      >
        {i18n.t('browse.title')}
      </HomepageSectionTitleStyle>
      <BrowseConsultationsList questions={questions} />
      <CurrentQuestionsButtonStyle to={buttonLink} onClick={scrollToTop}>
        {buttonText}
      </CurrentQuestionsButtonStyle>
    </HomepageSectionStyle>
  );
};
