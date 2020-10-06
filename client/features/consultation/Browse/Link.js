// @flow
import React from 'react';
import { type HomeQuestionType } from 'Shared/types/question';
import { Link } from 'react-router-dom';
import { NewWindowIconStyle } from 'Client/ui/Elements/LinkElements';
import { i18n } from 'Shared/i18n';
import {
  getDynamicConsultationLink,
  getConsultationLink,
} from 'Shared/helpers/url';
import { scrollToTop } from 'Shared/helpers/styled';
import { isInProgress } from 'Shared/helpers/date';
import {
  trackClickResults,
  trackClickParticipate,
} from 'Shared/services/Tracking';
import { ConsultationRedLinkElementStyle } from './style';

type Props = {
  question: HomeQuestionType,
  label: string,
};
export const ConsultationLink = ({ question, label }: Props) => {
  const { country, questionSlug, resultsLink, aboutUrl } = question;
  const consultationPath = getConsultationLink(country, questionSlug);

  const openedConsultation = isInProgress(question);
  const closedConsultationWithoutResults = !openedConsultation && !resultsLink;
  const externalResultLink =
    resultsLink && resultsLink.kind === 'external' && resultsLink.value;
  const internalResultLink =
    resultsLink && resultsLink.kind === 'internal' && resultsLink.value;

  const handleClick = () => {
    if (!openedConsultation) {
      trackClickResults();
    } else {
      trackClickParticipate(question.questionId);
    }
    scrollToTop();
  };

  if (openedConsultation) {
    return (
      <ConsultationRedLinkElementStyle
        as={Link}
        to={consultationPath}
        onClick={handleClick}
        data-cy-link={`item-link-${question.questionId}`}
      >
        {label}
      </ConsultationRedLinkElementStyle>
    );
  }

  if (closedConsultationWithoutResults || externalResultLink) {
    return (
      <ConsultationRedLinkElementStyle
        as="a"
        // $FlowFixMe : flow cannot understrand desctructuring externalResultLink
        href={externalResultLink ? resultsLink.value : aboutUrl}
        target="_blank"
        rel="noreferrer noopener"
        onClick={handleClick}
        data-cy-link={`item-link-${question.questionId}`}
      >
        {label}
        <NewWindowIconStyle aria-label={i18n.t('common.open_new_window')} />
      </ConsultationRedLinkElementStyle>
    );
  }

  return (
    <ConsultationRedLinkElementStyle
      to={
        internalResultLink
          ? getDynamicConsultationLink(
              country,
              questionSlug,
              // $FlowFixMe : flow cannot understrand desctructuring internalResultLink
              resultsLink.value
            )
          : consultationPath
      }
      onClick={handleClick}
      data-cy-link={`item-link-${question.questionId}`}
    >
      {label}
    </ConsultationRedLinkElementStyle>
  );
};
