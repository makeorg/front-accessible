// @flow
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  type Question as TypeQuestion,
  type QuestionResults as TypeQuestionResults,
} from 'Shared/types/question';
import { IntroBanner } from 'Client/features/consultation/IntroBanner';
import { ConsultationPanelInnerStyle } from 'Client/features/consultation/Styled/Tabs';
import { ResultsSkipLinks } from 'Client/app/SkipLinks/Results';
import { useMobile } from 'Client/hooks/useMedia';
import { ResultsContent } from 'Client/features/consultation/Results';
import { fetchQuestionResults } from 'Shared/store/actions/sequence';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { CONSULTATION_FOLLOW_US_ACTIVE } from 'Shared/constants/featureFlipping';
import { FollowUs } from 'Client/features/flipping/FollowUs';
import { withQuestionData } from './fetchQuestionData';
import { ConsultationPageWrapperStyle } from './style';

type Props = {
  question: TypeQuestion,
};

const ConsultationPageWrapper = ({ question }: Props) => {
  const isMobile = useMobile();
  const dispatch = useDispatch();
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
      <IntroBanner question={question} />
      <ConsultationPageWrapperStyle>
        <ConsultationPanelInnerStyle>
          <ResultsContent
            question={question}
            questionResults={questionResults}
          />
        </ConsultationPanelInnerStyle>
      </ConsultationPageWrapperStyle>
      {isMobile && isFollowUsActive && <FollowUs />}
    </React.Fragment>
  );
};

const ConsultationPage = withQuestionData(ConsultationPageWrapper);

// default export needed for loadable component
export default ConsultationPage; // eslint-disable-line import/no-default-export
