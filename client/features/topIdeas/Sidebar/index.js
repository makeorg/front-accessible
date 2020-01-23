// @flow
import React from 'react';
import { type Question as TypeQuestion } from 'Shared/types/question';
import { ConsultationPageSidebarStyle } from 'Client/pages/Consultation/style';
import { PresentationTile } from 'Client/features/consultation/Sidebar/Tiles/Presentation';
import { LocalActorsTile } from 'Client/features/flipping/LocalActors/Tille';
import { FollowUs } from 'Client/features/flipping/FollowUs';
import { checkIsFeatureActivated } from 'Client/helper/featureFlipping';
import { CONSULTATION_SIDEBAR_ACTIVE_ACTORS } from 'Shared/constants/featureFlipping';
import { useMobile } from 'Client/hooks/useMedia';

type Props = {
  question: TypeQuestion,
};

export const TopIdeasSidebar = ({ question }: Props) => {
  const isSidebarActiveActors = checkIsFeatureActivated(
    CONSULTATION_SIDEBAR_ACTIVE_ACTORS,
    question.activeFeatures
  );
  const isMobile = useMobile();

  return (
    <ConsultationPageSidebarStyle>
      <PresentationTile question={question} />
      {isSidebarActiveActors && <LocalActorsTile question={question} />}
      {!isMobile && <FollowUs />}
    </ConsultationPageSidebarStyle>
  );
};
