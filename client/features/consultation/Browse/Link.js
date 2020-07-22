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
import { ConsultationRedLinkElementStyle } from './style';

type Props = {
  question: HomeQuestionType,
  label: string,
};
export const ConsultationLink = ({ question, label }: Props) => {
  const { country, language, questionSlug, resultsLink, aboutUrl } = question;
  const consultationPath = getConsultationLink(country, language, questionSlug);

  const openedConsultation = isInProgress(question);
  const closedConsultationWithoutResults = !openedConsultation && !resultsLink;
  const externalResultLink =
    resultsLink && resultsLink.kind === 'external' && resultsLink.value;
  const internalResultLink =
    resultsLink && resultsLink.kind === 'internal' && resultsLink.value;

  if (openedConsultation) {
    return (
      <ConsultationRedLinkElementStyle
        as={Link}
        to={consultationPath}
        onClick={scrollToTop}
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
              language,
              questionSlug,
              // $FlowFixMe : flow cannot understrand desctructuring internalResultLink
              resultsLink.value
            )
          : consultationPath
      }
      onClick={scrollToTop}
    >
      {label}
    </ConsultationRedLinkElementStyle>
  );
};
