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
  HomepagePageInnerStyle,
} from 'Client/pages/Home/style';
import {
  trackClickBrowseConsultations,
  trackClickBrowseResults,
} from 'Shared/services/Tracking';
import { BrowseConsultationsList } from 'Client/features/consultation/Browse/List';
import { ConsultationElementTitleStyle } from 'Client/features/consultation/Browse/style';
import { HomepageQuestionsButtonStyle } from './style';
import { FeaturedSeparatorStyle } from '../Featured/Posts/style';

type Props = {
  currentQuestions: HomeQuestionType[] | [],
  pastQuestions: HomeQuestionType[] | [],
};

export const HomepageQuestions = ({
  currentQuestions,
  pastQuestions,
}: Props) => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  const hasCurrentQuestions = currentQuestions.length > 0;

  let buttonLink = getBrowseResultsLink(country);
  let buttonText = i18n.t('browse.see_closed_consultations');

  if (hasCurrentQuestions) {
    buttonLink = getBrowseConsultationsLink(country);
    buttonText = i18n.t('browse.browse');
  }

  const handleClick = () => {
    if (!hasCurrentQuestions) {
      trackClickBrowseResults();
    } else {
      trackClickBrowseConsultations();
    }
    scrollToTop();
  };

  return (
    <HomepageSectionStyle
      as="section"
      aria-labelledby="current_consultations_title"
      id="current_questions"
    >
      <HomepageSectionTitleStyle
        id="current_consultations_title"
        data-cy-container="current_consultations_title"
        className="with-container"
      >
        {i18n.t('browse.title')}
      </HomepageSectionTitleStyle>
      {hasCurrentQuestions ? (
        <BrowseConsultationsList
          questions={currentQuestions}
          total={currentQuestions.length}
        />
      ) : (
        <>
          <BrowseConsultationsList
            questions={currentQuestions}
            total={currentQuestions.length}
          />
          <HomepagePageInnerStyle>
            <FeaturedSeparatorStyle />
            <ConsultationElementTitleStyle>
              {i18n.t('browse.past_questions')}
            </ConsultationElementTitleStyle>
          </HomepagePageInnerStyle>
          <BrowseConsultationsList
            questions={pastQuestions}
            total={pastQuestions.length}
            resultsContext
            noRegister
          />
        </>
      )}
      <HomepagePageInnerStyle>
        <HomepageQuestionsButtonStyle
          to={buttonLink}
          onClick={handleClick}
          data-cy-link="current-questions-link"
        >
          {buttonText}
        </HomepageQuestionsButtonStyle>
      </HomepagePageInnerStyle>
    </HomepageSectionStyle>
  );
};
