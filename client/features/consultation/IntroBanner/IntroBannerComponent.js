// @flow

import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Question } from 'Shared/types/question';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { IntroWrapperStyle, IntroLabelStyle } from '../Styled/IntroBanner';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

export const IntroBannerComponent = (props: Props) => {
  const { question, questionConfiguration } = props;
  const { wording } = question;
  const { theme, consultation } = questionConfiguration;
  return (
    <IntroWrapperStyle
      as="header"
      gradientStart={theme.gradientStart}
      gradientEnd={theme.gradientEnd}
      color={theme.gradientStart}
      aria-labelledby="header_consultation_title"
      id="intro"
    >
      {questionConfiguration.isGreatCause && (
        <IntroLabelStyle>{i18n.t('consultation.header.label')}</IntroLabelStyle>
      )}
      <h2 aria-label={wording.question}>
        <img src={consultation.logo} alt={wording.question} />
      </h2>
    </IntroWrapperStyle>
  );
};
