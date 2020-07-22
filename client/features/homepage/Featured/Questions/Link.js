// @flow
import React from 'react';
import { type HomeQuestionType } from 'Shared/types/question';
import { isInProgress } from 'Shared/helpers/date';
import { Link } from 'react-router-dom';
import { scrollToTop } from 'Shared/helpers/styled';
import { SvgExternalLink } from 'Client/ui/Svg/elements';
import { getConsultationLink } from 'Shared/helpers/url';
import { FeaturedLinkStyle, FeaturedLinkIconStyle } from './style';

type Props = {
  question: HomeQuestionType,
};

export const FeaturedLink = ({ question }: Props) => {
  if (isInProgress(question)) {
    return (
      <FeaturedLinkStyle
        as={Link}
        to={getConsultationLink(
          question.country,
          question.language,
          question.questionSlug
        )}
        onClick={scrollToTop}
      >
        {question.operationTitle}
        <FeaturedLinkIconStyle aria-hidden />
      </FeaturedLinkStyle>
    );
  }

  return (
    <FeaturedLinkStyle
      href={question.aboutUrl}
      target="_blank"
      rel="noreferrer noopener"
    >
      {question.operationTitle}
      <FeaturedLinkIconStyle as={SvgExternalLink} aria-hidden />
    </FeaturedLinkStyle>
  );
};
