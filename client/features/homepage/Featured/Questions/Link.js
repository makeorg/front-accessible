// @flow
import React from 'react';
import { type StateRoot } from 'Shared/store/types';
import { type HomeQuestionType } from 'Shared/types/question';
import { isInProgress } from 'Shared/helpers/date';
import { Link } from 'react-router-dom';
import { scrollToTop } from 'Shared/helpers/styled';
import { SvgExternalLink } from 'Client/ui/Svg/elements';
import { getConsultationLink } from 'Shared/helpers/url';
import { useSelector } from 'react-redux';
import { i18n } from 'Shared/i18n';
import { ScreenReaderItemStyle } from 'Client/ui/Elements/AccessibilityElements';
import { FeaturedLinkStyle, FeaturedLinkIconStyle } from './style';

type Props = {
  question: HomeQuestionType,
};

export const FeaturedLink = ({ question }: Props) => {
  const { country } = useSelector((state: StateRoot) => state.appConfig);
  if (isInProgress(question)) {
    return (
      <FeaturedLinkStyle
        as={Link}
        to={getConsultationLink(country, question.questionSlug)}
        onClick={scrollToTop}
      >
        {question.operationTitle}
        <FeaturedLinkIconStyle aria-hidden focusable="false" />
      </FeaturedLinkStyle>
    );
  }

  return (
    <FeaturedLinkStyle href={question.aboutUrl} target="_blank" rel="noopener">
      {question.operationTitle}
      <> </>
      <FeaturedLinkIconStyle
        as={SvgExternalLink}
        aria-hidden
        focusable="false"
      />
      <ScreenReaderItemStyle>
        {i18n.t('common.open_new_window')}
      </ScreenReaderItemStyle>
    </FeaturedLinkStyle>
  );
};
