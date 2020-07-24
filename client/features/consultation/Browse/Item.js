// @flow
import React from 'react';
import { type HomeQuestionType } from 'Shared/types/question';
import { DateHelper } from 'Shared/helpers/date';
import {
  ConsultationElementPictureStyle,
  ConsultationElementSubtitleStyle,
  ConsultationElementTitleStyle,
  ConsultationElementParagraphStyle,
  ClockIconStyle,
  ConsultationArticleStyle,
} from 'Client/features/consultation/Browse/style';
import { i18n } from 'Shared/i18n';
import {
  useMobile,
  useScreenMobileContainerWidth,
} from 'Client/hooks/useMedia';
import { ConsultationLink } from './Link';

type Props = {
  question: HomeQuestionType,
  resultsContext: boolean,
};

export const ConsultationItem = ({ question, resultsContext }: Props) => {
  const {
    descriptionImage,
    featured,
    startDate,
    endDate,
    resultsLink,
  } = question;
  const hasTopIdeas =
    resultsContext && resultsLink && resultsLink.value === 'top-ideas';
  const hasInternalResults =
    resultsContext && resultsLink && resultsLink.value === 'results';
  const hasExternalResults =
    resultsContext && resultsLink && resultsLink.kind === 'external';

  let linkText = i18n.t('browse.consultations.participate');

  if (resultsContext) {
    linkText = i18n.t('browse.results.coming_results');
  }

  if (hasTopIdeas) {
    linkText = i18n.t('browse.results.see_topideas');
  }

  if (hasInternalResults || hasExternalResults) {
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
      <ConsultationLink question={question} label={linkText} />
    </ConsultationArticleStyle>
  );
};
