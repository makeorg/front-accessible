// @flow

import React from 'react';
import { i18n } from 'Shared/i18n';
import { isGreatCause } from 'Shared/helpers/question';
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
      backgroundcolor={theme.gradientStart}
      id="intro"
    >
      {isGreatCause(question.operationKind) && (
        <IntroLabelStyle>{i18n.t('consultation.header.label')}</IntroLabelStyle>
      )}
      <h2>
        <img
          src={consultation ? consultation.logo : ''}
          alt={wording.question}
        />
      </h2>
    </IntroWrapperStyle>
  );
};
