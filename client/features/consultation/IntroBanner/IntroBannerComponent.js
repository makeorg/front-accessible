import React from 'react';
import { i18n } from 'Shared/i18n';
import { type Question } from 'Shared/types/question';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import { HiddenItemStyle } from 'Client/ui/Elements/HiddenElements';
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
      as="header"
      gradientStart={theme.gradientStart}
      gradientEnd={theme.gradientEnd}
      color={theme.gradientStart}
      aria-labelledby="header_consultation_title"
      id="intro"
    >
      {questionConfiguration.isGreatCause && (
        <IntroLabel>{i18n.t('consultation.header.label')}</IntroLabel>
      )}
      <HiddenItemStyle id="header_consultation_title">
        {consultation.isGreatCause &&
          `${i18n.t('consultation.header.label')}: `}
        {question.question}
      </HiddenItemStyle>
      <h2>
        <img src={consultation.logo} alt={question.question} />
      </h2>
    </IntroWrapperStyle>
  );
};
