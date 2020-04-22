import React from 'react';
import { type QuestionType } from 'Shared/types/question';
import { useMobile } from 'Client/hooks/useMedia';
import { IntroBanner } from 'Client/features/consultation/IntroBanner';
import { OPERATION_MULTI_QUESTIONS_NAVIGATION } from 'Shared/constants/featureFlipping';
import { isGreatCause } from 'Shared/helpers/question';
import { NavigationBetweenQuestions } from 'Client/features/flipping/NavigationBetweenQuestions';
import { NavigationWithTabs } from 'Client/features/consultation/Navigation/Tabs';
import { MobileDescriptionImageStyle } from 'Client/features/consultation/Styled/Presentation';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { ConsultationHeaderWrapperStyle } from 'Client/pages/Consultation/style';

type Props = {
  question: QuestionType,
};

export const ConsultationHeader = ({ question }: Props) => {
  const isMobile = useMobile();
  const questionIsGreatCause = isGreatCause(question.operationKind);
  const hasSiblingQuestions = question.operation.questions.length > 0;
  const isNavigationBetweenQuestionActive: boolean = checkIsFeatureActivated(
    OPERATION_MULTI_QUESTIONS_NAVIGATION,
    question.activeFeatures
  );

  return (
    <>
      {isMobile && question.descriptionImage && (
        <MobileDescriptionImageStyle src={question.descriptionImage} alt="" />
      )}
      {isNavigationBetweenQuestionActive && hasSiblingQuestions && (
        <NavigationBetweenQuestions question={question} />
      )}
      <ConsultationHeaderWrapperStyle
        gradientStart={question.theme.gradientStart}
        gradientEnd={question.theme.gradientEnd}
        backgroundcolor={question.theme.gradientStart}
      >
        <IntroBanner question={question} />
        {questionIsGreatCause && <NavigationWithTabs question={question} />}
      </ConsultationHeaderWrapperStyle>
    </>
  );
};
