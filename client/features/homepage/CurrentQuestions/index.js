// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { type StateRoot } from 'Shared/store/types';
import { type HomeQuestionType } from 'Shared/types/question';
import { DateHelper } from 'Shared/helpers/date';
import {
  getConsultationLink,
  getBrowseResultsLink,
  getBrowseConsultationsLink,
} from 'Shared/helpers/url';
import {
  ConsultationElementStyle,
  ConsultationElementPictureStyle,
  ConsultationElementSubtitleStyle,
  ConsultationElementTitleStyle,
  ConsultationElementDateWrapperStyle,
  ConsultationElementDateStyle,
  ConsultationRedLinkElementStyle,
  ClockIconStyle,
  ConsultationArticleStyle,
} from 'Client/features/consultation/Browse/style';
import { NoConsultation } from 'Client/features/consultation/Browse/NoConsultation';
import { useSelector } from 'react-redux';
import { scrollToTop } from 'Shared/helpers/styled';
import {
  HomepageSectionTitleStyle,
  HomepageSectionStyle,
} from 'Client/pages/Home/style';
import {
  CurrentQuestionsListStyle,
  CurrentQuestionsButtonStyle,
} from './style';

type ItemProps = {
  question: HomeQuestionType,
};

export const ConsultationItem = ({ question }: ItemProps) => {
  const {
    consultationImage,
    featured,
    startDate,
    endDate,
    country,
    language,
    questionSlug,
  } = question;
  return (
    <ConsultationArticleStyle>
      <ConsultationElementPictureStyle src={consultationImage} alt="" />
      {featured && (
        <ConsultationElementSubtitleStyle>
          {i18n.t('browse_consultations.initiative')}
        </ConsultationElementSubtitleStyle>
      )}
      <ConsultationElementTitleStyle>
        {question.question}
      </ConsultationElementTitleStyle>
      <ConsultationElementDateWrapperStyle>
        <ClockIconStyle aria-hidden />
        <ConsultationElementDateStyle>
          {i18n.t('browse_consultations.date', {
            startDate: DateHelper.creationDateFormat(startDate),
            endDate: DateHelper.creationDateFormat(endDate),
          })}
        </ConsultationElementDateStyle>
      </ConsultationElementDateWrapperStyle>
      <ConsultationRedLinkElementStyle
        to={getConsultationLink(country, language, questionSlug)}
      >
        {i18n.t('browse_consultations.current.participate')}
      </ConsultationRedLinkElementStyle>
    </ConsultationArticleStyle>
  );
};

type Props = {
  questions: HomeQuestionType[] | [],
};

export const CurrentQuestions = ({ questions }: Props) => {
  const { country, language } = useSelector(
    (state: StateRoot) => state.appConfig
  );
  const numberOfQuestions = questions.length;
  const hasQuestions = numberOfQuestions > 0;
  const hasOneQuestion = numberOfQuestions === 1;
  return (
    <HomepageSectionStyle
      as="section"
      aria-labelledby="current_consultations_title"
    >
      <HomepageSectionTitleStyle
        id="current_consultations_title"
        data-cy-container="current_consultations_title"
      >
        {i18n.t('browse_consultations.title')}
      </HomepageSectionTitleStyle>
      {!hasQuestions && (
        <>
          <NoConsultation length={numberOfQuestions} />
          <CurrentQuestionsButtonStyle
            to={getBrowseResultsLink(country, language)}
            onClick={scrollToTop}
          >
            {i18n.t('browse_consultations.see_closed_consultations')}
          </CurrentQuestionsButtonStyle>
        </>
      )}
      {hasOneQuestion ? (
        <CurrentQuestionsListStyle>
          {questions.map(question => (
            <ConsultationElementStyle
              itemsCount={2}
              as="li"
              key={question.questionId}
            >
              <ConsultationItem question={question} key={question.questionId} />
            </ConsultationElementStyle>
          ))}
          <ConsultationElementStyle itemsCount={2} as="li">
            <NoConsultation length={numberOfQuestions} />
          </ConsultationElementStyle>
        </CurrentQuestionsListStyle>
      ) : (
        <CurrentQuestionsListStyle>
          {questions.map((question, index) => (
            <ConsultationElementStyle
              as="li"
              itemsCount={index}
              key={question.questionId}
            >
              <ConsultationItem question={question} />
            </ConsultationElementStyle>
          ))}
        </CurrentQuestionsListStyle>
      )}
      {hasQuestions && (
        <CurrentQuestionsButtonStyle
          to={getBrowseConsultationsLink(country, language)}
          onClick={scrollToTop}
        >
          {i18n.t('browse_consultations.browse')}
        </CurrentQuestionsButtonStyle>
      )}
    </HomepageSectionStyle>
  );
};
