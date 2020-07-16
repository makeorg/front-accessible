// @flow
import React from 'react';
import { type HomeQuestionType } from 'Shared/types/question';
import { DateHelper } from 'Shared/helpers/date';
import { getConsultationLink } from 'Shared/helpers/url';
import {
  ConsultationElementPictureStyle,
  ConsultationElementSubtitleStyle,
  ConsultationElementTitleStyle,
  ConsultationElementParagraphStyle,
  ConsultationRedLinkElementStyle,
  ClockIconStyle,
  ConsultationArticleStyle,
} from 'Client/features/consultation/Browse/style';
import { i18n } from 'Shared/i18n';
import {
  useMobile,
  useScreenMobileContainerWidth,
} from 'Client/hooks/useMedia';

type Props = {
  question: HomeQuestionType,
  resultsContext: boolean,
};

export const ConsultationItem = ({ question, resultsContext }: Props) => {
  const {
    displayResults,
    descriptionImage,
    featured,
    startDate,
    endDate,
    country,
    language,
    questionSlug,
  } = question;

  let linkText = i18n.t('browse.consultations.participate');

  if (resultsContext) {
    linkText = i18n.t('browse.results.coming_results');
  }

  if (resultsContext && displayResults) {
    linkText = i18n.t('browse.results.see_results');
  }
  const isMobile = useMobile();
  const containerWidth = useScreenMobileContainerWidth();

  let imageWidth = null;
  let imageHeight = 248;
  if (isMobile) {
    imageWidth = containerWidth;
    imageHeight = null;
  }

  return (
    <ConsultationArticleStyle>
      <ConsultationElementPictureStyle
        src={descriptionImage}
        alt=""
        width={imageWidth}
        height={imageHeight}
      />
      {featured && (
        <ConsultationElementSubtitleStyle>
          {i18n.t('browse.initiative')}
        </ConsultationElementSubtitleStyle>
      )}
      <ConsultationElementTitleStyle>
        {question.question}
      </ConsultationElementTitleStyle>
      <ConsultationElementParagraphStyle>
        <ClockIconStyle aria-hidden />
        {i18n.t('browse.date', {
          startDate: DateHelper.creationDateFormat(startDate),
          endDate: DateHelper.creationDateFormat(endDate),
        })}
      </ConsultationElementParagraphStyle>
      <ConsultationRedLinkElementStyle
        to={getConsultationLink(country, language, questionSlug)}
      >
        {linkText}
      </ConsultationRedLinkElementStyle>
    </ConsultationArticleStyle>
  );
};
