// @flow
import React from 'react';
import { Redirect } from 'react-router';
import { type QuestionType } from 'Shared/types/question';
import { isGreatCause } from 'Shared/helpers/question';
import { IntroBanner } from 'Client/features/consultation/IntroBanner';
import { ActionsContent } from 'Client/features/consultation/Actions';
import { ActionsSkipLinks } from 'Client/app/SkipLinks/Actions';
import { useMobile } from 'Client/hooks/useMedia';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import {
  CONSULTATION_FOLLOW_US_ACTIVE,
  CONSULTATION_SIDEBAR_ACTIVE_ACTORS,
} from 'Shared/constants/featureFlipping';
import { FollowUs } from 'Client/features/flipping/FollowUs';
import { NavigationWithTabs } from 'Client/features/consultation/Navigation/Tabs';
import { MetaTags } from 'Client/app/MetaTags';
import { i18n } from 'Shared/i18n';
import { MobileDescriptionImageStyle } from 'Client/features/consultation/Styled/Presentation';
import { LocalActorsTile } from 'Client/features/flipping/LocalActors/Tille';
import { withQuestionData } from './fetchQuestionData';
import {
  ConsultationPageWrapperStyle,
  ConsultationHeaderWrapperStyle,
} from './style';

type Props = {
  question: QuestionType,
};

const ConsultationPageWrapper = ({ question }: Props) => {
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

  if (!questionIsGreatCause) {
    return <Redirect to="/notfound" />;
  }

  return (
    <>
      <MetaTags
        title={i18n.t('meta.actions.title', {
          question: question.wording.question,
        })}
        description={question.wording.metas.description}
        picture={question.wording.metas.picture}
      />
      <ActionsSkipLinks />
      {isMobile && question.descriptionImage && (
        <MobileDescriptionImageStyle src={question.descriptionImage} alt="" />
      )}
      <ConsultationHeaderWrapperStyle
        gradientStart={question.theme.gradientStart}
        gradientEnd={question.theme.gradientEnd}
        backgroundcolor={question.theme.gradientStart}
      >
        <IntroBanner question={question} />
        {questionIsGreatCause && <NavigationWithTabs question={question} />}
      </ConsultationHeaderWrapperStyle>
      <ConsultationPageWrapperStyle isGreatCause={questionIsGreatCause}>
        <ActionsContent question={question} />
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
