// @flow
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { type Location as TypeLocation } from 'react-router';
import { type QuestionConfiguration as TypeQuestionConfiguration } from 'Shared/types/sequence';
import {
  type Question as TypeQuestion,
  type QuestionResults as TypeQuestionResults,
} from 'Shared/types/question';
import { IntroBanner } from 'Client/features/consultation/IntroBanner';
import { MobileSharing } from 'Client/features/consultation/MobileSharing';
import { ConsultationPanelInnerStyle } from 'Client/features/consultation/Styled/Tabs';
import { ResultsSkipLinks } from 'Client/app/SkipLinks/Results';
import { useMobile } from 'Client/hooks/useMedia';
import { ResultsContent } from 'Client/features/consultation/Results';
import { NavigationWithTabs } from 'Client/features/consultation/Navigation/Tabs';
import { fetchQuestionResults } from 'Shared/store/actions/sequence';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import {
  CONSULTATION_SHARE_DISABLE,
  CONSULTATION_FOLLOW_US_ACTIVE,
} from 'Shared/constants/featureFlipping';
import { FollowUsComponent } from 'Client/features/followUs/FollowUsComponent';
import { withQuestionData } from './fetchQuestionData';
import { ConsultationPageWrapperStyle } from './Styled';

type Props = {
  question: TypeQuestion,
  questionConfiguration: TypeQuestionConfiguration,
  location: TypeLocation,
};

const ConsultationPageWrapper = ({
  question,
  questionConfiguration,
  location,
}: Props) => {
  const isMobile = useMobile();
  const dispatch = useDispatch();
  const isSharingDisabled: boolean = checkIsFeatureActivated(
    CONSULTATION_SHARE_DISABLE,
    question.activeFeatures
  );
  const isFollowUsActive: boolean = checkIsFeatureActivated(
    CONSULTATION_FOLLOW_US_ACTIVE,
    question.activeFeatures
  );

  const questionResults: TypeQuestionResults = useSelector(
    state => state.questions[question.slug].questionResults
  );

  useEffect(() => {
    dispatch(fetchQuestionResults(question.slug));
  }, [!questionResults]);

  if (!questionResults) {
    return (
      <MiddlePageWrapperStyle>
        <Spinner />
      </MiddlePageWrapperStyle>
    );
  }
  return (
    <React.Fragment>
      <ResultsSkipLinks />
      <IntroBanner
        question={question}
        questionConfiguration={questionConfiguration}
      />
      <ConsultationPageWrapperStyle className="great-cause-container">
        <NavigationWithTabs question={question} location={location} />
        <ConsultationPanelInnerStyle>
          <ResultsContent
            question={question}
            questionConfiguration={questionConfiguration}
            questionResults={questionResults}
          />
        </ConsultationPanelInnerStyle>
      </ConsultationPageWrapperStyle>
      {isMobile && !isSharingDisabled && <MobileSharing />}
      {isMobile && isFollowUsActive && <FollowUsComponent />}
    </React.Fragment>
  );
};

const ConsultationPage = withQuestionData(withRouter(ConsultationPageWrapper));

// default export needed for loadable component
export default ConsultationPage; // eslint-disable-line import/no-default-export