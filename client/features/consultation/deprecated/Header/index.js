import React from 'react';
import { type QuestionType } from 'Shared/types/question';
import { MobileDescriptionImage } from 'Client/features/consultation/MobileDescriptionImage';
import { IntroBanner } from 'Client/features/consultation/IntroBanner';
import { isGreatCause } from 'Shared/helpers/question';
import { NavigationBetweenQuestions } from 'Client/features/consultation/Navigation/BetweenQuestions';
import { NavigationWithTabs } from 'Client/features/consultation/Navigation/Tabs';
import { DeprecatedConsultationHeaderWrapperStyle } from './style';

type Props = {
  question: QuestionType,
};

export const DeprecatedConsultationHeader = ({ question }: Props) => {
  const questionIsGreatCause = isGreatCause(question.operationKind);

  return (
    <>
      <MobileDescriptionImage question={question} />
      <NavigationBetweenQuestions question={question} />
      <DeprecatedConsultationHeaderWrapperStyle
        gradientStart={question.theme.gradientStart}
        gradientEnd={question.theme.gradientEnd}
        backgroundcolor={question.theme.gradientStart}
      >
        <IntroBanner question={question} />
        {questionIsGreatCause && <NavigationWithTabs question={question} />}
      </DeprecatedConsultationHeaderWrapperStyle>
    </>
  );
};
