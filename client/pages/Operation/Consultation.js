// @flow
import React from 'react';
import { Redirect } from 'react-router';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { getResultsLink } from 'Shared/helpers/url';
import { IntroBanner } from 'Client/features/consultation/IntroBanner';
import { ConsultationContent } from 'Client/features/consultation/Consultation';
import { ConsultationPanelInnerStyle } from 'Client/features/consultation/Styled/Tabs';
import { ConsultationSkipLinks } from 'Client/app/SkipLinks/Consultation';
import { useMobile } from 'Client/hooks/useMedia';
import { NavigationBetweenQuestions } from 'Client/features/consultation/Navigation/BetweenQuestions';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import {
  OPERATION_MULTI_QUESTIONS_NAVIGATION,
  CONSULTATION_FOLLOW_US_ACTIVE,
} from 'Shared/constants/featureFlipping';
import { withDepartmentCheck } from 'Client/custom/cdc/departmentCheck/withDepartmentCheck';
import { FollowUs } from 'Client/features/consultation/FollowUs';
import { isGreatCause } from 'Shared/helpers/question';
import { withQuestionData } from './fetchQuestionData';
import { ConsultationPageWrapperStyle } from './Styled';

type Props = {
  question: TypeQuestion,
};

const ConsultationPageWrapper = ({ question }: Props) => {
  const resultsLink = getResultsLink(
    question.country,
    question.language,
    question.slug
  );

  const isMobile = useMobile();
  const questionIsGreatCause = isGreatCause(question.operationKind);
  const hasSiblingQuestions = question.operation.questions.length > 0;
  const isNavigationBetweenQuestionActive: boolean = checkIsFeatureActivated(
    OPERATION_MULTI_QUESTIONS_NAVIGATION,
    question.activeFeatures
  );
  const isFollowUsActive: boolean = checkIsFeatureActivated(
    CONSULTATION_FOLLOW_US_ACTIVE,
    question.activeFeatures
  );

  if (questionIsGreatCause && question.displayResults) {
    return <Redirect to={resultsLink} />;
  }

  return (
    <React.Fragment>
      {isMobile && question.descriptionImage && (
        <img src={question.descriptionImage} alt="" />
      )}
      <ConsultationSkipLinks
        canPropose={question.canPropose}
        isGreatCause={questionIsGreatCause}
      />
      {isNavigationBetweenQuestionActive && hasSiblingQuestions && (
        <NavigationBetweenQuestions question={question} />
      )}
      <IntroBanner question={question} />

      <ConsultationPageWrapperStyle>
        <ConsultationPanelInnerStyle>
          <ConsultationContent question={question} />
        </ConsultationPanelInnerStyle>
      </ConsultationPageWrapperStyle>
      {isMobile && isFollowUsActive && <FollowUs />}
    </React.Fragment>
  );
};

const ConsultationPage = withQuestionData(
  withDepartmentCheck(ConsultationPageWrapper)
);

// default export needed for loadable component
export default ConsultationPage; // eslint-disable-line import/no-default-export
