// @flow
import React from 'react';
import { Redirect } from 'react-router';
import { type QuestionType } from 'Shared/types/question';
import { getResultsLink } from 'Shared/helpers/url';
import { ConsultationContent } from 'Client/features/consultation/Consultation';
import { ConsultationSkipLinks } from 'Client/app/SkipLinks/Consultation';
import { useMobile } from 'Client/hooks/useMedia';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { TeasingHeader } from 'Client/custom/municipales/TeasingHeader';
import {
  CONSULTATION_FOLLOW_US_ACTIVE,
  MUNICIPAL_TEASING_HEADER,
  CONSULTATION_SIDEBAR_ACTIVE_ACTORS,
} from 'Shared/constants/featureFlipping';
import { FollowUs } from 'Client/features/flipping/FollowUs';
import { isGreatCause } from 'Shared/helpers/question';
import { isInProgress } from 'Shared/helpers/date';
import { i18n } from 'Shared/i18n';
import { MetaTags } from 'Client/app/MetaTags';
import { LocalActorsTile } from 'Client/features/flipping/LocalActors/Tille';
import { ConsultationHeader } from 'Client/features/consultation/Header/index';
import { withQuestionData } from './fetchQuestionData';
import { ConsultationPageWrapperStyle } from './style';

type Props = {
  question: QuestionType,
};

const ConsultationPageWrapper = ({ question }: Props) => {
  const resultsLink = getResultsLink(
    question.country,
    question.language,
    question.slug
  );

  const isMobile = useMobile();
  const questionIsGreatCause = isGreatCause(question.operationKind);
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
      <ConsultationHeader question={question} />
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

const ConsultationPage = withQuestionData(ConsultationPageWrapper);

// default export needed for loadable component
export default ConsultationPage; // eslint-disable-line import/no-default-export
