// @flow
import React from 'react';
import { Redirect } from 'react-router';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { isGreatCause } from 'Shared/helpers/question';
import { IntroBanner } from 'Client/features/consultation/IntroBanner';
import { ActionsContent } from 'Client/features/consultation/Actions';
import { ConsultationPanelInnerStyle } from 'Client/features/consultation/Styled/Tabs';
import { ActionsSkipLinks } from 'Client/app/SkipLinks/Actions';
import { useMobile } from 'Client/hooks/useMedia';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { CONSULTATION_FOLLOW_US_ACTIVE } from 'Shared/constants/featureFlipping';
import { FollowUs } from 'Client/features/flipping/FollowUs';
import { NavigationWithTabs } from 'Client/features/consultation/Navigation/Tabs';
import { withQuestionData } from './fetchQuestionData';
import { ConsultationPageWrapperStyle } from './style';

type Props = {
  question: TypeQuestion,
};

const ConsultationPageWrapper = ({ question }: Props) => {
  const isMobile = useMobile();
  const questionIsGreatCause = isGreatCause(question.operationKind);
  const isFollowUsActive: boolean = checkIsFeatureActivated(
    CONSULTATION_FOLLOW_US_ACTIVE,
    question.activeFeatures
  );

  if (!questionIsGreatCause) {
    return <Redirect to="/notfound" />;
  }

  return (
    <React.Fragment>
      <ActionsSkipLinks />
      <IntroBanner question={question} />
      <NavigationWithTabs question={question} />
      <ConsultationPageWrapperStyle className="great-cause-container">
        <ConsultationPanelInnerStyle>
          <ActionsContent question={question} />
        </ConsultationPanelInnerStyle>
      </ConsultationPageWrapperStyle>
      {isMobile && isFollowUsActive && <FollowUs />}
    </React.Fragment>
  );
};

const ConsultationPage = withQuestionData(ConsultationPageWrapper);

// default export needed for loadable component
export default ConsultationPage; // eslint-disable-line import/no-default-export
