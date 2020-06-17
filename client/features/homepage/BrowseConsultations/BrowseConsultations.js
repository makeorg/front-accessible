import React from 'react';
import { i18n } from 'Shared/i18n';
import { type HomeQuestionType } from 'Shared/types/views';
import { DateHelper } from 'Shared/helpers/date';
import { getConsultationLink } from 'Shared/helpers/url';
import {
  ConsultationsWrapperStyle,
  ConsultationElementStyle,
  ConsultationElementPicture,
  ConsultationElementSubtitle,
  ConsultationElementQuestion,
  ConsultationElementDateWrapper,
  ConsultationElementDateStyle,
  ConsultationRedLinkElementStyle,
  BrowseClockIconStyle,
} from 'Client/features/consultation/Browse/style';

export const BrowseConsultations = ({ currentQuestions }: HomeQuestionType) => (
  <ConsultationsWrapperStyle as="ul">
    {currentQuestions.map(question => (
      <ConsultationElementStyle as="li">
        <ConsultationElementPicture src={question.consultationImage} alt="" />
        {question.featured && (
          <ConsultationElementSubtitle>
            {i18n.t('browse_consultations.initiative')}
          </ConsultationElementSubtitle>
        )}
        <ConsultationElementQuestion>
          {question.question}
        </ConsultationElementQuestion>
        <ConsultationElementDateWrapper>
          <BrowseClockIconStyle />
          <ConsultationElementDateStyle>
            {i18n.t('browse_consultations.date', {
              startDate: DateHelper.creationDateFormat(question.startDate),
              endDate: DateHelper.creationDateFormat(question.endDate),
            })}
          </ConsultationElementDateStyle>
        </ConsultationElementDateWrapper>
        <ConsultationRedLinkElementStyle
          to={getConsultationLink(
            question.country,
            question.language,
            question.questionSlug
          )}
        >
          {i18n.t('browse_consultations.current.participate')}
        </ConsultationRedLinkElementStyle>
      </ConsultationElementStyle>
    ))}
  </ConsultationsWrapperStyle>
);
