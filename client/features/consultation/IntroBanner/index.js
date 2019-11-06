// @flow
import React from 'react';
import { i18n } from 'Shared/i18n';
import { isGreatCause } from 'Shared/helpers/question';
import { type Question } from 'Shared/types/question';
import { type QuestionConfiguration } from 'Shared/types/sequence';
import {
  IntroWrapperStyle,
  IntroLabelStyle,
  IntroBannerTitleStyle,
} from '../Styled/IntroBanner';

type Props = {
  question: Question,
  questionConfiguration: QuestionConfiguration,
};

export const IntroBanner = ({ question, questionConfiguration }: Props) => {
  const { wording } = question;
  const { theme, consultation } = questionConfiguration;
  const questionIsGreatCause = isGreatCause(question.operationKind);
  return (
    <IntroWrapperStyle
      as="header"
      gradientStart={theme.gradientStart}
      gradientEnd={theme.gradientEnd}
      backgroundcolor={theme.gradientStart}
      id="intro"
      className={questionIsGreatCause && 'great-cause-banner'}
    >
      {questionIsGreatCause && (
        <IntroLabelStyle>{i18n.t('consultation.header.label')}</IntroLabelStyle>
      )}
      {consultation.logo ? (
        <h2>
          <img src={consultation.logo} alt={wording.question} />
        </h2>
      ) : (
        <IntroBannerTitleStyle>{wording.question}</IntroBannerTitleStyle>
      )}
    </IntroWrapperStyle>
  );
};
