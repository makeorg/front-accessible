// @flow
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  type Question as TypeQuestion,
  type QuestionResults as TypeQuestionResults,
} from 'Shared/types/question';
import { IntroBanner } from 'Client/features/consultation/IntroBanner';
import { ResultsSkipLinks } from 'Client/app/SkipLinks/Results';
import { useMobile } from 'Client/hooks/useMedia';
import { ResultsContent } from 'Client/features/consultation/Results';
import { fetchQuestionResults } from 'Shared/store/actions/sequence';
import { MiddlePageWrapperStyle } from 'Client/app/Styled/MainElements';
import { Spinner } from 'Client/ui/Elements/Loading/Spinner';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { CONSULTATION_FOLLOW_US_ACTIVE } from 'Shared/constants/featureFlipping';
import { FollowUs } from 'Client/features/flipping/FollowUs';
import { NavigationWithTabs } from 'Client/features/consultation/Navigation/Tabs';
import { isGreatCause } from 'Shared/helpers/question';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { withQuestionData } from './fetchQuestionData';
import {
  ConsultationPageWrapperStyle,
  ConsultationHeaderWrapperStyle,
} from './style';

type Props = {
  question: TypeQuestion,
};

const ConsultationPageWrapper = ({ question }: Props) => {
  const isMobile = useMobile();
  const dispatch = useDispatch();
  const questionIsGreatCause = isGreatCause(question.operationKind);
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
    <>
      <MetaTags
        title={i18n.t('meta.results.title', {
          question: question.wording.question,
        })}
        description={question.wording.metas.description}
        picture={question.wording.metas.picture}
      />
      <ResultsSkipLinks questionResults={questionResults} />
      <ConsultationHeaderWrapperStyle
        gradientStart={question.theme.gradientStart}
        gradientEnd={question.theme.gradientEnd}
        backgroundcolor={question.theme.gradientStart}
      >
        <IntroBanner question={question} />
        {questionIsGreatCause && <NavigationWithTabs question={question} />}
      </ConsultationHeaderWrapperStyle>
      <ConsultationPageWrapperStyle>
        <ResultsContent question={question} questionResults={questionResults} />
      </ConsultationPageWrapperStyle>
      {isMobile && isFollowUsActive && <FollowUs />}
    </>
  );
};

const ConsultationPage = withQuestionData(ConsultationPageWrapper);

// default export needed for loadable component
export default ConsultationPage; // eslint-disable-line import/no-default-export
