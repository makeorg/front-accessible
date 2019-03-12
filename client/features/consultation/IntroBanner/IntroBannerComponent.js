import React from 'react';
import { type Question } from 'Shared/types/question';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { IntroWrapperStyle, IntroLabel } from '../Styled/IntroBanner';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

export const IntroBannerComponent = (props: Props) => {
  const { question, questionConfiguration } = props;
  const { theme, consultation } = questionConfiguration;
  return (
    <IntroWrapperStyle
      role="banner"
      as="header"
      gradientStart={theme.gradientStart}
      gradientEnd={theme.gradientEnd}
      color={theme.gradientStart}
    >
      {consultation.label && <IntroLabel>{consultation.label}</IntroLabel>}
      <img src={consultation.logo} alt={question.question} />
    </IntroWrapperStyle>
  );
};
