// @flow
import React from 'react';
import { Redirect } from 'react-router';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { getResultsLink } from 'Shared/helpers/url';
import { IntroBanner } from 'Client/features/consultation/IntroBanner';
import { ConsultationContent } from 'Client/features/consultation/Consultation';
import { ConsultationSkipLinks } from 'Client/app/SkipLinks/Consultation';
import { useMobile } from 'Client/hooks/useMedia';
import { NavigationBetweenQuestions } from 'Client/features/flipping/NavigationBetweenQuestions';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { TeasingHeader } from 'Client/custom/municipales/TeasingHeader';
import {
  OPERATION_MULTI_QUESTIONS_NAVIGATION,
  CONSULTATION_FOLLOW_US_ACTIVE,
  MUNICIPAL_TEASING_HEADER,
  CONSULTATION_SIDEBAR_ACTIVE_ACTORS,
} from 'Shared/constants/featureFlipping';
import { withDepartmentCheck } from 'Client/custom/cdc/departmentCheck/withDepartmentCheck';
import { FollowUs } from 'Client/features/flipping/FollowUs';
import { isGreatCause } from 'Shared/helpers/question';
import { isInProgress } from 'Shared/helpers/date';
import { NavigationWithTabs } from 'Client/features/consultation/Navigation/Tabs';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { MobileDescriptionImageStyle } from 'Client/features/consultation/Styled/Presentation';
import { LocalActorsTile } from 'Client/features/flipping/LocalActors/Tille';
import { withQuestionData } from './fetchQuestionData';
import {
  ConsultationPageWrapperStyle,
  ConsultationHeaderWrapperStyle,
} from './style';

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
  const isSidebarActiveActors = checkIsFeatureActivated(
    CONSULTATION_SIDEBAR_ACTIVE_ACTORS,
    question.activeFeatures
  );
  // @todo remove or refactor when Municipales is over
  const isTeasingHeader: boolean = checkIsFeatureActivated(
    MUNICIPAL_TEASING_HEADER,
    question.activeFeatures
  );

  if (questionIsGreatCause && question.displayResults) {
    return <Redirect to={resultsLink} />;
  }

  if (!isInProgress(question) && !question.displayResults) {
    window.location = question.aboutUrl;
  }

  return (
    <>
      <MetaTags
        title={i18n.t('meta.consultation.title', {
          question: question.wording.question,
        })}
        description={question.wording.metas.description}
        picture={question.wording.metas.picture}
      />
      <ConsultationSkipLinks
        canPropose={question.canPropose}
        isGreatCause={questionIsGreatCause}
      />
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
      {/** @todo remove or refactor when Municipales is over */}
      {isTeasingHeader && <TeasingHeader />}
      <ConsultationPageWrapperStyle isGreatCause={questionIsGreatCause}>
        <ConsultationContent question={question} />
      </ConsultationPageWrapperStyle>
      {isMobile && isSidebarActiveActors && (
        <LocalActorsTile question={question} />
      )}
      {isMobile && isFollowUsActive && <FollowUs />}
    </>
  );
};

const ConsultationPage = withQuestionData(
  withDepartmentCheck(ConsultationPageWrapper)
);

// default export needed for loadable component
export default ConsultationPage; // eslint-disable-line import/no-default-export
