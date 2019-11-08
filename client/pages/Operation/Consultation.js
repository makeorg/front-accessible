// @flow
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Redirect, type Location } from 'react-router';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { getResultsLink } from 'Shared/helpers/url';
import { isGreatCause } from 'Shared/helpers/question';
import { IntroBanner } from 'Client/features/consultation/IntroBanner';
import { MobileSharing } from 'Client/features/consultation/MobileSharing';
import { ConsultationContent } from 'Client/features/consultation/Consultation';
import { ConsultationPanelInnerStyle } from 'Client/features/consultation/Styled/Tabs';
import { ConsultationSkipLinks } from 'Client/app/SkipLinks/Consultation';
import { useMobile } from 'Client/hooks/useMedia';
import { NavigationBetweenQuestions } from 'Client/features/consultation/Navigation/BetweenQuestions';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { NavigationWithTabs } from 'Client/features/consultation/Navigation/Tabs';
import {
  CONSULTATION_SHARE_DISABLE,
  OPERATION_MULTI_QUESTIONS_NAVIGATION,
  CONSULTATION_FOLLOW_US_ACTIVE,
} from 'Shared/constants/featureFlipping';
import { withDepartmentCheck } from 'Client/custom/cdc/departmentCheck/withDepartmentCheck';
import { FollowUs } from 'Client/features/consultation/FollowUs';
import { withQuestionData } from './fetchQuestionData';
import { ConsultationPageWrapperStyle } from './Styled';

type Props = {
  question: TypeQuestion,
  questionConfiguration: TypeQuestionConfiguration,
  location: Location,
};

const ConsultationPageWrapper = ({
  question,
  questionConfiguration,
  location,
}: Props) => {
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
  const isSharingDisabled: boolean = checkIsFeatureActivated(
    CONSULTATION_SHARE_DISABLE,
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
      <ConsultationSkipLinks
        canPropose={question.canPropose}
        isGreatCause={questionIsGreatCause}
      />
      {isNavigationBetweenQuestionActive && hasSiblingQuestions && (
        <NavigationBetweenQuestions question={question} />
      )}
      <IntroBanner
        question={question}
        questionConfiguration={questionConfiguration}
      />
      <ConsultationPageWrapperStyle
        className={questionIsGreatCause && 'great-cause-container'}
      >
        {questionIsGreatCause && (
          <NavigationWithTabs question={question} location={location} />
        )}
        <ConsultationPanelInnerStyle>
          <ConsultationContent
            question={question}
            questionConfiguration={questionConfiguration}
          />
        </ConsultationPanelInnerStyle>
      </ConsultationPageWrapperStyle>
      {isMobile && !isSharingDisabled && <MobileSharing />}
      {isMobile && isFollowUsActive && <FollowUs />}
    </React.Fragment>
  );
};

const ConsultationPage = withQuestionData(
  withRouter(withDepartmentCheck(ConsultationPageWrapper))
);

// default export needed for loadable component
export default ConsultationPage; // eslint-disable-line import/no-default-export
